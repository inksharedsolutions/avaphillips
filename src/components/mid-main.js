import React from 'react'
import Logo1 from '../static/logo/amazon.png'
import Logo2 from '../static/logo/bam.png'
import Logo3 from '../static/logo/Barnes-and-noble-booksellers-logo.png'
import Logo4 from '../static/logo/stratton-logo.png'

const MidMain = () => {
    return (
        <>
            <section className="radio-interview">
                <div className="container-gt">
                    <div className="grid-two-columns">
                        <div class="grid-child">
                            <h5>Ava Phillips</h5>
                            <h1><span>Book</span><span>Trailer</span></h1>
                            <p>This is the first book of the series, Tales From the Zookeeper's Daughter. It shows children how kindness and determination bring people together in times of struggles.</p>
                        </div>
                        <div class="grid-child">
                            <iframe src="https://www.youtube.com/embed/lRzh830cHHI" width="100%" height="400" title=""></iframe>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mid-main">
                <div className="container-gt separator-line">
                    <h1>Featured</h1>
                    <p className="middle-params">
                        Rick Michaels has been featured numerous times on...
                    </p>

                    <div className="grid-template-four-col" id="logos-col">
                        <li>
                            <img src={Logo1} alt="Amazon logo"/>
                        </li>

                        <li>
                            <img src={Logo2} alt="Books A Million logo"/>
                        </li>

                        <li>
                            <img src={Logo3} alt="Barnes &amp; Noble logo"/>
                        </li>

                        <li>
                            <img src={Logo4} alt="Stratton Press logo"/>
                        </li>

                    </div>
                </div>
            </section>
        </>
    )
}

export default MidMain;