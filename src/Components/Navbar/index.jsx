import React, {useState} from 'react'
import {Container, Column, Main, Round, Text, MenuHamburger} from "./style";
import maps from '../../Assets/svg/maps.svg'
import callPhone from '../../Assets/svg/phone-call.svg'
import logo from '../../Assets/svg/logo.svg'
import zoom from '../../Assets/svg/magnifier.svg'
import facebook from '../../Assets/svg/facebook.svg'
import russion from '../../Assets/svg/russion.svg'
import menuIcon from '../../Assets/svg/menu.svg'

const Navbar = () => {

    const [hamburger, setHamburger] = useState(false)

    const styles = {
        bmBurgerButton: {
            position: 'fixed',
            width: '36px',
            height: '30px',
            left: '36px',
            top: '36px',

        },
        bmBurgerBarsHover: {
            background: '#a90000'
        },
        bmCrossButton: {
            height: '40px',
            width: '40px',
            top: '20px',
            right: '15px'
        },
        bmCross: {
            background: '#bdc3c7'
        },
        bmMenuWrap: {
            position: 'fixed',
            height: '100%',
            left: '0',
            top: '140px'
        },
        bmMenu: {
            background: 'rgb(56,56,56)',
            paddingTop: '70px',
            width: '100%'
        },
        bmMorphShape: {
            fill: '#373a47',
        },
        bmItemList: {
            color: '#b8b7ad',
            display: 'flex',
            flexDirection: 'column',
        },
        bmItem: {
            display: 'inline-block'
        },
        bmOverlay: {
            background: 'rgba(0, 0, 0, 0.3)'
        },
    }



    return(
        <Main>
            <Container>
                <Container.Top>
                    <Column>
                        <Round>
                            <img src={maps} alt={''} />
                        </Round>
                        <Text>
                            г.Ташкент, Чиланзар
                            10 квартал, дом 3/1
                        </Text>
                    </Column>
                    <Column>
                        <Round>
                            <img src={callPhone} alt={''}/>
                        </Round>
                        <Text>
                            +998 71 276-62-53
                            +998 71 276-62-54
                        </Text>
                    </Column>
                    <Column column={'1/5'} row={'1/2'}>
                        <img src={logo}  alt={''}/>
                    </Column>
                    <Column between={true} padding={'0 15px'}>
                        <Round>
                            <img src={zoom} alt={''}/>
                        </Round>
                        <Round width={'150px'}>
                            <img src={facebook} alt={''}/>
                            <p>Мы на Facebook</p>
                        </Round>
                    </Column>
                    <Column>
                        <Round width={'150px'}>
                            <img src={russion} alt={''} />
                            <p>Русский <span>V</span></p>
                        </Round>
                    </Column>
                </Container.Top>

                <Container.Bottom>
                    <Container.BottomRound left={'true'} to={'/market'}>МАГАЗИН</Container.BottomRound>
                    <Container.BottomRound to={'/about'}>О КОМПАНИИ</Container.BottomRound>
                    <Container.BottomRound to={'/productions'}>ПРОДУКЦИЯ</Container.BottomRound>
                    <Container.BottomRound to={'/service'}>УСЛУГИ</Container.BottomRound>
                    <Container.BottomRound to={'/news'}>АКЦИИ И НОВОСТИ</Container.BottomRound>
                    <Container.BottomRound right={'true'} to={'/contact'}>ОБРАТНАЯ СВЯЗЬ</Container.BottomRound>
                </Container.Bottom>

                <MenuHamburger>
                    <img src={menuIcon} alt={''} onClick={()=> setHamburger(!hamburger)} />
                    <MenuHamburger.Inset width={'100%'} isOpen={ hamburger } styles={ styles }>
                        <Container.HamburgetLink to={'/market'} onClick={()=> setHamburger(!hamburger)}>МАГАЗИН</Container.HamburgetLink>
                        <Container.HamburgetLink to={'/about'} onClick={()=> setHamburger(!hamburger)}>О КОМПАНИИ</Container.HamburgetLink>
                        <Container.HamburgetLink to={'/productions'} onClick={()=> setHamburger(!hamburger)}>ПРОДУКЦИЯ</Container.HamburgetLink>
                        <Container.HamburgetLink to={'/service'} onClick={()=> setHamburger(!hamburger)}>УСЛУГИ</Container.HamburgetLink>
                        <Container.HamburgetLink to={'/news'} onClick={()=> setHamburger(!hamburger)}>АКЦИИ И НОВОСТИ</Container.HamburgetLink>
                        <Container.HamburgetLink to={'/contact'} onClick={()=> setHamburger(!hamburger)}>ОБРАТНАЯ СВЯЗЬ</Container.HamburgetLink>
                    </MenuHamburger.Inset>
                </MenuHamburger>

            </Container>

        </Main>
    )
}

export default Navbar