import React from "react";
import { Container } from "reactstrap";

const ContainerBG = (props) => {
    return (
        <main className="profile-page">
            <section className="section-profile-cover section-shaped my-0" style={{"background": "linear-gradient(45deg, red, orange)", "height": "380px"}}>
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
            <section className="section">
                <Container>
                    {props.children}
                </Container>
            </section>
        </main>
    )
};

export default ContainerBG;