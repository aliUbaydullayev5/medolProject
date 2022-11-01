import React from 'react'
import {Container} from "./style";
import AliceCarousel from "react-alice-carousel";
import {partnersData} from "../../../Mock/partnersData";

const Partners = () => {

    const items = partnersData.map(({id, img1, img2})=> (
        <Container.Column key={id}>
            <Container.ColumnBlock>
                <img src={img1} />
            </Container.ColumnBlock>
            <Container.ColumnBlock>
                <img src={img2} />
            </Container.ColumnBlock>
        </Container.Column>
    ))
    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        760: { items: 3 },
        1024: { items: 4 },
    };


    return(
        <Container>
            <Container.Inset>
                <Container.Title>ПАРТНЕРЫ</Container.Title>
                <AliceCarousel mouseTracking mouseTracking items={items} responsive={responsive} />
            </Container.Inset>
        </Container>
    )
}


export default Partners