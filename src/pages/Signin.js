import { Link } from "react-router-dom";

export default function Signin(){
    return (
        <form className="form">
            <input type="text" placeholder="Username" required/>
            <input type="password" placeholder="Password" required/>
            <button>Sign In</button>
            <Link to="/Register">Register</Link>
        </form>
    )
}