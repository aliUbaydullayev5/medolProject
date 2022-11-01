import React from 'react'
import {Container} from "./style";
import HeaderCarousel from "../../Components/About/HeaderCarousel";
import Production from "../../Components/About/Production";
import Services from "../../Components/About/Services";
import AboutUs from "../../Components/About/AboutUs";
import News from "../../Components/About/News";
import Partners from "../../Components/About/Partners";
import Footer from "../../Components/Footer";

const AboutPage = () => {
    return(
        <Container>
            <HeaderCarousel />
            <Production />
            <Services />
            <AboutUs />
            <News />
            <Partners />
            <Footer />
        </Container>
    )
}

export default AboutPage