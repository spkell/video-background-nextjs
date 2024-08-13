'use client'

import { useEffect, useRef } from 'react';

const videoStyle = {
    pointerEvents: 'none'
};

const VideoComponent = ({ src, className }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            // Reload the video by pausing and setting the current time to 0
            // videoRef.current.pause();
            videoRef.current.currentTime = 0;
            videoRef.current.play();
        }
    }, []);

    return (
        <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className={className}
            style={videoStyle}
        >
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
};

export default VideoComponent;
