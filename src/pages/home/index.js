import React, {useEffect, useRef, useState} from 'react';
import './style.css';
import axios from 'axios';

import {
    Badge,
    Button,
    Card,
    CardBody,
    Container,
    Row,
    Col
  } from "reactstrap";

  import MainNavbar from "../../../src/components/MainNavbar";
  import SimpleFooter from "../../../src/components/SimpleFooter";
  import { useNavigate } from "react-router-dom";


  const Home = (props) => {
    let shift = Math.floor(Math.random() * 5);
    console.log(shift);
    const x = 0 + shift;
    const y = 4 + shift;
    const [animes, setAnimes] = useState([]);
    let history = useNavigate();
    useEffect(()=>{
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;

        axios.get(`https://otakustech-api.herokuapp.com/anime/all`)
      .then(response =>{
        setAnimes(response.data)
      })
      .catch(()=> console.log("Deu Ruim"))
    },[])

      return (
        <>
          <MainNavbar />
          <main>
            <div className="position-relative">
              {/* shape Hero */}
              <section className="section section-lg section-shaped pb-250">
                <div className="shape shape-style-1 shape-default">
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
                <Container className="py-lg-md d-flex">
                  <div className="col px-0">
                    <Row>
                      <Col lg="6">
                        <h1 className="display-3 text-white">
                          Descubra novos Animes
                        </h1>
                        <p className="lead text-white">
                        comunidade colaborativa e apaixonada que ajudar catalogar 
                        animes e um sistema incrível que te ajudar a encontra seu 
                        próximo anime preferido da temporada.
                        </p>
                      </Col>
                    </Row>
                  </div>
                </Container>
                {/* SVG separator */}
                <div className="separator separator-bottom separator-skew">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    version="1.1"
                    viewBox="0 0 2560 100"
                    x="0"
                    y="0"
                  >
                    <polygon
                      className="fill-white"
                      points="2560 0 2560 100 0 100"
                    />
                  </svg>
                </div>
              </section>
              {/* 1st Hero Variation */}
            </div>
            <section className="section section-lg pt-lg-0 mt--200">
              <Container>
                <h2 className="text-white">Recomendados</h2>
                <Row className="justify-content-center">
                  <Col lg="12">
                    <Row className="row-grid">
                    {animes.slice(x,y).map(anime => 
                      <Col lg="3">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div >
                            <img src={anime.img} className="cover"/>
                          </div>
                          <h6 className="text-primary text-uppercase">
                            {anime.title}
                          </h6>
                          <div>
                            <Badge color="primary" pill className="mr-1">
                              teste1
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              teste2
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              teste 3
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="primary"
                            href="#pablo"
                            onClick={e => {
                              e.preventDefault()
                              history("/anime/" + anime._id);
                            }}
                          >
                            Ver Anime
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    )}
                    </Row>
                  </Col>
                </Row>
              </Container>
            </section>
          </main>
          <SimpleFooter />
        </>
      );
  }
  
  export default Home;
  