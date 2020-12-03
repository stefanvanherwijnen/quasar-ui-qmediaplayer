(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"0960":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("hero",[a("div",{staticClass:"q-markdown"},[a("q-markdown",[t._v("\n> Music courtesy of [Free Music Archive](https://freemusicarchive.org/music/Scott_Holmes/Inspiring__Upbeat_Music/Scott_Holmes_-_Upbeat_Party)\n> Videos and subtitles courtesy of [Blender Organization](https://mango.blender.org/download) and [here](https://durian.blender.org/download/)\n\n::: warning\nThe videos are remotely hosted and may have issues loading depending where you live\n:::\n\n      ")]),a("example-title",{attrs:{title:"Basic"}}),a("example-viewer",{attrs:{title:"Audio - Basic",file:"AudioBasic","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),a("example-viewer",{attrs:{title:"Video - Basic",file:"VideoBasic","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),a("example-title",{attrs:{title:"Color"}}),a("example-viewer",{attrs:{title:"Audio - Color",file:"AudioColor","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),a("example-viewer",{attrs:{title:"Video - Color",file:"VideoColor","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}},[a("q-markdown",[t._v("\n::: tip\nThe color of the Big Play Button can also be changed independently\n:::\n        ")])],1),a("example-title",{attrs:{title:"Background Color"}}),a("example-viewer",{attrs:{title:"Audio - Background Color",file:"AudioBackgroundColor","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),a("example-viewer",{attrs:{title:"Video - Background Color",file:"VideoBackgroundColor","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}},[a("q-markdown",[t._v("\n::: info\nThe background color of the video view is only visible until the video is loaded.\n:::\n        ")])],1),a("example-title",{attrs:{title:"Poster"}}),a("example-viewer",{attrs:{title:"Video - Poster",file:"VideoPoster","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),a("example-title",{attrs:{title:"Dark"}}),a("example-viewer",{attrs:{title:"Audio - Dark",file:"AudioDark","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),a("example-viewer",{attrs:{title:"Video - Dark",file:"VideoDark","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),a("example-title",{attrs:{title:"Dense"}}),a("example-viewer",{attrs:{title:"Audio - Dense",file:"AudioDense","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),a("example-viewer",{attrs:{title:"Video - Dense",file:"VideoDense","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),a("example-title",{attrs:{title:"No Video (on audio)"}}),a("q-markdown",[t._v('\nQMediaPlayer uses the `video` tag, even for audio. This decision was made because of issues when dynamically switching between `audio` and `video` elements.\n\nThe problem now is if you want to just play the audio of a video file, then the `audio` element **must** be used.\n\nYou can now do this by using the `type="audio"` along with `no-video` properties.\n      ')]),a("example-viewer",{attrs:{title:"Audio - No Video",file:"AudioNoVideo","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),a("example-title",{attrs:{title:"Hide Volume Slider"}}),a("q-markdown",[t._v("\nThe `hide-volumn-slider` property is available to hide the volume slider control, which is more applicable to mobile devices, but can also be used for desktops as well.\n      ")]),a("example-viewer",{attrs:{title:"Audio - Hide Volume Slider",file:"AudioHideVolumeSlider","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),a("example-viewer",{attrs:{title:"Video - Hide Volume Slider",file:"VideoHideVolumeSlider","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),a("example-viewer",{attrs:{title:"Audio - Hide Volume Slider (Dense)",file:"AudioHideVolumeSliderDense","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),a("example-viewer",{attrs:{title:"Video - Hide Volume Slider (Dense)",file:"VideoHideVolumeSliderDense","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),a("example-title",{attrs:{title:"Disabled Seek"}}),a("example-viewer",{attrs:{title:"Audio - Disabled Seek",file:"AudioDisabledSeek","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),a("example-viewer",{attrs:{title:"Video - Disabled Seek",file:"VideoDisabledSeek","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),a("example-title",{attrs:{title:"Bottom Controls"}}),a("example-viewer",{attrs:{title:"Audio - Bottom Controls",file:"AudioBottomControls","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),a("example-viewer",{attrs:{title:"Video - Bottom Controls",file:"VideoBottomControls","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),a("example-viewer",{attrs:{title:"Video - Bottom Controls Slot",file:"VideoBottomControlsSlot","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),a("example-title",{attrs:{title:"Behavior"}}),a("example-viewer",{attrs:{title:"Portrait",file:"VideoPortrait","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),a("example-title",{attrs:{title:"Mobile Mode"}}),a("example-viewer",{attrs:{title:"Video - Mobile Mode",file:"VideoMobileMode","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}},[a("q-markdown",[t._v("\nThe `mobile-mode` property is available to turn off the hover effect that displays the controls window. With `mobile-mode` touching (clicking) the video will toggle the controls display. You can use this property for desktops too!\n        ")])],1),a("example-title",{attrs:{title:"Source"}}),a("q-markdown",[t._v("\nIt is preferable to use the property `sources` rather than `source` so the browser can have the associated type of media file, rather than relying on the extension.\n      ")]),a("example-viewer",{attrs:{title:"Audio - Source",file:"AudioSource","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),a("example-viewer",{attrs:{title:"Video - Source",file:"VideoSource","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),a("example-title",{attrs:{title:"Source (Blob)"}}),a("q-markdown",[t._v("\nThe examples below show how you can query your user for local audio or video files and inject them into QMediaPlayer using the `loadFileBlob` method, which expectes a [FileList](https://developer.mozilla.org/en-US/docs/Web/API/FileList).\n\nNote: These examples have `autoplay` turned on.\n      ")]),a("example-viewer",{attrs:{title:"Audio - Source (Blob)",file:"AudioSourceBlob","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),a("example-viewer",{attrs:{title:"Video - Source (Blob)",file:"VideoSourceBlob","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),a("example-title",{attrs:{title:"Tracks"}}),a("q-markdown",[t._v("\n> Tracks, are also known as captions or subtitles. When enabled, it can be changed from the configuration icon.\n      ")]),a("example-viewer",{attrs:{title:"Video - Tracks",file:"VideoTracks","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),a("q-markdown",[t._v("\nIn the example below, the default language track has been set to French.\n      ")]),a("example-viewer",{attrs:{title:"Video - Track Language",file:"VideoTrackLanguage","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),a("example-title",{attrs:{title:"Language"}}),a("q-markdown",[t._v("\nNot all languages have been translated. If you can help out, please [PR a language pack](https://github.com/quasarframework/quasar-ui-qmediaplayer/tree/dev/src/component/lang).\n\n> QMediaPlayer does not have a property to set the language directly. It uses Quasar's internal language support indirectly. When that switches, then QMediaPlayer also switches to that language.\n      ")]),a("example-viewer",{attrs:{title:"Video - Language",file:"VideoLanguage","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),a("example-title",{attrs:{title:"Slot"}}),a("example-viewer",{attrs:{title:"Video - Slot",file:"VideoSlot","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),a("example-title",{attrs:{title:"Icon Set"}}),a("q-markdown",[t._v("\n> QMediaPlayer does not have a property to set the icon set directly. It uses Quasar's internal icon set support indirectly. When that switches, then QMediaPlayer also switches to the corresponding icon set.\nIn the examples below, when the icon set is changed, you will notice that all media players on this page also change their icon set.\n      ")]),a("example-viewer",{attrs:{title:"Audio - Icon Set",file:"AudioIconSet","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),a("example-viewer",{attrs:{title:"Video - Icon Set",file:"VideoIconSet","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),a("example-title",{attrs:{title:"Video - Start time"}}),a("q-markdown",[t._v("\n> You can define the audio/video media time fragment using a `#t=` parameter. It accepts a start and an end time (optional) and can be given in seconds or real time.\n>\n> Example: `ElephantsDream.mp4#t=90` (seconds) to start at time at 01:30.\n> Example: `ElephantsDream.mp4#t=,90` (seconds) to start at time at 0 and stop at 01:30.\n>\n> The _real time_ is given in _hours:minutes:seconds_. Example: `ElephantsDream.mp4#t=00:01:05` to start at time at 01:05 or `ElephantsDream.mp4#t=00:01:05,00:02:05` to start at 1:05 and end at 2:05.\n>\n> Note: to play framments, you need to make sure **Range Requests** are supported by your server: check for `Accept Ranges: bytes`. It's on by default for Apache and many other servers, but worth checking.\n\n::: warning\nInternet Explorer 11 ignores the start time fragment parameter\n:::\n\n      ")]),a("example-viewer",{attrs:{title:"Video - Start time",file:"VideoStartTime","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),a("div",{staticStyle:{height:"100px"}})],1),a("q-page-scroller",{attrs:{position:"bottom-right","scroll-offset":150,offset:[18,18]}},[a("q-btn",{class:{"text-black bg-grey-4":t.$q.dark.isActive,"text-white bg-primary":!t.$q.dark.isActive},attrs:{fab:"",icon:"keyboard_arrow_up"}})],1)],1)},s=[],i=a("2514"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",{staticClass:"q-markdown--heading-h1 q-markdown--title-heavy example-title",attrs:{id:t.slugifiedTitle},on:{click:function(e){return t.copyHeading(t.slugifiedTitle)}}},[t._v(t._s(t.title))])},r=[];a("ac1f"),a("5319"),a("498a");function n(t){var e=document.createElement("textarea");e.className="fixed-top",e.value=t,document.body.appendChild(e),e.focus(),e.select(),document.execCommand("copy"),document.body.removeChild(e)}function d(t){var e=window.location.origin+window.location.pathname+"#"+t,a=document.getElementById(t);a&&(a.id=""),window.location.hash="#"+t,a&&setTimeout((function(){a.id=t}),300),n(e),this.$q.notify({message:"Anchor has been copied to clipboard.",color:"white",textColor:"primary",icon:"done",position:"top",timeout:2e3})}function c(t){return encodeURIComponent(String(t).trim().replace(/\s+/g,"-"))}var h={name:"ExampleTitle",props:{title:{type:String,required:!0}},computed:{slugifiedTitle:function(){return c("title-"+this.title)}},methods:{copyHeading:d}},u=h,p=a("2877"),m=Object(p["a"])(u,l,r,!1,null,null,null),T=m.exports,v=a("384e"),f={name:"Examples",components:{Hero:i["a"],ExampleTitle:T},data:function(){return{tempToc:[],locationUrl:"https://github.com/quasarframework/quasar-ui-qmediaplayer/tree/dev/demo/src/examples/",jsPaths:["https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qmediaplayer@".concat(v["b"],"/dist/index.umd.min.js"),"https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qmediaplayer@".concat(v["b"],"/dist/lang/en-us.umd.js"),"https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qmediaplayer@".concat(v["b"],"/dist/icon-set/material-icons.umd.js")],cssPaths:["https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qmediaplayer@".concat(v["b"],"/dist/index.min.css")]}},mounted:function(){this.toc=[],this.tempToc=[],this.addToToc("Basic"),this.addToToc("Audio - Basic",2),this.addToToc("Video - Basic",2),this.addToToc("Background Color"),this.addToToc("Audio - Background Color",2),this.addToToc("Video - Background Color",2),this.addToToc("Poster"),this.addToToc("Video - Poster",2),this.addToToc("Dark"),this.addToToc("Audio - Dark",2),this.addToToc("Video - Dark",2),this.addToToc("Dense"),this.addToToc("Audio - Dense",2),this.addToToc("Video - Dense",2),this.addToToc("No Video (on audio)"),this.addToToc("Audio - No Video",2),this.addToToc("Hide Volume Slider"),this.addToToc("Audio - Hide Volume Slider",2),this.addToToc("Video - Hide Volume Slider",2),this.addToToc("Audio - Hide Volume Slider (Dense)",2),this.addToToc("Video - Hide Volume Slider (Dense)",2),this.addToToc("Disabled Seek"),this.addToToc("Audio - Disabled Seek",2),this.addToToc("Video - Disabled Seek",2),this.addToToc("Bottom Controls"),this.addToToc("Audio - Bottom Controls",2),this.addToToc("Video - Bottom Controls",2),this.addToToc("Video - Bottom Controls Slot",2),this.addToToc("Behavior"),this.addToToc("Portrait",2),this.addToToc("Mobile Mode"),this.addToToc("Video - Mobile Mode",2),this.addToToc("Source"),this.addToToc("Audio - Source",2),this.addToToc("Video - Source",2),this.addToToc("Source (Blob)"),this.addToToc("Audio - Source (Blob)",2),this.addToToc("Video - Source (Blob)",2),this.addToToc("Tracks"),this.addToToc("Video - Tracks",2),this.addToToc("Video - Track Language",2),this.addToToc("Language"),this.addToToc("Video - Language",2),this.addToToc("Slot"),this.addToToc("Video - Slot",2),this.addToToc("Icon Set"),this.addToToc("Audio - Icon Set",2),this.addToToc("Video - Icon Set",2),this.addToToc("Video - Start time"),this.addToToc("Video - Start time",2),this.toc=this.tempToc},computed:{toc:{get:function(){return this.$store.state.common.toc},set:function(t){this.$store.commit("common/toc",t)}}},methods:{addToToc:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=t;a=1===e?"title-"+a:"example-"+a;var o=c(a);this.tempToc.push({children:[],id:o,label:t,level:e})}}},b=f,w=a("5096"),g=a("9c40"),x=a("eebe"),P=a.n(x),y=Object(p["a"])(b,o,s,!1,null,null,null);e["default"]=y.exports;P()(y,"components",{QPageScroller:w["a"],QBtn:g["a"]})},2514:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("section",{staticClass:"page-header"},[a("div",{staticClass:"donate"},[a("a",{attrs:{href:t.donateUrl,target:"_blank",title:"Donate"}},[a("i",{staticClass:"fas fa-heart",staticStyle:{color:"red"}})])]),a("div",{staticClass:"text-h1 project-name"},[t._v(t._s(t.title))]),a("div",{staticClass:"text-h2 project-tagline"},[t._v(t._s(t.tagline))]),a("q-btn",{staticClass:"btn",attrs:{type:"a",href:t.locationUrl,target:"_blank",label:"View on GitHub","no-caps":"",flat:""}}),a("q-btn",{staticClass:"btn",attrs:{to:"/docs",label:"Docs","no-caps":"",flat:""}}),a("q-btn",{staticClass:"btn",attrs:{to:"/examples",label:"Examples","no-caps":"",flat:""}}),t.hasInteractiveDemo?a("q-btn",{staticClass:"btn",attrs:{to:"/demo",label:"Interactive Demo","no-caps":"",flat:""}}):t._e(),a("q-btn",{staticClass:"btn",attrs:{type:"a",href:t.donateUrl,target:"_blank",label:"Donate","no-caps":"",flat:""}}),a("div",{staticClass:"row justify-evenly items-center q-ma-sm"},[a("div",{staticClass:"quasar"},[t._v(t._s(t.quasarDesc))]),a("div",{staticClass:"byline"},[t._v(t._s(t.byline)+" "),a("a",{attrs:{href:t.bylineTwitter,target:"_blank",title:"Twitter"}},[a("i",{staticClass:"fab fa-twitter"})])])])],1),a("main",{staticClass:"flex flex-start justify-center inset-shadow"},[a("div",{staticClass:"q-pa-md col-12-sm col-8-md col-6-lg inset-shadow",staticStyle:{width:"100%",height:"3px"}}),a("div",{staticClass:"q-pa-md col-12-sm col-8-md col-6-lg shadow-1",staticStyle:{"max-width":"800px",width:"100%"}},[t._t("default")],2)])])},s=[],i={name:"Hero",data:function(){return{title:"QMediaPlayer",tagline:"Embeddable HTML5 Media Player for your Quasar App",byline:"Created and maintained by Jeff Galbraith",bylineTwitter:"https://twitter.com/jgalbraith64",quasarDesc:"A Quasar Framework Component and App Extension",locationUrl:"https://github.com/quasarframework/quasar-ui-qmediaplayer",donateUrl:"https://github.com/sponsors/hawkeye64",hasInteractiveDemo:!0}}},l=i,r=a("2877"),n=a("9c40"),d=a("eebe"),c=a.n(d),h=Object(r["a"])(l,o,s,!1,null,null,null);e["a"]=h.exports;c()(h,"components",{QBtn:n["a"]})}}]);