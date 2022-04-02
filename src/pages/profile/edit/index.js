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
import apiImage from "../../../services/api/apiImage";

const ProfileEditing = () => {
    const params = useParams();
    const { id } = params; 

    const [loading, setloading] = useState(true);
    const [user, setUser] = useState({ name: '', email: '', profilePhoto: ProfileEmpty, bio: "" });

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await api.get(`user/get/${id}`);

                setUser(response.data);
                setloading(false);
            } catch (error) {
                setloading(false);
                toast.error(`Não foi possível alterar os dados: ${error}`)
            }
        };

        fetchUser();
    }, []);

    const handleUpdatePhoto = async (event) => {
        const file = event.target.files[0];

        const data = new FormData();
        data.append('image', file);

        try {
            apiImage.post('/image', data).then(result => {
                setUser({ ...user, profilePhoto: result.data.data.link });
            });
        } catch (error) {
            toast.error("Algum erro ocorreu ao tentar salvar a imagem. Tente novamente.")
        }
    };

    const handleUpdateUser = async () => {
        setloading(true);
        try {
            await api.put(`/user/update/${id}`, {
                name: user.name,
                email: user.email,
                img: user.profilePhoto,
                bio: user.bio
            })
            setloading(false);
            toast.success('Alterações realizadas com sucesso.');
            window.location.replace(`/profile/${id}`);
        } catch (error) {
            setloading(false);
            toast.success(`Não foi possível realizar as alterações: ${error}`);
        }
    }

    const updateValue = (id, newValue) => {
        setUser({ ...user, [id]: newValue });
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
                                        onChange={(value) => updateValue("name", value)}
                                    />
                                </Col>
                                <Col className="order-lg-2" lg="6">
                                    <InputText 
                                        name="EMAIL"
                                        id="email"
                                        value={user.email}
                                        type="email"
                                        onChange={(value) => updateValue("email", value)}
                                    />
                                </Col>
                            </Row>
                            <Row className="justify-content-center m-2">
                                <Col className="order-lg-2" lg="6">
                                    <InputPhoto 
                                        title="Tamanho ideal: 100x100px."
                                        className="rounded-circle"
                                        titleImage="FOTO"
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
                                        onChange={(value) => updateValue("bio", value)}
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