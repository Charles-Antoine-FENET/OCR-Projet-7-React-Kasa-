import Card from '../Card/Card'
import dataFromApi from '../../datas/logements.json'
import styles from './Gallery.module.scss'

function HomeGallery() {
  return (
    <ul
      className={`${styles.cardsContainer} d-flex flex-wrap align-items-center justify-content-space-around`}
    >
      {dataFromApi.map((i) => (
        <Card key={i.id} title={i.title} image={i.cover} />
      ))}
    </ul>
  )
}

export default HomeGallery
