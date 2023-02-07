import styles from './Collapse.module.scss'
import { useState } from 'react'
import ArrowUpDown from '../Arrows/ArrowUpDown'

function Collapse({ title, details }) {
  const [isClosed, setIsClosed] = useState(true)

  return (
    <li className={styles.collapseContainer}>
      <div className={styles.collapseTitle}>
        <h2>{title}</h2>
        <ArrowUpDown isClosed={isClosed} onClick={() => setIsClosed(!isClosed)} />
      </div>
      {!isClosed && <div className={styles.collapseDetails}>{details}</div>}
    </li>
  )
}

export default Collapse
