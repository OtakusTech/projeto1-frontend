import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Badge, Button, Card, Col, Form, Label, Row } from "reactstrap";
import ContainerBG from "../../components/ContainerBG";
import InputPhoto from "../../components/InputPhoto";
import InputText from "../../components/InputText";
import Loading from "../../components/Loading";
import AnimeEmpty from "../../assets/img/anime-empty.jpg";
import api from "../../services/api/api";
import { toast } from "react-toastify";
import apiImage from "../../services/api/apiImage";
import Modaltags from "../../components/ModalTags";
import { AiFillLike } from "react-icons/ai";

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
        tags: [],
        year: '',
        creator: '',
    });

    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        if (!id) {
            setloading(false);
        } else {
            const fetchAnime = async () => {
                try {
                    const response = await api.get(`anime/${id}`);
                    const { title, synopsis, year, img, creator, tags } = response.data;

                    setAnime({
                        title,
                        synopsis,
                        year,
                        image: img ? img : AnimeEmpty,
                        creator: creator,
                        tags
                    });
                    setloading(false);
                } catch (error) {
                    toast.error("Não foi possível localizar o anime. Tente novamente mais tarde.")
                }
            };
    
            fetchAnime();
        }
    }, []);

    const handleSendAnime = async () => {
        setloading(true);
        try {
            const resultAnime = await api.post(`/anime/new`, {
                title: anime.title,
                creator: localStorage.getItem('user-id'),
                year: anime.year,
                synopsis: anime.synopsis,
                img: anime.image,
                tags: anime.tags,
            })
            setloading(false);
            toast.success('Anime cadastrado com sucesso.');
            window.location.replace(`/anime/${resultAnime.data.anime}`);
        } catch (error) {
            setloading(false);
            toast.error(`Não foi possível criar o anime. Verifique os dados inseridos e tente novamente`)
        }
    };

    const handleUpdateAnime = async () => {
        setloading(true);
        try {
            await api.put(`/anime/update/${id}`, {
                title: anime.title,
                creator: anime.creator,
                year: anime.year,
                synopsis: anime.synopsis,
                img: anime.image,
                tags: anime.tags,
            })
            setloading(false);
            toast.success('Alterações realizadas com sucesso.');
            window.location.replace(`/anime/${id}`);
        } catch (error) {
            setloading(false);
            toast.error(`Não foi possível alterar os dados: ${error}`)
        }
    };

    const handleUpdatePhoto = async (event) => {
        const file = event.target.files[0];

        const data = new FormData();
        data.append('image', file);

        try {
            const result = await apiImage.post('/image', data);
            setAnime({ ...anime, image: result.data.link });
        } catch (error) {
            toast.error("Algum erro ocorreu ao tentar salvar a imagem. Tente novamente.")
        }
    };

    const updateValue = (id, newValue) => {
        if (id === "synopsis") {
            setAnime({ ...anime, [id]: { text: newValue} });
        }
        setAnime({ ...anime, [id]: newValue });
    };

    const updateSynopsis = (id, newValue) => {
        setAnime({ ...anime, synopsis: { ...anime.synopsis, [id]: newValue} });
    };

    const handleModal = () => {
        setModalIsOpen(!modalIsOpen);
    };

    const saveTags = async (tags) => {
        let tagsToAdd = [];
        Object.keys(tags).forEach((tagId) => {
            let flag = true;
            anime.tags.forEach(tag => {
                if (tagId === tag.id) {
                    flag = false
                }
            })
            if (flag) {
                tagsToAdd.push({ ...tags[tagId], folks: [localStorage.getItem('user-id')] });
            }
        })
        
        setAnime( { ...anime, tags: anime.tags.concat(tagsToAdd) });
        handleModal();
    };

    const upVoteTag = (tagId) => {
        const userId = localStorage.getItem('user-id');
        let tagsUpdated = [];
        anime.tags.forEach(tag => {
            if (tag.id === tagId) {
                let flag = true;
                tag.folks.forEach(folk => {
                    if (folk === userId) {
                        flag = false;
                    }
                });
                if (flag) {
                    tag.folks.push(userId);
                    tagsUpdated.push({ ...tag , folks: tag.folks });
                } else {
                    tagsUpdated.push({ ...tag , folks: tag.folks.filter(element => element !== userId) });
                }
            } else {
                tagsUpdated.push(tag);
            }
        })

        setAnime({ ...anime, tags: tagsUpdated })
    };

    return (
        <ContainerBG>
            { loading ?
                <Loading />
                :
                <>
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
                                        <div className="mb-3">
                                            <InputText
                                                name="SINOPSE"
                                                id="text"
                                                value={anime.synopsis.text}
                                                type="textarea"
                                                rows="11"
                                                onChange={(value) => updateSynopsis("text", value)}
                                            />
                                        </div>
                                        <InputText
                                            name="FONTE (LINK)"
                                            id="font"
                                            value={anime.synopsis.font}
                                            type="texto"
                                            onChange={(value) => updateSynopsis("font", value)}
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
                                    <Col className="order-lg-2 justify-content-left" lg="12">
                                        <Label className="d-flex">
                                            TAGS
                                        </Label>
                                        <Row className="m-0">
                                            {
                                                anime.tags.map(tag => {
                                                    return (
                                                        <>
                                                            <Badge key={`${tag.id}${(new Date()).getTime()}1`} color="primary" pill className="mr-1 pr-3 pl-3 text-white">
                                                                {tag.folks.length}
                                                            </Badge>
                                                            <Badge key={`${tag.id}${(new Date()).getTime()}2`} color="light" pill className="mr-3 pr-3 pl-3">
                                                                {tag.name}
                                                                <AiFillLike className="ml-2" onClick={() => upVoteTag(tag.id)}/>
                                                            </Badge>
                                                        </>
                                                    )
                                                })
                                            }
                                            <Badge 
                                                key="more"
                                                color="danger"
                                                pill
                                                className="mr-1 pr-3 pl-3 text-white"
                                                onClick={() => handleModal()}
                                            >
                                                ADD
                                            </Badge>
                                        </Row>
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
                    <Modaltags submit={(tags) => saveTags(tags)} isOpen={modalIsOpen} close={() => handleModal()}/>
                </>
            }
        </ContainerBG>
    );
};

export default NewAnime;