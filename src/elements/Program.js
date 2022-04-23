export default function Program(){
    return (
        <div className="program">
            <img className="program-image" src="https://source.unsplash.com/9Z1KRIfpBTM"></img>
            <h1 className="fund-title">Title Of The funding</h1>
            <p className="deadline">4 May 2022</p>
            <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat magna elit semper malesuada diam congue vitae. Facilisis facilisis facilisi scelerisque ac elit suspendisse suspendisse imperdiet aliquet. Fermentum lacinia vestibulum aliquam ut....</p>
            <button className="donate-btn">Donate Now!</button>
            <div className="progress">
                <div className="money-raised">
                    $10 / $50
                </div>
                <div className="progess-bar">
                    <div className="progress-bar-percentage"></div>
                </div>
            </div>
        </div>
    )
}