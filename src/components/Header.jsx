import { Link } from 'react-router-dom'
import LogoHeader from '../assets/img/logo_primary.png'
import NavContainer from './NavContainer'
import styles from './Header.module.scss'

export default function Header() {
  return (
    <header className={`${styles.headerContainer} d-flex flex-row align-items-center`}>
      <Link to="/">
        <img src={LogoHeader} alt="" />
      </Link>
      <NavContainer />
    </header>
  )
}
