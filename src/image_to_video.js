const videoshow = require('videoshow');
const path = require('path');

const convert = (imagePathArray) => {
      const videoOptions = {
        fps: 25,
        loop: 0.06, // seconds per frame
        transition: false,
        videoCodec: 'libx264',
        size: '640x?',
        format: 'mp4',
        pixelFormat: 'yuv420p'
      }
       
      videoshow(imagePathArray, videoOptions)
        .save(path.join(process.cwd(), `/videos/${Date.now()}.mp4`))
        .on('start', function (command) {
          console.log('ffmpeg process started:', command)
        })
        .on('error', function (err, stdout, stderr) {
          console.error('Error:', err)
          console.error('ffmpeg stderr:', stderr)
        })
        .on('end', function (output) {
          console.error('Video created in:', output)
        })
}

module.exports = {
    convert,
}