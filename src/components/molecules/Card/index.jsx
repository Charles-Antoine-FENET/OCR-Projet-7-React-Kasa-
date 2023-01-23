import { Link } from 'react-router-dom'
import { AccommodationCard, CardImage, CardTitle } from '../../atoms'


function Card({ image, title }) {
  return (
    <Link to="/accommodation">
      <AccommodationCard>
        <CardImage src={image} alt="Accommodation" />
        <CardTitle>{title}</CardTitle>
      </AccommodationCard>
    </Link>
  )
}

export default Card
