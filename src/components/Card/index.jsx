import styled from 'styled-components'
import { Link } from 'react-router-dom'

const CardTitle = styled.span`
  color: black;
  font-size: 22px;
  font-weight: normal;
  align-self: center;
`

const CardImage = styled.img`
  height: 150px;
  width: 150px;
  align-self: center;
`

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 15px;
  background-color: red;
  border-radius: 10px;
  width: 300px;
  height: 300px;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px blue;
  }
`

function Card({image, title}) {
  return (
    <Link to="/accommodation">
    <CardWrapper>
      <CardImage src= {image} alt="freelance" />
      <CardTitle>{title}</CardTitle>
    </CardWrapper>
    </Link>
  )
}


export default Card

