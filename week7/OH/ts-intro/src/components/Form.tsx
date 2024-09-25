import {useState} from 'react'
import { User } from '../types/User';


function Form() {
    const [user, setUser] = useState<User>({
        username:'',
        email:'',
        password:''
    })

    const changeHandler = (e:any) => {
        console.log(e);
        setUser({...user, [e.target.name]: e.target.value})
    }

    return (
        <form>
            <div>
                <input type="text" placeholder='username...' value={user.username} onChange={changeHandler}/>
            </div>
        </form>
    )
}

export default Form