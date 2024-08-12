import React from 'react'

function Header() {
    return (
        <header className="header">
	        <div className="container" id='h-ctnr'>
                <div className="hs">
                    <h1 id="header--h1">Insanely Expensive JPEGs</h1>
                    <h3 id="header--h3">(Also known as NFTs)</h3>
                </div>
                <nav>
                    <ul>
                        <li><a href="#">Buy</a></li>
                        <li><a href="#">Resources</a></li>
                        <li><a href="#">Explore</a></li>
                    </ul>
                </nav>
	        </div>
        </header>   
    )
}

export default Header    