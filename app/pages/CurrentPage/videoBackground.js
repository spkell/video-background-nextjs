// app/pages/CurrentPage/videoBackground.js

import PlayVideo from "@/app/components/PlayVideo"
import classes from "./videoBackground.module.css"

export default function VideoBackground({vid_src}) {

    const src = vid_src

    return (
        <>
            <PlayVideo className={classes['background-video']} src={src} />

            <div className={classes["title"]} >
                <h1>Current background</h1>
                <h2>Video: {vid_src}</h2>
            </div>
            
            <div className={classes["page-content"]} >
                <h4>Pros</h4>
                <ul>
                    <li>Video is always highest definition</li>
                    <li>Drag bottom right corner to resize browser window - the image is fixed/anchored to the top right of the screen!</li>
                    <li>No custom resizing of the video is needed for it to perfectly cover the background</li>
                    <li>No branding from a 3rd party superimposed on image in background</li>
                    <li>Displays well on mobile</li>
                    <li>Adding new videos to different pages follows a standard format</li>
                </ul>

                <h4>Cons</h4>
                <ul>
                    <li>Entire video is loaded from the server in order to begin rendering</li>
                    <li>Clients with low bandwidth internet will NOT load video (i.e. High_altitude_Pivot_mp4 at {">"}1GB file size)</li>
                    <li>Due to above, limited to short low res videos</li>
                </ul>
            </div>
        </>
    );
};