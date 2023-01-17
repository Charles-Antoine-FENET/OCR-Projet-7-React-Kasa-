import HomeBannerIllustration from '../../assets/HomeBanner.jpg'
import styled from 'styled-components'

const BannerContainer = styled.div`
  border-radius: 25px;
  height: 223px;
  display: flex;
  justify-content:center;
  align-items:center;
  background-image: url(${HomeBannerIllustration});
  background-size: cover;
`
const HomeTitle = styled.h1`
  font-size: 48px;
  font-weight: 500;
  color: white;
`

function HomeBanner({text}) {
  return (
    <BannerContainer>
      <HomeTitle>Chez vous, partout ailleurs</HomeTitle>
    </BannerContainer>
  )
}

export default HomeBanner
