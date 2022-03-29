import { useNavigate } from "react-router";
import { Badge, Button, Card, CardBody, Col } from "reactstrap";

const CardAnime = ({ id, img, title, tags}) => {

    let history = useNavigate();

    return (
        <Col lg="3">
            <Card className="card-lift--hover shadow border-0">
                <CardBody className="py-3">
                    <div className="d-flex justify-content-center">
                        <img src={img} className="cover"/>
                    </div>
                    <h6 className="text-default text-uppercase d-flex justify-content-center font-weight-bolder">
                        {title}
                    </h6>
                    <div>
                        {
                            tags.map(tag => {
                                return (
                                <Badge key={tag} color="light" pill className="mr-1">
                                    {tag}
                                </Badge>
                                )
                            })
                        }
                    </div>
                    <Button
                        block
                        className="mt-4"
                        color="danger"
                        onClick={() => history(`/anime/${id}`)}
                    >
                        VER MAIS
                    </Button>
                </CardBody>
            </Card>
        </Col>
    );
};

export default CardAnime;