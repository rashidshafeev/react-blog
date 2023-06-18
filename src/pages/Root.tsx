import { Outlet} from 'react-router-dom'
import NavBar from '../components/NavBar';
import MainLayout from '../layout/MainLayout';



function RootLayout() {
    

    return (
        <div className="App">
            <NavBar/>
            <MainLayout>
                <Outlet />
            </MainLayout>
        </div>
    )
}

export default RootLayout