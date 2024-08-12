import React from 'react'
import Banner from './Banner'
import ToggleContext from './ToggleContext'


function Hero(props) {
    const [on, setOn] = React.useState(false)

    return(
        <main>
            <ToggleContext.Provider value={{on, setOn}}>

            <section className="sectionOne" >
                <div className="container">
                    <h2>Meta-Pigeon Sneaker NFT $33,000</h2>
                    <div className="toggle-btn">
                        <div className='toggle-div'>
                        * More
                        <label className="switch">
                            <input type="checkbox" onChange={() => setOn(prevVal => !prevVal)} checked={on} id='toggle-input'/>
                            <span className="slider round"></span>
                        </label>
                        </div>
                        
                    </div>
                    { on && <Banner /> }
                    <img src="/sneakersPurple.png" className='main-img' alt="Purple and silver sneakers" />
                    <p><strong>At $33k, this NFT sneaker is super good value!</strong></p>
                    <p>If you've got lots of money and you're a bit daft, NFTs are a
                        great way to pay for something that doesn't have any intrinsic
                        value or even exist. Tech fashionistas are jumping on the NFT
                        bandwagon and spending eye-watering sums of money on crypto images.
                        Our advice: spend the weekend <a href="google.com" id="p-link">crafting an NFT</a> and by
                        this time next week, you'll be a millionaire.
                    </p>
                    <a href="google.com" className="btn btn-dark">Buy NFT</a>
                    <a href="google.com" className="btn btn-mid">More info</a>
                </div>
            </section>

            <section className="sectionTwo">
                <h2 className="container">For the true Crypto-connoisseur</h2>
                <div className="img-container">
                    <img className="feature-img" src="/cryptoPunk.jpg" alt="punk with blach hair and red and blue glasses" />
                    <img className="feature-img" src="/bag.svg" alt="Seven items from a game listed in white on a black background" />
                </div>
                <div className="container">
                    <p>Is $33k for sneakers too basic for you? No problem! This CryptoPunk
                        (left) is a steal at $6.6 million! Which makes Bag #748 (right) a
                        total bargain at $1.4 million. And by the way, that's not a VS
                        Code screenshot we included by mistake. The eight lines of white text
                        on a black background is the actual NFT we're selling.</p>
                    <a href="google.com" className="btn btn-mid">About Us</a>
                    <a href="google.com" className="btn btn-light">Contact</a>
                    <p>Still not convinced? To be honest, nor are we. That's why we're selling
                        them, not buying them.</p>
                </div>
            </section>
            </ToggleContext.Provider>
        </main>
    )
}

export default Hero
