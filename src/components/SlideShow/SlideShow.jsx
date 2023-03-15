import styles from './SlideShow.module.scss'
import arrowLeft from '../../assets/img/arrowLeft.png'
import arrowRight from '../../assets/img/arrowRight.png'
import dataFromApi from '../../datas/logements.json'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import Counter from './Counter'

function SlideShow() {
  // get the accommodation id
  let { id } = useParams()

  // get data about this accommodation
  let accommodationData = dataFromApi.find(
    (accommodation) => accommodation.id === id
  )

  // Init the sate 
  const [accommodationPictureIndex, setAccommodationPictureIndex] = useState(0)
  const arrayPictures = accommodationData.pictures

  if (arrayPictures.length > 1) {
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
          className={styles.accommodationArrowRight}
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
  } else{
    return (
      <div
        className={styles.container}
        style={{
          backgroundImage: `url(${accommodationData.pictures[accommodationPictureIndex]})`,
        }}
      >
        
      </div>
    )
  }
}

export default SlideShow
