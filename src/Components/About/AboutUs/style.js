import styled from 'styled-components'

const Container = styled.div`
  margin: 68px 0 102px 0;
  padding: 0 var(--mainPadding);
  
`
Container.Inset = styled.div`
  max-width: var(--mainWidth);
  margin: auto;

`

Container.Title = styled.div`
  font-weight: 500;
  font-size: 40px;
  line-height: 47px;
  color: #0D4C93;
  text-align: center;
  margin-bottom: 52px;
  
`
Container.Section = styled.div`
  
`
Container.SectionInset = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 504px;
  background: linear-gradient(180deg, #F5F5F5 0%, rgba(245, 245, 245, 0) 100%);
  border-radius: 250px 50px 50px 250px;
  @media screen and (max-width: 1000px){
    grid-template-columns: 1fr;
    border-radius: 50px 50px 50px 50px;
    padding: 10px;
  }
`
Container.SectionLeft = styled.div`
  position: relative;
  @media screen and (max-width: 1000px){
    display: none;
  }

    >img{
    position: absolute;
    top: -36px;
    left: -10px;
    width: 574px;
  }
`

Container.SectionRight = styled.div`
  padding-top: 57px;
  padding-left: 30px;
  @media screen and (max-width: 500px){
    padding-left: 0;
  }
`
Container.SectionDesc = styled.div`
  font-weight: 300;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: 0.06em;
  color: #000000;
  max-width: 702px;
  @media screen and (max-width: 500px){
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.04em;
  }
`

export {Container}