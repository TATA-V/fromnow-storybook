(self.webpackChunkFromNowStorybook=self.webpackChunkFromNowStorybook||[]).push([[4504],{"./src/stories/camera/Timer.stories.tsx":(module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.Basic=void 0;var _nativewind=__webpack_require__("./node_modules/nativewind/dist/index.js"),_Timer=(_interopRequireDefault(__webpack_require__("./node_modules/react/index.js")),_interopRequireDefault(__webpack_require__("./libs/fromnow/src/components/Camera/Timer.tsx"))),_View=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/View/index.js")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");exports.default={title:"camera/Timer",components:_Timer.default,tags:["autodocs"]},exports.Basic=function Basic(){return(0,_jsxRuntime.jsx)(_nativewind.StyledComponent,{className:"bg-black/10",component:_View.default,children:(0,_jsxRuntime.jsx)(_Timer.default,{})})};_nativewind.NativeWindStyleSheet.create({styles:{"bg-black/10":{backgroundColor:"rgba(0, 0, 0, 0.1)"}}}),module.exports.__namedExportsOrder=["Basic"]},"./libs/fromnow/src/assets/icons/AlarmIcon.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./libs/fromnow/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;_interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));var _reactNativeSvg=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react-native-svg-web/index.js")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}var AlarmIcon=function AlarmIcon(_ref){var _ref$color=_ref.color,color=void 0===_ref$color?"#fff":_ref$color;return(0,_jsxRuntime.jsx)(_reactNativeSvg.default,{viewBox:"0 0 24 24",width:24,height:24,fill:"none",children:(0,_jsxRuntime.jsx)(_reactNativeSvg.Path,{fill:color,fillRule:"evenodd",d:"M12 22c4.835 0 8.756-3.884 8.756-8.675 0-4.79-3.92-8.674-8.757-8.674s-8.757 3.883-8.757 8.674C3.242 18.116 7.162 22 12 22Zm0-13.253c.402 0 .73.324.73.723v3.556l2.217 2.198a.72.72 0 0 1 0 1.022.735.735 0 0 1-1.032 0l-2.432-2.41a.72.72 0 0 1-.214-.51V9.47c0-.4.327-.723.73-.723ZM8.24 2.34a.72.72 0 0 1-.233.996l-3.89 2.41a.734.734 0 0 1-1.007-.23.72.72 0 0 1 .232-.996l3.892-2.41a.734.734 0 0 1 1.006.23m7.52 0a.734.734 0 0 1 1.004-.23l3.892 2.41a.72.72 0 0 1-.223 1.318.734.734 0 0 1-.55-.092l-3.892-2.41a.72.72 0 0 1-.233-.996",clipRule:"evenodd"})})};exports.default=AlarmIcon;AlarmIcon.__docgenInfo={description:"",methods:[],displayName:"AlarmIcon",props:{color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#fff'",computed:!1}}}}},"./libs/fromnow/src/components/Camera/Timer.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./libs/fromnow/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _slicedToArray2=_interopRequireDefault(__webpack_require__("./libs/fromnow/node_modules/@babel/runtime/helpers/slicedToArray.js")),_nativewind=__webpack_require__("./libs/fromnow/node_modules/nativewind/dist/index.js"),_react=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_View=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/View/index.js")),_Text=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Text/index.js")),_AlarmIcon=_interopRequireDefault(__webpack_require__("./libs/fromnow/src/assets/icons/AlarmIcon.tsx")),_momentModificationRn=_interopRequireDefault(__webpack_require__("./libs/fromnow/node_modules/moment-modification-rn/moment.js")),_useNavi2=_interopRequireDefault(__webpack_require__("./libs/fromnow/src/hooks/useNavi.ts")),_moti=__webpack_require__("./libs/fromnow/node_modules/moti/build/index.js"),_useToast2=_interopRequireDefault(__webpack_require__("./libs/fromnow/src/hooks/useToast.ts")),_reactNativeReanimated=__webpack_require__("./libs/fromnow/node_modules/react-native-reanimated/lib/module/index.js"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}var Timer=function Timer(){var totalDuration=_momentModificationRn.default.duration(5,"minutes"),_useState=(0,_react.useState)(totalDuration),_useState2=(0,_slicedToArray2.default)(_useState,2),time=_useState2[0],setTime=_useState2[1],navigation=(0,_useNavi2.default)().navigation,warnToast=(0,_useToast2.default)().warnToast;(0,_react.useEffect)((function(){var interval=null;return setTime(totalDuration),interval=setInterval((function(){setTime((function(prev){var newTime=prev.clone().subtract(1,"seconds");return newTime.asSeconds()<=0?(clearInterval(interval),navigation.navigate("Bottom",{screen:"Home"}),warnToast("⏰시간이 다 되었어요! 다시 촬영해보세요",{duration:5e3}),_momentModificationRn.default.duration(0)):newTime}))}),1e3),function(){return clearInterval(interval)}}),[]);var progressPercentage=100*(1-time.asMilliseconds()/totalDuration.asMilliseconds()),formattedTime=function formatTime(totalSeconds){var minutes=Math.floor(totalSeconds/60),seconds=totalSeconds%60;return`${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`}(time.asSeconds()),shouldAnimate=time.asMinutes()<=1;return(0,_jsxRuntime.jsxs)(_nativewind.StyledComponent,{className:"h-[68px] w-full justify-center px-4",component:_View.default,children:[(0,_jsxRuntime.jsx)(_nativewind.StyledComponent,{className:"relative h-[20px] rounded-[8px] bg-black/40",component:_View.default,children:(0,_jsxRuntime.jsx)(_View.default,{children:(0,_jsxRuntime.jsxs)(_nativewind.StyledComponent,{style:{width:100-progressPercentage+"%"},className:(shouldAnimate?"bg-fnRed":"bg-white")+" h-full rounded-[8px] justify-center relative",component:_View.default,children:[!shouldAnimate&&(0,_jsxRuntime.jsx)(_nativewind.StyledComponent,{className:(shouldAnimate?"bg-fnRed":"bg-white")+" absolute top-[-8px] right-[-16px]\n              rounded-[14px] w-[36px] h-[36px] flex justify-center items-center",component:_View.default,children:(0,_jsxRuntime.jsx)(_AlarmIcon.default,{color:shouldAnimate?"#fff":"#1C1C1E"})}),shouldAnimate&&(0,_jsxRuntime.jsx)(_nativewind.StyledComponent,{from:{rotate:"-20deg"},animate:{rotate:"20deg"},transition:{type:"timing",duration:100,loop:!0,repeatReverse:!0,easing:_reactNativeReanimated.Easing.inOut(_reactNativeReanimated.Easing.ease)},className:(shouldAnimate?"bg-fnRed":"bg-white")+" absolute top-[-8px] right-[-16px]\n                rounded-[14px] w-[36px] h-[36px] flex justify-center items-center",component:_moti.MotiView,children:(0,_jsxRuntime.jsx)(_AlarmIcon.default,{color:shouldAnimate?"#fff":"#1C1C1E"})})]})})}),(0,_jsxRuntime.jsx)(_nativewind.StyledComponent,{className:(shouldAnimate?"text-white":"text-black900")+" text-sm font-PTDSemiBold pl-[6px] mt-2",component:_Text.default,children:formattedTime})]})};exports.default=Timer;Timer.__docgenInfo={description:"",methods:[],displayName:"Timer"},_nativewind.NativeWindStyleSheet.create({styles:{absolute:{position:"absolute"},relative:{position:"relative"},"right-[-16px]":{right:-16},"top-[-8px]":{top:-8},"mt-2":{marginTop:8},flex:{display:"flex"},"h-[20px]":{height:20},"h-[36px]":{height:36},"h-[68px]":{height:68},"h-full":{height:"100%"},"w-[36px]":{width:36},"w-full":{width:"100%"},"items-center":{alignItems:"center"},"justify-center":{justifyContent:"center"},"rounded-[14px]":{borderTopLeftRadius:14,borderTopRightRadius:14,borderBottomRightRadius:14,borderBottomLeftRadius:14},"rounded-[8px]":{borderTopLeftRadius:8,borderTopRightRadius:8,borderBottomRightRadius:8,borderBottomLeftRadius:8},"bg-black/40":{backgroundColor:"rgba(0, 0, 0, 0.4)"},"bg-fnRed":{backgroundColor:"#F04438"},"bg-white":{backgroundColor:"#fff"},"px-4":{paddingLeft:16,paddingRight:16},"pl-[6px]":{paddingLeft:6},"font-PTDSemiBold":{fontFamily:"Pretendard-SemiBold"},"text-black900":{color:"#1C1C1E"},"text-white":{color:"#fff"},"text-sm":{fontSize:14,lineHeight:20}}})},"./libs/fromnow/src/hooks/useNavi.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _native=__webpack_require__("./libs/fromnow/node_modules/@react-navigation/native/lib/module/index.js"),_deviceInfo=__webpack_require__("./libs/fromnow/src/utils/deviceInfo.ts");exports.default=function useNavi(){return{navigation:_deviceInfo.isWeb?void 0:(0,_native.useNavigation)()}}},"./libs/fromnow/src/hooks/useToast.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _reactNativeToastNotifications=__webpack_require__("./libs/fromnow/node_modules/react-native-toast-notifications/lib/module/index.js");exports.default=function useToast(){var toast=(0,_reactNativeToastNotifications.useToast)();return{simpleToast:function simpleToast(msg,type){toast.show(msg,Object.assign({},type))},successToast:function successToast(msg,type){toast.show(msg,Object.assign({style:{backgroundColor:"#E7F5EC",borderRadius:10,borderWidth:1,borderColor:"#B0DDC1"},textStyle:{color:"#1C1C1E"}},type))},errorToast:function errorToast(msg,type){toast.show(msg,Object.assign({style:{backgroundColor:"#FFEEEE",borderRadius:10,borderWidth:1,borderColor:"#FEC7C6"},textStyle:{color:"#FF8A00"}},type))},warnToast:function warnToast(msg,type){toast.show(msg,Object.assign({style:{backgroundColor:"#FFF8DB",borderRadius:10,borderWidth:1,borderColor:"#FEE987"},textStyle:{color:"#FD7A00"}},type))}}}},"./libs/fromnow/src/utils/deviceInfo.ts":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./libs/fromnow/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.isWeb=exports.isIOS=exports.isAndroid=void 0;var _Platform=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Platform/index.js"));exports.isIOS="ios"===_Platform.default.OS,exports.isAndroid="android"===_Platform.default.OS,exports.isWeb="web"===_Platform.default.OS}}]);