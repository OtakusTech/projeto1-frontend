import { useNavigate, useParams } from "react-router";
import { Badge, Button, Card, Col, Label, Row } from "reactstrap";
import ContainerBG from "../../components/ContainerBG";
import AnimeEmpty from "../../assets/img/anime-empty.jpg";
import { React, useEffect, useState } from "react";
import { HiPencilAlt } from "react-icons/hi";
import Loading from "../../components/Loading";
import api from "../../services/api/api";
import { toast } from "react-toastify";

const Anime = () => {
  const params = useParams();
  const { id } = params;

  const history = useNavigate();

  const [loading, setloading] = useState(false);
  const [animeRecommendations, setAnimeRecommendations] = useState({
    animes: [],
  });
  const [anime, setAnime] = useState({
    title: "",
    year: "",
    synopsis: {
      font: "",
      text: "",
    },
    image: AnimeEmpty,
    tags: [],
  });

  const getAnimeRecommendations = async (animeTags) => {
    const recommendations = [];
    const TOTAL_RECOMMENDATIONS = 3;

    if (animeTags.length === 0) return [];

    if (animeTags.length === 1) {
      const mostVotedTagAnimes = await api.get(`anime/all/${animeTags[0].tagId}`);
      return mostVotedTagAnimes.slice(0, 3);
    }

    animeTags.sort((tagsRight, tagsLeft) => {
      return tagsLeft.folks.length - tagsRight.folks.length;
    });

    if (animesTags.length == 2) {
      const firstMostVotedTagAnimes = await api.get(`anime/all/${animeTags[0].tagId}`);
      recommendations.push(firstMostVotedTagAnimes.slice(0, 2));
      const secondMostVotedTagAnimes = await api.get(`anime/all/${animeTags[1].tagId}`);
      recommendations.push(secondMostVotedTagAnimes.slice(0, 1));
    }else {
      for (let i = 0; i < TOTAL_RECOMMENDATIONS; i++) {
        const mostVotedTagAnimes = await api.get(`anime/all/${animeTags[i].tagId}`);
        recommendations.push(mostVotedTagAnimes[0]);
      }
    }

    return recommendations;
  };

  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const response = await api.get(`anime/${id}`);
        const { title, synopsis, img, year, tags } = response.data;
        setAnime({
          title,
          synopsis,
          image: img ? img : AnimeEmpty,
          year,
          tags,
        });
        const recommendations = await getAnimeRecommendations(tags);
        setAnimeRecommendations(recommendations);
        setloading(false);
      } catch {
        toast.error(
          "Não foi possível localizar o anime. Tente novamente mais tarde."
        );
      }
    };

    fetchAnime();
  }, []);

  return (
    <ContainerBG>
      {loading ? (
        <Loading />
      ) : (
        <Card className="card-profile shadow mt--300">
          <div className="px-4">
            <Row>
              <Col className="order-lg-2" lg="3">
                <div className="card-profile-image">
                  <img
                    alt="..."
                    className="ml-6"
                    style={{
                      height: "400px",
                      width: "300px",
                      maxWidth: "300px",
                    }}
                    src={anime.image}
                  />
                </div>
              </Col>
            </Row>
          </div>
          <div className="card-profile-actions p-4 mt-lg-0">
            <Button
              className="float-right"
              color="danger"
              size="sm"
              onClick={() => history(`${window.location.pathname}/edit`)}
            >
              Editar{" "}
              <HiPencilAlt style={{ marginBottom: "3px", marginLeft: "5px" }} />
            </Button>
          </div>
          <Row>
            <Col className="order-lg-2" lg="5" />
            <Col className="order-lg-2" lg="6">
              <Label
                className=" mb-3 heading-title"
                style={{ fontWeight: "bold" }}
              >
                {anime.title}, {anime.year}
              </Label>
            </Col>
          </Row>
          <Row className="mb-5">
            <Col className="order-lg-2" lg="5" />
            <Col className="order-lg-2 text-justify" lg="6">
              {anime.synopsis.text}
            </Col>
          </Row>
          <Row className="mb-5">
            <Col className="order-lg-2" lg="5" />
            <Col className="order-lg-2 text-justify" lg="6">
              {anime.tags.map((tag) => {
                return (
                  <Badge
                    key={tag.tagId}
                    color="light"
                    pill
                    className="mr-2 pr-3 pl-3"
                  >
                    {tag.name}
                  </Badge>
                );
              })}
            </Col>
          </Row>
        </Card>
      )}
    </ContainerBG>
  );
};

export default Anime;
