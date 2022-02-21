import React, { useEffect, useState } from "react";
import { Button, Card, Container, Row, Col } from "reactstrap";
import { HiPencilAlt } from 'react-icons/hi';
import api from "../../services/api/api";
import { toast } from 'react-toastify';
import { useNavigate, useParams } from "react-router";

const Profile = () => {
    const id = useParams();
    const history = useNavigate();
    const [user, setUser] = useState({ name: '', email: '', profilePhoto: null, bio: "" })

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

        fetchUser();
    }, []);

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
                        <Card className="card-profile shadow mt--300">
                            <div className="px-4">
                                <Row className="justify-content-center">
                                    <Col className="order-lg-2" lg="3">
                                        <div className="card-profile-image">
                                            <img
                                                alt="..."
                                                className="rounded-circle"
                                                src={user.profilePhoto ? user.profilePhoto : "https://www.fatosdesconhecidos.com.br/wp-content/plugins/wp-user-avatars/wp-user-avatars/assets/images/mystery.jpg"}
                                            />
                                        </div>
                                    </Col>
                                </Row>
                                <div className="card-profile-actions py-4 mt-lg-0">
                                    <Button
                                        className="float-right"
                                        color="danger"
                                        size="sm"
                                        onClick={() => history(`${window.location.pathname}/edit`)}
                                    >
                                        Editar <HiPencilAlt style={{"marginBottom": "3px", "marginLeft": "5px"}}/>
                                    </Button>
                                </div>
                                <div className="text-center mt-7">
                                    <h3>
                                        {user.name}
                                    </h3>
                                </div>
                                <div className="text-center">
                                    {user.email}
                                </div>
                                <div className="mt-5 py-5 border-top text-center">
                                    <Row className="justify-content-center">
                                        <Col lg="9">
                                            <p>
                                                {user.bio}
                                            </p>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Card>
                    </Container>
                </section>
            </main>
        </>
    );
}

export default Profile;
