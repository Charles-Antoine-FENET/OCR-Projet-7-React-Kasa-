import { Link } from 'react-router-dom'
import LogoHeader from '../../assets/img/logo_primary.png'
import NavContainer from './NavContainer'
import styles from './Header.module.scss'

export default function Header() {
  return (
    <header className={`${styles.headerContainer} wrapper`}>
      <Link to="/">
        <img src={LogoHeader} alt="Logo Kasa" />
      </Link>
      <NavContainer />
    </header>
  )
}
