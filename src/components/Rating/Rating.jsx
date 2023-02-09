import fullStar from '../../assets/img/fullStar.png'
import star from '../../assets/img/star.png'

function Rating({ rating }) {
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
