import React from 'react'
import {Container} from "./style";
import imgLocation from '../../Assets/svg/footerIconsLocaton.svg'
import imgCall from '../../Assets/svg/footerIconsCall.svg'
import imgMessage from '../../Assets/svg/footerIconsMessage.svg'
import Button from "../../Generic/Button";
import logo from '../../Assets/svg/logo.svg'

const Footer = () => {
    return(
        <Container>
            <Container.Inset>
                <Container.LeftColumn>
                    <Container.RightColumnTop>
                        <Container.Section>
                            <Container.Text type={'title'}>Контакты</ Container.Text>
                        </Container.Section>
                        <Container.Section>
                            <img src={imgLocation} alt={'Location Icon'}/>
                            <Container.Text>г.Ташкент, Чиланзар
                                10 квартал, дом 3/1</Container.Text>
                        </Container.Section>
                        <Container.Section>
                            <img src={imgCall} alt={'Tell Nomber Icon'}/>
                            <Container.Text>+998 71 276-62-53 <br /> +998 71 276-62-54</Container.Text>
                        </Container.Section>
                        <Container.Section></Container.Section>
                        <Container.Section>
                            <img src={imgMessage} alt={'Message Icon'}/>
                            <Container.Text>info@medol.uz</Container.Text>
                        </Container.Section>
                        <Container.Section>
                            <Button>Оставить заявку</Button>
                        </Container.Section>
                    </Container.RightColumnTop>
                    <Container.RightColumnBottom>
                        <Container.Section>
                            <img src={logo} alt={''} />
                        </Container.Section>
                        <Container.Section>
                            <Container.Text>
                                <p>Наша цель – построить прозрачный, долгосрочный бизнес, приносить огромную пользу населению, путем решения глобальных вопросов. Внедряя инновационные технологии на рынок Узбекистана.</p>
                            </Container.Text>
                        </Container.Section>
                    </Container.RightColumnBottom>
                </Container.LeftColumn>

                <Container.RightColumn>
                    <div>
                        <Container.Text type={'title'} margin={'10px 5px'}>О компании</Container.Text>
                        <Container.Text margin={'0px 5px'}>
                            История
                            Партнеры
                            Вакансии
                        </Container.Text>
                    </div>
                    <div>
                        <Container.Text type={'title'} margin={'10px 5px'}>Продукция</Container.Text>
                        <Container.Text margin={'0px 5px'}>
                            Эндоваскулярная хирургия
                            Аритмология
                            Кардиохирургия
                            Лабораторная диагностика
                            Хирургия
                            Эндоурология
                            Нейрохирургия
                            Анестезиология и реанимация
                            Диабет
                        </Container.Text>
                    </div>
                    <div>
                        <Container.Text type={'title'} margin={'10px 5px'}>Услуги</Container.Text>
                        <Container.Text margin={'0px 5px'}>
                            Сервис
                            Регистрации
                            Услуги логистики
                        </Container.Text>
                    </div>
                </Container.RightColumn>

            </Container.Inset>
        </Container>
    )
}

export default Footer
