import React from 'react'
import {Container} from "./style";
import {newsData} from "../../../Mock/newsData";
import AliceCarousel from 'react-alice-carousel';


const News = () => {


    const items = newsData.map(({id, title, desc, data, img, link})=> (
        <Container.Column key={id}>
            <Container.ColumnInset>
                <img src={img} alt={''} />
                <Container.ColumnTitle>{title}</Container.ColumnTitle>
                <Container.ColumnData>{data}</Container.ColumnData>
                <Container.ColumnDesc>{desc}</Container.ColumnDesc>
            </Container.ColumnInset>
            <Container.ShaydovBlock />
        </Container.Column>
    ))
    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };



    return(
        <Container>
            <Container.Inset>
                <Container.Title>НОВОСТИ</Container.Title>
                <AliceCarousel mouseTracking mouseTracking items={items} responsive={responsive} />
                <Container.Bottom>
                    <Container.BottomTitle>Посмотреть все новости <span>➤</span></Container.BottomTitle>
                    <Container.BottomTitle strong={true}>Подписаться на новости <span>➤</span></Container.BottomTitle>
                </Container.Bottom>
            </Container.Inset>
        </Container>
    )
}

export default News