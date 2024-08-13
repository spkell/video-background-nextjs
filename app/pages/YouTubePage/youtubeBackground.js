// app/pages/YouTubePage/youtubeBackground.js

import classes from "./youtubeBackground.module.css"

export default function YoutubeBackground({yt_src}) {

    const src = yt_src

    return (
        <>
            <iframe 
                className={classes['background-video']}
                allowFullScreen
                allow="autoplay"
                src={src} >
            </iframe>

            <div className={classes["title"]} >
                <h1>Background with YouTube Streaming</h1>
                <h2>Video: {src}</h2>
            </div>
            
            <div className={classes["page-content"]} >
                <h4>Pros</h4>
                <ul>
                    <li>Arbitrarily large gb & long high def videos can be loaded in the same amount of time due to streaming</li>
                    <li>Vid quality is dynamically adjusted based on client internet connection</li>
                </ul>

                <h4>Cons</h4>
                <ul>
                    <li>When navigating between windows, can see recommended videos in background from yt on bottom of page</li>
                    <li>Cant resize browser window with video anchored/fixed to top left of screen</li>
                    <li>Adjusting window size or scrolling makes the whole screen very choppy</li>
                </ul>
            </div>
        </>
    );
};