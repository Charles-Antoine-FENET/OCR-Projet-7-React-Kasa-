import Rating from '../Rating/Rating'
import styles from './Profil.module.scss'

function Profil({ profilPicture, profilName, rating }) {
  return (
    <section className={styles.profilContainer}>
      <div className={styles.hostContainer}>
        <h2>{profilName}</h2>
        <img src={profilPicture} alt={profilName} />
      </div>
      <div className="rating">
        <Rating rating={rating} />
      </div>
    </section>
  )
}

export default Profil
