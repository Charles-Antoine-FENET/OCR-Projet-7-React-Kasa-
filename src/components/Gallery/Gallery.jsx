import Card from '../Card/Card'
import dataFromApi from '../../datas/logements.json'
import styles from './Gallery.module.scss'


function HomeGallery() {
  return (
    <ul
      className={styles.cardsContainer}
    >
      {dataFromApi.map((i) => (
        <Card id={i.id} key={i.id} title={i.title} image={i.cover} />
      ))}
    </ul>
  )
}

export default HomeGallery
