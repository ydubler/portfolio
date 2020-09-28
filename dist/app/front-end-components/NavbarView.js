"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _react=_interopRequireDefault(require("react"));var _reactDeviceDetect=require("react-device-detect");var _Browser_NavBar=_interopRequireDefault(require("./Navbar/Browser_NavBar"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _createSuper(Derived){return function(){var Super=_getPrototypeOf(Derived),result;if(_isNativeReflectConstruct()){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return _possibleConstructorReturn(this,result);};}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],function(){}));return true;}catch(e){return false;}}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}// App Function Component
var NavbarView=/*#__PURE__*/function(_React$Component){_inherits(NavbarView,_React$Component);var _super=_createSuper(NavbarView);function NavbarView(props){var _this;_classCallCheck(this,NavbarView);_this=_super.call(this,props);// STATE NOTES
// "orientation"  can be one of two possible values: "landscape" or "portrait".
// Also note that the default setting is landscape which assumes user is on desktop browser
_this.state={orientation:"landscape",longestStringLength:0,longestString:""};// optionsList is the navBar options titles with their dropdown subtitles
_this.optionsList=[{title:"HOME",subtitles:[],titleURL:"/",subtitleURLS:["",""]},{title:"SKILLS",subtitles:["Programming","Parallel Computing","Machine Learning","Web Development","3-D Modeling","Documentation"],titleURL:"/skills",subtitleURLS:["/programming","/parallel","/ml","/webdev","/3d","/doc"]},{title:"INTERACTIVE",subtitles:["Graph Traversal"],titleURL:"/interactive",subtitleURLS:["/graph"]},{title:"PORTFOLIO",subtitles:["Game Stats","Posilipo Lane"],titleURL:"/portfolio",subtitleURLS:["/gameStats","/posilipo"]},{title:"RESUME",subtitles:["Download (PDF)","Github"],titleURL:"/resume",subtitleURLS:["/download"]}];// Bindings
_this.updateStateOrientation=_this.updateStateOrientation.bind(_assertThisInitialized(_this));_this.determineLongestString=_this.determineLongestString.bind(_assertThisInitialized(_this));return _this;}_createClass(NavbarView,[{key:"componentDidMount",value:function componentDidMount(){// DEVICE ORIENATION
// Update orientation if on mobile phone
if(_reactDeviceDetect.isMobile)this.updateStateOrientation();// Add an event listener to the window that detects when the orientation of the device changes
window.addEventListener("orientationchange",this.updateStateOrientation);// Determine the screen height (for browser view)
this.setState({screenHeight:screen.height});// Determine the longest string
this.determineLongestString();}// Update the state orientation
},{key:"updateStateOrientation",value:function updateStateOrientation(){var orientation=window.orientation;if(orientation===0){this.setState({orientation:"portrait"});}else{this.setState({orientation:"landscape"});}}// Determine the longest string input in the options list
},{key:"determineLongestString",value:function determineLongestString(){// Define variables
var longestString="";var longestLength=-1;// Iterate through optionsList (checking titles and subtitles)
// to determine the length of the longest string locally and globally
for(var i=0;i<this.optionsList.length;i++){// Get the length of the current title
var curLength=this.optionsList[i].title.length;console.log("current title w/ length: "+this.optionsList[i].title+" / "+this.optionsList[i].title.length);// Check the title
if(curLength>longestLength){longestLength=this.optionsList[i].title.length;longestString=this.optionsList[i].title;}// Check the title's subtitles
for(var j=0;j<this.optionsList[i].subtitles.length;j++){curLength=this.optionsList[i].subtitles[j].length;console.log("current title w/ length: "+this.optionsList[i].subtitles[j]+" / "+this.optionsList[i].subtitles[j].length);if(curLength>longestLength){longestLength=this.optionsList[i].subtitles[j].length;longestString=this.optionsList[i].subtitles[j];}}}// Log the information
console.log("Longest string ('".concat(longestString,"') has length of ").concat(longestLength));// Set the longest string length in the component
this.setState({longestStringLength:longestLength,longestString:longestString});}// APPROACH
// Render browser OR mobile (portrait or landscape) of website using react-device-detect.
},{key:"render",value:function render(){return/*#__PURE__*/_react["default"].createElement(_react["default"].Fragment,null,/*#__PURE__*/_react["default"].createElement(_Browser_NavBar["default"],{key:Math.random(),optionsList:this.optionsList,longestStringLength:this.state.longestStringLength,longestString:this.state.longestString,history:this.props.history}));}}]);return NavbarView;}(_react["default"].Component);var _default=NavbarView;exports["default"]=_default;