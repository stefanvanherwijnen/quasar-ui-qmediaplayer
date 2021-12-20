var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
import { defineComponent, getCurrentInstance, ref, reactive, computed, watch, onBeforeMount, onBeforeUnmount, nextTick, h, withDirectives } from "vue";
import { ClosePopup, Ripple, useQuasar, QBtn, QTooltip, QSlider, QSpinner, QIcon, QMenu, QExpansionItem, QList, QItem, QItemSection } from "quasar";
const matCheck = "M0 0h24v24H0z@@fill:none;&&M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z";
const matClose = "M0 0h24v24H0z@@fill:none;&&M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z";
const matClosedCaption = "M0 0h24v24H0z@@fill:none;&&M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 7H9.5v-.5h-2v3h2V13H11v1c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1zm7 0h-1.5v-.5h-2v3h2V13H18v1c0 .55-.45 1-1 1h-3c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1z";
const matDirectionsRun = "M0 0h24v24H0z@@fill:none;&&M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z";
const matFullscreen = "M0 0h24v24H0z@@fill:none;&&M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z";
const matFullscreenExit = "M0 0h24v24H0z@@fill:none;&&M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z";
const matPause = "M0 0h24v24H0z@@fill:none;&&M6 19h4V5H6v14zm8-14v14h4V5h-4z";
const matPlayArrow = "M0 0h24v24H0z@@fill:none;&&M8 5v14l11-7z";
const matSettings = "M0,0h24v24H0V0z@@fill:none;&&M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z";
const matVolumeDown = "M0 0h24v24H0z@@fill:none;&&M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z";
const matVolumeOff = "M0 0h24v24H0z@@fill:none;&&M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z";
const matVolumeUp = "M0 0h24v24H0z@@fill:none;&&M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z";
function hSlot(slot, otherwise) {
  return slot !== void 0 ? slot() : otherwise;
}
const padTime = (val) => {
  val = Math.floor(val);
  if (val < 10) {
    return "0" + val;
  }
  return val + "";
};
const timeParse = (sec) => {
  let min = 0;
  min = Math.floor(sec / 60);
  sec = sec - min * 60;
  return padTime(min) + ":" + padTime(sec);
};
var QMediaPlayer = defineComponent({
  name: "QMediaPlayer",
  directives: {
    ClosePopup,
    Ripple
  },
  props: {
    type: {
      type: String,
      required: false,
      default: "video",
      validator: (v) => ["video", "audio"].includes(v)
    },
    mobileMode: Boolean,
    source: String,
    sources: {
      type: Array,
      default: () => []
    },
    poster: {
      type: String,
      default: ""
    },
    tracks: {
      type: Array,
      default: () => []
    },
    dense: Boolean,
    autoplay: Boolean,
    crossOrigin: {
      type: [String],
      default: null,
      validator: (v) => v === null || ["anonymous", "use-credentials"].includes(v)
    },
    volume: {
      type: Number,
      default: 60,
      validator: (v) => v >= 0 && v <= 100
    },
    hideVolumeSlider: Boolean,
    hideVolumeBtn: Boolean,
    hidePlayBtn: Boolean,
    hideSettingsBtn: Boolean,
    hideFullscreenBtn: Boolean,
    disabledSeek: Boolean,
    preload: {
      type: String,
      default: "metadata",
      validator: (v) => ["none", "metadata", "auto"].includes(v)
    },
    noVideo: Boolean,
    muted: Boolean,
    playsinline: Boolean,
    loop: Boolean,
    trackLanguage: {
      type: String,
      default: "off"
    },
    showTooltips: Boolean,
    showBigPlayButton: {
      type: Boolean,
      default: true
    },
    showSpinner: {
      type: Boolean,
      default: true
    },
    spinnerSize: String,
    noControls: Boolean,
    nativeControls: Boolean,
    bottomControls: {
      type: Boolean,
      default: false
    },
    controlsDisplayTime: {
      type: Number,
      default: 4e3
    },
    playbackRates: Array,
    playbackRate: {
      type: Number,
      default: 1
    },
    dark: Boolean,
    radius: {
      type: [Number, String],
      default: 0
    },
    contentStyle: [String, Object],
    contentClass: [String, Object],
    contentWidth: Number,
    contentHeight: Number
  },
  emits: [
    "mediaPlayer",
    "playbackRate",
    "trackLanguage",
    "showControls",
    "volume",
    "muted",
    "fullscreen",
    "networkState",
    "abort",
    "ready",
    "canplaythrough",
    "duration",
    "emptied",
    "ended",
    "error",
    "loadeddata",
    "loadedmetadata",
    "stalled",
    "suspend",
    "loadstart",
    "paused",
    "play",
    "playing",
    "timeupdate",
    "waiting"
  ],
  setup(props, { slots, emit, expose }) {
    const vm = getCurrentInstance(), $q = useQuasar() || vm.proxy.$q || vm.ctx.$q, canRender = ref(false), lang = reactive({
      mediaPlayer: {}
    }), iconSet = reactive({
      mediaPlayer: {}
    }), $media = ref(null), controls = ref(null), menu = ref(null), timer = reactive({
      hideControlsTimer: null
    }), state = reactive({
      errorText: null,
      controls: false,
      showControls: true,
      inControls: false,
      volume: 60,
      muted: false,
      currentTime: 0.01,
      duration: 1,
      durationTime: "00:00",
      remainingTime: "00:00",
      displayTime: "00:00",
      inFullscreen: false,
      loading: true,
      playReady: false,
      playing: false,
      playbackRates: [
        { label: ".5x", value: 0.5 },
        { label: "Normal", value: 1 },
        { label: "1.5x", value: 1.5 },
        { label: "2x", value: 2 }
      ],
      playbackRate: 1,
      trackLanguage: "Off",
      showBigPlayButton: true,
      metadataLoaded: false,
      spinnerSize: "5em",
      bottomControls: false
    }), settingsMenuVisible = ref(false), allEvents = [
      "abort",
      "canplay",
      "canplaythrough",
      "durationchange",
      "emptied",
      "ended",
      "error",
      "interruptbegin",
      "interruptend",
      "loadeddata",
      "loadedmetadata",
      "loadedstart",
      "pause",
      "play",
      "playing",
      "progress",
      "ratechange",
      "seeked",
      "timeupdate",
      "volumechange",
      "waiting"
    ];
    const __classes = computed(() => {
      return {
        "q-media__fullscreen": state.inFullscreen,
        "q-media__fullscreen--window": state.inFullscreen
      };
    });
    const __renderVideoClasses = computed(() => {
      return {
        "q-media--player": true,
        "q-media--player--bottom-controls--standard": !props.dense && state.bottomControls && state.inFullscreen,
        "q-media--player--bottom-controls--dense": props.dense && state.bottomControls && state.inFullscreen
      };
    });
    const __videoControlsClasses = computed(() => {
      return {
        "q-media__controls--dense": !slots.controls && ((state.showControls || props.mobileMode) && props.dense),
        "q-media__controls--standard": !slots.controls && ((state.showControls || props.mobileMode) && !props.dense),
        "q-media__controls--hidden": !state.showControls,
        "q-media__controls--bottom-controls": state.bottomControls
      };
    });
    const __audioControlsClasses = computed(() => {
      return {
        "q-media__controls--dense": props.dense,
        "q-media__controls--standard": !props.dense,
        "q-media__controls--bottom-controls": state.bottomControls
      };
    });
    const __contentStyle = computed(() => {
      const style = {};
      if (state.inFullscreen !== true) {
        Object.assign(style, __mergeClassOrStyle("style", props.contentStyle));
        if (props.bottomControls === true && style.height === void 0) {
          style.height = `calc(100% - ${__controlsHeight.value}px)`;
        }
        if (style.height === void 0) {
          style.height = "100%";
        }
      }
      return style;
    });
    const __volumeIcon = computed(() => {
      if (state.volume > 1 && state.volume < 70 && !state.muted) {
        return iconSet.mediaPlayer.volumeDown;
      } else if (state.volume >= 70 && !state.muted) {
        return iconSet.mediaPlayer.volumeUp;
      } else {
        return iconSet.mediaPlayer.volumeOff;
      }
    });
    const __selectTracksLanguageList = computed(() => {
      const tracksList = [];
      const track = {};
      track.label = lang.mediaPlayer.trackLanguageOff;
      track.value = "off";
      tracksList.push(track);
      for (let index2 = 0; index2 < props.tracks.length; ++index2) {
        const track2 = {};
        track2.label = track2.value = props.tracks[index2].label;
        tracksList.push(track2);
      }
      return tracksList;
    });
    const __isMediaAvailable = computed(() => $media.value && $media.value.volume !== void 0);
    const __isAudio = computed(() => {
      return props.type === "audio";
    });
    const __isVideo = computed(() => {
      return props.type === "video";
    });
    const __settingsPlaybackCaption = computed(() => {
      let caption = "";
      state.playbackRates.forEach((rate) => {
        if (rate.value === state.playbackRate) {
          caption = rate.label;
        }
      });
      return caption;
    });
    const __controlsHeight = computed(() => {
      if (controls.value) {
        return controls.value.clientHeight;
      }
      return props.dense ? 40 : 80;
    });
    watch(() => $media.value, () => {
      __init();
      emit("mediaPlayer", $media.value);
    });
    watch(() => props.poster, () => {
      __updatePoster();
    });
    watch(() => props.sources, () => {
      __updateSources();
    }, { deep: true });
    watch(() => props.source, () => {
      __updateSources();
    });
    watch(() => props.tracks, () => {
      __updateTracks();
    }, { deep: true });
    watch(() => props.volume, () => {
      __updateVolume();
    });
    watch(() => props.muted, () => {
      __updateMuted();
    });
    watch(() => props.trackLanguage, () => {
      __updateTrackLanguage();
    });
    watch(() => props.showBigPlayButton, () => {
      __updateBigPlayButton();
    });
    watch(() => props.playbackRates, () => {
      __updatePlaybackRates();
    });
    watch(() => props.playbackRate, () => {
      __updatePlaybackRate();
    });
    watch($q.lang, (val) => {
      __setupLang();
    });
    watch($q.iconSet, (val) => {
      __setupIcons();
    });
    watch(() => $q.fullscreen.isActive, (val) => {
      if (!val && __isVideo.value && state.inFullscreen) {
        exitFullscreen();
      }
    });
    watch(() => state.playbackRate, (val) => {
      if (val && __isMediaAvailable.value === true) {
        $media.value.playbackRate = parseFloat(val);
        emit("playbackRate", val);
      }
    });
    watch(() => state.trackLanguage, (val) => {
      __toggleCaptions();
      emit("trackLanguage", val);
    });
    watch(() => state.showControls, (val) => {
      if (__isVideo.value && !state.noControls) {
        emit("showControls", val);
      }
    });
    watch(() => state.volume, (val) => {
      if (__isMediaAvailable.value === true) {
        const volume = parseFloat(val / 100);
        if ($media.value.volume !== volume) {
          $media.value.volume = volume;
          emit("volume", val);
        }
      }
    });
    watch(() => state.muted, (val) => {
      emit("muted", val);
    });
    watch(() => state.currentTime, (val) => {
      if (__isMediaAvailable.value === true && state.playReady) {
        if (isFinite($media.value.duration)) {
          state.remainingTime = timeParse($media.value.duration - $media.value.currentTime);
        }
        state.displayTime = timeParse($media.value.currentTime);
      }
    });
    watch(() => props.bottomControls, (val) => {
      state.bottomControls = val;
      if (val) {
        state.showControls = true;
      }
    });
    watch(() => props.noControls, (val) => {
      state.noControls = val;
      if (props.nativeControls === true) {
        state.noControls = true;
      }
    });
    onBeforeMount(() => {
      canRender.value = window !== void 0;
      if (canRender.value === true) {
        __setupLang();
        __setupIcons();
      }
    });
    onBeforeUnmount(() => {
      if (canRender.value === true) {
        exitFullscreen();
        document.body.classList.remove("no-scroll");
        __removeSourceEventListeners();
        __removeMediaEventListeners();
        __removeTracks();
        __removeSources();
        $media.value = null;
      }
    });
    function loadFileBlob(fileList) {
      if (fileList && __isMediaAvailable.value === true) {
        if (Object.prototype.toString.call(fileList) === "[object FileList]") {
          const reader = new FileReader();
          reader.onload = (event) => {
            $media.value.src = event.target.result;
            __reset();
            __addSourceEventListeners();
            $media.value.load();
            state.loading = false;
          };
          reader.readAsDataURL(fileList[0]);
          return true;
        } else {
          console.error("[QMediaPlayer]: loadFileBlob method requires a FileList");
        }
      }
      return false;
    }
    function showControls() {
      if (state.noControls) {
        state.showControls = false;
        return;
      }
      if (state.bottomControls) {
        state.showControls = true;
        return;
      }
      if (timer.hideControlsTimer) {
        clearTimeout(timer.hideControlsTimer);
        timer.hideControlsTimer = null;
      }
      state.showControls = true;
      __checkCursor();
      if (props.controlsDisplayTime !== -1 && !props.mobileMode && __isVideo.value) {
        timer.hideControlsTimer = setTimeout(() => {
          if (!__showingMenu() && state.inControls !== true) {
            state.showControls = false;
            timer.hideControlsTimer = null;
            __checkCursor();
          } else {
            showControls();
          }
        }, props.controlsDisplayTime);
      }
    }
    function hideControls() {
      if (state.inControls)
        return;
      if (state.noControls) {
        state.showControls = false;
        return;
      }
      if (state.bottomControls) {
        state.showControls = true;
        return;
      }
      if (timer.hideControlsTimer) {
        clearTimeout(timer.hideControlsTimer);
      }
      if (props.controlsDisplayTime !== -1) {
        state.showControls = false;
        __checkCursor();
      }
      timer.hideControlsTimer = null;
    }
    function toggleControls() {
      if (state.bottomControls) {
        return;
      }
      if (state.showControls) {
        hideControls();
      } else {
        showControls();
      }
    }
    function play() {
      if (__isMediaAvailable.value === true && state.playReady === true) {
        const hasPromise = typeof $media.value.play() !== "undefined";
        if (hasPromise) {
          $media.value.play().then(() => {
            state.showBigPlayButton = false;
            state.playing = true;
            __mouseLeaveVideo();
            return true;
          }).catch((e) => {
          });
        } else {
          $media.value.play();
          state.showBigPlayButton = false;
          state.playing = true;
          __mouseLeaveVideo();
        }
      }
    }
    function pause() {
      if (__isMediaAvailable.value === true && state.playReady === true) {
        if (state.playing) {
          $media.value.pause();
          state.showBigPlayButton = true;
          state.playing = false;
        }
      }
    }
    function mute() {
      state.muted = true;
      if (__isMediaAvailable.value === true) {
        $media.value.muted = state.muted === true;
      }
    }
    function unmute() {
      state.muted = false;
      if (__isMediaAvailable.value === true) {
        $media.value.muted = state.muted !== true;
      }
    }
    function togglePlay(e) {
      __stopAndPrevent(e);
      if (__isMediaAvailable.value === true && state.playReady === true) {
        if (state.playing) {
          $media.value.pause();
          state.showBigPlayButton = true;
          state.playing = false;
        } else {
          const hasPromise = typeof $media.value.play() !== "undefined";
          if (hasPromise) {
            $media.value.play().then(() => {
              state.showBigPlayButton = false;
              state.playing = true;
              __mouseLeaveVideo();
              return true;
            }).catch((e2) => {
            });
          } else {
            $media.value.play();
            state.showBigPlayButton = false;
            state.playing = true;
            __mouseLeaveVideo();
          }
        }
      }
    }
    function toggleMuted(e) {
      __stopAndPrevent(e);
      state.muted = !state.muted;
      if (__isMediaAvailable.value === true) {
        $media.value.muted = state.muted === true;
      }
    }
    function toggleFullscreen(e) {
      if (__isVideo.value) {
        __stopAndPrevent(e);
        if (state.inFullscreen) {
          exitFullscreen();
        } else {
          setFullscreen();
        }
        emit("fullscreen", state.inFullscreen);
      }
    }
    function setFullscreen() {
      if (props.hideFullscreenBtn === true || !__isVideo.value || state.inFullscreen) {
        return;
      }
      if ($q.fullscreen !== void 0) {
        state.inFullscreen = true;
        $q.fullscreen.request($media.value.parentNode);
        document.body.classList.add("no-scroll");
      }
    }
    function exitFullscreen() {
      if (props.hideFullscreenBtn === true || !__isVideo.value || !state.inFullscreen) {
        return;
      }
      if ($q.fullscreen !== void 0) {
        state.inFullscreen = false;
        $q.fullscreen.exit();
        document.body.classList.remove("no-scroll");
      }
    }
    function currentTime() {
      if (__isMediaAvailable.value === true && state.playReady === true) {
        return $media.value.currentTime;
      }
      return -1;
    }
    function setCurrentTime(seconds) {
      if (state.playReady) {
        if (__isMediaAvailable.value === true && isFinite($media.value.duration) && seconds >= 0 && seconds <= $media.value.duration) {
          state.currentTime = $media.value.currentTime = seconds;
        }
      }
    }
    function setVolume(volume) {
      if (volume >= 0 && volume <= 100) {
        state.volume = volume;
      }
    }
    function __reset() {
      if (timer.hideControlsTimer && !state.bottomControls) {
        clearTimeout(timer.hideControlsTimer);
      }
      timer.hideControlsTimer = null;
      state.errorText = null;
      state.currentTime = 0.01;
      state.durationTime = "00:00";
      state.remainingTime = "00:00";
      state.displayTime = "00:00";
      state.duration = 1;
      state.playReady = false;
      state.playing = false;
      state.loading = true;
      state.metadataLoaded = false;
      __updateTrackLanguage();
      showControls();
    }
    function __toggleCaptions() {
      __showCaptions(state.trackLanguage);
    }
    function __showCaptions(lang2) {
      if (__isMediaAvailable.value === true && __isVideo.value) {
        for (let index2 = 0; index2 < $media.value.textTracks.length; ++index2) {
          if ($media.value.textTracks[index2].label === lang2) {
            $media.value.textTracks[index2].mode = "showing";
            $media.value.textTracks[index2].oncuechange = __cueChanged;
          } else {
            $media.value.textTracks[index2].mode = "hidden";
            $media.value.textTracks[index2].oncuechange = null;
          }
        }
      }
    }
    function __stopAndPrevent(e) {
      if (e) {
        e.cancelable !== false && e.preventDefault();
        e.stopPropagation();
      }
    }
    async function __setupLang() {
      const isoName = $q.lang.isoName || "en-US";
      let language;
      try {
        language = await __loadLang(isoName);
      } catch (e) {
      }
      if (language !== void 0 && language.lang !== void 0) {
        lang.mediaPlayer = __spreadValues({}, language.mediaPlayer);
        __updatePlaybackRates();
        __updateTrackLanguage();
      }
    }
    const locales = { "./lang/ar.js": () => import("./ar.js"), "./lang/az-Latn.js": () => import("./az-Latn.js"), "./lang/bg.js": () => import("./bg.js"), "./lang/bn.js": () => import("./bn.js"), "./lang/ca.js": () => import("./ca.js"), "./lang/cs.js": () => import("./cs.js"), "./lang/da.js": () => import("./da.js"), "./lang/de.js": () => import("./de.js"), "./lang/el.js": () => import("./el.js"), "./lang/en-GB.js": () => import("./en-GB.js"), "./lang/en-US.js": () => import("./en-US.js"), "./lang/eo.js": () => import("./eo.js"), "./lang/es.js": () => import("./es.js"), "./lang/et.js": () => import("./et.js"), "./lang/fa-IR.js": () => import("./fa-IR.js"), "./lang/fa.js": () => import("./fa.js"), "./lang/fi.js": () => import("./fi.js"), "./lang/fr.js": () => import("./fr.js"), "./lang/gn.js": () => import("./gn.js"), "./lang/he.js": () => import("./he.js"), "./lang/hr.js": () => import("./hr.js"), "./lang/hu.js": () => import("./hu.js"), "./lang/id.js": () => import("./id.js"), "./lang/is.js": () => import("./is.js"), "./lang/it.js": () => import("./it.js"), "./lang/ja.js": () => import("./ja.js"), "./lang/km.js": () => import("./km.js"), "./lang/ko-KR.js": () => import("./ko-KR.js"), "./lang/kur-CKB.js": () => import("./kur-CKB.js"), "./lang/lt.js": () => import("./lt.js"), "./lang/lu.js": () => import("./lu.js"), "./lang/lv.js": () => import("./lv.js"), "./lang/ml.js": () => import("./ml.js"), "./lang/ms.js": () => import("./ms.js"), "./lang/nb-NO.js": () => import("./nb-NO.js"), "./lang/nl.js": () => import("./nl.js"), "./lang/pl.js": () => import("./pl.js"), "./lang/pt-BR.js": () => import("./pt-BR.js"), "./lang/pt.js": () => import("./pt.js"), "./lang/ro.js": () => import("./ro.js"), "./lang/ru.js": () => import("./ru.js"), "./lang/sk.js": () => import("./sk.js"), "./lang/sl.js": () => import("./sl.js"), "./lang/sr-CYR.js": () => import("./sr-CYR.js"), "./lang/sr.js": () => import("./sr.js"), "./lang/sv.js": () => import("./sv.js"), "./lang/ta.js": () => import("./ta.js"), "./lang/th.js": () => import("./th.js"), "./lang/tr.js": () => import("./tr.js"), "./lang/ug.js": () => import("./ug.js"), "./lang/uk.js": () => import("./uk.js"), "./lang/vi.js": () => import("./vi.js"), "./lang/zh-CN.js": () => import("./zh-CN.js"), "./lang/zh-TW.js": () => import("./zh-TW.js") };
    async function __loadLang(lang2) {
      let langList = {};
      if (lang2) {
        if (window && window.QMediaPlayer && window.QMediaPlayer.Component) {
          const name = lang2.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
          if (window.QMediaPlayer.lang && window.QMediaPlayer.lang[name]) {
            langList = window.QMediaPlayer.lang[name];
          } else {
            console.error(`[QMediaPlayer]: No language loaded called '${lang2}'`);
            console.error("[QMediaPlayer]: Be sure to load the UMD version of the language in a script tag before using with UMD");
          }
        } else {
          try {
            const result = await locales[`./lang/${lang2}.js`]();
            langList = result.default;
          } catch (e) {
            console.error(`[QMediaPlayer]: Cannot find language file called '${lang2}'`);
          }
        }
      }
      return langList;
    }
    async function __setupIcons() {
      const iconSetName = $q.iconSet.name || "material-icons";
      let icnSet;
      try {
        icnSet = await __loadIconSet(iconSetName);
      } catch (e) {
      }
      icnSet !== void 0 && icnSet.name !== void 0 && (iconSet.mediaPlayer = __spreadValues({}, icnSet.mediaPlayer));
    }
    const iconSets = { "./icon-set/bootstrap-icons.js": () => import("./bootstrap-icons.js"), "./icon-set/eva-icons.js": () => import("./eva-icons.js"), "./icon-set/fontawesome-v5-pro.js": () => import("./fontawesome-v5-pro.js"), "./icon-set/fontawesome-v5.js": () => import("./fontawesome-v5.js"), "./icon-set/ionicons-v4.js": () => import("./ionicons-v4.js"), "./icon-set/ionicons-v5.js": () => import("./ionicons-v5.js"), "./icon-set/line-awesome.js": () => import("./line-awesome.js"), "./icon-set/material-icons-outlined.js": () => import("./material-icons-outlined.js"), "./icon-set/material-icons-round.js": () => import("./material-icons-round.js"), "./icon-set/material-icons-sharp.js": () => import("./material-icons-sharp.js"), "./icon-set/material-icons.js": () => import("./material-icons.js"), "./icon-set/mdi-v3.js": () => import("./mdi-v3.js"), "./icon-set/mdi-v4.js": () => import("./mdi-v4.js"), "./icon-set/mdi-v5.js": () => import("./mdi-v5.js"), "./icon-set/mdi-v6.js": () => import("./mdi-v6.js"), "./icon-set/svg-bootstrap-icons.js": () => import("./svg-bootstrap-icons.js"), "./icon-set/svg-eva-icons.js": () => import("./svg-eva-icons.js"), "./icon-set/svg-fontawesome-v5.js": () => import("./svg-fontawesome-v5.js"), "./icon-set/svg-ionicons-v4.js": () => import("./svg-ionicons-v4.js"), "./icon-set/svg-ionicons-v5.js": () => import("./svg-ionicons-v5.js"), "./icon-set/svg-line-awesome.js": () => import("./svg-line-awesome.js"), "./icon-set/svg-material-icons-outlined.js": () => import("./svg-material-icons-outlined.js"), "./icon-set/svg-material-icons-round.js": () => import("./svg-material-icons-round.js"), "./icon-set/svg-material-icons-sharp.js": () => import("./svg-material-icons-sharp.js"), "./icon-set/svg-material-icons.js": () => import("./svg-material-icons.js"), "./icon-set/svg-mdi-v4.js": () => import("./svg-mdi-v4.js"), "./icon-set/svg-mdi-v5.js": () => import("./svg-mdi-v5.js"), "./icon-set/svg-mdi-v6.js": () => import("./svg-mdi-v6.js"), "./icon-set/svg-themify.js": () => import("./svg-themify.js"), "./icon-set/themify.js": () => import("./themify.js") };
    async function __loadIconSet(set) {
      let iconsList = {};
      if (set) {
        if (window && window.QMediaPlayer && window.QMediaPlayer.Component) {
          const name = set.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
          if (window.QMediaPlayer.iconSet && window.QMediaPlayer.iconSet[name]) {
            iconsList = window.QMediaPlayer.iconSet[name];
          } else {
            console.error(`[QMediaPlayer]: No icon set loaded called '${set}'`);
            console.error("[QMediaPlayer]:Be sure to load the UMD version of the icon set in a script tag before using with UMD");
          }
        } else {
          try {
            const result = await iconSets[`./icon-set/${set}.js`]();
            iconsList = result.default;
          } catch (e) {
            console.error(`[QMediaPlayer]: Cannot find icon set file called '${set}'`);
          }
        }
      }
      return iconsList;
    }
    function __init() {
      state.bottomControls = props.bottomControls;
      state.noControls = props.noControls;
      if (props.nativeControls === true) {
        state.noControls = true;
      }
      __updateTrackLanguage();
      __updateSources();
      __updateTracks();
      __updateBigPlayButton();
      __updateVolume();
      __updateMuted();
      __updatePlaybackRates();
      __updatePlaybackRate();
      props.crossOrigin && __isMediaAvailable.value === true && $media.value.setAttribute("crossorigin", props.crossOrigin);
      __isMediaAvailable.value === true && ($media.value.controls = false);
      __addMediaEventListeners();
      __addSourceEventListeners();
      __toggleCaptions();
    }
    function __addMediaEventListeners() {
      if (__isMediaAvailable.value === true) {
        allEvents.forEach((event) => {
          $media.value.addEventListener(event, __mediaEventHandler);
        });
      }
    }
    function __removeMediaEventListeners() {
      if (__isMediaAvailable.value === true) {
        allEvents.forEach((event) => {
          $media.value.removeEventListener(event, __mediaEventHandler);
        });
      }
    }
    function __addSourceEventListeners() {
      if (__isMediaAvailable.value === true) {
        const sources = $media.value.querySelectorAll("source");
        for (let index2 = 0; index2 < sources.length; ++index2) {
          sources[index2].addEventListener("error", __sourceEventHandler);
        }
      }
    }
    function __removeSourceEventListeners() {
      if (__isMediaAvailable.value === true) {
        const sources = $media.value.querySelectorAll("source");
        for (let index2 = 0; index2 < sources.length; ++index2) {
          sources[index2].removeEventListener("error", __sourceEventHandler);
        }
      }
    }
    function __sourceEventHandler(event) {
      const NETWORK_NO_SOURCE = 3;
      if (__isMediaAvailable.value === true && $media.value.networkState === NETWORK_NO_SOURCE) {
        state.errorText = __isVideo.value ? lang.mediaPlayer.noLoadVideo : lang.mediaPlayer.noLoadAudio;
        state.loading = false;
      }
      emit("networkState", event);
    }
    function __mediaEventHandler(event) {
      if (event.type === "abort") {
        emit("abort");
      } else if (event.type === "canplay") {
        state.playReady = true;
        state.displayTime = timeParse($media.value.currentTime);
        showControls();
        emit("ready");
      } else if (event.type === "canplaythrough") {
        emit("canplaythrough");
      } else if (event.type === "durationchange") {
        if (isFinite($media.value.duration)) {
          state.duration = $media.value.duration;
          state.durationTime = timeParse($media.value.duration);
          emit("duration", $media.value.duration);
        }
      } else if (event.type === "emptied") {
        emit("emptied");
      } else if (event.type === "ended") {
        state.playing = false;
        emit("ended");
      } else if (event.type === "error") {
        const error = $media.value.error;
        state.errorText = error && error.message ? error.message : null;
        state.playing = false;
        state.loading = false;
        emit("error", error);
      } else if (event.type === "interruptbegin")
        ;
      else if (event.type === "interruptend")
        ;
      else if (event.type === "loadeddata") {
        state.loading = false;
        emit("loadeddata");
      } else if (event.type === "loadedmetadata") {
        state.metadataLoaded = true;
        __updateTracks();
        __updateTrackLanguage();
        __toggleCaptions();
        emit("loadedmetadata");
      } else if (event.type === "stalled") {
        emit("stalled");
      } else if (event.type === "suspend") {
        emit("suspend");
      } else if (event.type === "loadstart") {
        emit("loadstart");
      } else if (event.type === "pause") {
        state.playing = false;
        emit("paused");
      } else if (event.type === "play") {
        emit("play");
      } else if (event.type === "playing") {
        state.playing = true;
        emit("playing");
      } else if (event.type === "progress")
        ;
      else if (event.type === "ratechange")
        ;
      else if (event.type === "seeked")
        ;
      else if (event.type === "timeupdate") {
        state.currentTime = $media.value.currentTime;
        emit("timeupdate", $media.value.currentTime, state.remainingTime);
      } else if (event.type === "volumechange")
        ;
      else if (event.type === "waiting") {
        emit("waiting");
      }
    }
    function __mergeClassOrStyle(type, val) {
      const child = {};
      if (val !== void 0) {
        if (typeof val === "string") {
          if (type === "style") {
            const parts = val.replace(/\s+/g, "").split(";");
            parts.forEach((part) => {
              if (part !== "") {
                const data = part.split(":");
                child[data[0]] = data[1];
              }
            });
          } else if (type === "class") {
            const parts = val.split(" ");
            parts.forEach((part) => {
              if (part.replace(/\s+/g, "") !== "") {
                child[part] = true;
              }
            });
          }
        } else {
          Object.assign(child, val);
        }
      }
      return child;
    }
    function __cueChanged(data) {
    }
    function __checkCursor() {
      if (__isMediaAvailable.value === true) {
        if (state.inFullscreen && state.playing && !state.showControls) {
          $media.value.classList.remove("cursor-inherit");
          $media.value.classList.add("cursor-none");
        } else {
          $media.value.classList.remove("cursor-none");
          $media.value.classList.add("cursor-inherit");
        }
      }
    }
    function __adjustMenu() {
      const qmenu = menu.value;
      if (qmenu) {
        setTimeout(() => {
          qmenu.updatePosition();
        }, 350);
      }
    }
    function __videoClick(e) {
      __stopAndPrevent(e);
      if (props.mobileMode !== true) {
        togglePlay();
      }
    }
    function __bigButtonClick(e) {
      __stopAndPrevent(e);
      if (props.mobileMode) {
        hideControls();
      }
      togglePlay();
    }
    function __settingsMenuShowing(val) {
      settingsMenuVisible.value = val;
    }
    function __mouseLeaveVideo(e) {
      if (e.relatedTarget && e.relatedTarget.className === "q-pa-md") {
        if (!props.bottomControls && !props.mobileMode && !__isAudio.value && state.inControls !== true) {
          hideControls();
        }
      }
    }
    function __mouseMoveAction(e) {
      if (!props.bottomControls && !props.mobileMode && !__isAudio.value) {
        __showControlsIfValid(e);
      }
    }
    function __getParentEl(el, className) {
      if (!el)
        return null;
      if (el.className.startsWith(className)) {
        return el;
      }
      return __getParentEl(el.offsetParent, className);
    }
    function __showControlsIfValid(e) {
      const pos = $media.value.getBoundingClientRect();
      const el = __getParentEl(e.target, "q-media");
      if (!el)
        return;
      var rect = el.getBoundingClientRect();
      if (!pos || !rect)
        return false;
      if (rect.left === pos.left && rect.top === pos.top && rect.height === pos.height && rect.width === pos.width) {
        showControls();
        return true;
      }
      return false;
    }
    function __videoCurrentTimeChanged(val) {
      showControls();
      if (__isMediaAvailable.value === true && $media.value.duration && val && val > 0 && val <= state.duration) {
        if ($media.value.currentTime !== val) {
          state.currentTime = $media.value.currentTime = val;
        }
      }
    }
    function __volumePercentChanged(val) {
      showControls();
      state.volume = val;
    }
    function __trackLanguageChanged(language) {
      if (state.trackLanguage !== language) {
        state.trackLanguage = language;
      }
    }
    function __playbackRateChanged(rate) {
      if (state.playbackRate !== rate) {
        state.playbackRate = rate;
      }
    }
    function __showingMenu() {
      return settingsMenuVisible.value;
    }
    function __updateBigPlayButton() {
      if (state.showBigPlayButton !== props.showBigPlayButton) {
        state.showBigPlayButton = props.showBigPlayButton;
      }
    }
    function __updateVolume() {
      if (state.volume !== props.volume) {
        state.volume = props.volume;
      }
    }
    function __updateMuted() {
      if (state.muted !== props.muted) {
        state.muted = props.muted;
        if (__isMediaAvailable.value === true) {
          $media.value.muted = state.muted;
        }
      }
    }
    function __updateTrackLanguage() {
      if (state.trackLanguage !== props.trackLanguage || lang.mediaPlayer.trackLanguageOff) {
        state.trackLanguage = props.trackLanguage || lang.mediaPlayer.trackLanguageOff;
      }
    }
    function __updatePlaybackRates() {
      if (props.playbackRates && props.playbackRates.length > 0) {
        state.playbackRates = [...props.playbackRates];
      } else {
        state.playbackRates.splice(0, state.playbackRates.length);
        state.playbackRates.push({ label: lang.mediaPlayer.ratePoint5, value: 0.5 });
        state.playbackRates.push({ label: lang.mediaPlayer.rateNormal, value: 1 });
        state.playbackRates.push({ label: lang.mediaPlayer.rate1Point5, value: 1.5 });
        state.playbackRates.push({ label: lang.mediaPlayer.rate2, value: 2 });
      }
      state.trackLanguage = lang.mediaPlayer.trackLanguageOff;
    }
    function __updatePlaybackRate() {
      if (state.playbackRate !== props.playbackRate) {
        state.playbackRate = props.playbackRate;
      }
    }
    function __updateSources() {
      __removeSources();
      __addSources();
    }
    function __removeSources() {
      if (__isMediaAvailable.value === true) {
        __removeSourceEventListeners();
        $media.value.pause();
        $media.value.src = "";
        if ($media.value.currentTime) {
          $media.value.currentTime = 0;
        }
        const childNodes = $media.value.childNodes;
        for (let index2 = childNodes.length - 1; index2 >= 0; --index2) {
          if (childNodes[index2].tagName === "SOURCE") {
            $media.value.removeChild(childNodes[index2]);
          }
        }
        $media.value.load();
      }
    }
    function __addSources() {
      if (__isMediaAvailable.value === true) {
        let loaded = false;
        if (props.source && props.source.length > 0) {
          $media.value.src = props.source;
          loaded = true;
        } else {
          if (props.sources.length > 0) {
            props.sources.forEach((source) => {
              const s = document.createElement("SOURCE");
              s.src = source.src ? source.src : "";
              s.type = source.type ? source.type : "";
              $media.value.appendChild(s);
              if (!loaded && source.src) {
                $media.value.src = source.src;
                loaded = true;
              }
            });
          }
        }
        __reset();
        __addSourceEventListeners();
        $media.value.load();
      }
    }
    function __updateTracks() {
      __removeTracks();
      __addTracks();
    }
    function __removeTracks() {
      if (__isMediaAvailable.value === true) {
        const childNodes = $media.value.childNodes;
        for (let index2 = childNodes.length - 1; index2 >= 0; --index2) {
          if (childNodes[index2].tagName === "TRACK") {
            $media.value.removeChild(childNodes[index2]);
          }
        }
      }
    }
    function __addTracks() {
      if (__isVideo.value && __isMediaAvailable.value === true) {
        props.tracks.forEach((track) => {
          const t = document.createElement("TRACK");
          t.kind = track.kind ? track.kind : "";
          t.label = track.label ? track.label : "";
          t.src = track.src ? track.src : "";
          t.srclang = track.srclang ? track.srclang : "";
          $media.value.appendChild(t);
        });
        nextTick(() => {
          __toggleCaptions();
        });
      }
    }
    function __updatePoster() {
      if (__isMediaAvailable.value === true && props.poster) {
        $media.value.poster = props.poster;
      }
    }
    function __bigButtonPositionHeight() {
      if ($media.value) {
        return $media.value.clientTop + ($media.value.clientHeight / 2).toFixed(2) - 24 + "px";
      }
      return "50%";
    }
    function __mouseEnterControls() {
      state.inControls = true;
    }
    function __mouseLeaveControls() {
      state.inControls = false;
    }
    function __renderVideo() {
      const slot = slots.oldbrowser;
      const attrs = {
        poster: props.poster ? props.poster : false,
        preload: props.preload,
        playsinline: props.playsinline === true,
        loop: props.loop === true,
        autoplay: props.autoplay === true,
        muted: props.muted === true,
        width: props.contentWidth || void 0,
        height: props.contentHeight || void 0
      };
      nextTick(() => {
        if (__isMediaAvailable.value && props.nativeControls === true) {
          $media.value.controls = true;
        }
      }).catch((e) => console.error(e));
      return h("video", __spreadValues({
        ref: $media,
        class: __spreadValues(__spreadValues({}, __renderVideoClasses.value), __mergeClassOrStyle("class", props.contentClass)),
        style: __spreadValues({}, __contentStyle.value)
      }, attrs), hSlot(slot, h("p", lang.mediaPlayer.oldBrowserVideo)));
    }
    function __renderAudio() {
      const slot = slots.oldbrowser;
      const attrs = {
        poster: props.poster ? props.poster : false,
        preload: props.preload,
        playsinline: props.playsinline === true,
        loop: props.loop === true,
        autoplay: props.autoplay === true,
        muted: props.muted === true,
        width: props.contentWidth || void 0,
        height: props.contentHeight || void 0
      };
      nextTick(() => {
        if (__isMediaAvailable.value && props.nativeControls === true) {
          $media.value.controls = true;
        }
      }).catch((e) => console.error(e));
      return h(props.noVideo === true ? "audio" : "video", __spreadValues({
        ref: $media,
        class: __spreadValues({
          "q-media--player": true
        }, __mergeClassOrStyle("class", props.contentClass)),
        style: props.contentStyle
      }, attrs), hSlot(slot, h("p", lang.mediaPlayer.oldBrowserAudio)));
    }
    function __renderOverlayWindow() {
      if (slots.overlay) {
        return h("div", {
          class: "q-media__overlay-window fit"
        }, slots.overlay());
      }
    }
    function errorWindowCloseButton() {
      return h(QBtn, {
        class: "q-media__error-window--button",
        onClick: () => {
          state.errorText = null;
        },
        icon: matClose,
        flat: true,
        size: "sm"
      });
    }
    function __renderErrorWindow() {
      const slot = slots.errorWindow;
      return h("div", {
        class: "q-media__error-window"
      }, hSlot(slot, h("span", [state.errorText, errorWindowCloseButton()])));
    }
    function __renderPlayButton() {
      if (props.hidePlayBtn === true)
        return;
      const slot = slots.play;
      const properties = {
        icon: state.playing ? iconSet.mediaPlayer.pause : iconSet.mediaPlayer.play,
        size: "1rem",
        disable: !state.playReady,
        flat: true,
        padding: "4px"
      };
      const events = {
        onClick: togglePlay
      };
      return slot && slot() || h(QBtn, __spreadValues(__spreadValues({
        class: "q-media__controls--button play-button"
      }, properties), events), () => [
        props.showTooltips && state.playing && h(QTooltip, () => lang.mediaPlayer.pause),
        props.showTooltips && !state.playing && state.playReady && h(QTooltip, () => lang.mediaPlayer.play)
      ]);
    }
    function __renderVideoControls() {
      const slot = slots.controls;
      const events = {
        onClick: __stopAndPrevent,
        onMouseenter: __mouseEnterControls,
        onMouseleave: __mouseLeaveControls
      };
      if (slot) {
        return h("div", __spreadValues({
          ref: controls,
          class: __spreadValues({
            "q-media__controls": true,
            "q-media__controls--overlay": __isVideo.value === true && state.bottomControls !== true
          }, __videoControlsClasses.value)
        }, events), slot());
      }
      return h("div", __spreadValues({
        ref: controls,
        class: __spreadValues({
          "q-media__controls": true,
          "q-media__controls--overlay": __isVideo.value === true && state.bottomControls !== true
        }, __videoControlsClasses.value)
      }, events), [
        props.dense && h("div", {
          class: "q-media__controls--row row col content-start items-center"
        }, [
          h("div", [
            __renderPlayButton(),
            props.showTooltips && !state.playReady && h(QTooltip, () => lang.mediaPlayer.waitingVideo)
          ]),
          __renderVolumeButton(),
          __renderVolumeSlider(),
          __renderDisplayTime(),
          __renderCurrentTimeSlider(),
          __renderDurationTime(),
          __renderSettingsButton(),
          $q.fullscreen !== void 0 && props.hideFullscreenBtn !== true && __renderFullscreenButton()
        ]),
        !props.dense && h("div", {
          class: "q-media__controls--row row col items-center justify-between"
        }, [
          __renderDisplayTime(),
          __renderCurrentTimeSlider(),
          __renderDurationTime()
        ]),
        !props.dense && h("div", {
          class: "q-media__controls--row row col content-start items-center"
        }, [
          h("div", {
            class: "row col"
          }, [
            h("div", [
              __renderPlayButton(),
              props.showTooltips && !state.playReady && h(QTooltip, () => lang.mediaPlayer.waitingVideo)
            ]),
            __renderVolumeButton(),
            __renderVolumeSlider()
          ]),
          h("div", [
            __renderSettingsButton(),
            $q.fullscreen !== void 0 && props.hideFullscreenBtn !== true && __renderFullscreenButton()
          ])
        ])
      ]);
    }
    function __renderAudioControls() {
      const slot = slots.controls;
      return slot && slot() || h("div", {
        ref: controls,
        class: __spreadValues({
          "q-media__controls": true
        }, __audioControlsClasses.value)
      }, [
        props.dense && h("div", {
          class: "q-media__controls--row row col content-start items-center"
        }, [
          h("div", [
            __renderPlayButton(),
            props.showTooltips && !state.playReady && h(QTooltip, () => lang.mediaPlayer.waitingAudio)
          ]),
          __renderVolumeButton(),
          __renderVolumeSlider(),
          __renderDisplayTime(),
          __renderCurrentTimeSlider(),
          __renderDurationTime()
        ]),
        !props.dense && h("div", {
          class: "q-media__controls--row row col items-center justify-between"
        }, [
          __renderDisplayTime(),
          __renderCurrentTimeSlider(),
          __renderDurationTime()
        ]),
        !props.dense && h("div", {
          class: "q-media__controls--row row col content-start items-center"
        }, [
          h("div", [
            __renderPlayButton(),
            props.showTooltips && !state.playReady && h(QTooltip, () => lang.mediaPlayer.waitingAudio)
          ]),
          __renderVolumeButton(),
          __renderVolumeSlider()
        ])
      ]);
    }
    function __renderVolumeButton() {
      if (props.hideVolumeBtn === true) {
        return;
      }
      const slot = slots.volume;
      const properties = {
        icon: __volumeIcon.value,
        size: "1rem",
        disable: !state.playReady,
        flat: true,
        padding: "4px"
      };
      const events = {
        onClick: toggleMuted
      };
      return slot && slot() || h(QBtn, __spreadValues(__spreadValues({
        class: "q-media__controls--button volume-button",
        style: {
          color: props.dark === true || $q.dark.isActive ? "var(--mediaplayer-color-dark)" : "var(--mediaplayer-color)"
        }
      }, properties), events), () => [
        props.showTooltips === true ? state.muted === true ? h(QTooltip, () => lang.mediaPlayer.unmute) : h(QTooltip, () => lang.mediaPlayer.mute) : void 0
      ]);
    }
    function __renderVolumeSlider() {
      if (props.hideVolumeSlider === true || props.hideVolumeBtn === true) {
        return;
      }
      const slot = slots.volumeSlider;
      const properties = {
        modelValue: state.volume,
        dark: props.dark,
        min: 0,
        max: 100,
        disable: !state.playReady || state.muted
      };
      const events = {
        onChange: __volumePercentChanged
      };
      return slot && slot() || h(QSlider, __spreadValues(__spreadValues({
        class: "col",
        style: {
          width: "20%",
          margin: "0 0.5rem",
          minWidth: props.dense ? "20px" : "50px",
          maxWidth: props.dense ? "50px" : "200px",
          color: props.dark === true || $q.dark.isActive ? "var(--mediaplayer-color-dark)" : "var(--mediaplayer-color)"
        }
      }, properties), events));
    }
    function __renderSettingsButton() {
      if (props.hideSettingsBtn === true) {
        return;
      }
      const slot = slots.settings;
      const properties = {
        icon: iconSet.mediaPlayer.settings,
        size: "1rem",
        disable: !state.playReady,
        flat: true,
        padding: "4px"
      };
      return slot && slot() || h(QBtn, __spreadValues({
        class: "q-media__controls--button settings-button"
      }, properties), () => [
        props.showTooltips === true && !settingsMenuVisible.value ? h(QTooltip, () => lang.mediaPlayer.settings) : void 0,
        __renderSettingsMenu()
      ]);
    }
    function __renderFullscreenButton() {
      const slot = slots.fullscreen;
      const properties = {
        icon: state.inFullscreen ? iconSet.mediaPlayer.fullscreenExit : iconSet.mediaPlayer.fullscreen,
        size: "1rem",
        disable: !state.playReady,
        flat: true,
        padding: "4px"
      };
      const events = {
        onClick: toggleFullscreen
      };
      return slot && slot() || h(QBtn, __spreadValues(__spreadValues({
        class: "q-media__controls--button fullscreen-button"
      }, properties), events), () => [
        props.showTooltips === true ? h(QTooltip, () => lang.mediaPlayer.toggleFullscreen) : void 0
      ]);
    }
    function __renderLoader() {
      if (props.spinnerSize === void 0) {
        if (__isVideo.value)
          state.spinnerSize = "3em";
        else
          state.spinnerSize = "1.5em";
      } else {
        state.spinnerSize = props.spinnerSize;
      }
      const slot = slots.spinner;
      return slot && slot() || h("div", {
        class: __isVideo.value ? "q-media__loading--video" : "q-media__loading--audio"
      }, [
        h(QSpinner, {
          size: state.spinnerSize
        })
      ]);
    }
    function __renderBigPlayButton() {
      const slot = slots.bigPlayButton;
      const events = {
        onClick: __bigButtonClick
      };
      return slot && slot() || h("div", {
        class: {
          "q-media--big-button q-media--big-button-bottom-controls": state.bottomControls === true,
          "q-media--big-button": state.bottomControls !== true
        },
        style: {
          top: __bigButtonPositionHeight()
        }
      }, [
        h(QIcon, __spreadValues({
          name: iconSet.mediaPlayer.bigPlayButton,
          class: "q-media--big-button-icon"
        }, events))
      ]);
    }
    function __renderCurrentTimeSlider() {
      const slot = slots.positionSlider;
      const properties = {
        modelValue: state.currentTime,
        dark: props.dark,
        min: 0,
        max: state.duration ? state.duration : 1,
        disable: !state.playReady || props.disabledSeek
      };
      const events = {
        onChange: __videoCurrentTimeChanged
      };
      return slot && slot() || h(QSlider, __spreadValues(__spreadValues({
        class: "col",
        style: {
          margin: "0 0.5rem",
          color: props.dark === true || $q.dark.isActive ? "var(--mediaplayer-color-dark)" : "var(--mediaplayer-color)"
        }
      }, properties), events));
    }
    function __renderDisplayTime() {
      const slot = slots.displayTime;
      return slot && slot() || h("span", {
        class: "q-media__controls--video-time-text text-left",
        style: {
          color: props.dark === true || $q.dark.isActive ? "var(--mediaplayer-color-dark)" : "var(--mediaplayer-color)"
        }
      }, state.displayTime);
    }
    function __renderDurationTime() {
      if (__isMediaAvailable.value !== true)
        return;
      const slot = slots.durationTime;
      const isInfinity = !isFinite($media.value.duration);
      return slot && slot() || h("span", {
        class: "q-media__controls--video-time-text text-right",
        style: {
          width: isInfinity ? "30px" : "auto",
          color: props.dark === true || $q.dark.isActive ? "var(--mediaplayer-color-dark)" : "var(--mediaplayer-color)"
        }
      }, [
        __isMediaAvailable.value === true && isInfinity !== true && state.durationTime,
        __isMediaAvailable.value === true && isInfinity === true && __renderInfinitySvg()
      ]);
    }
    function __renderInfinitySvg() {
      return h("svg", {
        height: "16",
        viewbox: "0 0 16 16"
      }, [
        h("path", {
          fill: "none",
          color: props.dark === true || $q.dark.isActive ? "var(--mediaplayer-color-dark)" : "var(--mediaplayer-color)",
          strokeWidth: "2",
          d: "M8,8 C16,0 16,16 8,8 C0,0 0,16 8,8z"
        })
      ]);
    }
    function __renderSettingsMenu() {
      const slot = slots.settingsMenu;
      const properties = {
        anchor: "top right",
        self: "bottom right"
      };
      const events = {
        onShow: () => {
          __settingsMenuShowing(true);
        },
        onHide: () => {
          __settingsMenuShowing(false);
        }
      };
      return h(QMenu, __spreadValues(__spreadValues({
        ref: menu
      }, properties), events), () => [
        slot && slot() || h("div", [
          state.playbackRates.length > 0 && h(QExpansionItem, {
            group: "settings-menu",
            expandSeparator: true,
            icon: iconSet.mediaPlayer.speed,
            label: lang.mediaPlayer.speed,
            caption: __settingsPlaybackCaption.value,
            onShow: __adjustMenu,
            onHide: __adjustMenu
          }, () => [
            h(QList, {
              highlight: true
            }, () => [
              state.playbackRates.map((rate) => {
                return withDirectives(h(QItem, {
                  key: rate.value,
                  clickable: true,
                  dense: true,
                  onClick: (e) => {
                    __stopAndPrevent(e);
                    __playbackRateChanged(rate.value);
                  }
                }, () => [
                  h(QItemSection, {
                    avatar: true
                  }, () => [
                    rate.value === state.playbackRate && h(QIcon, {
                      name: iconSet.mediaPlayer.selected
                    })
                  ]),
                  h(QItemSection, () => rate.label)
                ]), [[
                  ClosePopup
                ]]);
              })
            ])
          ]),
          __selectTracksLanguageList.value.length > 1 && h(QExpansionItem, {
            group: "settings-menu",
            expandSeparator: true,
            icon: iconSet.mediaPlayer.language,
            label: lang.mediaPlayer.language,
            caption: state.trackLanguage,
            onShow: __adjustMenu,
            onHide: __adjustMenu
          }, () => [
            h(QList, {
              highlight: true
            }, () => [
              __selectTracksLanguageList.value.map((language) => {
                return withDirectives(h(QItem, {
                  key: language.value,
                  clickable: true,
                  dense: true,
                  onClick: (e) => {
                    __stopAndPrevent(e);
                    __trackLanguageChanged(language.value);
                  }
                }, () => [
                  h(QItemSection, {
                    avatar: true
                  }, () => [
                    language.value === state.trackLanguage && h(QIcon, {
                      name: iconSet.mediaPlayer.selected
                    })
                  ]),
                  h(QItemSection, () => language.label)
                ]), [[
                  ClosePopup
                ]]);
              })
            ])
          ])
        ])
      ]);
    }
    function __renderMediaPlayer() {
      const events = {
        onMousemove: __mouseMoveAction,
        onMouseleave: __mouseLeaveVideo,
        onClick: __videoClick
      };
      return h("div", __spreadValues({
        class: __spreadValues({
          "q-media--dark": props.dark === true,
          "q-media": true
        }, __classes.value),
        style: {
          borderRadius: !state.inFullscreen ? props.radius : 0,
          height: __isVideo.value ? "auto" : props.dense ? "40px" : "80px"
        }
      }, events), canRender.value === true ? [
        __isVideo.value && __renderVideo(),
        __isAudio.value && __renderAudio(),
        __renderOverlayWindow(),
        state.errorText && __renderErrorWindow(),
        __isVideo.value && !state.noControls && !state.errorText && __renderVideoControls(),
        __isAudio.value && !state.noControls && !state.errorText && __renderAudioControls(),
        props.showSpinner === true && state.loading && !state.playReady && !state.errorText && __renderLoader(),
        __isVideo.value && props.showBigPlayButton && state.playReady && !state.playing && __renderBigPlayButton()
      ] : void 0);
    }
    expose({
      loadFileBlob,
      showControls,
      hideControls,
      toggleControls,
      play,
      pause,
      mute,
      unmute,
      togglePlay,
      toggleMuted,
      toggleFullscreen,
      setFullscreen,
      exitFullscreen,
      currentTime,
      setCurrentTime,
      setVolume,
      $media
    });
    return () => __renderMediaPlayer();
  }
});
const version = "2.0.0-beta.5";
var index = {
  version,
  QMediaPlayer,
  install(app) {
    app.component(QMediaPlayer.name, QMediaPlayer);
  }
};
export { QMediaPlayer as Q, matPause as a, matVolumeOff as b, matVolumeDown as c, matVolumeUp as d, matSettings as e, matDirectionsRun as f, matClosedCaption as g, matCheck as h, matFullscreen as i, matFullscreenExit as j, index as k, matPlayArrow as m, version as v };
