import React from 'react'
import {Container} from "./style";
import {servisecData} from "../../../Mock/servicesData";
import Button from "../../../Generic/Button";


const Services = () => {
    return(
        <Container>
            <Container.Inset>
                <Container.Title>УСЛУГИ</Container.Title>
                <Container.Main>
                    <Container.MainInset>
                        {servisecData.map(({id, title, desc, img})=> (
                            <Container.Section key={id}>
                                <Container.SectionImg imgUrl={img}/>
                                <Container.SectionTitle>
                                    {title}
                                </Container.SectionTitle>
                                <Container.SectionDesc>
                                    {desc}
                                </Container.SectionDesc>
                                <Container.SectionButton>
                                    <Button>Подробнее</Button>
                                </Container.SectionButton>
                            </Container.Section>
                        ))}
                    </Container.MainInset>
                </Container.Main>
            </Container.Inset>
        </Container>
    )
}

export default Services