"use strict";function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _react=_interopRequireWildcard(require("react"));function _getRequireWildcardCache(){if(typeof WeakMap!=="function")return null;var cache=new WeakMap();_getRequireWildcardCache=function _getRequireWildcardCache(){return cache;};return cache;}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj};}var cache=_getRequireWildcardCache();if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj);}return newObj;}function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest();}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(n);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen);}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}function _iterableToArrayLimit(arr,i){if(typeof Symbol==="undefined"||!(Symbol.iterator in Object(arr)))return;var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}function Sidebar(props){// MOUNTED
var _useState=(0,_react.useState)(false),_useState2=_slicedToArray(_useState,2),MOUNTED=_useState2[0],SET_MOUNTED=_useState2[1];var _useState3=(0,_react.useState)(0),_useState4=_slicedToArray(_useState3,2),SIDEBAR_WIDTH=_useState4[0],SET_SIDEBAR_WIDTH=_useState4[1];var _useState5=(0,_react.useState)([]),_useState6=_slicedToArray(_useState5,2),OPTIONS=_useState6[0],SET_OPTIONS=_useState6[1];// This function is called when: the component mounts AND the component updates:
// This function is intended to parse the input options into a linear array
// for easier state setting.
(0,_react.useEffect)(function(){if(!MOUNTED){var linearOptions=[];var startingDepth=0;// Create an array from the recursive options
props.options.map(function(option){linearizeOptionsRecursive(option,linearOptions,startingDepth);});// Get/set the sidebar's width
var greatestWidth=0;props.options.map(function(option){var returnWidth=getSidebarWidthRecursive(option,startingDepth,0);greatestWidth=greatestWidth>returnWidth?greatestWidth:returnWidth;});var sidebarLetterWidth=document.getElementById("sidebarLetterWidth").clientWidth;SET_SIDEBAR_WIDTH((greatestWidth+1)*sidebarLetterWidth);SET_OPTIONS(linearOptions);SET_MOUNTED(true);}});// Create completely expanded list
var linearizeOptionsRecursive=function linearizeOptionsRecursive(option,array,depth){// Only roots will be displayed at first
var DISPLAYED=depth===0?true:false;// Create the option object
var optionObject={label:option.label,hasSuboptions:option.suboptions===null?false:true,expanded:option.expanded,depth:depth,displayed:DISPLAYED};// Push the object to the array
array.push(optionObject);// Recursively apply this method to suboptions
if(option.suboptions!=null){depth++;option.suboptions.map(function(option){linearizeOptionsRecursive(option,array,depth);});}};// Determine the width of the sidebar
var getSidebarWidthRecursive=function getSidebarWidthRecursive(option,depth,greatestWidth){var MY_WIDTH=option.label.length;MY_WIDTH+=depth;MY_WIDTH+=3;//option.suboptions != null ? 3 : 0;
console.log(option.label+" : "+MY_WIDTH);var RETURN_WIDTH=MY_WIDTH>greatestWidth?MY_WIDTH:greatestWidth;// Recursively apply this method to suboptions
if(option.suboptions!=null){depth++;option.suboptions.map(function(option){var greatestChildWidth=getSidebarWidthRecursive(option,depth,MY_WIDTH);RETURN_WIDTH=RETURN_WIDTH>greatestChildWidth?RETURN_WIDTH:greatestChildWidth;});}return RETURN_WIDTH;};var toggleExpanded=function toggleExpanded(option,index){// Handle all options previous to the clicked option
var NEW_OPTIONS=[];for(var i=0;i<index;i++){var CURRENT_OPTION=OPTIONS[i];// Duplicate the option object
var _optionObject={label:CURRENT_OPTION.label,hasSuboptions:CURRENT_OPTION.hasSuboptions,expanded:CURRENT_OPTION.expanded,depth:CURRENT_OPTION.depth,displayed:CURRENT_OPTION.displayed};NEW_OPTIONS.push(_optionObject);}// Handle the option that was clicked
var TOGGLED_OPTION=option;// Duplicate the option object
var optionObject={label:TOGGLED_OPTION.label,hasSuboptions:TOGGLED_OPTION.hasSuboptions,expanded:!TOGGLED_OPTION.expanded,depth:TOGGLED_OPTION.depth,displayed:true};NEW_OPTIONS.push(optionObject);var STARTING_DEPTH=TOGGLED_OPTION.depth;var TOGGLED_DISPLAYED=!TOGGLED_OPTION.expanded;// Handle all options following the clicked option
var finalIndex=index+1;for(var _i2=index+1;_i2<OPTIONS.length;_i2++){var _CURRENT_OPTION=OPTIONS[_i2];var CURRENT_OPTION_DEPTH=_CURRENT_OPTION.depth;if(CURRENT_OPTION_DEPTH===STARTING_DEPTH+1){// Duplicate the option object
var _optionObject2={label:_CURRENT_OPTION.label,hasSuboptions:_CURRENT_OPTION.hasSuboptions,expanded:false,depth:_CURRENT_OPTION.depth,displayed:TOGGLED_DISPLAYED};NEW_OPTIONS.push(_optionObject2);// Increment final index
finalIndex++;}else if(CURRENT_OPTION_DEPTH>STARTING_DEPTH+1){// Duplicate the option object
var _optionObject3={label:_CURRENT_OPTION.label,hasSuboptions:_CURRENT_OPTION.hasSuboptions,expanded:false,depth:_CURRENT_OPTION.depth,displayed:false};NEW_OPTIONS.push(_optionObject3);// Increment final index
finalIndex++;}else{break;}}for(var _i3=finalIndex;_i3<OPTIONS.length;_i3++){var _CURRENT_OPTION2=OPTIONS[_i3];// Duplicate the option object
var _optionObject4={label:_CURRENT_OPTION2.label,hasSuboptions:_CURRENT_OPTION2.hasSuboptions,expanded:_CURRENT_OPTION2.expanded,depth:_CURRENT_OPTION2.depth,displayed:_CURRENT_OPTION2.displayed};NEW_OPTIONS.push(_optionObject4);}SET_OPTIONS(NEW_OPTIONS);};return/*#__PURE__*/_react["default"].createElement(_react["default"].Fragment,null,!MOUNTED&&/*#__PURE__*/_react["default"].createElement("div",{id:"sidebarLetterWidth",style:{position:"absolute",width:"auto",top:-1000,right:-1000,whiteSpace:"nowrap",overflow:"hidden",fontFamily:"Courier",fontSize:"15px",visibility:"hidden"}},"M"),MOUNTED&&/*#__PURE__*/_react["default"].createElement("div",{style:{display:"inline-block",width:SIDEBAR_WIDTH,fontFamily:"Courier",fontSize:"15px",border:"2px solid black"}},OPTIONS.map(function(option,index){if(option.displayed){var OPTION_BACKGROUND_COLOR="white";// The option's background color is a function of it's depth
if(!props.blackAndWhite){var red=Number.parseInt(props.baseColor[0]);var green=Number.parseInt(props.baseColor[1]);var blue=Number.parseInt(props.baseColor[2]);OPTION_BACKGROUND_COLOR="rgb("+(red+props.changeRed*option.depth)+","+(green+props.changeGreen*option.depth)+","+(blue+props.changeBlue*option.depth)+")";}return/*#__PURE__*/_react["default"].createElement("div",{key:Math.random(),style:{display:"inline-block",width:"100%",backgroundColor:OPTION_BACKGROUND_COLOR},onClick:function onClick(){option.hasSuboptions?toggleExpanded(option,index):undefined;console.log("on click");}},option.hasSuboptions?/*#__PURE__*/_react["default"].createElement(_react["default"].Fragment,null,"\xA0".repeat(option.depth)):/*#__PURE__*/_react["default"].createElement(_react["default"].Fragment,null,"\xA0".repeat(option.depth+3)),option.hasSuboptions?option.expanded?"(-)":"(+)":"",option.label);}else{return/*#__PURE__*/_react["default"].createElement(_react["default"].Fragment,{key:Math.random()});}})));}var _default=Sidebar;exports["default"]=_default;