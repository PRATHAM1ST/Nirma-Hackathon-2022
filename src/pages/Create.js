import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../elements/Header";

export default function Register(){
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [eth, setEth] = useState(1);
    const [description, setDescription] = useState('');
    return (
        <>
            <Header home={false} />
            <form className="form">
                <input 
                    type="text" 
                    placeholder="Title" 
                    value={title} 
                    onChange={(e)=> setTitle(e.target.value)} 
                    required/>
                <input 
                    type="date" 
                    placeholder="Deadline" 
                    value={date} 
                    onChange={(e)=> setDate(e.target.value)} 
                    required/>

                <label>
                    Eth: <input type="number" placeholder="Goal to achive" min={1} value={eth} 
                    onChange={(e)=> setEth(e.target.value)} required/>
                </label>
                <textarea type="text" placeholder="Description" rows={6} value={description} 
                    onChange={(e)=> setDescription(e.target.innerText)}></textarea>     
                {/* <input type="file" multiple accept="image/jpg,image/png" id="fileToUpload" required/>  */}
                <Link to="/"type="submit">
                    <button>Upload</button>
                </Link>
            </form>
        </>
    )
}