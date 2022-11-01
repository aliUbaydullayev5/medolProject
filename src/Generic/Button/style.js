import styled from 'styled-components'


const Block = styled.button`
  margin: ${({margin})=> margin && margin};
  width: 250px;
  height: 50px;
  background: linear-gradient(90deg, #0D4C93 0%, #00C9C9 100%);
  opacity: 0.9;
  border-radius: 35px;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  color: #FFFFFF;
  cursor: pointer;
  border: 0;
  transition: 0.1s;
  :active{
    transform: scale(1.1);
  }
  @media screen and (max-width: 500px){
    width: 220px;
    height: 50px;
  }
`

export {Block}