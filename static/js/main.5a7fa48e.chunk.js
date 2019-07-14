(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a(32)},24:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(16),c=a.n(l),o=a(10),s=(a(24),a(7)),i=a(2),u=a(3),m=a(5),p=a(4),d=a(6),h=a(1),f=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).target1=r.a.createRef(),a.target2=r.a.createRef(),a.model={width:660,height:650},a.state={targetFlag:null,pieData:[],flagData:[],time:{now:a.whatTimeIsIt(),ampm:a.whatAMPMIsIt()}},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){for(var e=this,t=this.state,a=t.pieData,n=t.flagData,r=0;r<72;r++){var l=.2;r%6&&(l=.1),a.push(1/72*l),a.push(1/72*(1-l)),n.push(1/72)}this.renderClock(),this.renderFlag(),setInterval(function(){var t=Object(s.a)({},e.state).time;t.now=e.whatTimeIsIt(),t.ampm=e.whatAMPMIsIt(),e.setState({time:t})},1e3)}},{key:"whatTimeIsIt",value:function(){return"".concat(("0"+(new Date).getHours()).slice(-2),":").concat(("0"+(new Date).getMinutes()).slice(-2))}},{key:"whatAMPMIsIt",value:function(){return(new Date).getHours()<12?"AM":"PM"}},{key:"componentDidUpdate",value:function(){this.renderClock()}},{key:"renderClock",value:function(){var e=this,t=h.c(this.target1.current),a=h.a().outerRadius(220).innerRadius(225),n=h.a().outerRadius(220).innerRadius(230),r=h.a().outerRadius(220).innerRadius(250),l=h.b().sort(null).value(function(e){return e}),c=t.selectAll(".arc").data(l(this.state.pieData)),o=c.enter().append("g").attr("class","arc"),s=c.exit();c.select("path").attr("d",function(e,t){return t%12?a(e):n(e)}).attr("fill",function(e,t){return t%2?"rgba(255, 255, 255, 0)":"rgba(255, 255, 255, 1)"}).filter(function(t,a){return a===e.state.targetFlag}).attr("d",r),o.append("path").attr("d",function(e,t){return t%12?a(e):n(e)}).attr("fill",function(e,t){return t%2?"rgba(255, 255, 255, 0)":"rgba(255, 255, 255, 1)"}),s.remove()}},{key:"renderFlag",value:function(){var e=h.c(this.target2.current),t=h.a().outerRadius(220).innerRadius(260),a=h.b().startAngle(-1/72*Math.PI).endAngle((2-1/72)*Math.PI).sort(null).value(function(e){return e}),n=e.selectAll(".flag").data(a(this.state.flagData)),r=n.enter().append("g").attr("class","flag"),l=n.exit();r.append("path").attr("d",t).attr("opacity",0).attr("cursor","pointer"),l.remove(),this.hoverFlag()}},{key:"hoverFlag",value:function(){var e=h.c(this.target2.current).selectAll(".flag path"),t=this;e.on("mouseover",function(e,a){var n=Object(s.a)({},t.state).targetFlag;n=2*a,t.setState({targetFlag:n})}).on("mouseout",function(e,a){Object(s.a)({},t.state).targetFlag;t.setState({targetFlag:null})})}},{key:"render",value:function(){var e=this.model,t=e.width,a=e.height,n=this.state.time,l=this.props.topic;return r.a.createElement("div",{className:"w-100 h-100 roller-clock-section"},r.a.createElement("svg",{preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 ".concat(t," ").concat(a),width:"100%"},r.a.createElement("g",{ref:this.target1,transform:"translate(".concat(t/2,", ").concat(a/2,")")},r.a.createElement("circle",{r:"260",fill:l.color,opacity:"0.3"})),r.a.createElement("g",{ref:this.target2,transform:"translate(".concat(t/2,", ").concat(a/2,")")})),r.a.createElement("div",{className:"roller-clock-detail"},r.a.createElement("p",{className:"roller-clock-status"},l.label),r.a.createElement("p",{className:"roller-clock-time"},n.now),r.a.createElement("p",{className:"roller-clock-ampm"},n.ampm)))}}]),t}(n.Component),g=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"roller-now"},r.a.createElement("div",{className:"roller-now-card"},r.a.createElement("h3",{className:"roller-now-job"},"Wash dishes"),r.a.createElement("ul",{className:"roller-now-time"},r.a.createElement("li",{className:"d-flex"},r.a.createElement("p",{className:"roller-now-progress"}),r.a.createElement("span",null,"work 00:10")),r.a.createElement("li",{className:"d-flex"},r.a.createElement("p",{className:"roller-now-progress"}),r.a.createElement("span",null,"idle 00:10")),r.a.createElement("li",{className:"d-flex"},r.a.createElement("p",{className:"roller-now-progress"}),r.a.createElement("span",null,"rest 00:10"))),r.a.createElement("div",{className:"roller-now-percent"},r.a.createElement("p",{className:"roller-now-perform"},"40%",r.a.createElement("span",null,"perf.")))))}}]),t}(n.Component),v=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"roller-next"},r.a.createElement("p",{className:"roller-title"},"NEXT"),r.a.createElement("ul",{className:"roller-todo-list"},r.a.createElement("li",null,r.a.createElement("p",null,"wash socks"),r.a.createElement("span",null,"00:00 PM")),r.a.createElement("li",null,r.a.createElement("p",null,"wash socks"),r.a.createElement("span",null,"00:00 PM")),r.a.createElement("li",null,r.a.createElement("p",null,"wash socks"),r.a.createElement("span",null,"00:00 PM"))))}}]),t}(n.Component),E=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).topics=[{name:"roller-working",color:"#7e7e57",label:"working..."},{name:"roller-resting",color:"#424864",label:"resting..."},{name:"roller-idling",color:"#425464",label:"idling..."}],a.state={topicIndex:0},a.handleClickTime=function(){var e=Object(s.a)({},a.state).topicIndex;e=(e+1)%a.topics.length,a.setState({topicIndex:e})},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state.topicIndex;return r.a.createElement("div",{className:"roller-container "+this.topics[e].name},r.a.createElement("div",{className:"roller-clock"},r.a.createElement(f,{topic:this.topics[e]})),r.a.createElement("div",{className:"roller-top d-flex"},r.a.createElement("div",{className:"roller-count-down d-flex justify-content-end align-items-center"},r.a.createElement("button",{className:"roller-count-down-btn p-0",onClick:this.handleClickTime},r.a.createElement("span",null,"00:00")),r.a.createElement("p",{className:"roller-title"},"NOW")),r.a.createElement(g,null)),r.a.createElement("div",{className:"roller-bottom d-flex justify-content-end"},r.a.createElement(v,null)))}}]),t}(n.Component);a(25),a(26),a(27);var w=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("main",{className:"App-header"},r.a.createElement(E,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(o.a,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,1,2]]]);
//# sourceMappingURL=main.5a7fa48e.chunk.js.map