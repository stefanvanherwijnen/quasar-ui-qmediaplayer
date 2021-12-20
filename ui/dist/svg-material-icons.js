import { m as matPlayArrow, a as matPause, b as matVolumeOff, c as matVolumeDown, d as matVolumeUp, e as matSettings, f as matDirectionsRun, g as matClosedCaption, h as matCheck, i as matFullscreen, j as matFullscreenExit } from "./index.js";
import "vue";
import "quasar";
var svgMaterialIcons = {
  name: "svg-material-icons",
  mediaPlayer: {
    play: matPlayArrow,
    pause: matPause,
    volumeOff: matVolumeOff,
    volumeDown: matVolumeDown,
    volumeUp: matVolumeUp,
    settings: matSettings,
    speed: matDirectionsRun,
    language: matClosedCaption,
    selected: matCheck,
    fullscreen: matFullscreen,
    fullscreenExit: matFullscreenExit,
    bigPlayButton: matPlayArrow
  }
};
export { svgMaterialIcons as default };
