# ImageToVideo
A tool/utility to convert images/frames to videos.

## Dependencies
- videoshow npm package

## Tech Stack/ Required Installations
- ffmpeg
- Git
- Node
- NPM

## Requirements
- Given an array of image file paths, produce a video from the frames

## To Run
- On your command line enter the command `git clone https://github.com/EziamakaNV/imagetovideo.git`
- Save the images/frames that will be converted into a video in the images folder (The images must be the same dimensions else the conversion fails)
- Open `index.js` in the `src` folder and input the paths to the images in the `imagePathArray` variable
- On your command line CD (change directory) imagetovideo and enter the command `npm install`
- Next, enter `npm start`
- The video is stored in the `videos` folder

## Notes
- (The images must be the same dimensions else the conversion fails)
- Currently the conversion configuration is set to produce a 1 sec video given 24 frames i.e a one minute video would require 1440 images/frames
