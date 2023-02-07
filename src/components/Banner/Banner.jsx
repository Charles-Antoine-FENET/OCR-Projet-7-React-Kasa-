import styles from './Banner.module.scss'

function Banner({ title, image }) {
  return (
    <div
      className={styles.bannerContainer}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${image})`,
      }}
    >
      <h1>{title}</h1>
    </div>
  )
}

export default Banner
