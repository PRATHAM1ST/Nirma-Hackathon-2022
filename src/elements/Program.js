import { Link } from "react-router-dom";

export default function Program({data}){
    const per = data.CurrentAmount * 100 / data.GoalAmount;
    return (
        <div className="program">
            <img className="program-image" src={"https://source.unsplash.com/" + data.Image}></img>
            <h1 className="fund-title">{data.Title}</h1>
            <p className="deadline">{data.Deadline}</p>
            <p className="description">{data.Description}</p>
            <Link to={"/Page/" + data.id} className="donate-btn">
                <button>
                    Donate Now!
                </button>
            </Link> 
            <div className="progress">
                <div className="money-raised">
                    {data.CurrentAmount} / {data.GoalAmount}
                </div>
                <div className="progess-bar">
                    <div className="progress-bar-percentage" style={{width: per + "%"}}></div>
                </div>
            </div>
        </div>
    )
}