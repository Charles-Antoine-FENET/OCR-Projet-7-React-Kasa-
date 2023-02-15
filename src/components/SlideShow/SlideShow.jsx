import styles from './SlideShow.module.scss'
import arrowLeft from '../../assets/img/arrowLeft.png'
import arrowRight from '../../assets/img/arrowRight.png'
import dataFromApi from '../../datas/logements.json'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import Counter from './Counter'

function SlideShow() {
  // recupération de min id d'appartement
  let { id } = useParams()

  // recupération des informations concernant cet apparatement
  let accommodationData = dataFromApi.find(
    (accommodation) => accommodation.id === id
  )

  // Mettre un etat sur mon backgroundimage ou un index
  const [accommodationPictureIndex, setAccommodationPictureIndex] = useState(0)
  const arrayPictures = accommodationData.pictures

  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url(${accommodationData.pictures[accommodationPictureIndex]})`,
      }}
    >
      <Counter
        index={accommodationPictureIndex + 1}
        total={arrayPictures.length}
      />
      
      <img
        className={styles.accommodationArrowLeft}
        onClick={() => {
          if (accommodationPictureIndex > 0) {
            setAccommodationPictureIndex(accommodationPictureIndex - 1)
          }
        }}
        src={arrowLeft}
        alt="flèche de gauche"
      />

      <img
        className={`${styles.accommodationArrowRight}`}
        onClick={() => {
          if (
            accommodationPictureIndex <
            accommodationData.pictures.length - 1
          ) {
            setAccommodationPictureIndex(accommodationPictureIndex + 1)
          }
        }}
        src={arrowRight}
        alt="flèche de Droite"
      />
    </div>
  )
}

export default SlideShow
