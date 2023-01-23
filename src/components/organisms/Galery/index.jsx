import Card from '../../molecules/Card'
import { CardsContainer } from '../../atoms'

const dataFromApi= [{id:1,image: "IMAGE",title: "Mon titre test"}, {id:2,image: "IMAGE 2",title: "Mon titre test 2"}]


function HomeGallery() {
  return (
    <CardsContainer>
      {dataFromApi.map(i => (<Card key={i.id} title={i.title} image={i.image}/>))} 
    </CardsContainer>
  )
}

export default HomeGallery
