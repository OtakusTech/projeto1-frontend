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
        synopsis: {
            text: '',
            font: ''
        },
        image: AnimeEmpty,
        tags: '',
        year: '',
    })

    useEffect(() => {
        if (!id) {
            setloading(false);
        } else {
            const fetchAnime = async () => {
                try {
                    const response = await api.get(`anime/${id}`);
                    const { title, synopsis, year, img } = response.data;
                    setAnime({
                        title,
                        synopsis,
                        year,
                        image: img ? img : AnimeEmpty,
                    });
                    setloading(false);
                } catch {
                    toast.error("Não foi possível localizar o anime. Tente novamente mais tarde.")
                }
            };
    
            fetchAnime();
        }
    }, [])

    const handleSendAnime = async () => {
        setloading(true);
        try {
            await api.post(`/anime/new`, {
                title: anime.title,
                creator: 'as',
                year: anime.year,
                synopsis: anime.synopsis,
            })
            setloading(false);
            toast.success('Anime cadastrado com sucesso.');
            window.location.replace(`/anime/${id}`);
        } catch (error) {
            setloading(false);
            toast.error(`Não foi possível criar o anime: ${error}`)
        }
    };

    const handleUpdateAnime = async () => {
        setloading(true);
        try {
            await api.put(`/anime/update/${id}`, {
                title: anime.title,
                creator: 'as',
                year: anime.year,
                synopsis: anime.synopsis,
            })
            setloading(false);
            toast.success('Alterações realizadas com sucesso.');
            window.location.replace(`/anime/${id}`);
        } catch (error) {
            setloading(false);
            toast.error(`Não foi possível alterar os dados: ${error}`)
        }
    }

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

    const updateValue = (id, newValue) => {
        if (id === "synopsis") {
            setAnime({ ...anime, [id]: { text: newValue} });
        }
        setAnime({ ...anime, [id]: newValue });
    }

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
                        <Form onSubmit={id ? handleUpdateAnime : handleSendAnime}>
                            <Row className="justify-content-center m-2">
                                <Col className="order-lg-2" lg="8">
                                    <InputText 
                                        name="TÍTULO DO ANIME"
                                        id="title"
                                        value={anime.title}
                                        type="title"
                                        onChange={(value) => updateValue("title", value)}
                                    />
                                </Col>
                                <Col className="order-lg-2" lg="4">
                                    <InputText 
                                        name="ANO DE LANÇAMENTO"
                                        id="year"
                                        value={anime.year}
                                        type="mumber"
                                        onChange={(value) => updateValue("year", value)}
                                    />
                                </Col>
                            </Row>
                            <Row className="justify-content-center m-2">
                                <Col className="order-lg-2"  lg="8">
                                    <InputText
                                        name="SINOPSE"
                                        id="synopsis"
                                        value={anime.synopsis.text}
                                        type="textarea"
                                        rows="15"
                                        onChange={(value) => updateValue("synopsis", value)}
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
                                        disabled={true}
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