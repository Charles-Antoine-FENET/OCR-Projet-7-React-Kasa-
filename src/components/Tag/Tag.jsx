import styles from '../../components/Tag/Tag.module.scss'


function Tag({key, title}) {
  return (<h2 key= {key} className={`${styles.accommodationTag} mr-10`}>{title}</h2>)
}

export default Tag
