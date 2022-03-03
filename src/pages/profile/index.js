import React, { useEffect, useState } from "react";
import { Button, Card, Row, Col } from "reactstrap";
import { HiPencilAlt } from 'react-icons/hi';
import api from "../../services/api/api";
import { toast } from 'react-toastify';
import { useNavigate, useParams } from "react-router";
import ContainerBG from "../../components/ContainerBG";
import ProfileEmpty from "../../assets/img/profile-empty.jpg";

const Profile = () => {
    const id = useParams();
    const history = useNavigate();
    const [user, setUser] = useState({ name: '', email: '', img: ProfileEmpty, bio: "" })

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await api.get(`user/get/${id}`);
                const image = response.data.img;
                response.data.img = image ? image : ProfileEmpty;
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
        <ContainerBG>
            <Card className="card-profile shadow mt--300">
                <div className="px-4">
                    <Row className="justify-content-center">
                        <Col className="order-lg-2" lg="3">
                            <div className="card-profile-image">
                                <img
                                    alt="..."
                                    className="rounded-circle"
                                    src={user.img}
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
        </ContainerBG>
    );
}

export default Profile;
