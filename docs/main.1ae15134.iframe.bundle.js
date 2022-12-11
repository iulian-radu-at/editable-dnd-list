(self.webpackChunkeditable_dnd_list=self.webpackChunkeditable_dnd_list||[]).push([[179],{"./storybook/stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{WithEmptyList:()=>WithEmptyList,WithNonEmptyList:()=>WithNonEmptyList,default:()=>stories});var react=__webpack_require__("./node_modules/react/index.js"),toConsumableArray=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),slicedToArray=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),getStyle=function getStyle(isDisabled){return{width:"1.5em",height:"1.5em",paddingTop:5,cursor:isDisabled?"default":"pointer",opacity:isDisabled?.5:1}},style={stroke:"none",fillRule:"nonzero",fill:"#008000",fillOpacity:1};const buttons_AddButton=function AddButton(_ref){var isDisabled=_ref.isDisabled,onClick=_ref.onClick;return react.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"50pt",height:"50pt",viewBox:"0 0 50 50",version:"1.1",style:getStyle(isDisabled),onClick:isDisabled?void 0:onClick},react.createElement("g",{id:"surface1"},react.createElement("path",{style,d:"M 25 0.78125 C 11.621094 0.78125 0.78125 11.621094 0.78125 25 C 0.78125 38.378906 11.621094 49.21875 25 49.21875 C 38.378906 49.21875 49.21875 38.378906 49.21875 25 C 49.21875 11.621094 38.378906 0.78125 25 0.78125 Z M 39.0625 27.734375 C 39.0625 28.378906 38.535156 28.90625 37.890625 28.90625 L 28.90625 28.90625 L 28.90625 37.890625 C 28.90625 38.535156 28.378906 39.0625 27.734375 39.0625 L 22.265625 39.0625 C 21.621094 39.0625 21.09375 38.535156 21.09375 37.890625 L 21.09375 28.90625 L 12.109375 28.90625 C 11.464844 28.90625 10.9375 28.378906 10.9375 27.734375 L 10.9375 22.265625 C 10.9375 21.621094 11.464844 21.09375 12.109375 21.09375 L 21.09375 21.09375 L 21.09375 12.109375 C 21.09375 11.464844 21.621094 10.9375 22.265625 10.9375 L 27.734375 10.9375 C 28.378906 10.9375 28.90625 11.464844 28.90625 12.109375 L 28.90625 21.09375 L 37.890625 21.09375 C 38.535156 21.09375 39.0625 21.621094 39.0625 22.265625 Z M 39.0625 27.734375 "})))};var styles={container:{display:"flex",alignItems:"center",paddingRight:40},addButton:{marginRight:5},textInput:{flexGrow:1}};const src_AddNewTaskLayout=function AddNewTaskLayout(_ref){var addButton=_ref.addButton,textInput=_ref.textInput;return react.createElement("div",{style:styles.container},react.createElement("div",{style:styles.addButton},addButton),react.createElement("div",{style:styles.textInput},textInput))};var TextField=__webpack_require__("./node_modules/@mui/material/esm/TextField/TextField.js");const src_TextInput=function TextInput(_ref){var onChange=_ref.onChange,onEnter=_ref.onEnter,onEscape=_ref.onEscape,placeholder=_ref.placeholder,text=_ref.text,handleChange=react.useCallback((function(e){onChange(e.target.value)}),[onChange]);return react.createElement(TextField.Z,{value:text,placeholder,onChange:handleChange,onKeyUp:function handleKeyUp(ev){switch(ev.key){case"Enter":ev.preventDefault(),onEnter&&onEnter();break;case"Escape":ev.preventDefault(),onEscape&&onEscape()}},fullWidth:!0})};var getNewId=function getNewId(){return(new Date).getTime().toString(36)};const src_AddNewTask=function AddNewTask(_ref){var onAdd=_ref.onAdd,_React$useState=react.useState(""),_React$useState2=(0,slicedToArray.Z)(_React$useState,2),text=_React$useState2[0],setText=_React$useState2[1],handleChangeText=react.useCallback((function(newText){return setText(newText)}),[setText]),handleEscape=react.useCallback((function(){return setText("")}),[setText]),handleAdd=react.useCallback((function(){setText(""),onAdd({id:getNewId(),text})}),[onAdd,text]);return react.createElement(src_AddNewTaskLayout,{textInput:react.createElement(src_TextInput,{text,placeholder:"Press Enter to add, and Escape to drop changes",onChange:handleChangeText,onEnter:handleAdd,onEscape:handleEscape}),addButton:react.createElement(buttons_AddButton,{onClick:handleAdd,isDisabled:0===text.length})})};var objectSpread2=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),DeleteButton_style={stroke:"none",fillRule:"nonzero",fill:"#f00000",fillOpacity:1};const buttons_DeleteButton=function DeleteButton(_ref){var isDisabled=_ref.isDisabled,onClick=_ref.onClick;return react.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"50pt",height:"50pt",viewBox:"0 0 50 50",version:"1.1",style:getStyle(isDisabled),onClick:isDisabled?void 0:onClick},react.createElement("g",{id:"surface1"},react.createElement("path",{style:DeleteButton_style,d:"M 25 0.78125 C 11.621094 0.78125 0.78125 11.621094 0.78125 25 C 0.78125 38.378906 11.621094 49.21875 25 49.21875 C 38.378906 49.21875 49.21875 38.378906 49.21875 25 C 49.21875 11.621094 38.378906 0.78125 25 0.78125 Z M 36.875 31.359375 C 37.335938 31.816406 37.335938 32.558594 36.875 33.015625 L 33.007812 36.875 C 32.546875 37.335938 31.804688 37.335938 31.347656 36.875 L 25 30.46875 L 18.640625 36.875 C 18.183594 37.335938 17.441406 37.335938 16.984375 36.875 L 13.125 33.007812 C 12.667969 32.546875 12.667969 31.804688 13.125 31.347656 L 19.53125 25 L 13.125 18.640625 C 12.667969 18.183594 12.667969 17.441406 13.125 16.984375 L 16.992188 13.117188 C 17.453125 12.65625 18.195312 12.65625 18.652344 13.117188 L 25 19.53125 L 31.359375 13.125 C 31.816406 12.667969 32.558594 12.667969 33.015625 13.125 L 36.886719 16.992188 C 37.34375 17.453125 37.34375 18.195312 36.886719 18.652344 L 30.46875 25 Z M 36.875 31.359375 "})))};var EditableTaskLayout_styles={container:{display:"flex",alignItems:"center"},deleteButton:{marginRight:5},saveButton:{marginLeft:10},textInput:{flexGrow:1}};const src_EditableTaskLayout=function EditableTaskLayout(_ref){var deleteButton=_ref.deleteButton,saveButton=_ref.saveButton,textInput=_ref.textInput;return react.createElement("div",{style:EditableTaskLayout_styles.container},react.createElement("div",{style:EditableTaskLayout_styles.deleteButton},deleteButton),react.createElement("div",{style:EditableTaskLayout_styles.textInput},textInput),react.createElement("div",{style:EditableTaskLayout_styles.saveButton},saveButton))};var SaveButton_style={stroke:"none",fillRule:"nonzero",fill:"#5066F0",fillOpacity:1};const buttons_SaveButton=function SaveButton(_ref){var isDisabled=_ref.isDisabled,onClick=_ref.onClick;return react.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"50pt",height:"50pt",viewBox:"0 0 50 50",version:"1.1",style:getStyle(isDisabled),onClick:isDisabled?void 0:onClick},react.createElement("g",{id:"surface1"},react.createElement("path",{style:SaveButton_style,d:"M 25 0.78125 C 11.621094 0.78125 0.78125 11.621094 0.78125 25 C 0.78125 38.378906 11.621094 49.21875 25 49.21875 C 38.378906 49.21875 49.21875 38.378906 49.21875 25 C 49.21875 11.621094 38.378906 0.78125 25 0.78125 Z M 25 44.53125 C 14.210938 44.53125 5.46875 35.789062 5.46875 25 C 5.46875 14.210938 14.210938 5.46875 25 5.46875 C 35.789062 5.46875 44.53125 14.210938 44.53125 25 C 44.53125 35.789062 35.789062 44.53125 25 44.53125 Z M 25 44.53125 "})),react.createElement("g",{id:"surface2",transform:"translate(15,10)"},react.createElement("path",{style:SaveButton_style,d:"M 18.75 24.375 L 1.25 24.375 C 0.558594 24.375 0 23.832031 0 23.15625 L 0 21.9375 C 0 21.261719 0.558594 20.71875 1.25 20.71875 L 18.75 20.71875 C 19.441406 20.71875 20 21.261719 20 21.9375 L 20 23.15625 C 20 23.832031 19.441406 24.375 18.75 24.375 Z M 15.292969 10.132812 L 11.875 13.460938 L 11.875 2.84375 C 11.875 2.167969 11.316406 1.625 10.625 1.625 L 9.375 1.625 C 8.683594 1.625 8.125 2.167969 8.125 2.84375 L 8.125 13.460938 L 4.707031 10.132812 C 4.21875 9.652344 3.425781 9.652344 2.941406 10.132812 L 2.058594 10.996094 C 1.566406 11.472656 1.566406 12.242188 2.058594 12.714844 L 9.113281 19.597656 C 9.605469 20.074219 10.394531 20.074219 10.878906 19.597656 L 17.9375 12.714844 C 18.425781 12.238281 18.425781 11.464844 17.9375 10.992188 L 17.050781 10.128906 C 16.566406 9.652344 15.777344 9.652344 15.292969 10.128906 Z M 15.292969 10.132812 "})))};const src_EditableTask=function EditableTask(_ref){var item=_ref.item,onChange=_ref.onChange,onDelete=_ref.onDelete,_React$useState=react.useState(item.text),_React$useState2=(0,slicedToArray.Z)(_React$useState,2),text=_React$useState2[0],setText=_React$useState2[1],handleChangeText=react.useCallback((function(newText){return setText(newText)}),[setText]),handleEscape=react.useCallback((function(){return setText(item.text)}),[item.text,setText]),handleDelete=react.useCallback((function(){return onDelete(item)}),[item,onDelete]),handleSave=react.useCallback((function(){return onChange((0,objectSpread2.Z)((0,objectSpread2.Z)({},item),{},{text}))}),[item,onChange,text]);return react.createElement(src_EditableTaskLayout,{deleteButton:react.createElement(buttons_DeleteButton,{onClick:handleDelete,isDisabled:!1}),saveButton:react.createElement(buttons_SaveButton,{onClick:handleSave,isDisabled:0===text.length||text===item.text}),textInput:react.createElement(src_TextInput,{text,placeholder:item.text,onChange:handleChangeText,onEnter:handleSave,onEscape:handleEscape})})};var lib=__webpack_require__("./node_modules/generic-dnd-list/lib/index.js"),getOnlyTasks=function getOnlyTasks(items){return items.filter(isNotUndefined)},isNotUndefined=function isNotUndefined(item){return void 0!==item},getItemStyle=function getItemStyle(isDragging){return{padding:4,margin:"0 0 ".concat(2,"px 0"),background:isDragging?"#ffff00":"transparent",color:isDragging?"#cccccc":"#000000"}},getListStyle=function getListStyle(isDraggingOver){return{background:isDraggingOver?"#cccc00":"transparent",padding:2}};const src_EditableDndList=function EditableDndList(_ref){var defaultItems=_ref.items,onChange=_ref.onChange,_React$useState=react.useState([void 0]),_React$useState2=(0,slicedToArray.Z)(_React$useState,2),items=_React$useState2[0],setItems=_React$useState2[1];react.useEffect((function(){setItems([].concat((0,toConsumableArray.Z)(getOnlyTasks(defaultItems||[])),[void 0]))}),[defaultItems,setItems]);var handleChangeTask=function handleChangeTask(newItem){var newItems=items.map((function(oldItem){return oldItem&&oldItem.id===newItem.id?newItem:oldItem}));setItems(newItems),onChange(getOnlyTasks(newItems))},handleDeleteTask=function handleDeleteTask(delItem){var newItems=items.filter((function(oldItem){return void 0===oldItem||oldItem.id!==delItem.id}));setItems(newItems),onChange(getOnlyTasks(newItems))},handleAddNewTask=function handleAddNewTask(newItem){var newItems=[].concat((0,toConsumableArray.Z)(getOnlyTasks(items)),[newItem,void 0]);setItems(newItems),onChange(getOnlyTasks(newItems))};return react.createElement(lib.Z,{items,getId:function getId(item){return item?item.id:"new"},renderItem:function renderItem(item){return item?react.createElement(src_EditableTask,{item,onChange:handleChangeTask,onDelete:handleDeleteTask}):react.createElement(src_AddNewTask,{onAdd:handleAddNewTask})},onReorder:function handleReorder(items){var newItems=getOnlyTasks(items);setItems([].concat(newItems,[void 0])),onChange(newItems)},getItemStyle,getListStyle})};var stories_styles={container:{height:"90vh",margin:10,textAlign:"center"},pre:{margin:"auto",textAlign:"left",width:"fit-content"}},items=[{id:"1",text:"Text 1"},{id:"2",text:"Text 2"}],handleChange=function handleChange(id){return function(items){return document.getElementById(id).innerHTML=JSON.stringify(items,void 0,2)}};const stories={title:"EditableDndList",component:src_EditableDndList};var WithEmptyList=function WithEmptyList(){return react.createElement("div",{style:stories_styles.container},react.createElement(src_EditableDndList,{onChange:handleChange("l1")}),react.createElement("div",null),"Items in list: ",react.createElement("pre",{id:"l1",style:stories_styles.pre}))},WithNonEmptyList=function WithNonEmptyList(){return react.createElement("div",{style:stories_styles.container},react.createElement(src_EditableDndList,{items,onChange:handleChange("l2")}),react.createElement("div",null),"Items in list: ",react.createElement("pre",{id:"l2",style:stories_styles.pre}))}},"./storybook-init-framework-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},"./storybook sync ^\\.[\\\\/](?:stories\\.tsx)$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./stories.tsx":"./storybook/stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./storybook sync ^\\.[\\\\/](?:stories\\.tsx)$"},"?4f7e":()=>{},"./generated-stories-entry.cjs":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module=__webpack_require__.nmd(module),(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./storybook sync ^\\.[\\\\/](?:stories\\.tsx)$")],module,!1)}},__webpack_require__=>{var __webpack_exec__=moduleId=>__webpack_require__(__webpack_require__.s=moduleId);__webpack_require__.O(0,[450],(()=>(__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_exec__("./storybook-init-framework-entry.js"),__webpack_exec__("./generated-stories-entry.cjs"))));__webpack_require__.O()}]);