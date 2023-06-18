import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getUserFetch, BlogUser } from "../store/users";
import { RootState } from '../store/index';
import { useEffect } from "react";

function UserPage() {
    const params = useParams()
    const dispatch = useDispatch()

    let userId : string
    if (params.userId) {
        userId = params.userId
    }

    useEffect(() => {
        dispatch(getUserFetch(Number(params.userId)))
    }, [])

    
    const user : BlogUser = useSelector((state: RootState) => state.users.users[userId]);
    
    console.log(user)

    return (
        <>
            <h1>User</h1>
            <div>
            {params.userId}
            </div>
            
        </>
    )
}

export default UserPage