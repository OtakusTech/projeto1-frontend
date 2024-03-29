import { useNavigate } from "react-router";
import { Badge, Card, CardBody, Col } from "reactstrap";
import Button from "../Button";

const CardAnime = ({ id, img, title, tags}) => {

    let history = useNavigate();

    return (
        <Col lg="3"  className="mt-3 mb-3">
            <Card className="card-lift--hover shadow border-0 h-100">
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
                                <Badge key={tag.tagId} color="light" pill className="mr-1">
                                    {tag.name}
                                </Badge>
                                )
                            })
                        }
                    </div>
                    <Button
                        block
                        className="mt-4 primary"
                        color="#34004a"
                        onClick={() => history(`/anime/${id}`)}
                        label="VER MAIS"
                    />
                </CardBody>
            </Card>
        </Col>
    );
};

export default CardAnime;