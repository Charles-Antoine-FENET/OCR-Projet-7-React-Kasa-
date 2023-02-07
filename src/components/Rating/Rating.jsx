import fullStar from '../../assets/img/fullStar.png'
import star from '../../assets/img/star.png'

function Rating({rating}) {
    // Récupérer la valeur de rating et la passer en nombre
    // Afficher les 5 étoiles grises
    //Tant que rating est inférieur a 5 alors afficher fullStar sinon afficher star
    const rate = []
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
          rate.push(<img src={fullStar} alt="Etoile pleine" key={i} />)
        } else {
          rate.push(<img src={star} alt="Etoile vide" key={i} />)
        }
      }
    return <div>{rate}</div>
  }

export default Rating
