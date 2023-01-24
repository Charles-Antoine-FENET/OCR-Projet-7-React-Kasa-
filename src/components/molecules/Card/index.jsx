import { AccommodationCard, CardImage, CardTitle, StyledCardLink} from '../../atoms'

function Card({ title, image }) {
  return (
    <AccommodationCard>
      <StyledCardLink to="/accommodation">
        <CardImage src={image} alt="freelance" />
        <CardTitle>{title}</CardTitle>
      </StyledCardLink>
    </AccommodationCard>
  )
}

export default Card
