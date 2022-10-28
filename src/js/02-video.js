import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const iframeRef = document.querySelector('#vimeo-player');

const player = new Player(iframeRef);

player.setCurrentTime(onPageOpen());

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay (data) {
//    console.log(data);
   localStorage.setItem("videoplayer-current-time", JSON.stringify(data));
    };

function onPageOpen () {
   const previousVideoTime = localStorage.getItem("videoplayer-current-time");

   if (previousVideoTime) {
    return JSON.parse(previousVideoTime).seconds;
    };

    return 0;
}

// function onPlay (data) {
//     localStorage.setItem("videoplayer-current-time", data.seconds);
//     }