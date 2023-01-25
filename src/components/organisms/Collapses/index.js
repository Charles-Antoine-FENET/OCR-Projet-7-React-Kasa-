import { Collapse } from '../../atoms'
import { collapseAboutTexts } from '../../atoms/texts'

function AboutCollapses() {
  return (
    <main>
      {collapseAboutTexts.map((i) => <Collapse>{i}</Collapse>)}
    </main>
  )
}

export default AboutCollapses
