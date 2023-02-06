import styles from './SlideShow.module.scss'
import arrowLeft from '../../assets/img/arrowLeft.png'
import arrowRight from '../../assets/img/arrowRight.png'
import dataFromApi from '../../datas/logements.json'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

// Afficher une div avec une image de background set sur l'index 0 du tableau json
// Si index sur 0, afficher la fleche de droite
// Si index sur tableau.lenght afficher la flèche de gauche
// Sinon afficher les deux flècehs

// Onclick fleche de droite>>> afficher l'image de background +1
// Onclick a gauche, afficher l'image de background -1

function SlideShow() {
  // recupération de min id d'appartement
  let { id } = useParams()

  // recupéraztion des informations concernant cet apparatement
  let accommodationData = dataFromApi.find(
    (accommodation) => accommodation.id === id
  )

  // Mettre un etat sur mon backgroundimage ou un index
  const [accommodationPictureIndex, setAccommodationPictureIndex] = useState(0)

  // Si l'index est a 0, ne pas afficher la fleche de gauche
  // Si l'index est inférieur a pictures.lenght, afficher la fleche de droite

  // Si je clique sur la fleche de gauche l'index diminue de 1
  function moveLeft() {
    if (accommodationPictureIndex > 0) {
      setAccommodationPictureIndex(accommodationPictureIndex - 1)
    }
    console.log(accommodationPictureIndex)
  }
  // Si je clique sur la flèche de droite, l'index augmente de 1
  function moveRight() {
    if (accommodationPictureIndex < accommodationData.pictures.length - 1) {
      setAccommodationPictureIndex(accommodationPictureIndex + 1)
    }
  }
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
            onClick={moveLeft}
            src={arrowLeft}
            alt="flèche de gauche"
          />
      )}
      {accommodationPictureIndex < accommodationData.pictures.length - 1 && (
          <img
            className={`${styles.accommodationArrowRight}`}
            onClick={moveRight}
            src={arrowRight}
            alt="flèche de Droite"
          />
      )}
    </div>
  )
}

export default SlideShow
