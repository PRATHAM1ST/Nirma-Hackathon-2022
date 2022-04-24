import Program from "../elements/Program";
import Header from "../elements/Header";
import { useEffect, useState } from "react";
import {getOrg} from "../Firebase";

export default function Home(){
    const [data, setData] = useState('');
    useEffect(()=>{
        async function fetchdata(){
            const fbdata = await getOrg();
            setData(fbdata);
        };
        fetchdata();
    }, [])
    return (
        <>
            <Header home={true} />
            <div className="Container">
                {!data &&<h1>Loading...</h1>}
                {data && data.map(d=>{
                    return <Program data={d}/>
                })}
            </div>
        </>
    )
}