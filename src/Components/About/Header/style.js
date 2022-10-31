import styled from 'styled-components'
import backImg from '../../../Assets/png/backImg.png'

const Container = styled.div`
  height: 980px;
  width: 100% !important;
  padding: var(--topPadding) var(--mainPadding) 0 var(--mainPadding);
  background-image: url(${backImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

export {Container}