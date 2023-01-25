import { Link } from 'react-router-dom'
import FooterLogo from '../../../assets/img/logo_secondary.png'
import { FooterContainer, LogoPrimary, CopyrightText } from '../../atoms/index'
import kasaTexts from '../../atoms/texts'

function Footer() {
  return (
    <FooterContainer>
      <Link to="/">
        <LogoPrimary src={FooterLogo} />
      </Link>
      <CopyrightText>{kasaTexts.copyrightTxt}</CopyrightText>
    </FooterContainer>
  )
}

export default Footer
