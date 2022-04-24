import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../elements/Header";
import { getOrgDoc } from "../Firebase";

export default function Page(){
    const [per, setPer] = useState('');
    const [data, setData] = useState(useParams());
    
    useEffect(()=>{
        async function get(){
            const d = await getOrgDoc(data.id)
            setPer(d.CurrentAmount * 100 / d.GoalAmount);
            setData(d);
        };
        get();
    }, [])

    return(
        <>
            <Header home={false} />
            <div className="container">
                <div className="program">
                    <img className="program-image" src={"https://source.unsplash.com/" + data.Image}></img>
                    <h1 className="fund-title">{data.Title}</h1>
                    <p className="deadline">{data.Deadline}</p>
                    <p className="description">{data.Description}</p>
                    <div className="progress">
                        <div className="money-raised">
                            Raised Eth: {data.CurrentAmount} / {data.GoalAmount}
                        </div>
                        <div className="progess-bar">
                            <div className="progress-bar-percentage" style={{width: per + "%"}}></div>
                        </div>
                    </div>
                </div>
                <div className="payment">
                    <form className="form">
                        <h1>THANK YOU!</h1>
                        <input type="number" placeholder="Amount" required/>
                        <input type="text" placeholder="Description" />
                        <button>
                        <svg width="30" height="30" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M225.4 120.6L137.4 8.59999C136.287 7.16708 134.862 6.00744 133.233 5.2097C131.604 4.41197 129.814 3.99725 128 3.99725C126.186 3.99725 124.396 4.41197 122.767 5.2097C121.137 6.00744 119.712 7.16708 118.6 8.59999L30.5998 120.6C28.8941 122.689 27.9624 125.303 27.9624 128C27.9624 130.697 28.8941 133.311 30.5998 135.4L118.6 247.4C119.712 248.833 121.137 249.993 122.767 250.79C124.396 251.588 126.186 252.003 128 252.003C129.814 252.003 131.604 251.588 133.233 250.79C134.862 249.993 136.287 248.833 137.4 247.4L225.4 135.4C227.106 133.311 228.037 130.697 228.037 128C228.037 125.303 227.106 122.689 225.4 120.6V120.6ZM140 50.7L197.1 123.4L140 149.4V50.7ZM116 149.4L58.8998 123.4L116 50.7V149.4ZM116 175.7V205.3L79.8998 159.3L116 175.7ZM140 175.7L176.1 159.3L140 205.3V175.7Z" fill="#F8F8F8"/>
                        </svg>

                           Donate Eth</button>
                    </form>
                </div>
            </div>
        </>
    )
}