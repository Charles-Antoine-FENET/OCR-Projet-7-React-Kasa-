import styles from '../SlideShow/Counter.module.scss'


function Counter({index, total}){
    if (total > 1)
    return <div className={styles.counter}><p>{index}/{total}</p></div>
}

export default Counter