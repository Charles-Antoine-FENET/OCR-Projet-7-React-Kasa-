import { Link } from 'react-router-dom'
import FooterLogo from '../../assets/img/logo_secondary.png'
import kasaTexts from '../atoms/texts'
import styles from './Footer.module.scss'

function Footer() {
  return (
    <footer className={`${styles.footerContainer} d-flex flex-column align-items-center `}>
      <Link to="/">
        <img src={FooterLogo} alt={kasaTexts.logoAlt} />
      </Link>
      <p>{kasaTexts.copyrightTxt}</p>
    </footer>
  )
}

export default Footer