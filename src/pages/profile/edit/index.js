import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Button, Card, Col, Container, Form, Input, Label, Row } from "reactstrap";
import api from "../../../services/api/api";
import { toast } from 'react-toastify';
import { Image } from "./styles";
import { MutatingDots } from "react-loader-spinner";
 
 const ProfileEditing = () => {
    const id = useParams();

    const [loading, setloading] = useState(true);
    const [user, setUser] = useState({ name: '', email: '', profilePhoto: null, bio: "" });

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await api.get(`user/${id}`);

                setUser(response.data);
                setloading(false);
            } catch {
                toast.error("Não foi possível localizar usuário. Tente novamente mais tarde.")
                setInterval(() => {
                    window.history.back();
                }, 2000)
            }
        };

        fetchUser();
    }, []);

    const handleUploadPhoto = async () => {
        setloading(true);
        try {
            const response = await api.put(`user/${id}/edit`, {
                ...user,
            });

            setUser(response.data);
            setloading(false);
        } catch {
            toast.error("Não foi possível salvar as alterações. Tente novamente.")
            setloading(false);
        }
    };

    return (
        <>
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
                            { loading ? 
                                <Container className="mt--300 justify-content-center d-flex">
                                    <MutatingDots color="white" secondaryColor="white" width={100}/>
                                </Container>
                                :
                                <Card className="card-profile shadow mt--300">
                                    <div className="px-4">
                                        <Label className="m-3 heading-title" style={{ "fontWeight": "bold" }}>
                                            EDITAR PERFIL
                                        </Label>
                                        <Form onSubmit={handleUploadPhoto}>
                                            <Row className="justify-content-center m-2">
                                                <Col className="order-lg-2" lg="6">
                                                    <Label className="d-flex">
                                                        NOME
                                                    </Label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="name"
                                                        value={user.name}
                                                        type="name"
                                                    />
                                                </Col>
                                                <Col className="order-lg-2" lg="6">
                                                    <Label className="d-flex">
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
                                            <Row className="justify-content-center m-2">
                                                <Col className="order-lg-2" lg="6">
                                                    <Label className="d-flex">
                                                        FOTO
                                                    </Label>
                                                    <Row className="justify-content-center">
                                                        <Image
                                                            className="rounded-circle"
                                                            src={"https://www.fatosdesconhecidos.com.br/wp-content/plugins/wp-user-avatars/wp-user-avatars/assets/images/mystery.jpg"}

                                                        />
                                                    </Row>
                                                    <Row className="justify-content-center">
                                                        <Button
                                                            color="danger"
                                                            size="sm"
                                                            type="button"
                                                            className="d-flex"
                                                            onClick={() => handleUploadPhoto()}
                                                        >
                                                            SELECIONAR FOTO
                                                        </Button>
                                                    </Row>
                                                    <Input
                                                        className="d-none"
                                                        id="profilePhoto"
                                                        value={user.profilePhoto}
                                                        type="file"
                                                    />
                                                </Col>
                                                <Col className="order-lg-2" lg="6">
                                                    <Label className="d-flex">
                                                        BIO
                                                    </Label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="bio"
                                                        value={user.bio}
                                                        type="textarea"
                                                        rows="5"
                                                    />
                                                </Col>
                                            </Row>
                                            <Row className="justify-content-center m-2">
                                                <Col className="order-lg-2" lg="12">
                                                    <Button
                                                        block
                                                        outline
                                                        color="danger"
                                                        type="submit"
                                                        className="mt-5 mb-3"
                                                    >
                                                        SALVAR
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </div>
                                </Card>
                            }
                        </Container>
                    </section>
                </main>
        </>
    );
 };

 export default ProfileEditing;