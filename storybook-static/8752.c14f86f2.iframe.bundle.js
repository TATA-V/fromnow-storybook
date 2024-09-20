(self.webpackChunkFromNowStorybook=self.webpackChunkFromNowStorybook||[]).push([[8752],{"./libs/fromnow/src/components/common/DialogModal.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./libs/fromnow/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _nativewind=__webpack_require__("./libs/fromnow/node_modules/nativewind/dist/index.js"),_Text=(_interopRequireDefault(__webpack_require__("./node_modules/react/index.js")),_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Text/index.js"))),_TouchableOpacity=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/TouchableOpacity/index.js")),_Modal=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Modal/index.js")),_Pressable=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Pressable/index.js")),_View=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/View/index.js")),_moti=__webpack_require__("./libs/fromnow/node_modules/moti/build/index.js"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),DialogModal=function DialogModal(_ref){var open=_ref.open,setOpen=_ref.setOpen,title=_ref.title,description=_ref.description,confirm=_ref.confirm;return(0,_jsxRuntime.jsx)(_Modal.default,{transparent:!0,visible:open,animationType:"fade",onRequestClose:function onRequestClose(){return setOpen(!1)},children:(0,_jsxRuntime.jsx)(_nativewind.StyledComponent,{onPress:function onPress(){return setOpen(!1)},className:"flex-1 justify-center items-center bg-black/50",component:_Pressable.default,children:(0,_jsxRuntime.jsxs)(_nativewind.StyledComponent,{from:{opacity:0,scale:.9},animate:{opacity:open?1:0,scale:open?1:.9},transition:{type:"timing",duration:300},className:"w-[300px] p-5 bg-white rounded-2xl",component:_moti.MotiView,children:[title&&(0,_jsxRuntime.jsx)(_nativewind.StyledComponent,{className:"font-PTDBold text-lg mb-3 text-black900",component:_Text.default,children:title}),(0,_jsxRuntime.jsx)(_nativewind.StyledComponent,{className:"text-black text-sm font-PTDLight",component:_Text.default,children:description}),(0,_jsxRuntime.jsxs)(_nativewind.StyledComponent,{className:"flex-row justify-between",component:_View.default,children:[(0,_jsxRuntime.jsx)(_nativewind.StyledComponent,{onPress:function onPress(){return setOpen(!1)},className:"mt-7 w-[122px] border-[1px] border-[#E4E5EA] rounded-xl h-12 justify-center items-center",component:_TouchableOpacity.default,children:(0,_jsxRuntime.jsx)(_nativewind.StyledComponent,{className:"font-semibold text-base text-black900 font-PTDSemiBold",component:_Text.default,children:"취소"})}),(0,_jsxRuntime.jsx)(_nativewind.StyledComponent,{onPress:function confirmClick(){confirm&&confirm(),setOpen(!1)},className:"mt-7 w-[122px] bg-[#509EEF] rounded-xl h-12 justify-center items-center",component:_TouchableOpacity.default,children:(0,_jsxRuntime.jsx)(_nativewind.StyledComponent,{className:"text-white font-semibold text-base font-PTDSemiBold",component:_Text.default,children:"확인"})})]})]})})})};exports.default=DialogModal;DialogModal.__docgenInfo={description:"",methods:[],displayName:"DialogModal",props:{open:{required:!0,tsType:{name:"boolean"},description:""},setOpen:{required:!0,tsType:{name:"Dispatch",elements:[{name:"SetStateAction",elements:[{name:"boolean"}],raw:"SetStateAction<boolean>"}],raw:"Dispatch<SetStateAction<boolean>>"},description:""},title:{required:!1,tsType:{name:"string"},description:""},description:{required:!0,tsType:{name:"string"},description:""},confirm:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}},_nativewind.NativeWindStyleSheet.create({styles:{"mb-3":{marginBottom:12},"mt-7":{marginTop:28},"h-12":{height:48},"w-[122px]":{width:122},"w-[300px]":{width:300},"flex-1":{flexGrow:1,flexShrink:1,flexBasis:"0%"},"flex-row":{flexDirection:"row"},"items-center":{alignItems:"center"},"justify-center":{justifyContent:"center"},"justify-between":{justifyContent:"space-between"},"rounded-2xl":{borderTopLeftRadius:16,borderTopRightRadius:16,borderBottomRightRadius:16,borderBottomLeftRadius:16},"rounded-xl":{borderTopLeftRadius:12,borderTopRightRadius:12,borderBottomRightRadius:12,borderBottomLeftRadius:12},"border-[1px]":{borderTopWidth:1,borderRightWidth:1,borderBottomWidth:1,borderLeftWidth:1},"border-[#E4E5EA]":{borderTopColor:"#E4E5EA",borderRightColor:"#E4E5EA",borderBottomColor:"#E4E5EA",borderLeftColor:"#E4E5EA"},"bg-[#509EEF]":{backgroundColor:"#509EEF"},"bg-black/50":{backgroundColor:"rgba(0, 0, 0, 0.5)"},"bg-white":{backgroundColor:"#fff"},"p-5":{paddingTop:20,paddingRight:20,paddingBottom:20,paddingLeft:20},"font-PTDBold":{fontFamily:"Pretendard-Bold"},"font-PTDLight":{fontFamily:"Pretendard-Light"},"font-PTDSemiBold":{fontFamily:"Pretendard-SemiBold"},"font-semibold":{fontWeight:"600"},"text-black":{color:"#000"},"text-black900":{color:"#1C1C1E"},"text-white":{color:"#fff"},"text-base":{fontSize:16,lineHeight:24},"text-lg":{fontSize:18,lineHeight:28},"text-sm":{fontSize:14,lineHeight:20}}})},"./src/stories/common/DialogModal.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.Basic=void 0;_interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));var _DialogModal=_interopRequireDefault(__webpack_require__("./libs/fromnow/src/components/common/DialogModal.tsx")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Basic=(exports.default={title:"common/DialogModal",components:_DialogModal.default,tags:["autodocs"]},exports.Basic=function Basic(args){return(0,_jsxRuntime.jsx)(_DialogModal.default,Object.assign({},args))});Basic.args={open:!0,setOpen:function setOpen(){},title:"제목을 입력하세요",description:"모달 설명입니다.",confirm:function confirm(){return alert("확인 버튼 클릭!")}},Basic.argTypes={open:{description:"(필수) 모달의 열림 상태"},setOpen:{description:"(필수) 모달 상태 변경 함수"},title:{description:"(옵션) 모달 제목"},description:{description:"(필수) 모달 설명"},confirm:{description:"(필수) 확인 버튼 클릭 시 실행할 함수"}},Basic.__docgenInfo={description:"",methods:[],displayName:"Basic"}}}]);