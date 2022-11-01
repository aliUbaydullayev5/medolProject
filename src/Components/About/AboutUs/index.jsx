import React from 'react'
import {Container} from "./style";
import imgBack from '../../../Assets/png/aboutAsBack.png'
import Button from "../../../Generic/Button";

const AboutUs = () => {
    return(
        <Container>
            <Container.Inset>
                <Container.Title>О КОМПАНИИ</Container.Title>
                <Container.Section>
                    <Container.SectionInset>
                        <Container.SectionLeft>
                            <img src={imgBack} alt={''} />
                        </Container.SectionLeft>
                        <Container.SectionRight>
                            <Container.SectionDesc>
                                Группа компаний MEDOL создавалась высококвалифицированными специалистами в сфере медицины, инженерии и экономики, за плечами которых значительный опыт на рынке высоких медицинских технологий, которая имеет свои представительства в разных уголках Земли. В 2011 году MEDOL зарегистрировал в Узбекистане ИП ООО “Medical Online Services". Цель компании построить прозрачный долгосрочный бизнес, принести пользу обществу путем развития и внедрения передовых технологий в систему здравоохранения Республики Узбекистан.
                            </Container.SectionDesc>
                            <Button margin={'20px 0'}>Узнать больше</Button>
                        </Container.SectionRight>
                    </Container.SectionInset>
                </Container.Section>
            </Container.Inset>
        </Container>
    )
}

export default AboutUs