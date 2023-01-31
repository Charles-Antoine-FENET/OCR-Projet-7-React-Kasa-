import kasaTexts from '../../datas/texts'
import styles from './Banner.module.scss'

function HomeBanner() {
  return (
    <div className={styles.bannerContainer}>
      <h1>{kasaTexts.HomeHeadingTitle}</h1>
    </div>
  )
}

export default HomeBanner
