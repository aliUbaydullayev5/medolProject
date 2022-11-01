import styled from 'styled-components'

const Container = styled.div`
  padding: 0 var(--mainPadding);
  
`
Container.Inset = styled.div`
  max-width: var(--mainWidth);
  margin: auto;
  position: relative;
  padding: 0 20px;
`
Container.Title = styled.div`
  font-weight: 500;
  font-size: 40px;
  line-height: 47px;
  color: #0D4C93;
  text-align: center;
  margin-bottom: 50px;
  
`

Container.Column = styled.div`
  height: 530px;
  margin: 0 30px;
  position: relative;
  padding: 10px 30px;

`

Container.ShaydovBlock = styled.div`
  height: 420px;
  width: 100%;
  background: linear-gradient(180deg, #F8F8F8 0%, rgba(255, 255, 255, 0) 100%);
  opacity: 0.9;
  border: 2px solid #F7F7F7;
  border-radius: 35px;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -1 !important;

`
Container.ColumnInset = styled.div`
  >img{
    border-radius: 40px;
    width: 100%;
  }

`

Container.ColumnTitle = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #0D4C93;
  margin: 23px 0;

`
Container.ColumnData = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  color: #0D4C93;

`
Container.ColumnDesc = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #000000;

`
Container.Bottom = styled.div`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 300px;
  @media screen and (max-width: 500px){
    gap: 15px;     
  }

`
Container.BottomTitle = styled.div`
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  color: ${({strong})=> strong ? '#0D4C93' : '#00C9C9'};
  cursor: pointer;
  >span{
    font-weight: 700;
  }
`

export {Container}