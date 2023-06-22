import { Container } from "react-bootstrap"
import NavBar from "../components/NavBar"
import MainLayout from "../layout/MainLayout"


function ErrorPage() {
    return (
        <div>
            <NavBar/>
            <MainLayout>
                <Container>
                    Кажется, такой страницы не существует или произошла другая ошибка.
                </Container>
                
            </MainLayout>
        </div>
    )
}

export default ErrorPage