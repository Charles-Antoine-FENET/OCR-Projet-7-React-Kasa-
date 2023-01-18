import AboutBannerIllustration from '../../assets/AboutBanner.jpg'
import styled from 'styled-components'

const BannerContainer = styled.div`
  border-radius: 25px;
  height: 223px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${AboutBannerIllustration});
  background-size: cover;
`

function AboutBanner() {
  return <BannerContainer />
}

export default AboutBanner
