import Banner from '../../components/Banner/Banner'
import HomeGallery from '../../components/Gallery/Gallery'
import homeBannerImg from '../../assets/img/homeBanner.jpg'
import kasaTexts from '../../datas/texts'

function Home() {
  return (
    <main className="wrapper">
      <Banner title={kasaTexts.HomeHeadingTitle} image={homeBannerImg}/>
      <HomeGallery />
    </main>
  )
}

export default Home
