import React from "react"
import ReactPlayer from 'react-player/youtube'



const Trailer = () =>{
    return(
        <>
            <section className="book-trailer">
                <div className="grid-two-columns" id="trailer-body">
                    
                    <div className="grid-child-content">
                        <h5>Penny Mccoy</h5>
                        <h1>
                            <span>Book </span>
                            <span> Trailer</span>
                        </h1>
                        <p>
                            I Am Amidst You Now is a reminder of God's unfailing love.
                            The faithfulness of His promises. The vastness of His grace
                            and mercy. Put your confidence in Him, for He shall never leave you.                       
                        </p>
                    </div>

                    <div className="grid-video-container">
                        <div className="player-wrapper">
                            <ReactPlayer
                                className="react-player"
                                url={"https://www.youtube.com/watch?v=3PpE0sxomM4"}
                                width="100%"
                                height="400px"
                                controls={true}
                                playIcon
                            />
                        </div>
                    </div>
                
                </div> 
            </section>
        </>
    )
}

export default Trailer;