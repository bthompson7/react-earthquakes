(this["webpackJsonpeq-app"]=this["webpackJsonpeq-app"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(2),i=n.n(r),s=(n(12),n(13),n(3)),c=n(4),l=n(6),u=n(5),p=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var o;return Object(s.a)(this,n),(o=t.call(this,e)).state={posts:[]},o}return Object(c.a)(n,[{key:"componentDidMount",value:function(){fetch("https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&endtime&minmagnitude=4",{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then(function(e){console.log(e),this.setState({posts:e.features}),console.log(this.state.posts[0].properties.title)}.bind(this))}},{key:"unixToDate",value:function(e){var t=new Date(e);return console.log(t.toLocaleString()),a.a.createElement("h2",null,t.toLocaleString())}},{key:"render",value:function(){var e=this;return a.a.createElement("div",null,this.state.posts.map((function(t){return a.a.createElement("div",{class:"eq-content"},e.unixToDate(t.properties.time),a.a.createElement("h2",null,t.properties.title))})))}}]),n}(a.a.Component);var h=function(){return a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"Recent Earthquakes"),a.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.6f932877.chunk.js.map