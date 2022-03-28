import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Col, Container, Row } from "reactstrap";
import api from "../../services/api/api";
import CardAnime from "../CardAnime";

const ListAnimes = ({ title }) => {
    const [animes, setAnimes] = useState([]);

    useEffect(() => {
        const getAll = async () => {
            try {
                const { data } = await api.get('/anime/all')
                setAnimes(data.slice(0,4));
            } catch (error) {
                toast.error("Erro inesperado. Atualize a página e tente novamente");
            }
        }
        getAll();
    }, [])

    return (
        <Container className='mt-6 p-0'>
            <h2 className="text-black">{title}</h2>
            <Row className="justify-content-center">
                <Col lg="12">
                    <Row className="row-grid">
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
                </Col>
            </Row>
        </Container>
    );
}

export default ListAnimes;