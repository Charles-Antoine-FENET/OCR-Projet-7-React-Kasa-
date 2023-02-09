import SlideShow from '../../components/SlideShow/SlideSow'
import dataFromApi from '../../datas/logements.json'
import Tag from '../../components/Tag/Tag'
import { useParams } from 'react-router-dom'
import Collapse from '../../components/Collapse/Collapse'
import Profil from '../../components/Profil/Profil'
import styles from './Accommodation.module.scss'

/**
 * This function use a template to creat the accommodation page
 * To know more about how to get the id from the url please read this documentation : https://reactrouter.com/en/main/hooks/use-params
 */

function Accommodation() {
  let { id } = useParams()
  let accommodationData = dataFromApi.find(
    (accommodation) => accommodation.id === id
  )
  const equipementItems = accommodationData?.equipments.map((i, index) => {
    return <li key={`equipment-${index}`}>{i}</li>
  })
  return (
    <main className="wrapper fullScreen">
      <SlideShow />
      <section className={`${styles.locationHostContainer} d-flex justify-content-space-between`}>
        <div className='d-flex flex-column justify-content-space-between'>
          <div>
            <h1>{accommodationData.title}</h1>
            <h2>{accommodationData.location}</h2>
          </div>
          <div className="d-flex ">
            {accommodationData.tags &&
              accommodationData.tags.length > 0 &&
              accommodationData.tags.map((tag, index) => (
                <Tag key={`tag-${index}-${tag}`} title={tag} />
              ))}
          </div>
        </div>

        <Profil
          profilPicture={accommodationData.host.picture}
          profilName={accommodationData.host.name}
          rating={parseFloat(accommodationData.rating)}
        />
      </section>

      <div className={`${styles.detailsAccommodationContainer}`}>
        <Collapse
          title="Description"
          details={<p>{accommodationData.description}</p>}
        />
        <Collapse
          title="Equipements"
          details={
            <ul className={`${styles.equipementsList}`}>{equipementItems}</ul>
          }
        ></Collapse>
      </div>
    </main>
  )
}

export default Accommodation
