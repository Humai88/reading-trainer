(this.webpackJsonpreading=this.webpackJsonpreading||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);for(var r=n(2),a=n(7),c=n.n(a),s=(n(16),n(4)),o=(n(17),n(1)),i=function(e){var t=e.className,n=e.children,r=e.id,a="".concat(t||"");return Object(o.jsx)("div",{id:r,onDrop:function(e){e.preventDefault();var t=e.dataTransfer.getData("transfer");e.target.append(document.getElementById(t))},onDragOver:function(e){e.preventDefault()},className:a,children:n})},d=n(20),u=[],l=0;l<=35;l++)u.push({id:Object(d.a)(),content:""});for(var b=["\u0410","\u0415","\u0401","\u0418","\u041e","\u0423","\u042b","\u042d","\u042e","\u042f"],j=[],v=0;v<=b.length-1;v++)j.push({id:Object(d.a)(),content:b[v]});for(var f=["\u0411","\u0412","\u0413","\u0414","\u0416","\u0417","\u0419","\u041a","\u041b","\u041c","\u041d","\u041f","\u0420","\u0421","\u0422","\u0424","\u0425","\u0426","\u0427","\u0428","\u0429"],m=[],p=0;p<=f.length-1;p++)m.push({id:Object(d.a)(),content:f[p]});for(var O=["\u042c","\u042a"],h=[],g=0;g<=O.length-1;g++)h.push({id:Object(d.a)(),content:O[g]});var _=[].concat(j,m,h),x=n(3),L=n.n(x),w=function(e){var t=e.id,n=e.className,r=e.children,a="".concat(n||"");return Object(o.jsx)("div",{id:t,className:a,draggable:!0,onDragStart:function(e){e.dataTransfer.setData("transfer",e.target.id)},onDragOver:function(e){e.stopPropagation()},children:r})},N=function(e){var t=e.className,n=e.id,r=e.content,a="".concat(t||"");return Object(o.jsx)(w,{id:n,className:L.a.dragabble,children:Object(o.jsx)("div",{className:a,children:r})})},k=function(e){var t=e.width,n=e.height,a=Object(r.useRef)(null),c=Object(r.useState)(!1),i=Object(s.a)(c,2),d=i[0],u=i[1],l=Object(r.useState)(void 0),b=Object(s.a)(l,2),j=b[0],v=b[1],f=Object(r.useCallback)((function(e){var t=O(e);t&&(v(t),u(!0))}),[]);Object(r.useEffect)((function(){if(a.current){var e=a.current;return e.addEventListener("mousedown",f),function(){e.removeEventListener("mousedown",f)}}}),[f]);var m=Object(r.useCallback)((function(e){if(d){var t=O(e);j&&t&&(h(j,t),v(t))}}),[d,j]);Object(r.useEffect)((function(){if(a.current){var e=a.current;return e.addEventListener("mousemove",m),function(){e.removeEventListener("mousemove",m)}}}),[m]);var p=Object(r.useCallback)((function(){u(!1),v(void 0)}),[]);Object(r.useEffect)((function(){if(a.current){var e=a.current;return e.addEventListener("mouseup",p),e.addEventListener("mouseleave",p),function(){e.removeEventListener("mouseup",p),e.removeEventListener("mouseleave",p)}}}),[p]);var O=function(e){if(a.current){var t=a.current.getBoundingClientRect(),n=t.left,r=t.top;return{x:e.clientX-n,y:e.clientY-r}}},h=function(e,t){if(a.current){var n=a.current.getContext("2d");n&&(n.strokeStyle="rgb(32, 32, 32)",n.lineJoin="round",n.lineWidth=4,n.beginPath(),n.moveTo(e.x,e.y),n.lineTo(t.x,t.y),n.closePath(),n.stroke())}};return Object(o.jsx)("canvas",{ref:a,height:n,width:t})};k.defaultProps={width:window.innerWidth/1.07,height:window.innerHeight/1.07};var C=function(e){var t=e.paintMode,n=Object(r.useState)(_),a=Object(s.a)(n,2),c=a[0],l=a[1],b=Object(r.useState)(""),j=Object(s.a)(b,2),v=j[0],f=j[1],m=function(){if(0!=v.length){var e={id:Object(d.a)(),content:v.toUpperCase()};c.push(e),l(c),f("")}};return Object(o.jsxs)("div",{className:L.a.wrapper,children:[Object(o.jsxs)(i,{id:"dr1",className:L.a.droppable,children:[t&&Object(o.jsx)("div",{className:L.a.canvas,children:Object(o.jsx)(k,{})}),Object(o.jsx)("div",{className:L.a.cellsWrapper,children:u.map((function(e){return Object(o.jsx)("div",{id:e.id,className:L.a.itemCell,children:e.content},e.id)}))})]}),Object(o.jsx)(i,{id:"dr2",className:L.a.droppableLetters,children:c.map((function(e){return Object(o.jsx)(N,{content:e.content,className:L.a.item+" "+("\u0410"===e.content||"\u0415"===e.content||"\u0401"===e.content||"\u0418"===e.content||"\u041e"===e.content||"\u0423"===e.content||"\u042b"===e.content||"\u042d"===e.content||"\u042e"===e.content||"\u042f"===e.content?L.a.vowels:"\u042a"===e.content||"\u042c"===e.content?L.a.marks:L.a.consonants),id:e.id},e.id)}))}),Object(o.jsx)("input",{type:"text",autoFocus:!0,onChange:function(e){e.currentTarget.value.length<=1&&f(e.currentTarget.value)},onKeyPress:function(e){"Enter"===e.key&&e.currentTarget.value.length<=1&&m()},value:v}),Object(o.jsx)("button",{onClick:m,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0431\u0443\u043a\u0432\u0443"})]})},E=n(10),S=n(8),y=n(9),D=n.p+"static/media/Color-Line-Loading.469acfd9.svg",P=n(6),T=n.n(P),W=function(){return Object(o.jsx)("div",{className:T.a.backdrop,children:Object(o.jsx)("img",{src:D,alt:"loader",className:T.a.img})})};var B=function(){var e=Object(r.useState)(!1),t=Object(s.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(!0),i=Object(s.a)(c,2),d=i[0],u=i[1],l=function(){u(!1)};return Object(r.useEffect)((function(){return window.addEventListener("load",l),function(){return window.removeEventListener("load",l)}}),[]),d?Object(o.jsx)(W,{}):Object(o.jsxs)("div",{className:"main","aria-hidden":"true",children:[Object(o.jsx)(C,{paintMode:n}),Object(o.jsx)("div",{onClick:function(){a(!0)},className:"btn btnStart",children:Object(o.jsx)(S.a,{})}),Object(o.jsx)("div",{onClick:function(){a(!1)},className:" btn btnStop",children:Object(o.jsx)(y.a,{})}),Object(o.jsx)("div",{onClick:function(){window.location.reload()},className:"img",children:Object(o.jsx)(E.a,{})})]})};c.a.render(Object(o.jsx)(r.Fragment,{children:Object(o.jsx)(B,{})}),document.getElementById("root"))},3:function(e,t,n){e.exports={droppable:"Letters_droppable__2PaoB",canvas:"Letters_canvas__fHYCF",cellsWrapper:"Letters_cellsWrapper__1aq1c",itemCell:"Letters_itemCell__1oWOK",droppableLetters:"Letters_droppableLetters__1Aox8",item:"Letters_item__2cJcm",vowels:"Letters_vowels__2aZsb",consonants:"Letters_consonants__o-vwC",marks:"Letters_marks__2hroo",draggable:"Letters_draggable__1TvVs",wrapper:"Letters_wrapper__1Bu-i"}},6:function(e,t,n){e.exports={img:"Preloader_img__db4Z8",backdrop:"Preloader_backdrop__3nGHv"}}},[[19,1,2]]]);
//# sourceMappingURL=main.c7a48ff4.chunk.js.map