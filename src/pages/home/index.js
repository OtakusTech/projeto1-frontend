import React, { useEffect } from 'react';
import './style.css';
import Logo from '../../assets/logo/LOGO-V2-BRANCA.png'

import {
    Row,
    Col
  } from "reactstrap";

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
        <ContainerBG>
          <div className="col px-0" style={{ marginTop: '-340px' }}>
            <Row>
              <Col lg='3'>
                <img src={Logo} width='200px' height='233px'/>
              </Col>
              <Col lg='9'>
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
