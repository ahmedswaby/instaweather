(this.webpackJsonpinstaweather=this.webpackJsonpinstaweather||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a(1),c=a.n(n),r=a(4),i=a.n(r),o=(a(15),a(3)),l=a.n(o),d=a(5),h=a(6),u=a(7),j=a(9),m=a(8),p=a.p+"static/media/cloudy.799926f7.svg",f=a.p+"static/media/sunny.14a5c542.svg",b=function(e){Object(j.a)(a,e);var t=Object(m.a)(a);function a(e){var s;return Object(h.a)(this,a),(s=t.call(this,e)).showPosition=function(e){console.log(e)},s.toggleTemp=function(e){return Math.floor((e-32)/1.8)},s.toggleView=function(e){s.setState({temp:e})},s.toggleDaysandHr=function(e){s.setState({view:e})},s.state={temp:"f",view:"h",currently:{},days:[]},s}return Object(u.a)(a,[{key:"componentDidMount",value:function(){navigator.geolocation.getCurrentPosition(this.showPosition,(function(){alert("location services failed due to unknown error, please try again later"),document.querySelector(".loader-wrapper").classList.add("d-none")}),{timeout:1e4});var e=new Intl.DateTimeFormat("en-GB",{year:"numeric",month:"long",day:"numeric"});this.setState({todayDate:e.format(new Date)})}},{key:"fetchData",value:function(){var e=Object(d.a)(l.a.mark((function e(t){var a,s=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("here"),a="https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/a177f8481c31fa96c3f95ad4f4f84610/".concat(t.coords.latitude,",").concat(t.coords.longitude,"/"),e.next=4,fetch(a,{method:"GET"}).then((function(e){return e.json()})).then((function(e){console.log("here"),document.querySelector(".loader-wrapper").classList.add("d-none"),s.setState({timeZone:e.timezone,days:e.daily.data,hours:e.hourly.data}),console.log(s.state.hours)})).catch((function(e){document.querySelector(".loader-wrapper").classList.add("d-none"),console.log(e)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(s.jsxs)("section",{children:[Object(s.jsx)("div",{className:"loader-wrapper",children:Object(s.jsx)("div",{className:"loader"})}),Object(s.jsxs)("div",{className:"container",children:[Object(s.jsxs)("header",{children:[Object(s.jsx)("h4",{className:"text-uppercase",children:"instaweather"}),Object(s.jsxs)("div",{className:"d-flex ml-auto",children:[Object(s.jsx)("button",{className:"btn text-white ".concat("c"===this.state.temp?"active":""),onClick:function(){return e.toggleView("c")},children:"C"},"c"),Object(s.jsx)("button",{className:"btn text-white ".concat("f"===this.state.temp?"active":""),onClick:function(){return e.toggleView("f")},children:"F"},"f")]})]}),Object(s.jsxs)("main",{children:[Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col-md-6",children:Object(s.jsxs)("div",{className:"d-flex flex-column",children:[Object(s.jsx)("h2",{children:this.state.timeZone}),Object(s.jsx)("span",{children:this.state.todayDate}),this.state.days.length>0&&Object(s.jsx)("img",{src:"partly-cloudy-day"===this.state.days[0].icon?p:f,alt:"",className:"mr-auto"})]})}),Object(s.jsx)("div",{className:"col-md-6",children:this.state.days.length>0&&Object(s.jsxs)("div",{className:"align-content-end d-flex flex-column text-end",children:[Object(s.jsxs)("h1",{children:["f"===this.state.temp?Math.floor(this.state.days[0].apparentTemperatureHigh):this.toggleTemp(this.state.days[0].apparentTemperatureHigh),Object(s.jsx)("sup",{children:"\xb0"})]}),Object(s.jsxs)("h3",{children:["f"===this.state.temp?Math.floor(this.state.days[0].temperatureMax):this.toggleTemp(this.state.days[0].temperatureMax),Object(s.jsx)("sup",{children:"\xb0"})," /","f"===this.state.temp?Math.floor(this.state.days[0].temperatureLow):this.toggleTemp(this.state.days[0].temperatureLow),Object(s.jsx)("sup",{children:"\xb0"})]}),Object(s.jsx)("p",{children:this.state.days[0].summary})]})})]}),Object(s.jsxs)("div",{className:"border-bottom mb-4",children:[Object(s.jsx)("button",{className:"btn pl-0 pr-0 ".concat("h"===this.state.view?"active":""),onClick:function(){return e.toggleDaysandHr("h")},children:"hourly"}),Object(s.jsx)("button",{className:"btn ".concat("d"===this.state.view?"active":""),onClick:function(){return e.toggleDaysandHr("d")},children:"daily"})]}),"h"===this.state.view?Object(s.jsx)("div",{className:"d-flex overflow-scroll pb-4",children:!!this.state.hours&&this.state.hours.map((function(t,a){return Object(s.jsxs)("div",{className:"hourly-section",children:[Object(s.jsx)("p",{className:"text-capitalize",children:"".concat(new Date(1e3*t.time).getHours().toLocaleString(),":00")}),Object(s.jsx)("img",{src:"partly-cloudy-day"===t.icon?p:f,alt:"sunny day"}),Object(s.jsxs)("h4",{children:["f"===e.state.temp?Math.floor(t.apparentTemperature):e.toggleTemp(t.apparentTemperature),Object(s.jsx)("sup",{children:"\xb0"})]})]},a)}))}):!!this.state.days&&Object(s.jsx)("div",{className:"d-flex overflow-scroll pb-4",children:this.state.days.map((function(t,a){return Object(s.jsxs)("div",{className:"hourly-section",children:[Object(s.jsx)("p",{className:"text-capitalize",children:new Date(1e3*t.time).getDate().toLocaleString()}),Object(s.jsx)("img",{src:"partly-cloudy-day"===t.icon?p:f,alt:"sunny day"}),Object(s.jsxs)("h4",{children:["f"===e.state.temp?Math.floor(t.temperatureHigh):e.toggleTemp(t.temperatureHigh),Object(s.jsx)("sup",{children:"\xb0"})]})]},a)}))})]})]})]})}}]),a}(c.a.Component),x=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,18)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),s(e),n(e),c(e),r(e)}))};i.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(b,{})}),document.getElementById("root")),x()}},[[17,1,2]]]);
//# sourceMappingURL=main.c1a676f5.chunk.js.map