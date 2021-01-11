(this["webpackJsonpsvg-canvas"]=this["webpackJsonpsvg-canvas"]||[]).push([[0],{86:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){},95:function(e,t,a){"use strict";a.r(t);var r=a(1),c=a(0),n=a.n(c),s=a(14),i=a.n(s),o=(a(86),a(17)),l=a(106),u=a(3),h=(a(88),function e(t){var a=Object(c.useRef)(),n=u.b().domain([0,1]).range([0,300]),s=u.b().domain([0,1]).range([300,0]),i=t.shape,o=t.data,l=t.size,h=t.opacity;return Object(c.useEffect)((function(){e.draw(300,300,a,n,s,i,o,l,h)})),Object(r.jsx)("canvas",{width:300,height:300,ref:a})});h.draw=function(e,t,a,r,c,n,s,i,o){var l,u=Date.now(),h=a.current.getContext("2d");if(h){l=h.globalAlpha,h.clearRect(0,0,e,t),h.lineWidth=1,h.strokeStyle="#000000",h.globalAlpha=o,h.beginPath(),s.forEach((function(e){var t=Math.round(r(e[0]))+.5,a=Math.round(c(e[1]))+.5;"circle"===n?(h.moveTo(t+i/2,a),h.arc(t,a,i/2,0,2*Math.PI,!0)):h.strokeRect(t,a,i,i)})),h.stroke(),h.globalAlpha=l;var d=Date.now()-u;h.fillStyle="#000000",h.font="16px sans-serif",h.fillText("CANVAS "+n+"s: "+d+" msec",10,t-10)}};var d=h,b=(a(89),function e(t){var a=Object(c.useRef)(),n=u.b().domain([0,1]).range([0,300]),s=u.b().domain([0,1]).range([300,0]),i=t.shape,o=t.data,l=t.size,h=t.opacity;return Object(c.useEffect)((function(){e.draw(300,a,n,s,i,o,l,h)})),Object(r.jsx)("svg",{width:300,height:300,ref:a})});b.draw=function(e,t,a,r,c,n,s,i){var o=u.c(t.current),l=o.selectAll("circle"===c?"circle":"rect");l.size()!==n.length&&(l.remove(),"circle"===c?n.forEach((function(e){o.append("circle").attr("cx",Math.round(a(e[0])+.5)).attr("cy",Math.round(r(e[1])+.5)).style("fill","none").style("stroke","black")})):n.forEach((function(e){o.append("rect").attr("x",Math.round(a(e[0])+.5)).attr("y",Math.round(r(e[1])+.5)).style("fill","none").style("stroke","black")})),o.selectAll("text").remove(),o.append("text"));var h=Date.now();"circle"===c?o.selectAll("circle").attr("r",s/2).style("opacity",i):o.selectAll("rect").attr("width",s).attr("height",s).style("opacity",i);var d=Date.now()-h;o.select("text").attr("x",10).attr("y",e-10).text("SVG "+c+"s: "+d+"  msec")};var p=b,j=(a(90),function e(){var t=Object(c.useState)(4),a=Object(o.a)(t,2),n=a[0],s=a[1],i=Object(c.useState)(e.getData(e.getPower(9))),u=Object(o.a)(i,2),h=u[0],b=u[1],j=Object(c.useState)(.4),f=Object(o.a)(j,2),m=f[0],x=f[1];return Object(r.jsxs)("div",{className:"Column",children:[Object(r.jsxs)("div",{className:"GridPlots",children:[Object(r.jsx)(p,{shape:"circle",size:n,data:h,opacity:m}),Object(r.jsx)(d,{shape:"circle",size:n,data:h,opacity:m}),Object(r.jsx)(p,{shape:"square",size:n,data:h,opacity:m}),Object(r.jsx)(d,{shape:"square",size:n,data:h,opacity:m})]}),Object(r.jsxs)("div",{className:"GridControls",children:[Object(r.jsx)("label",{children:"Size:"}),Object(r.jsx)(l.a,{defaultValue:4,step:1,min:0,max:10,valueLabelDisplay:"auto",marks:!0,onChangeCommitted:function(e,t){return s(t)}}),Object(r.jsx)("label",{children:"Points:"}),Object(r.jsx)(l.a,{defaultValue:9,step:1,min:0,max:15,valueLabelDisplay:"auto",marks:!0,valueLabelFormat:function(t){return e.getPower(t)},onChangeCommitted:function(t,a){return b(e.getData(e.getPower(a)))}}),Object(r.jsx)("label",{children:"Opacity:"}),Object(r.jsx)(l.a,{defaultValue:.4,step:.01,min:0,max:1,valueLabelDisplay:"auto",onChangeCommitted:function(e,t){return x(t)}})]}),Object(r.jsxs)("div",{className:"Description",children:[Object(r.jsxs)("p",{children:["Scatter plots have been used to display up to 1,000,000 data points (for example, ",Object(r.jsx)("a",{href:"https://www.highcharts.com/demo/android/scatter-boost",children:"here"})," and ",Object(r.jsx)("a",{href:"https://blog.scottlogic.com/2020/05/01/rendering-one-million-points-with-d3.html",children:"here"}),".  With suitably adjusted point size and opacity, these plots are superior to contour plots because they show both the structure of the data and the individual points."]}),Object(r.jsx)("p",{children:"Even in modern browsers, the SVG element cannot support such large data sets.  This type of plot requires a CANVAS element.  The performance difference becomes critical during user interactions such as brushing."})]})]})});j.getData=function(e){for(var t=[],a=u.a(.5,.1),r=0;r<e;r++)t[r]=[a(),a()];return t},j.getPower=function(e){return(e%3===0?1:e%3===1?2:5)*Math.pow(10,Math.floor(e/3))};var f=j;i.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(f,{})}),document.getElementById("root"))}},[[95,1,2]]]);
//# sourceMappingURL=main.e1768db0.chunk.js.map