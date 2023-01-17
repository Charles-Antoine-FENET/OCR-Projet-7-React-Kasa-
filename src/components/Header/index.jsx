import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { StyledLink } from '../../utils/style/Atoms'
import Logo from '../../assets/logo_primary.png'

const HeaderLogo = styled.img`
  height: 40px;
`

const NavContainer = styled.header`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

function Header() {
  return (
    <NavContainer>
      <Link to="/">
        <HeaderLogo src={Logo} />
      </Link>
      <nav>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/about">A Propos</StyledLink>
      </nav>
    </NavContainer>
  )
}

export default Header
