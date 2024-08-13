// app/page.js

"use client"

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import YoutubeBackground from "./pages/YouTubePage/youtubeBackground";
import VideoBackground from "./pages/CurrentPage/videoBackground";

import classes from "./page.module.css"


//////////////////////////////////////////////////////////////////////////////
// Change any variables in here for testing
///////////////////////////////////////////

// Very large video that needs streaming from YouTube
// https://youtu.be/7rimlhPvDGA
const High_altitude_Pivot_mp4_yt = "https://www.youtube.com/embed/7rimlhPvDGA?controls=0&autoplay=1&mute=1&loop=1&showinfo=0&autohide=1&playlist=7rimlhPvDGA"
const High_altitude_Pivot_mp4 = "https://incite.blob.core.windows.net/public/High_Altitude_Pivot.MP4"

// Small video that doesn't really need steaming
// https://youtu.be/mt0fRxggQ2k
const Incite_Wavespace_Background_mp4_yt = "https://www.youtube.com/embed/mt0fRxggQ2k?controls=0&autoplay=1&mute=1&loop=1&showinfo=0&autohide=1&playlist=mt0fRxggQ2k"
const Incite_Wavespace_Background_mp4 = "https://incite.blob.core.windows.net/public/incite-wavespace-background.mp4"

//////////////////////////////////////////////////////////////////////////////


export default function Home() {

    const router = useRouter()
    const searchParams = useSearchParams();

    let vid = searchParams.get("vid")
    if (vid == null) vid = true

    let page = searchParams.get("page")
    if (page == null) page = true

    const [vidChoice, setVidChoice] = useState(null)
    const [pageChoice, setPageChoice] = useState(null)

    function handleVidSelect() {
        router.push(`?vid=${!vidChoice}&page=${pageChoice}`)
        setVidChoice(!vidChoice)
        // window.location.reload();
    }

    function handlePageSelect() {
        router.push(`?vid=${vidChoice}&page=${!pageChoice}`)
        setPageChoice(!pageChoice)
        // window.location.reload();
    }

    const vid_src = vidChoice ? Incite_Wavespace_Background_mp4 : High_altitude_Pivot_mp4
    const yt_src = vidChoice ? Incite_Wavespace_Background_mp4_yt : High_altitude_Pivot_mp4_yt

    return (
        <>
            <div className={classes["selector"]}>
                <button onClick={handleVidSelect} >Click to Switch Between Videos</button>
                <button onClick={handlePageSelect} >Click to Switch Between YouTube & Current</button>
            </div>
            <div className={classes["pages"]} >
                {vidChoice != null && pageChoice && <VideoBackground vid_src={vid_src} />}
                {vidChoice != null && !pageChoice && <YoutubeBackground yt_src={yt_src} />}
            </div>
        </>
    );
};