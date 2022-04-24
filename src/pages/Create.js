import { Link } from "react-router-dom";
import Header from "../elements/Header";

export default function Register(){
    return (
        <>
            <Header home={false} />
            <form className="form">
                <input type="text" placeholder="Title" required/>
                <input type="" placeholder="" required/>
                <input type="text" placeholder="Paypal Id" required/>
                <input type="text" placeholder="Username" required/>
                <input type="password" placeholder="Password" required/>
                <button>Register</button>
                <Link to="/SignIn">Upload</Link>
            </form>
        </>
    )
}