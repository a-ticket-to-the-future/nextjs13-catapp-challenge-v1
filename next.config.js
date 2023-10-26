/** @type {import('next').NextConfig} */
const nextConfig = {

    experimentalFeatures:{
        severSideRendering : false,
    }
    
}


const withVideos = require('next-videos')

module.exports = withVideos()


module.exports = nextConfig
