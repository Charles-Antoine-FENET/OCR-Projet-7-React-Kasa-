import styles from '../SlideShow/Counter.module.scss'

// Un composant qui est une div et qui recoit l'index de la photo et qui va l'afficher dans un p
// Creer le composant Counter
// Lui passer la props {index} et lui passer la taille du tableau photo
// creer une div qui va recevoir un P
// afficher {index}/{tableauPhoto.lenght}

function Counter({index, total}){
    if (total > 1)
    return <div className={styles.counter}><p>{index}/{total}</p></div>
}

export default Counter