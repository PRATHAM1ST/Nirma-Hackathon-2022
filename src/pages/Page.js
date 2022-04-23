export default function Page(){
    return(
        <div className="container">
            <div className="program">
                <img className="program-image" src="https://source.unsplash.com/9Z1KRIfpBTM"></img>
                <h1 className="fund-title">Title Of The funding</h1>
                <p className="deadline">4 May 2022</p>
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat magna elit semper malesuada diam congue vitae. Facilisis facilisis facilisi scelerisque ac elit suspendisse suspendisse imperdiet aliquet. Fermentum lacinia vestibulum aliquam utkejdnjf fnj ef jnrg  rjkn g jkengjk nejrkgnjkt jkg t gj tjk ndekmfklmwd me wmd wlmdklw dm eknr em,w rjkner me f</p>
                <div className="progress">
                    <div className="money-raised">
                        $10 / $50
                    </div>
                    <div className="progess-bar">
                        <div className="progress-bar-percentage"></div>
                    </div>
                </div>
            </div>
            <div className="payment">
                <form className="form">
                    <h1>THANK YOU!</h1>
                    <input type="number" placeholder="Amount" required/>
                    <input type="text" placeholder="Description" />
                    <button>
                        <svg width="30" height="30" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_5_110)">
                        <path d="M33.2063 44.5521C36.4467 44.5404 43.5313 44.5142 43.4496 40.0079C43.3708 35.3996 36.5663 35.6767 33.25 35.8138C32.8796 35.8283 32.55 35.8429 32.2817 35.8458L32.4333 44.5579C32.6521 44.5521 32.9146 44.5521 33.2063 44.5521ZM32.8621 31.8558C35.5658 31.8529 41.4663 31.8471 41.3963 27.7492C41.3204 23.5579 35.6533 23.8058 32.8854 23.9283C32.5733 23.9429 32.3021 23.9546 32.0746 23.9575L32.2117 31.8588L32.8621 31.8558Z" fill="#F8F8F8"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M26.53 68.9529C45.2842 73.6284 64.2775 62.2154 68.9529 43.4671C73.6284 24.7159 62.2125 5.72252 43.4583 1.05002C24.7158 -3.62831 5.72251 7.78752 1.05001 26.5417C-3.6254 45.29 7.78751 64.2834 26.5329 68.9559L26.53 68.9529ZM39.0192 19.3113C44.135 19.6729 48.2067 21.1721 48.7404 25.8504C49.1371 29.2746 47.7371 31.36 45.465 32.5675C49.2567 33.4075 51.6629 35.6096 51.2838 40.6496C50.8142 46.9059 46.1854 48.6646 39.5413 49.1604L39.6521 55.7229L35.6971 55.7959L35.5833 49.3209C34.5596 49.3384 33.5096 49.35 32.4217 49.3442L32.5383 55.8484L28.5833 55.9184L28.4667 49.3442L27.3496 49.3529C26.7838 49.3559 26.2121 49.3588 25.6404 49.3704L20.4896 49.4579L21.1925 44.7213C21.1925 44.7213 24.1208 44.7154 24.0683 44.6717C25.1883 44.6484 25.4713 43.8404 25.5325 43.3329L25.3546 32.9584L25.6375 32.9525H25.7717C25.6323 32.9366 25.492 32.9297 25.3517 32.9321L25.2233 25.5238C25.0571 24.7246 24.5204 23.8029 22.9192 23.8321C22.9629 23.7738 20.0433 23.8817 20.0433 23.8817L19.9675 19.6584L25.4275 19.565V19.5854C26.2471 19.5709 27.09 19.5417 27.9446 19.5096L27.8338 13.0084L31.7888 12.9413L31.8996 19.3113C32.9554 19.2734 34.0171 19.2325 35.0583 19.215L34.9475 12.8859L38.9054 12.8159L39.0192 19.3171V19.3113Z" fill="#F8F8F8"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_5_110">
                        <rect width="70" height="70" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>
                        Donate</button>
                </form>
            </div>
        </div>
    )
}