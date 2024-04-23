import   {useState,useContext} from 'react'
import UserContext from '../../context/userContext'


function LoginTC() {
    const[username, setUsername]=useState("")
    const[password, setpassword]=useState("")

    const {setUser}=useContext(UserContext)

    const handleSubmit=(event)=>{
        event.preventDefault()
        setUser({username,password})
          
    }
  return (
    <div>
        <h2>Login</h2>
        <input type='text' placeholder='username' value={username} onChange={(event)=>{setUsername(event.target.value)}}/>
        <input type="text" placeholder='password' value={password} onChange={(event)=>{setpassword(event.target.value)}}/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default LoginTC