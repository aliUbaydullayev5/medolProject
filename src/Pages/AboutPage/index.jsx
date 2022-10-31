import React from 'react'
import {Container} from "./style";
import HeaderCarousel from "../../Components/About/HeaderCarousel";
import Production from "../../Components/About/Production";

const AboutPage = () => {
    return(
        <Container>
            <HeaderCarousel />
            <Production />
        </Container>
    )
}

export default AboutPage