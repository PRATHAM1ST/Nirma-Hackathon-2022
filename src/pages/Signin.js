import { Link } from "react-router-dom";
import Header from "../elements/Header";

export default function Signin(){
    return (
        <>
            <Header home={false} />
            <form className="form">
                <input type="text" placeholder="Username" required/>
                <input type="password" placeholder="Password" required/>
                <button>Sign In</button>
                <Link to="/Register">Register</Link>
            </form>
        </>
    )
}