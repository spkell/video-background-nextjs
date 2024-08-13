# Nextjs Background Video Challenge

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

- Ensure Node and npm are downloaded: https://nodejs.org/en/download/package-manager
- Install all Node dependencies with: "npm i"
- Run the development server with: "npm run dev"
- Open [http://localhost:3323](http://localhost:3323) with your browser to see the result.
- Navigate between the 2 buttons to see the difference in performance between the HTML <video /> tag with a url to a mp4, and the <iframe /> tag with a youtube video embedding
- 1 video is >1gb, while the other is ~20mb
- Use the browser inspect dev tool to look at output in the console and the Network tab, for loading speed etc.

## Task
- Optimize page background loading from youtube to:
    1. Maintain speed/latency advantage of youtube streaming as CDN,
    2. Meet the user experience of a video loaded using the <video /> tag (after video is loaded)

- Modify the following files only to achieve this result:
    1. app/pages/YouTubePage/youtubeBackground.js
    2. app/pages/YouTubePage/youtubeBackground.module.css


Best of Luck!