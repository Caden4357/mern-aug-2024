import { User } from "../types/User"



function Nav({username}:User) {
    return (
        <div>
            <h2>Hello {username}</h2>
        </div>
    )
}

export default Nav