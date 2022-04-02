import React, { useEffect, useState } from "react";
import { Badge, Card, Col, Row } from "reactstrap";
import ContainerBG from "../../components/ContainerBG";
import Loading from "../../components/Loading";
import api from "../../services/api/api";
import { toast } from "react-toastify";
import "./style.css"
import { useNavigate } from "react-router";

const Tags = () => {
    const [loading, setloading] = useState(true);
    const [tagList, setTagList] = useState([]);
    const history = useNavigate();

    useEffect(() => {
        const fetchTags = async () => {
            try {
                const response = await api.get(`tags/`);
                setTagList(response.data);
            } catch {
                toast.error("Não foi possível carregar as tags. Tente novamente mais tarde.")
            } finally {
                setloading(false);
            }
        };

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
                                <h3>Tags</h3>
                            </div>
                        </Col>
                    </Row>
                    <div className="containerC px-4">
                        {
                            tagList.map(tag => {
                                return (
                                    <Badge
                                        color="primary"
                                        className="tag m-1 p-2"
                                        href={`/tags/${tag._id}`}
                                        pill
                                        onClick={e => {
                                            e.preventDefault();
                                            history(`${tag._id}`);
                                        }}>
                                        {tag.tag}
                                    </Badge>
                                )
                            })
                        }
                    </div>
                </Card>
        
            }
        </ContainerBG>
    )
}

export default Tags;