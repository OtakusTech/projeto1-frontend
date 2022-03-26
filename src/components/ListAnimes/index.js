import { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import api from "../../services/api/api";
import CardAnime from "../CardAnime";

const ANIMES_MOCK = [
    {
        id:"1",
        img:"https://upload.wikimedia.org/wikipedia/pt/f/ff/One_Piece_vol._01.jpg",
        title:"One Piece",
        tags:["Aventura","luta","misterio "]
    },
    {
        id:"2",
        img:"https://upload.wikimedia.org/wikipedia/pt/f/ff/One_Piece_vol._01.jpg",
        title:"One Piece",
        tags:["Aventura","luta","misterio "]
    },
    {
        id:"3",
        img:"https://upload.wikimedia.org/wikipedia/pt/f/ff/One_Piece_vol._01.jpg",
        title:"One Piece",
        tags:["Aventura","luta","misterio "]
    },
    {
        id:"4",
        img:"https://upload.wikimedia.org/wikipedia/pt/f/ff/One_Piece_vol._01.jpg",
        title:"One Piece",
        tags:["Aventura","luta","misterio "]
    },
];

const ListAnimes = ({ title }) => {
    const [animes, setanimes] = useState(ANIMES_MOCK);

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
                                        key={anime.id}
                                        id={anime.id}
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