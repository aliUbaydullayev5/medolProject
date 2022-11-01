import styled from 'styled-components'
import backImg from '../../Assets/png/footerBack.png'

const textFunc = (type) => {
    switch (type){
        case 'title':
            return{
                fontWeight: '500',
                fontSize: '26px',
                lineHeight: '28px',
                letterSpacing: '0.04em',
                color: '#595959'
            }
        default:
            return{
                fontWeight: '400',
                fontSize: '16px',
                lineHeight: '19px',
                letterSpacing: '0.025em',
                color: '#5A5A5A'
            }
    }
}



const Container = styled.div`
  width: 100%;
  min-height: 472px;
  background-image: url(${backImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin-top: 130px;
  padding: 0 var(--mainPadding);
`

Container.Inset = styled.div`
  max-width: var(--mainWidth);
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 28px 0;
  @media screen and (max-width: 800px){
    grid-template-columns: 1fr;
  }
  
`
Container.LeftColumn = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
`

Container.RightColumnTop = styled.div`
  display: grid;
  grid-template-columns: 0.7fr 1fr 0.5fr;
  grid-row-gap: 20px;
  @media screen and (max-width: 800px){
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-row-gap: 10px;
  }
`
Container.RightColumnBottom = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1fr;
  @media screen and (max-width: 800px){
    grid-template-columns: 1fr;
  }
`
Container.Text = styled.div`
  ${({type}) => textFunc(type)}
  width: ${({width})=> width ? width : '100%'};
  margin: ${({margin})=> margin ? margin : '0'};
  @media screen and (max-width: 800px){
    p{
      text-align: center;
    }
  }
`
Container.Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  
`

Container.RightColumn = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; 
  @media screen and (max-width: 800px){
    display: block;
    >div{
      margin: 10px 0;
    }
  }
`




export {Container}