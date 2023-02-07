
import Rating from '../Rating/Rating'
import styles from './Profil.module.scss'

function Profil({ profilPicture, profilName, rating }) {
console.log(rating)
  return (
    <div className={`${styles.profilContainer} d-flex flex-column align-items-end`}>
      <div className={`${styles.hostContainer} d-flex align-items-center justify-content-end`}>
        <h2>{profilName}</h2>
        <img src={profilPicture} alt={profilName} />
      </div>
      <div className="rating">
        <Rating rating={rating} />
      </div>
    </div>
  )
}

export default Profil
