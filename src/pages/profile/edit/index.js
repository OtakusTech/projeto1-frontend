import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Button, Card, Col, Container, Form, Label, Row } from "reactstrap";
import api from "../../../services/api/api";
import { toast } from 'react-toastify';
import ContainerBG from "../../../components/ContainerBG";
import Loading from "../../../components/Loading";
import InputText from "../../../components/InputText";
import InputPhoto from "../../../components/InputPhoto";
import ProfileEmpty from "../../../assets/img/profile-empty.jpg";

const ProfileEditing = () => {
    const id = useParams();

    const [loading, setloading] = useState(false);
    const [user, setUser] = useState({ name: '', email: '', profilePhoto: ProfileEmpty, bio: "" });

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

    const handleUpdatePhoto = (event) => {
        const reader = new FileReader();
        const file = event.target.files[0];

        reader.readAsDataURL(file);
        reader.onloadend = () => {
            let imgBase64 = reader.result;
            const imgURL = imgBase64.replace(/^data:image\/[a-z]+;base64,/, "");
            setUser({ ...user, profilePhoto: `data:image/png;base64,${imgURL}`});
        };
    };

    const handleUpdateUser = () => {
        // TODO: CHANGE HERE WITH THE UPDATE USER FUNCTION
    }

    return (
        <ContainerBG>
            { loading ? 
                <Loading />
                :
                <Card className="card-profile shadow mt--300">
                    <div className="px-4">
                        <Label className="m-3 heading-title" style={{ "fontWeight": "bold" }}>
                            EDITAR PERFIL
                        </Label>
                        <Form onSubmit={handleUpdateUser}>
                            <Row className="justify-content-center m-2">
                                <Col className="order-lg-2" lg="6">
                                    <InputText 
                                        name="NOME"
                                        id="name"
                                        value={user.name}
                                        type="name"
                                    />
                                </Col>
                                <Col className="order-lg-2" lg="6">
                                    <InputText 
                                        name="EMAIL"
                                        id="email"
                                        value={user.email}
                                        type="email"
                                    />
                                </Col>
                            </Row>
                            <Row className="justify-content-center m-2">
                                <Col className="order-lg-2" lg="6">
                                    <InputPhoto 
                                        title="FOTO"
                                        buttonName="SELECIONAR FOTO"
                                        value={user.profilePhoto}
                                        onClick={(file) => handleUpdatePhoto(file)}
                                    />
                                </Col>
                                <Col className="order-lg-2" lg="6">
                                    <InputText
                                        name="BIO"
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
        </ContainerBG>
    );
};

 export default ProfileEditing;