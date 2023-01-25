import { Link } from 'react-router-dom'
import {kasaTexts} from '../../atoms/texts'
import {
  HeaderContainer,
  LogoPrimary,
  NavContainer,
  StyledNavLink,
} from '../../atoms'
import LogoHeader from '../../../assets/img/logo_primary.png'

function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <LogoPrimary src={LogoHeader} />
      </Link>
      <NavContainer>
        <StyledNavLink
          to="/"
        >
          {kasaTexts.navHome}
        </StyledNavLink>
        <StyledNavLink
          to="/about"
        >
          {kasaTexts.navAbout}
        </StyledNavLink>
      </NavContainer>
    </HeaderContainer>
  )
}

export default Header
