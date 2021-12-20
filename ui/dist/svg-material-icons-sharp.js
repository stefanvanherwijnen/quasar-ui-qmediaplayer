const sharpCheck = "M0 0h24v24H0V0z@@fill:none;&&M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z";
const sharpClosedCaption = "M0 0h24v24H0V0z@@fill:none;&&M21 4H3v16h18V4zm-10 7H9.5v-.5h-2v3h2V13H11v2H6V9h5v2zm7 0h-1.5v-.5h-2v3h2V13H18v2h-5V9h5v2z";
const sharpDirectionsRun = "M0 0h24v24H0V0z@@fill:none;&&M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z";
const sharpFullscreen = "M0 0h24v24H0V0z@@fill:none;&&M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z";
const sharpFullscreenExit = "M0 0h24v24H0V0z@@fill:none;&&M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z";
const sharpPause = "M0 0h24v24H0V0z@@fill:none;&&M6 19h4V5H6v14zm8-14v14h4V5h-4z";
const sharpPlayArrow = "M0 0h24v24H0V0z@@fill:none;&&M8 5v14l11-7L8 5z";
const sharpSettings = "M0 0h24v24H0V0z@@fill:none;&&M19.44 12.99l-.01.02c.04-.33.08-.67.08-1.01 0-.34-.03-.66-.07-.99l.01.02 2.44-1.92-2.43-4.22-2.87 1.16.01.01c-.52-.4-1.09-.74-1.71-1h.01L14.44 2H9.57l-.44 3.07h.01c-.62.26-1.19.6-1.71 1l.01-.01-2.88-1.17-2.44 4.22 2.44 1.92.01-.02c-.04.33-.07.65-.07.99 0 .34.03.68.08 1.01l-.01-.02-2.1 1.65-.33.26 2.43 4.2 2.88-1.15-.02-.04c.53.41 1.1.75 1.73 1.01h-.03L9.58 22h4.85s.03-.18.06-.42l.38-2.65h-.01c.62-.26 1.2-.6 1.73-1.01l-.02.04 2.88 1.15 2.43-4.2s-.14-.12-.33-.26l-2.11-1.66zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z";
const sharpVolumeDown = "M0 0h24v24H0V0z@@fill:none;&&M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z";
const sharpVolumeMute = "M0 0h24v24H0V0z@@fill:none;&&M7 9v6h4l5 5V4l-5 5H7z";
const sharpVolumeUp = "M0 0h24v24H0V0z@@fill:none;&&M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z";
var svgMaterialIconsSharp = {
  name: "svg-material-icons-sharp",
  mediaPlayer: {
    play: sharpPlayArrow,
    pause: sharpPause,
    volumeOff: sharpVolumeMute,
    volumeDown: sharpVolumeDown,
    volumeUp: sharpVolumeUp,
    settings: sharpSettings,
    speed: sharpDirectionsRun,
    language: sharpClosedCaption,
    selected: sharpCheck,
    fullscreen: sharpFullscreen,
    fullscreenExit: sharpFullscreenExit,
    bigPlayButton: sharpPlayArrow
  }
};
export { svgMaterialIconsSharp as default };
