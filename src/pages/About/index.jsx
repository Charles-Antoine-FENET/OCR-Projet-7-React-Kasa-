import Banner from '../../components/Banner/Banner'
import Collapse from '../../components/Collapse/Collapse'
import kasaTexts from '../../datas/texts'
import aboutBannerImg from '../../assets/img/aboutBanner.jpg'

function About() {
  return (
    <main className="wrapper fullScreen">
      <Banner title={''} image={aboutBannerImg} />
      <ul>
        {kasaTexts.collapsesTexts.map((i) => (
          <Collapse key={i.id} title={i.title} details={i.details} />
        ))}
      </ul>
    </main>
  )
}

export default About
