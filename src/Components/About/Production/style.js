import styled from 'styled-components'

const Container = styled.div`
  padding: 0 var(--mainPadding);
  padding-top: 55px;
`

Container.Inset = styled.div`
  max-width: var(--mainWidth);
  margin: auto;
`
Container.InsetTitle = styled.div`
  text-align: center;
  font-weight: 500;
  font-size: 40px;
  line-height: 47px;
  color: #0D4C93;
`

const Products = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 60px;
  padding: 62px 0 0 0;
  margin-bottom: 50px;
  @media screen and (max-width: 500px){
    grid-template-columns: 1fr;
    padding: 62px 6px 0 6px;
  }
`
Products.Block = styled.div`
  height: 439px;
  background: linear-gradient(180deg, #F8F8F8 0%, rgba(248, 248, 248, 0) 100%);
  opacity: 0.9;
  border-radius: 35px;
  padding: 22px 0 42px 0;
  display: grid;
  grid-template-rows: 220px 1fr 1fr;
  >div{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img{
    width: 220px;
  }
  @media screen and (max-width: 500px){
    padding: 22px 4px 42px 4px;
  }
`
Products.Title = styled.div`
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  letter-spacing: 0.105em;
  color: #000000;
  display: flex;
  justify-content: center;
`
Products.BottomLink = styled.div`
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  color: #0D4C93;
  text-align: center;
  >span{
    font-size: 28px;
  }
  cursor: pointer;
`

export {Container, Products}