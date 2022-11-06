"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[257],{6094:function(n,e,t){t(2791);var r=t(3027),a=t(1044),i=t(184);e.Z=function(n){return(0,i.jsx)("div",{children:(0,i.jsx)(r.Z.Control,{type:"file",className:"shadow-none",accept:"image/*",onChange:function(e){return function(e){var t=new FormData;t.append("file",e.target.files[0]),a.ZP.post("/api/post/image/upload",t).then((function(e){n.setImage(e.data.filePath)}))}(e)}})})}},257:function(n,e,t){t.r(e);var r=t(9439),a=t(2791),i=t(7689),o=t(9434),p=t(6094),x=t(4220),c=t(1044),l=t(184);e.default=function(n){var e=(0,i.s0)(),t=(0,o.v9)((function(n){return n.user})),u=(0,a.useState)(""),d=(0,r.Z)(u,2),s=d[0],b=d[1],g=(0,a.useState)(""),f=(0,r.Z)(g,2),h=f[0],m=f[1],w=(0,a.useState)(""),v=(0,r.Z)(w,2),k=v[0],j=v[1];(0,a.useEffect)((function(){t.accessToken||(alert("\ub85c\uadf8\uc778\ud55c \ud68c\uc6d0\ub9cc \uae00\uc744 \uc791\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),e("/login"))}),[]);return(0,l.jsx)(x.Ow,{children:(0,l.jsxs)(x.kj,{children:[(0,l.jsxs)("div",{className:"title-style",children:[(0,l.jsx)("label",{htmlFor:"title",children:"\uc81c\ubaa9"}),(0,l.jsx)("input",{id:"title",type:"text",value:s,onChange:function(n){b(n.currentTarget.value)}})]}),(0,l.jsx)(p.Z,{setImage:j}),(0,l.jsx)("label",{htmlFor:"content",children:"\ub0b4\uc6a9"}),(0,l.jsx)("textarea",{id:"content",type:"text",value:h,onChange:function(n){m(n.currentTarget.value)}}),(0,l.jsx)(x.qu,{children:(0,l.jsx)("button",{onClick:function(n){return function(n){if(n.preventDefault(),""===s||""===h)return alert("\ubaa8\ub4e0 \ud56d\ubaa9\uc744 \ucc44\uc6cc\uc8fc\uc138\uc694!");var r={title:s,content:h,image:k,uid:t.uid};c.ZP.post("/api/post/submit",r).then((function(n){n.data.success?(alert("\uae00 \uc791\uc131\uc774 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),e("/")):alert("\uae00 \uc791\uc131\uc5d0 \uc2e4\ud328\ud558\uc600\uc2b5\ub2c8\ub2e4.")})).catch((function(n){console.log(n)}))}(n)},children:"\ub4f1\ub85d\ud558\uae30"})})]})})}},4220:function(n,e,t){t.d(e,{Ow:function(){return x},kj:function(){return c},qu:function(){return l}});var r,a,i,o=t(168),p=t(225),x=p.Z.div(r||(r=(0,o.Z)(["\n  max-width: 850px;\n  margin: 0 auto;\n  padding: 2rem 0;\n\n  @media (max-width: 850px) {\n    width: 90%;\n  }\n"]))),c=p.Z.form(a||(a=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n\n  label {\n    font-weight: bold;\n    margin: 20px 0 10px;\n    color: white;\n  }\n\n  .title-style {\n    width: 100%;\n\n    #title {\n      width: 96.4%;\n      margin-left: 10px;\n      border-radius: 7px;\n      border: none;\n      padding: 5px 10px;\n      margin-bottom: 10px;\n      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,\n        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,\n        rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n\n      &:active,\n      &:focus {\n        outline: none;\n      }\n    }\n  }\n\n  textarea {\n    min-height: 350px;\n    resize: none;\n    border-radius: 10px;\n    border: 1px solid #c6c6c6;\n    padding: 10px;\n    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,\n      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,\n      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n\n    &:active,\n    &:focus {\n      outline: none;\n    }\n\n    &::-webkit-scrollbar {\n      width: 10px;\n    }\n    &::-webkit-scrollbar-thumb {\n      background-color: gray;\n      border-radius: 15px;\n      background-clip: padding-box;\n      border: 2px solid transparent;\n    }\n\n    &::-webkit-scrollbar-track {\n      background-color: #c6c6c6;\n      border-radius: 15px;\n      box-shadow: inset 0px 0px 5px whitesmoke;\n    }\n  }\n"]))),l=p.Z.div(i||(i=(0,o.Z)(["\n  margin-top: 10px;\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n\n  button {\n    max-width: 850px;\n    margin: 1rem 0 3rem 0;\n    border-radius: 20px;\n    padding: 10px;\n    border: none;\n    background-color: #50577a;\n    color: white;\n    font-weight: bold;\n    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,\n      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,\n      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n\n    &:hover {\n      background-color: #414763;\n    }\n  }\n"])))}}]);
//# sourceMappingURL=257.049ef34f.chunk.js.map