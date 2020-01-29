const path = require('path');
const imageToVideo = require('./videoshow');

// ensure the pictures are
const imagePathArray = [
    path.join(process.cwd(), 'images', 'resize1.jpg'),
    path.join(process.cwd(), 'images', 'resize2.jpg'),
    path.join(process.cwd(), 'images', 'resize3.jpg'),
    path.join(process.cwd(), 'images', 'resize4.jpg'),
];

imageToVideo.convert(imagePathArray);