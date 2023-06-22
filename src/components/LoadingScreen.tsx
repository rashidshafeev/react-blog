import { Spinner } from 'react-bootstrap'
import styles from './LoadingScreen.module.css'

function LoadingScreen()   {    

    console.log('UserInfo')

    return (
        <div className={styles.loadingWrapper}>
            <Spinner animation="border" role="status">

</Spinner>
        </div>
    )
}

export default LoadingScreen