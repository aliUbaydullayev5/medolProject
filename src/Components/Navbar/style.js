import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
import { push as Menu } from 'react-burger-menu'

const Main = styled.div`
  margin: 0 auto !important;
  height: 200px;
  width: 100% !important;
  display: flex;
  justify-content: center;
  position: absolute;
  padding: 0 var(--mainPadding);
  z-index: 9999;
  img{
    margin: 0;
    padding: 0;
  }
  @media screen and (max-width: 500px){
    display: block;
    width: 100% !important;
  }
`

const Container = styled.div`
  max-width: var(--mainWidth);
  height: 200px;
  display: grid;
`


Container.Top = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1.4fr 0.6fr;
  @media screen and (max-width: 500px){
    width: 100% !important;
    grid-template-columns: 1fr 1fr 1fr 1fr !important;
    grid-template-rows: 1fr 1fr !important;
  }

`
const Column = styled.div`
  display: flex;
  justify-content: ${({between})=> between ? 'space-around' : 'center'};
  align-items: center;
  gap: 5px; 
  padding: ${({padding})=> padding ? padding : '0'};
  @media screen and (max-width: 500px){
    padding: 0px !important;
    gap: 3px !important;
    grid-row: ${({row})=> row && row};
    grid-column: ${({column})=> column && column};
  }
`
const Round = styled.div`
  height: 50px;
  width: ${({width})=> width ? width : '50px'};
  border-radius: 250px;
  background-color: rgb(255, 255, 255);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  gap: 5px;
  @media screen and (max-width: 1100px){
    width: 50px !important;
    p{
      display: none;
    }
  }
  >p{
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    color: #0D4C93;
    margin-top: 10px;
  }
  span{
    font-weight: 600;
  }
  
`
const Text = styled.div`
  width: 168px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.025em;
  color: #5A5A5A;
  @media screen and (max-width: 1100px){
    display: none;
  }
`

Container.Bottom = styled.div`
  height: 70px;
  opacity: 0.9;
  border-radius: 35px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 3px;
  .active{
    color: #00C9C9 !important;
  }
  @media screen and (max-width: 500px){
    display: none;
  }
  
`

Container.BottomRound = styled(NavLink)`
  background-color: rgb(245, 245, 245);
  ${({right}) => right && {
    borderBottomRightRadius: '250px',
    borderTopRightRadius: '250px',
  }}
  ${({left}) => left && {
    borderBottomLeftRadius: '250px',
    borderTopLeftRadius: '250px',
  }}
  color: #0D4C93 !important;
  display: flex;
  justify-content: center;
  align-items: center;
`
Container.BottomText = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;

`

const MenuHamburger = styled.div`
  display: none;
  @media screen and (max-width: 500px){
    display: block;
    display: flex;
    justify-content: end;
    padding-right: 5px;
  }
  #react-burger-menu-btn{
    display: none !important;
  }
  img{
    width: 40px !important;
  }
`
MenuHamburger.Inset = styled(Menu)`
  position: absolute;
  z-index: 99999;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.36);
  display: none;
  @media screen and (max-width: 500px){
    display: block;
  }
  .active{
    color: #00C9C9 !important;
  }
`

Container.HamburgetLink = styled(NavLink)`
  background-color: rgb(0, 0, 0);
  width: 90%;
  margin: 6px auto;
  color: #ffffff !important;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 10px;
  font-size: 20px;
  border-radius: 5px;
`
Container.BottomText = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;

`

export {Container, Column, Main, Round, Text, MenuHamburger}