import { NavLink } from 'react-router-dom'
import kasaTexts from './atoms/texts'
import styles from './NavContainer.module.scss'

export default function NavContainer() {

  let activeStyle = {textDecoration:"underline"}
  return (
    <nav >
      <NavLink to="/" className={styles.navLinks} style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>{kasaTexts.navHome}</NavLink>
      <NavLink to="/about" className={styles.navLinks}style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>{kasaTexts.navAbout}</NavLink>
    </nav>
  )
}
