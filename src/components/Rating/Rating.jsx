import fullStar from '../../assets/img/fullStar.png'
import star from '../../assets/img/star.png'
import styles from './Rating.module.scss'

function Rating({ rating }) {
  const rate = []
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      rate.push(<img className={styles.starsRating} src={fullStar} alt="Etoile pleine" key={i} />)
    } else {
      rate.push(<img className={styles.starsRating} src={star} alt="Etoile vide" key={i} />)
    }
  }
  return <div>{rate}</div>
}

export default Rating
