import { Link } from 'react-router-dom'
import styles from './Card.module.scss'



// This component get the id, the title and the image of the current accommodation
// these params come from "datafromapi" available into the gallery component.
// Link send users to the accommodation page
function Card({ id, title, image }) {
  return (
    <li className={styles.accommodationCard}>
      <Link
        to={`accommodation/${id}`}
        className={styles.styledCardLink}
      >
        <img src={image} alt={`Appartement ${title}`} />
        <h2>{title}</h2>
      </Link>
    </li>
  )
}

export default Card
