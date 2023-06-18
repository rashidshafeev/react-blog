import { useParams } from "react-router-dom"

function UserPage() {
    const params = useParams()

    return (
        <>
            <h1>User</h1>
            <h2>{params.userId}</h2>
        </>
    )
}

export default UserPage