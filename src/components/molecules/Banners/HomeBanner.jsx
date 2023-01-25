import { HomeBannerContainer, HomeTitle } from '../../atoms'
import kasaTexts from '../../atoms/texts'

function HomeBanner() {
  return (
    <HomeBannerContainer>
      <HomeTitle>{kasaTexts.HomeHeadingTitle}</HomeTitle>
    </HomeBannerContainer>
  )
}

export default HomeBanner
