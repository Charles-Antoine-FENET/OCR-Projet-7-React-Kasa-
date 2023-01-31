import styles from './Collapse.module.scss'
import { useState } from 'react'
import arrowUp from '../../assets/img/arrowUp.png'
import arrowDown from '../../assets/img/arrowDown.png'

function Collapse({title, details}) {
  const [isClosed, setIsClosed] = useState(true)

  return isClosed ? (
    <li className={`${styles.collapseContainer}`}>
      <div
        className={`${styles.collapseTitle} d-flex flex-row justify-content-space-between align-items-center`}
      >
        <h2>{title}</h2>
        <img
          onClick={() => setIsClosed(false)}
          src={arrowDown}
          alt="cliquez pour ouvrir en savoir plus"
        />
      </div>
    </li>
  ) : (
    <li className={`${styles.collapseContainer}`}>
      <div
        className={`${styles.collapseTitle} d-flex flex-row justify-content-space-between align-items-center`}
      >
        <h2>{title}</h2>
        <img
          onClick={() => setIsClosed(true)}
          src={arrowUp}
          alt="cliquez pour fermer"
        />
      </div>
      <div className={styles.collapseDetails}>
        <p>
          {details}
        </p>
      </div>
    </li>
  )
}

export default Collapse
