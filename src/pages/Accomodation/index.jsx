import SlideShow from '../../components/SlideShow/SlideSow'
import Tag from '../../components/Tag/Tag'
import { useParams } from 'react-router-dom';

// Faire une recherche d'id
// l'id permet ensuite de recupérer toutes les informations et les injecter dans la page
// Mettre ici mon itération permettant de creer les tag en fonction de la page produit
// Récuperer l'id de l'appartement en question
// Avec l'id je vais récupérer les tags relatifs a cet id en utilisant un .map


// // Ici j'ai besoin de faire un find de id sur mon fichier Json qui va récupérer les informations suivantes:
//  -Titre 
//  -Sous titre ou localisation
//  - itération via un map pour récupérer les tags
//  - Récupérer un composant "Profils"
//  - Récupérer un composant "Ranking"
//  - Récupérer les Collapses




/**
 * This function use a template to creat the accommodation page 
 * To know more about how to get the id from the url please read this documentation : https://reactrouter.com/en/main/hooks/use-params
 */

function Accommodation() {
  let { id } = useParams();
  console.log('coucou')
  return (
    <main key= {id}>
      <h1>voici la page de l'appartement {id}</h1>
      <SlideShow />
      <Tag />
    </main>
  )
}

export default Accommodation
