import styled from 'styled-components'
import HomeBanner from '../../components/Banners/HomeBanner.jsx'

const HomeWrapper = styled.main`
height: 100vh;
padding: 30px;

`

const HomeContainer = styled.div`
`




function Home() {
  return (
    <HomeWrapper>
      <HomeContainer>
        <HomeBanner/>
      </HomeContainer>
    </HomeWrapper>
  )
}

export default Home