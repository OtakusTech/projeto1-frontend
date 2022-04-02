import React, { useEffect, useState } from "react";
import {Card, Col, Row } from "reactstrap";
import ContainerBG from "../../../components/ContainerBG";
import Loading from "../../../components/Loading";
import api from "../../../services/api/api";
import { toast } from "react-toastify";
import { useParams } from "react-router";
import CardAnime from "../../../components/CardAnime";

const AnimesByTag = () => {
    const id = useParams().id;
    const [loading, setloading] = useState(true);
    const [animes, setAnimes] = useState([]);
    const [tag, setTag] = useState([]);

    useEffect(() => {
        const fetchAnimes = async () => {
            try {
                const { data } = await api.get(`/anime/all/${id}`);
                setAnimes(data);
            } catch {
                toast.error("Erro inesperado. Atualize a página e tente novamente")
            } finally {
                setloading(false);
            }
        };
        const fetchTags = async () => {
            try {
                const {data} = await api.get(`tags/`);
                setTag(data.filter(e => e._id == id));
            } catch {
                toast.error("Não foi possível carregar as tags. Tente novamente mais tarde.")
            } finally {
                setloading(false);
            }
        };
        
        fetchAnimes();
        fetchTags();
    }, []);

    return(
        <ContainerBG>
            { loading ? 
                <Loading />
                :
                <Card className="card-profile shadow mt--300">
                    <Row>
                        <Col>
                            <div className="text-center m-4">
                                <h3>{tag[0].tag}</h3>
                            </div>
                        </Col>
                    </Row>
                    <div className="containerC px-4">
                        <Row>
                                {
                                    animes.map(anime => {
                                        return (
                                                <CardAnime
                                                    key={anime._id}
                                                    id={anime._id}
                                                    img={anime.img}
                                                    title={anime.title}
                                                    tags={anime.tags}
                                                />
                                        )
                                    })
                                }
                        </Row>
                    </div>
                </Card>
        
            }
        </ContainerBG>
    )
}

export default AnimesByTag;