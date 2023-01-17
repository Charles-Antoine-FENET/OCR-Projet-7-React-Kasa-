import { Link } from 'react-router-dom'
import styled from 'styled-components'
import LightLogo from '../../assets/logo_secondary.png'

const FooterLogo = styled.img`
  height: 40px;
`
const FooterContainer = styled.footer`
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
`

const CopyrightText = styled.p`
  color: white;
`

function Footer() {
  return (
    <FooterContainer>
      <Link to="/">
        <FooterLogo src={LightLogo} />
      </Link>
      <CopyrightText>© 2020 Kasa. All rights reserved</CopyrightText>
    </FooterContainer>
  )
}

export default Footer
