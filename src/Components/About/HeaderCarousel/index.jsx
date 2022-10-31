import React from 'react'
import {Container, CarouselBlock, Text} from "./style";
import {dataCarousel} from "../../../Mock/headerCarousel";
import Button from "../../../Generic/Button";

const HeaderCarousel = () => {
    return(
        <Container>
            <CarouselBlock autoplay>
                {dataCarousel.map(({id, title, desc, link, img})=> (
                    <CarouselBlock.Sections key={id}>
                        <CarouselBlock.Left>
                            <Text type={'title'} margin={'0 0 31px 0'}>{title}</Text>
                            <Text margin={'0 0 43px 0'}>{desc}</Text>
                            <Button>Подробнее</Button>
                        </CarouselBlock.Left>
                        <CarouselBlock.Right>
                            <img src={img} alt={'Product'} />
                        </CarouselBlock.Right>
                    </CarouselBlock.Sections>
                ))}
            </CarouselBlock>
        </Container>
    )
}

export default HeaderCarousel