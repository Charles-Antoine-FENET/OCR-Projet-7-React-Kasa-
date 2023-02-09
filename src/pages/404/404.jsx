import kasaTexts from '../../datas/texts.js'
import { Link } from 'react-router-dom'
import styles from './404.module.scss'

function Error() {
  return (
    <main className={`${styles.error} wrapper fullScreen`}>
      <h1>{kasaTexts.error.title}</h1>
      <h2>{kasaTexts.error.message}</h2>
      <Link to="/">{kasaTexts.error.fallBack}</Link>
    </main>
  )
}

export default Error
