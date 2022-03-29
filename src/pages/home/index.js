import React, { useEffect, useState } from 'react';
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
import ContainerBG from '../../components/ContainerBG/index.js';
import ListAnimes from '../../components/ListAnimes';

const Home = () => {

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, []);

  return (
      <>
        <MainNavbar />
        <ContainerBG>
          <div className="col px-0 mt--300">
            <Row>
              <Col>
                <h1 className="display-3 text-white">
                  Descubra novos Animes
                </h1>
                <p className="lead text-white">
                Comunidade colaborativa e apaixonada que organiza e cataloga animes e um sistema incrível que te ajuda a
                encontrar seu próximo anime preferido da temporada.
                </p>
              </Col>
            </Row>
          </div>
            <ListAnimes title="Recomendados" />
          </ContainerBG>
        <SimpleFooter />
    </>
  );
}

export default Home;
