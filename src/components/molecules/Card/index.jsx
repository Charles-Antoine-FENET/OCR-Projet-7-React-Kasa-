import { Link } from 'react-router-dom'
import { AccommodationCard, CardImage, CardTitle } from '../../atoms'


function Card({ title, image }) {
  return (
    <Link to="/accommodation">
      <AccommodationCard>
        <CardImage src={image} alt="freelance" />
        <CardTitle>{title}</CardTitle>
      </AccommodationCard>
    </Link>
  )
}

export default Card
