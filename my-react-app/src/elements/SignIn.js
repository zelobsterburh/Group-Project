import './SignIn.css';
import { Link } from 'react-router-dom';
function SignIn() {
    return(
        <div className = 'loginform'>
            <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required/>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required/>
        
    <Link className = 'button'
         to='/SecondPage'
        >
        Sign In
    </Link>
        </div>
    )
}
export default SignIn;
