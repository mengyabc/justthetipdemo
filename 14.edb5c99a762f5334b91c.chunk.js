(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"29fc8ea5db601db2c7fd":function(e,t,n){"use strict";n.r(t);var a,o=n("8af190b70a6bc55c6f1b"),r=n.n(o),i=n("6938d226fd372a75cbf9");function u(e){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t,n,o){a||(a="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&r)for(var u in r)void 0===t[u]&&(t[u]=r[u]);else t||(t=r||{});if(1===i)t.children=o;else if(i>1){for(var l=new Array(i),s=0;s<i;s++)l[s]=arguments[s+3];t.children=l}return{$$typeof:a,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function s(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=function(e){function t(e){var n,a,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,o=p(t).call(this,e),n=!o||"object"!==u(o)&&"function"!==typeof o?f(a):o,d(f(f(n)),"handleInputChange",function(e){var t=e.target.name,a=e.target.value;n.setState(d({},t,a))}),d(f(f(n)),"updateProfile",function(e){e.preventDefault()}),n.state={firstName:"Jane",lastName:"Kennedy",userName:"JoJoJoey",email:"janekennedy38@gmail.com",password:"11111111",number:"0400123512"},n}var n,a,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,r.a.PureComponent),n=t,(a=[{key:"render",value:function(){var e=this.props.classes;return l("div",{className:e.root},void 0,l("div",{className:e.avatar}),l("form",{},void 0,l("input",{type:"text",name:"firstName",placeholder:"First Name",value:this.state.firstName,onChange:this.handleInputChange,className:e.input}),l("input",{type:"text",name:"lastName",placeholder:"Last Name",value:this.state.lastName,onChange:this.handleInputChange,className:e.input}),l("input",{type:"text",name:"userName",placeholder:"User Name",value:this.state.userName,onChange:this.handleInputChange,className:e.input}),l("input",{type:"text",name:"email",placeholder:"Email Adress",value:this.state.email,onChange:this.handleInputChange,className:e.input}),l("input",{type:"password",name:"password",placeholder:"Password",value:this.state.password,onChange:this.handleInputChange,className:e.input}),l("input",{type:"text",name:"number",placeholder:"Phone Number",value:this.state.number,onChange:this.handleInputChange,className:e.input}),l("button",{className:e.updateBtn,onClick:this.updateProfile},void 0,"Update")))}}])&&s(n.prototype,a),o&&s(n,o),t}();t.default=Object(i.withStyles)({root:{padding:"0 32px"},avatar:{width:"100px",height:"100px",borderRadius:"50%",backgroundColor:"pink",margin:"50px auto"},input:{display:"block",width:"100%",height:"35px",padding:"24px",margin:"12px 0",border:"1px solid #5d656f",borderRadius:"4px","&:focus":{outline:"none"}},updateBtn:{display:"block",width:"100%",padding:"15px 0",backgroundColor:"#ff6a6a",borderRadius:"4px",marginTop:"32px",fontWeight:"600","&:focus":{outline:"none"}}})(h)}}]);