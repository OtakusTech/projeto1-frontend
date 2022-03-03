import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Button, Card, Col, Form, Label, Row } from "reactstrap";
import ContainerBG from "../../components/ContainerBG";
import InputPhoto from "../../components/InputPhoto";
import InputText from "../../components/InputText";
import Loading from "../../components/Loading";
import AnimeEmpty from "../../assets/img/anime-empty.jpg";
import api from "../../services/api/api";
import { toast } from "react-toastify";

const NewAnime = () => {
    const params = useParams();
    const { id } = params;

    const [loading, setloading] = useState(true);
    const [anime, setAnime] = useState({
        title: '',
        synopsis: '',
        image: AnimeEmpty,
        tags: '',
    })

    useEffect(() => {
        if (!id) {
            setloading(false);
        } else {
            const fetchAnime = async () => {
                try {
                    const response = await api.get(`anime/${id}`);
    
                    setAnime(response.data);
                    setloading(false);
                } catch {
                    toast.error("Não foi possível localizar o anime. Tente novamente mais tarde.")
                    setInterval(() => {
                        window.history.back();
                    }, 2000)
                }
            };
    
            fetchAnime();
        }
    }, [])

    const handleSendAnime = () => {
        // TODO: CHANGE HERE WITH THE POST/PUT ANIME FUNCTION
    };

    const handleUpdatePhoto = (event) => {
        const reader = new FileReader();
        const file = event.target.files[0];

        reader.readAsDataURL(file);
        reader.onloadend = () => {
            let imgBase64 = reader.result;
            const imgURL = imgBase64.replace(/^data:image\/[a-z]+;base64,/, "");
            setAnime({ ...anime, image: `data:image/png;base64,${imgURL}`});
        };
    };

    return (
        <ContainerBG>
            { loading ?
                <Loading />
                :
                <Card className="card-profile shadow mt--300">
                    <div className="px-4">
                        <Label className="m-3 heading-title" style={{ "fontWeight": "bold" }}>
                            {`${!id ? "CRIAR" : "EDITAR"} ANIME`}
                        </Label>
                        <Form onSubmit={handleSendAnime}>
                            <Row className="justify-content-center m-2">
                                <Col className="order-lg-2">
                                    <InputText 
                                        name="TÍTULO DO ANIME"
                                        id="title"
                                        value={anime.title}
                                        type="title"
                                    />
                                </Col>
                            </Row>
                            <Row className="justify-content-center m-2">
                                <Col className="order-lg-2"  lg="8">
                                    <InputText
                                        name="SINOPSE"
                                        id="synopsis"
                                        value={anime.synopsis}
                                        type="textarea"
                                        rows="15"
                                    />
                                </Col>
                                <Col className="order-lg-2" lg="4">
                                    <InputPhoto 
                                        title="Tamanho ideal: 300x400px."
                                        size={{"height": "300px", "width": "200px"}}
                                        titleImage="FOTO DE CAPA"
                                        buttonName="SELECIONAR FOTO"
                                        value={anime.image}
                                        onClick={(file) => handleUpdatePhoto(file)}
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

export default NewAnime;