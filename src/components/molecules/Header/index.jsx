import { Link } from 'react-router-dom'
import kasaTexts from '../../atoms/texts'
import {
  HeaderContainer,
  LogoPrimary,
  NavContainer,
  StyledLink,
} from '../../atoms'
import LogoHeader from '../../../assets/logo_primary.png'

function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <LogoPrimary src={LogoHeader} />
      </Link>
      <NavContainer>
        <StyledLink to="/">{kasaTexts.navHome}</StyledLink>
        <StyledLink to="/about">{kasaTexts.navAbout}</StyledLink>
      </NavContainer>
    </HeaderContainer>
  )
}

export default Header
