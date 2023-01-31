import {Link} from 'react-router-dom'
import styles from './Card.module.scss'

function Card({ title, image }) {
  return (
    <li className={styles.accommodationCard}>
      <Link to="/accommodation" className={`${styles.styledCardLink} d-flex`}>
        <img src={image} alt="" />
        <h2>{title}</h2>
      </Link>
    </li>
  )
}

export default Card