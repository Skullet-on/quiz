(window.webpackJsonpquiz=window.webpackJsonpquiz||[]).push([[0],[,,,,,,,,function(e){e.exports=JSON.parse('[{"question":"Who\u2019s the poor kid in South Park?","answers":[{"key":"Stan","value":false},{"key":"Kyle","value":false},{"key":"Cartman","value":false},{"key":"Kenny","value":true}]},{"question":"When the Metallica band was formed?","answers":[{"key":"1981","value":true},{"key":"1975","value":false},{"key":"1991","value":false},{"key":"1982","value":false}]},{"question":"What kind of TV show is a fictionalized account of a true story?","answers":[{"key":"Docudrama","value":true},{"key":"Looney Tunes cartoon","value":false},{"key":"Soap opera","value":false},{"key":"Infomercial","value":false}]},{"question":"According to a popular phrase, something that is easy to accomplish is said to be a \'piece of\' what?","answers":[{"key":"Fudge","value":false},{"key":"Candy","value":false},{"key":"Cake","value":true},{"key":"Pizza","value":false}]},{"question":"In an Olympic medal ceremony, who stands on the highest point of the podium?","answers":[{"key":"Bronze medalist","value":false},{"key":"Gold medalist","value":true},{"key":"TV cameraman","value":false},{"key":"Silver medalist","value":false}]},{"question":"Where was Nintendo founded?","answers":[{"key":"America","value":false},{"key":"Japan","value":true},{"key":"China","value":false},{"key":"England","value":false}]},{"question":"Which planet is closest to the sun?","answers":[{"key":"Jupiter","value":false},{"key":"Mercury","value":true},{"key":"Mars","value":false},{"key":"Earth","value":false}]},{"question":"How many oscars did the Titanic movie got?","answers":[{"key":"11","value":true},{"key":"1","value":false},{"key":"none","value":false},{"key":"6","value":false}]},{"question":"In what year was Google launched on the web?","answers":[{"key":"1996","value":false},{"key":"1980","value":false},{"key":"2000","value":false},{"key":"1998","value":true}]},{"question":"Who is the inventor of photography?","answers":[{"key":"Leonardo Da Vinci","value":false},{"key":"Picasso","value":false},{"key":"Daguerre","value":true},{"key":"Bram Stoker","value":false}]}]')},function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(7),o=a.n(r),l=(a(14),a(1)),u=a(2),i=a(4),c=a(3),f=a(5),h=(a(15),function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"handleClick",value:function(e){var t=this.props.value;e.target.className=t?"answer correct":"answer wrong",this.props.next(e,t)}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{id:"answer",className:"answer",onClick:function(t){return e.handleClick(t)}},this.props.ans)}}]),t}(n.Component)),v=(a(16),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(c.a)(t).call(this,e))).state={answers:a.shuffle(a.props.answers),count:0},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"shuffle",value:function(e){for(var t,a,n=e.length-1;n>0;n--)a=e[t=Math.floor(Math.random()*(n+1))],e[t]=e[n],e[n]=a;return e}},{key:"list",value:function(){var e=this;return this.state.answers.map(function(t,a){return s.a.createElement(h,{key:a,ans:t.key,value:t.value,next:function(t,a){return e.next(t,a)}})})}},{key:"next",value:function(e,t){this.props.onNext(e,t)}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"question"},this.props.question),this.list())}}]),t}(n.Component)),k=(a(17),function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"handleClick",value:function(e){window.location.reload()}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"statistic"},"Your score:",s.a.createElement("div",{className:"stats"},s.a.createElement("p",null,"Correct answers: ",this.props.correct),s.a.createElement("p",null,"Fail answers: ",this.props.fail)),s.a.createElement("button",{className:"reload",onClick:function(t){return e.handleClick(t)}},"Reload"))}}]),t}(n.Component)),y=a(8),d=(a(18),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(c.a)(t).call(this,e))).state={questions:a.shuffle(y),count:0,win:!1,correct:0,fail:0},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"shuffle",value:function(e){for(var t,a,n=e.length-1;n>0;n--)a=e[t=Math.floor(Math.random()*(n+1))],e[t]=e[n],e[n]=a;return e}},{key:"current",value:function(e){var t=this;if(this.state.win)return s.a.createElement(k,{correct:this.state.correct,fail:this.state.fail});var a=this.state.questions[e];return s.a.createElement(v,{key:e,question:a.question,answers:a.answers,onNext:function(e,a){return t.handleClick(e,a)}})}},{key:"handleClick",value:function(e,t){var a,n=this;(a=2e3,new Promise(function(e){return setTimeout(e,a)})).then(function(){t?n.setState({correct:n.state.correct+1}):n.setState({fail:n.state.fail+1}),n.state.count===n.state.questions.length-1?n.setState({win:!0}):n.setState({count:n.state.count+1})})}},{key:"render",value:function(){return s.a.createElement("div",{className:"quiz"},this.current(this.state.count))}}]),t}(n.Component));var m=function(){return s.a.createElement("div",{className:"App"},s.a.createElement(d,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.371f5083.chunk.js.map