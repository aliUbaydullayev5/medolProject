import styled from 'styled-components'
import imgBack from '../../../Assets/png/servicesBack.png'



const Container = styled.div`
  
`
Container.Inset = styled.div`
  padding: 50px 0 0 0;

`

Container.Title = styled.div`
  font-weight: 500;
  font-size: 40px;
  line-height: 47px;
  color: #0D4C93;
  text-align: center;
  margin: 0 0 60px 0;
  
`

Container.Main = styled.div`
  padding: 78px 0 112px 0;
  background-image: url(${imgBack});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  
`
Container.MainInset = styled.div`
  max-width: var(--mainWidth);
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 90px;
  @media screen and (max-width: 500px){
    grid-template-columns: 1fr;
    padding: 5px;
  }
`

Container.Section = styled.div`
  height: 491px;
  background: #FFFFFF;
  border-radius: 50px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 234px 1fr 110px 1fr;
`
Container.SectionImg = styled.div`
  background-image: url(${({imgUrl}) => imgUrl && imgUrl});
  background-repeat: no-repeat;
  background-size: cover;
`

Container.SectionTitle = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  letter-spacing: 0.065em;
  color: #0D4C93;
  display: flex;
  align-items: center;
  justify-content: center;
`

Container.SectionDesc = styled.div`
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  max-width: 305px;
  margin: auto;

`
Container.SectionButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  >button{
    margin-bottom: -35px;
  }
`

export {Container}