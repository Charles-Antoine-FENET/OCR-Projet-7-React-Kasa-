import Card from '../../molecules/Card'
import { CardsContainer } from '../../atoms'
import dataFromApi from '../../../datas/logements.json'

function HomeGallery() {
  return (
    <CardsContainer>
      {dataFromApi.map((i) => (
        <Card
          key={i.id}
          title={i.title}
          image={i.cover}
        />
      ))}
    </CardsContainer>
  )
}

export default HomeGallery
