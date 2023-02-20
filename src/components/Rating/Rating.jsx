import fullStar from '../../assets/img/fullStar.png'
import star from '../../assets/img/star.png'
import styles from './Rating.module.scss'
import { useState, useEffect } from 'react'


function Rating({ rating }) {
  const [rate, setRate]=useState([]);
  
  useEffect(() => {
    const newRate = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        newRate.push(<img className={styles.starsRating} src={fullStar} alt="Etoile pleine" key={i} />);
      } else {
        newRate.push(<img className={styles.starsRating} src={star} alt="Etoile vide" key={i} />);
      }
    }
    setRate(newRate);
  }, [rating]);
  
  return <div>{rate}</div>;
}

export default Rating


