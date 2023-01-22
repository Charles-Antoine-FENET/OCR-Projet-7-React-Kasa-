
import {HomeBannerContainer, HomeTitle} from '../../atoms'

function HomeBanner({ text }) {
  return (
    <HomeBannerContainer>
      <HomeTitle>{text}</HomeTitle>
    </HomeBannerContainer>
  )
}

export default HomeBanner
