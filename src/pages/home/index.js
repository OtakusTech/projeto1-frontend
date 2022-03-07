import React from 'react';
import LogoutService from './../../services/logoutService.js';
import classnames from "classnames";
import './style.css';

import {
    Badge,
    Button,
    Card,
    CardBody,
    CardImg,
    FormGroup,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col
  } from "reactstrap";

  import MainNavbar from "../../../src/components/MainNavbar";
  import SimpleFooter from "../../../src/components/SimpleFooter";

  class Home extends React.Component {
    state = {};
    componentDidMount() {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      this.refs.main.scrollTop = 0;
    }
    render() {
      let none = {
        img:"https://upload.wikimedia.org/wikipedia/pt/f/ff/One_Piece_vol._01.jpg",
        titulo:"One Piece",
        tags:["Aventura","luta","misterio "]
      }
      return (
        <>
          <MainNavbar />
          <main ref="main">
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
                      <Col lg="3">
                        <Card className="card-lift--hover shadow border-0">
                          <CardBody className="py-5">
                            <div >
                              <img src={none.img} className="cover"/>
                            </div>
                            <h6 className="text-primary text-uppercase">
                              {none.titulo}
                            </h6>
                            <div>
                              <Badge color="primary" pill className="mr-1">
                                {none.tags[0]}
                              </Badge>
                              <Badge color="primary" pill className="mr-1">
                                {none.tags[1]}
                              </Badge>
                              <Badge color="primary" pill className="mr-1">
                              {none.tags[2]}
                              </Badge>
                            </div>
                            <Button
                              className="mt-4"
                              color="primary"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Ver Anime
                            </Button>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col lg="3">
                        <Card className="card-lift--hover shadow border-0">
                          <CardBody className="py-5">
                            <div >
                              <img src={none.img} className="cover"/>
                            </div>
                            <h6 className="text-primary text-uppercase">
                              {none.titulo}
                            </h6>
                            <div>
                              <Badge color="primary" pill className="mr-1">
                                {none.tags[0]}
                              </Badge>
                              <Badge color="primary" pill className="mr-1">
                                {none.tags[1]}
                              </Badge>
                              <Badge color="primary" pill className="mr-1">
                              {none.tags[2]}
                              </Badge>
                            </div>
                            <Button
                              className="mt-4"
                              color="primary"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Ver Anime
                            </Button>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col lg="3">
                        <Card className="card-lift--hover shadow border-0">
                          <CardBody className="py-5">
                            <div >
                              <img src={none.img} className="cover"/>
                            </div>
                            <h6 className="text-primary text-uppercase">
                              {none.titulo}
                            </h6>
                            <div>
                              <Badge color="primary" pill className="mr-1">
                                {none.tags[0]}
                              </Badge>
                              <Badge color="primary" pill className="mr-1">
                                {none.tags[1]}
                              </Badge>
                              <Badge color="primary" pill className="mr-1">
                              {none.tags[2]}
                              </Badge>
                            </div>
                            <Button
                              className="mt-4"
                              color="primary"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Ver Anime
                            </Button>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col lg="3">
                        <Card className="card-lift--hover shadow border-0">
                          <CardBody className="py-5">
                            <div >
                              <img src={none.img} className="cover"/>
                            </div>
                            <h6 className="text-primary text-uppercase">
                              {none.titulo}
                            </h6>
                            <div>
                              <Badge color="primary" pill className="mr-1">
                                {none.tags[0]}
                              </Badge>
                              <Badge color="primary" pill className="mr-1">
                                {none.tags[1]}
                              </Badge>
                              <Badge color="primary" pill className="mr-1">
                              {none.tags[2]}
                              </Badge>
                            </div>
                            <Button
                              className="mt-4"
                              color="primary"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Ver Anime
                            </Button>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Container>
            </section>
            <section className="section bg-secondary">
            <Container>
              <h2>Novos</h2>
                <Row className="justify-content-center">
                  <Col lg="12">
                    <Row className="row-grid">
                    <Col lg="3">
                        <Card className="card-lift--hover shadow border-0">
                          <CardBody className="py-5">
                            <div >
                              <img src={none.img} className="cover"/>
                            </div>
                            <h6 className="text-primary text-uppercase">
                              {none.titulo}
                            </h6>
                            <div>
                              <Badge color="primary" pill className="mr-1">
                                {none.tags[0]}
                              </Badge>
                              <Badge color="primary" pill className="mr-1">
                                {none.tags[1]}
                              </Badge>
                              <Badge color="primary" pill className="mr-1">
                              {none.tags[2]}
                              </Badge>
                            </div>
                            <Button
                              className="mt-4"
                              color="primary"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Ver Anime
                            </Button>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col lg="3">
                        <Card className="card-lift--hover shadow border-0">
                          <CardBody className="py-5">
                            <div >
                              <img src={none.img} className="cover"/>
                            </div>
                            <h6 className="text-primary text-uppercase">
                              {none.titulo}
                            </h6>
                            <div>
                              <Badge color="primary" pill className="mr-1">
                                {none.tags[0]}
                              </Badge>
                              <Badge color="primary" pill className="mr-1">
                                {none.tags[1]}
                              </Badge>
                              <Badge color="primary" pill className="mr-1">
                              {none.tags[2]}
                              </Badge>
                            </div>
                            <Button
                              className="mt-4"
                              color="primary"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Ver Anime
                            </Button>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col lg="3">
                        <Card className="card-lift--hover shadow border-0">
                          <CardBody className="py-5">
                            <div >
                              <img src={none.img} className="cover"/>
                            </div>
                            <h6 className="text-primary text-uppercase">
                              {none.titulo}
                            </h6>
                            <div>
                              <Badge color="primary" pill className="mr-1">
                                {none.tags[0]}
                              </Badge>
                              <Badge color="primary" pill className="mr-1">
                                {none.tags[1]}
                              </Badge>
                              <Badge color="primary" pill className="mr-1">
                              {none.tags[2]}
                              </Badge>
                            </div>
                            <Button
                              className="mt-4"
                              color="primary"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Ver Anime
                            </Button>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col lg="3">
                        <Card className="card-lift--hover shadow border-0">
                          <CardBody className="py-5">
                            <div >
                              <img src={none.img} className="cover"/>
                            </div>
                            <h6 className="text-primary text-uppercase">
                              {none.titulo}
                            </h6>
                            <div>
                              <Badge color="primary" pill className="mr-1">
                                {none.tags[0]}
                              </Badge>
                              <Badge color="primary" pill className="mr-1">
                                {none.tags[1]}
                              </Badge>
                              <Badge color="primary" pill className="mr-1">
                              {none.tags[2]}
                              </Badge>
                            </div>
                            <Button
                              className="mt-4"
                              color="primary"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Ver Anime
                            </Button>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Container>
            </section>
            <section className="section pb-0 bg-gradient-warning">
            <Container>
              <h2 className="text-white">Populares</h2>
                <Row className="justify-content-center">
                  <Col lg="12">
                    <Row className="row-grid">
                    <Col lg="3">
                        <Card className="card-lift--hover shadow border-0">
                          <CardBody className="py-5">
                            <div >
                              <img src={none.img} className="cover"/>
                            </div>
                            <h6 className="text-primary text-uppercase">
                              {none.titulo}
                            </h6>
                            <div>
                              <Badge color="primary" pill className="mr-1">
                                {none.tags[0]}
                              </Badge>
                              <Badge color="primary" pill className="mr-1">
                                {none.tags[1]}
                              </Badge>
                              <Badge color="primary" pill className="mr-1">
                              {none.tags[2]}
                              </Badge>
                            </div>
                            <Button
                              className="mt-4"
                              color="primary"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Ver Anime
                            </Button>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col lg="3">
                        <Card className="card-lift--hover shadow border-0">
                          <CardBody className="py-5">
                            <div >
                              <img src={none.img} className="cover"/>
                            </div>
                            <h6 className="text-primary text-uppercase">
                              {none.titulo}
                            </h6>
                            <div>
                              <Badge color="primary" pill className="mr-1">
                                {none.tags[0]}
                              </Badge>
                              <Badge color="primary" pill className="mr-1">
                                {none.tags[1]}
                              </Badge>
                              <Badge color="primary" pill className="mr-1">
                              {none.tags[2]}
                              </Badge>
                            </div>
                            <Button
                              className="mt-4"
                              color="primary"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Ver Anime
                            </Button>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col lg="3">
                        <Card className="card-lift--hover shadow border-0">
                          <CardBody className="py-5">
                            <div >
                              <img src={none.img} className="cover"/>
                            </div>
                            <h6 className="text-primary text-uppercase">
                              {none.titulo}
                            </h6>
                            <div>
                              <Badge color="primary" pill className="mr-1">
                                {none.tags[0]}
                              </Badge>
                              <Badge color="primary" pill className="mr-1">
                                {none.tags[1]}
                              </Badge>
                              <Badge color="primary" pill className="mr-1">
                              {none.tags[2]}
                              </Badge>
                            </div>
                            <Button
                              className="mt-4"
                              color="primary"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Ver Anime
                            </Button>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col lg="3">
                        <Card className="card-lift--hover shadow border-0">
                          <CardBody className="py-5">
                            <div >
                              <img src={none.img} className="cover"/>
                            </div>
                            <h6 className="text-primary text-uppercase">
                              {none.titulo}
                            </h6>
                            <div>
                              <Badge color="primary" pill className="mr-1">
                                {none.tags[0]}
                              </Badge>
                              <Badge color="primary" pill className="mr-1">
                                {none.tags[1]}
                              </Badge>
                              <Badge color="primary" pill className="mr-1">
                              {none.tags[2]}
                              </Badge>
                            </div>
                            <Button
                              className="mt-4"
                              color="primary"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Ver Anime
                            </Button>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Container>
              {/* SVG separator */}
              <div >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-secondary"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
          </main>
          <SimpleFooter />
        </>
      );
    }
  }
  
  export default Home;
  