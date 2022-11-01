import styled from 'styled-components'


const Container = styled.div`
  padding: 0 var(--mainPadding);
  margin-top: 70px;
  
`
Container.Inset = styled.div`
  max-width: var(--mainWidth);
  margin: auto;
  padding: 0 20px;

`
Container.Column = styled.div`
  height: 290px;
  margin: 0 15px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`
Container.ColumnBlock = styled.div`
  height: 130px;
  background: #FFFFFF;
  border: 1px solid #ECECEC;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`
Container.Title = styled.div`
  font-weight: 500;
  font-size: 40px;
  line-height: 47px;
  color: #0D4C93;
  text-align: center;
  margin: 30px 0;
`

export {Container}