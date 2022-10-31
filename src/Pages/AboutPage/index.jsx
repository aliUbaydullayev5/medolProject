import React from 'react'
import {Container} from "./style";
import HeaderCarousel from "../../Components/About/HeaderCarousel";
import Production from "../../Components/About/Production";
import Services from "../../Components/About/Services";

const AboutPage = () => {
    return(
        <Container>
            <HeaderCarousel />
            <Production />
            <Services />
        </Container>
    )
}

export default AboutPage