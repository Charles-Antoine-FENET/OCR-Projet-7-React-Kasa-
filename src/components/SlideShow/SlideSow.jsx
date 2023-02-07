import styles from './SlideShow.module.scss'
import arrowLeft from '../../assets/img/arrowLeft.png'
import arrowRight from '../../assets/img/arrowRight.png'
import dataFromApi from '../../datas/logements.json'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

function SlideShow() {
  // recupération de min id d'appartement
  let { id } = useParams()

  // recupéraztion des informations concernant cet apparatement
  let accommodationData = dataFromApi.find(
    (accommodation) => accommodation.id === id
  )

  // Mettre un etat sur mon backgroundimage ou un index
  const [accommodationPictureIndex, setAccommodationPictureIndex] = useState(0)

  return (
    <div
      className={`${styles.container} d-flex justify-content-center align-items-center`}
      style={{
        backgroundImage: `url(${accommodationData.pictures[accommodationPictureIndex]})`,
      }}
    >
      {accommodationPictureIndex > 0 && (
        <img
          className={`${styles.accommodationArrowLeft}`}
          onClick={() => {
            if (accommodationPictureIndex > 0) {
              setAccommodationPictureIndex(accommodationPictureIndex - 1)
            }
          }}
          src={arrowLeft}
          alt="flèche de gauche"
        />
      )}
      {accommodationPictureIndex < accommodationData.pictures.length - 1 && (
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
      )}
    </div>
  )
}

export default SlideShow
