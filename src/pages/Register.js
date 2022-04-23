import { Link } from "react-router-dom";

export default function Register(){
    return (
        <form className="form">
            <input type="text" placeholder="Name" required/>
            <input type="email" placeholder="Email Id" required/>
            <input type="numeric" minLength={10} maxLength={10} placeholder="Mobile No." required/>
            <input type="text" placeholder="Paypal Id" required/>
            <input type="text" placeholder="Username" required/>
            <input type="password" placeholder="Password" required/>
            <button>Register</button>
            <Link to="/SignIn">Sign In</Link>
        </form>
    )
}