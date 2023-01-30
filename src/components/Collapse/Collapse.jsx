import styles from './Collapse.module.scss'
// import kasaTexts from '../../components/atoms/texts'
import { useState } from 'react'
import arrowUp from '../../assets/img/arrowUp.png'
import arrowDown from '../../assets/img/arrowDown.png'

function Collapse() {
  const [isOpen, setIsOpen] = useState(true)

  return isOpen ? (
    <div className={styles.collapseContainer}>
      <h2>voici mon titre de collapse</h2>
      <img
        onClick={() => setIsOpen(false)}
        src={arrowDown}
        alt="cliquez pour ouvrir en savoir plus"
      />
    </div>
  ) : (
    <>
      <div className={styles.collapseContainer}>
        <h2>voici mon titre de collapse</h2>
        <img
          onClick={() => setIsOpen(true)}
          src={arrowUp}
          alt="cliquez pour fermer"
        />
      </div>
      <div className={styles.collapseDetails}>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
          iure accusamus obcaecati, minus omnis sit nisi? Consequatur labore
        </p>
      </div>
    </>
  )
}

export default Collapse
