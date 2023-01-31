// import Banner from '../../components/molecules/Banners/AboutBanner'
import Collapse from '../../components/Collapse/Collapse'
import kasaTexts from '../../datas/texts'

function About() {
  return (
    <main>
      {kasaTexts.collapsesTexts.map((i) => (
        <Collapse key={i.id} title={i.title} details={i.details} />
      ))}
    </main>
  )
}

export default About
