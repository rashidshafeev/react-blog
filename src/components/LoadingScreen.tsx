import styles from './LoadingScreen.module.css'

function LoadingScreen()   {    

    console.log('UserInfo')

    return (
        <div className={styles.loadingWrapper}>
            <div className={styles.spinner}></div>
        </div>
    )
}

export default LoadingScreen