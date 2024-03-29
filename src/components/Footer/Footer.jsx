import { Link } from 'react-router-dom'
import FooterLogo from '../../assets/img/logo_secondary.png'
import kasaTexts from '../../datas/texts'
import styles from './Footer.module.scss'

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <Link to="/">
        <img src={FooterLogo} alt={kasaTexts.logoAlt} />
      </Link>
      <p>{kasaTexts.copyrightTxt}</p>
    </footer>
  )
}

export default Footer