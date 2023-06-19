import { BlogUser } from '../store/users'

type UserInfoProps = {
    user: BlogUser,
}

function UserInfo({user} : UserInfoProps)   {    

    console.log('UserInfo')

    return (
        <div className='user-info_wrapper'>
            {user.name}
            {user.id}
        </div>

    )
}

export default UserInfo