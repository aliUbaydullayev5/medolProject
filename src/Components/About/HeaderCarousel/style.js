import styled from 'styled-components'
import backImg from '../../../Assets/png/backImg.png'
import { Carousel } from 'antd';

const changeType = (type) => {
    switch (type){
        case 'title':
            return {
                'font-weight': '500',
                'font-size': '50px',
                'line-height': '59px',
                'letter-spacing': '0.09em',
                'color': '#0D4C93',
            }
        default:
            return{
                'font-weight': '400',
                'font-size': '20px',
                'line-height': '30px',
                'letter-spacing': '0.03em',
                'color': '#363535',
            }
    }
}

const changeTypeForMobile = (type) => {
    switch (type){
        case 'title':
            return {
                'font-weight': '500',
                'font-size': '40px',
                'line-height': '40px',
                'letter-spacing': '0.09em',
                'color': '#0D4C93',
            }
        default:
            return{
                'font-weight': '400',
                'font-size': '16px',
                'line-height': '20px',
                'letter-spacing': '0.03em',
                'color': '#363535',
            }
    }
}

const Container = styled.div`
  padding: var(--topPadding) var(--mainPadding) 0 var(--mainPadding);
  background-image: url(${backImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width: 500px){
    height: 700px;
  }
;
`
const CarouselBlock = styled(Carousel)`
  max-width: var(--mainWidth) !important;
  margin: auto;
  @media screen and (max-width: 500px){
    height: 500px;
  }
`

CarouselBlock.Sections = styled.div`
  height: 560px;
  display: grid !important;
  grid-template-columns: 1fr 1fr !important;
  @media screen and (max-width: 500px){
    height: 560px;
    grid-template-columns: 1fr!important;
  }
`

CarouselBlock.Left = styled.div`
  padding-top: 40px;
  @media screen and (max-width: 500px){
    padding: 0 10px;
  }

`
CarouselBlock.Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  >img{
    width: 100%;
  }
  @media screen and (max-width: 500px){
    display: none;
  }
`

const Text = styled.div`
  ${({type})=> changeType(type)}
  margin: ${({margin})=> margin && margin};
  width: ${({width})=> width && width};
  @media screen and (max-width: 500px){
    ${({type})=> changeTypeForMobile(type)}
  }
`

export {Container, CarouselBlock, Text}