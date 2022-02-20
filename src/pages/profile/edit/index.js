import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Card, Col, Container, Form, Input, Label, Row } from "reactstrap";
import api from "../../../services/api/api";
import { toast } from 'react-toastify';
 
 const ProfileEditing = () => {
    const id = useParams();

    const [user, setUser] = useState({ name: '', profilePhoto: '', bio: '' })

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await api.get(`user/${id}`);

                setUser(response.data);
            } catch {
                toast.error("Não foi possível localizar usuário. Tente novamente mais tarde.")
                setInterval(() => {
                    window.history.back();
                }, 2000)
            }
        };

        //fetchUser();
    }, []);

    return (
        <main className="profile-page">
            <section className="section-profile-cover section-shaped my-0" style={{"background": "linear-gradient(45deg, red, orange)", "height": "380px"}}>
                <div className="separator separator-bottom separator-skew">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        version="1.1"
                        viewBox="0 0 2560 100"
                        x="0"
                        y="0"
                    >
                        <polygon
                        className="fill-white"
                        points="2560 0 2560 100 0 100"
                        />
                    </svg>
                </div>
            </section>
            <section className="section">
                <Container>
                    <Card className="card-profile shadow mt--300">
                        <div className="px-4">
                            <Label className="m-5" style={{ "fontWeight": "bold" }}>
                                EDITAR PERFIL
                            </Label>
                            <Form>
                                <Row>
                                    <Col md="6">
                                        <Label>
                                            NOME
                                        </Label>
                                        <Input
                                            className="form-control-alternative"
                                            id="name"
                                            value={user.name}
                                            type="name"
                                        />
                                    </Col>
                                    <Col md="6">
                                        <Label>
                                            EMAIL
                                        </Label>
                                        <Input
                                            className="form-control-alternative"
                                            id="email"
                                            value={user.email}
                                            type="email"
                                        />
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </Card>
                </Container>
            </section>
        </main>
    );
 };

 export default ProfileEditing;