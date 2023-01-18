import Card from '../../components/Card'
import styled from 'styled-components'
import HomeBanner from '../../components/Banners/HomeBanner.jsx'
import HomeBannerIllustration from '../../assets/HomeBanner.jpg'
import Logo from '../../assets/logo_primary.png'
import colors from '../../utils/style/colors'

const CardsContainer = styled.div`
  display: flex;
  flex-wrap:wrap;
  row-gap: 24px;
  align-items: center;
  justify-content: space-around;
  background-color: ${colors.backgroundLight};
  border-radius: 25px;
  padding: 25px;
  margin : 50px 0px
`

function Home() {
  return (
    <main>
      <HomeBanner
        image={HomeBannerIllustration}
        text="Chez vous, partous et ailleurs"
      />
      <CardsContainer>
        <Card image={Logo} title="Data from API" />
        <Card image={Logo} title="Data from API" />
        <Card image={Logo} title="Data from API" />
        <Card image={Logo} title="Data from API" />
        <Card image={Logo} title="Data from API" />
        <Card image={Logo} title="Data from API" />
      </CardsContainer>
    </main>
  )
}

export default Home
