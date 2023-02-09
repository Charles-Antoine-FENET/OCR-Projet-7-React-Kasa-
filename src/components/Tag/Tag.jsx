import styles from '../../components/Tag/Tag.module.scss'

function Tag({ title }) {
  return <h2 className={styles.accommodationTag}>{title}</h2>
}

export default Tag
