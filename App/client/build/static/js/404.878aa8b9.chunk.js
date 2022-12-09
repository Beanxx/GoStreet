"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[404],{90:function(n,e,t){t.d(e,{Z:function(){return o}});var i=t(1830),r=t.n(i),o=r().mixin({toast:!0,position:"top",showConfirmButton:!1,timer:2e3,timerProgressBar:!0,width:"370px",didOpen:function(n){n.addEventListener("mouseenter",r().stopTimer),n.addEventListener("mouseleave",r().resumeTimer)}})},2259:function(n,e,t){t(2791);var i=t(3027),r=t(2388),o=t(184);e.Z=function(n){return(0,o.jsx)("div",{children:(0,o.jsx)(i.Z.Control,{type:"file",className:"shadow-none",accept:"image/*",onChange:function(e){return function(e){var t,i=new FormData;null===i||void 0===i||i.append("file",null===(t=e.target.files)||void 0===t?void 0:t[0]),r.Z.post("/api/post/image/upload",i).then((function(e){n.setImage(e.data.filePath)}))}(e)}})})}},5404:function(n,e,t){t.r(e);var i=t(9439),r=t(2791),o=t(7689),a=t(9434),p=t(2259),x=t(5660),c=t(2388),s=t(90),u=t(184);e.default=function(){var n=(0,o.s0)(),e=(0,a.v9)((function(n){return n.user})),t=(0,r.useState)(""),d=(0,i.Z)(t,2),l=d[0],f=d[1],b=(0,r.useState)(""),g=(0,i.Z)(b,2),h=g[0],m=g[1],w=(0,r.useState)(""),v=(0,i.Z)(w,2),Z=v[0],k=v[1];(0,r.useEffect)((function(){e.accessToken||s.Z.fire({icon:"warning",text:"\ub85c\uadf8\uc778\ud55c \ud68c\uc6d0\ub9cc \uae00\uc744 \uc791\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}).then((function(){n("/login")}))}),[]);return(0,u.jsx)(x.Ow,{children:(0,u.jsxs)(x.kj,{children:[(0,u.jsxs)("div",{className:"title-style",children:[(0,u.jsx)("label",{htmlFor:"title",children:"\uc81c\ubaa9"}),(0,u.jsx)("input",{id:"title",type:"text",value:l,onChange:function(n){f(n.currentTarget.value)}})]}),(0,u.jsx)(p.Z,{setImage:k}),(0,u.jsx)("label",{htmlFor:"content",children:"\ub0b4\uc6a9"}),(0,u.jsx)("textarea",{id:"content",value:h,onChange:function(n){m(n.currentTarget.value)}}),(0,u.jsx)(x.qu,{children:(0,u.jsx)("button",{onClick:function(t){return function(t){if(t.preventDefault(),""===l||""===h)return s.Z.fire({icon:"warning",text:"\ubaa8\ub4e0 \ud56d\ubaa9\uc744 \ucc44\uc6cc\uc8fc\uc138\uc694!"});var i={title:l,content:h,image:Z,uid:e.uid};c.Z.post("/api/post/submit",i).then((function(e){e.data.success?s.Z.fire({icon:"success",text:"\uae00 \uc791\uc131\uc774 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4."}).then((function(){n("/")})):s.Z.fire({icon:"error",text:"\uae00 \uc791\uc131\uc5d0 \uc2e4\ud328\ud558\uc600\uc2b5\ub2c8\ub2e4."})})).catch((function(n){console.log(n)}))}(t)},children:"\ub4f1\ub85d\ud558\uae30"})})]})})}},5660:function(n,e,t){t.d(e,{Ow:function(){return x},kj:function(){return c},qu:function(){return s}});var i,r,o,a=t(168),p=t(225),x=p.Z.div(i||(i=(0,a.Z)(["\n  max-width: 850px;\n  margin: 0 auto;\n  padding: 2rem 0;\n\n  @media (max-width: 850px) {\n    width: 90%;\n  }\n"]))),c=p.Z.form(r||(r=(0,a.Z)(["\n  display: flex;\n  flex-direction: column;\n\n  label {\n    font-weight: bold;\n    margin: 20px 0 10px;\n    color: white;\n  }\n\n  .title-style {\n    width: 100%;\n\n    #title {\n      width: 96.4%;\n      margin-left: 10px;\n      border-radius: 7px;\n      border: none;\n      padding: 5px 10px;\n      margin-bottom: 10px;\n      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,\n        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,\n        rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n\n      &:active,\n      &:focus {\n        outline: none;\n      }\n    }\n  }\n\n  textarea {\n    min-height: 350px;\n    resize: none;\n    border-radius: 10px;\n    border: 1px solid #c6c6c6;\n    padding: 10px;\n    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,\n      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,\n      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n\n    &:active,\n    &:focus {\n      outline: none;\n    }\n\n    &::-webkit-scrollbar {\n      width: 10px;\n    }\n    &::-webkit-scrollbar-thumb {\n      background-color: gray;\n      border-radius: 15px;\n      background-clip: padding-box;\n      border: 2px solid transparent;\n    }\n\n    &::-webkit-scrollbar-track {\n      background-color: #c6c6c6;\n      border-radius: 15px;\n      box-shadow: inset 0px 0px 5px whitesmoke;\n    }\n  }\n"]))),s=p.Z.div(o||(o=(0,a.Z)(["\n  margin-top: 10px;\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n\n  button {\n    max-width: 850px;\n    margin: 1rem 0 3rem 0;\n    border-radius: 20px;\n    padding: 10px;\n    border: none;\n    background-color: #50577a;\n    color: white;\n    font-weight: bold;\n    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,\n      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,\n      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n\n    &:hover {\n      background-color: #414763;\n    }\n  }\n"])))}}]);
//# sourceMappingURL=404.878aa8b9.chunk.js.map