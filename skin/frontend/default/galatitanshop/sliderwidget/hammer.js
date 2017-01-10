function Hammer(e,t,n){function x(e){return e.touches?e.touches.length:1}function T(e){e=e||window.event;if(!S){var t=document,n=t.body;return[{x:e.pageX||e.clientX+(t&&t.scrollLeft||n&&n.scrollLeft||0)-(t&&t.clientLeft||n&&t.clientLeft||0),y:e.pageY||e.clientY+(t&&t.scrollTop||n&&n.scrollTop||0)-(t&&t.clientTop||n&&t.clientTop||0)}]}else{var r=[],i;for(var s=0,o=e.touches.length;s<o;s++){i=e.touches[s];r.push({x:i.pageX,y:i.pageY})}return r}}function N(e,t){return Math.atan2(t.y-e.y,t.x-e.x)*180/Math.PI}function C(e,t){var n=t.x-e.x,r=t.y-e.y;return Math.sqrt(n*n+r*r)}function k(e,t){if(e.length==2&&t.length==2){var n=C(e[0],e[1]);var r=C(t[0],t[1]);return r/n}return 0}function L(e,t){if(e.length==2&&t.length==2){var n=N(e[1],e[0]);var r=N(t[1],t[0]);return r-n}return 0}function A(e,t){t.touches=T(t.originalEvent);t.type=e;if(j(r["on"+e])){r["on"+e].call(r,t)}}function O(e){e=e||window.event;if(e.preventDefault){e.preventDefault();e.stopPropagation()}else{e.returnValue=false;e.cancelBubble=true}}function M(){a={};l=false;f=0;s=0;o=0;c=null}function D(n){switch(n.type){case"mousedown":case"touchstart":a.start=T(n);p=(new Date).getTime();f=x(n);l=true;b=n;var r=e.getBoundingClientRect();var i=e.clientTop||document.body.clientTop||0;var d=e.clientLeft||document.body.clientLeft||0;var v=window.pageYOffset||e.scrollTop||document.body.scrollTop;var m=window.pageXOffset||e.scrollLeft||document.body.scrollLeft;g={top:r.top+v-i,left:r.left+m-d};y=true;_.hold(n);if(t.prevent_default){O(n)}break;case"mousemove":case"touchmove":if(!y){return false}w=n;a.move=T(n);if(!_.transform(n)){_.drag(n)}break;case"mouseup":case"mouseout":case"touchcancel":case"touchend":if(!y||c!="transform"&&n.touches&&n.touches.length>0){return false}y=false;E=n;_.swipe(n);if(c=="drag"){A("dragend",{originalEvent:n,direction:u,distance:s,angle:o})}else if(c=="transform"){A("transformend",{originalEvent:n,position:a.center,scale:k(a.start,a.move),rotation:L(a.start,a.move),distance:s,distanceX:_distance_x,distanceY:_distance_y})}else{_.tap(b)}h=c;A("release",{originalEvent:n,gesture:c,position:a.move||a.start});M();break}}function P(t){if(!H(e,t.relatedTarget)){D(t)}}function H(e,t){if(!t&&window.event&&window.event.toElement){t=window.event.toElement}if(e===t){return true}if(t){var n=t.parentNode;while(n!==null){if(n===e){return true}n=n.parentNode}}return false}function B(e,t){var n={};if(!t){return e}for(var r in e){if(r in t){n[r]=t[r]}else{n[r]=e[r]}}return n}function j(e){return Object.prototype.toString.call(e)=="[object Function]"}function F(e,t,n){t=t.split(" ");for(var r=0,i=t.length;r<i;r++){if(e.addEventListener){e.addEventListener(t[r],n,false)}else if(document.attachEvent){e.attachEvent("on"+t[r],n)}}}function I(e,t,n){t=t.split(" ");for(var r=0,i=t.length;r<i;r++){if(e.removeEventListener){e.removeEventListener(t[r],n,false)}else if(document.detachEvent){e.detachEvent("on"+t[r],n)}}}var r=this;var i={prevent_default:false,css_hacks:true,swipe:true,swipe_time:200,swipe_min_distance:20,drag:true,drag_vertical:true,drag_horizontal:true,drag_min_distance:20,transform:true,scale_treshold:.1,rotation_treshold:15,tap:true,tap_double:true,tap_max_interval:300,tap_max_distance:10,tap_double_distance:20,hold:true,hold_timeout:500};t=B(i,t);(function(){if(!t.css_hacks){return false}var n=["webkit","moz","ms","o",""];var r={userSelect:"none",touchCallout:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"};var i="";for(var s=0;s<n.length;s++){for(var o in r){i=o;if(n[s]){i=n[s]+i.substring(0,1).toUpperCase()+i.substring(1)}e.style[i]=r[o]}}})();var s=0;var o=0;var u=0;var a={};var f=0;var l=false;var c=null;var h=null;var p=null;var d={x:0,y:0};var v=null;var m=null;var g={};var y=false;var b;var w;var E;var S="ontouchstart"in window;this.option=function(e,r){if(r!=n){t[e]=r}return t[e]};this.getDirectionFromAngle=function(e){var t={down:e>=45&&e<135,left:e>=135||e<=-135,up:e<-45&&e>-135,right:e>=-45&&e<=45};var n,r;for(r in t){if(t[r]){n=r;break}}return n};this.destroy=function(){if(S){I(e,"touchstart touchmove touchend touchcancel",D)}else{I(e,"mouseup mousedown mousemove",D);I(e,"mouseout",P)}};var _={hold:function(e){if(t.hold){c="hold";clearTimeout(m);m=setTimeout(function(){if(c=="hold"){A("hold",{originalEvent:e,position:a.start})}},t.hold_timeout)}},swipe:function(e){if(!a.move||c==="transform"){return}var n=a.move[0].x-a.start[0].x;var i=a.move[0].y-a.start[0].y;s=Math.sqrt(n*n+i*i);var f=(new Date).getTime();var l=f-p;if(t.swipe&&t.swipe_time>l&&s>t.swipe_min_distance){o=N(a.start[0],a.move[0]);u=r.getDirectionFromAngle(o);c="swipe";var h={x:a.move[0].x-g.left,y:a.move[0].y-g.top};var d={originalEvent:e,position:h,direction:u,distance:s,distanceX:n,distanceY:i,angle:o};A("swipe",d)}},drag:function(e){var n=a.move[0].x-a.start[0].x;var i=a.move[0].y-a.start[0].y;s=Math.sqrt(n*n+i*i);if(t.drag&&s>t.drag_min_distance||c=="drag"){o=N(a.start[0],a.move[0]);u=r.getDirectionFromAngle(o);var f=u=="up"||u=="down";if((f&&!t.drag_vertical||!f&&!t.drag_horizontal)&&s>t.drag_min_distance){return}c="drag";var h={x:a.move[0].x-g.left,y:a.move[0].y-g.top};var p={originalEvent:e,position:h,direction:u,distance:s,distanceX:n,distanceY:i,angle:o};if(l){A("dragstart",p);l=false}A("drag",p);O(e)}},transform:function(e){if(t.transform){if(x(e)!=2){return false}var n=L(a.start,a.move);var r=k(a.start,a.move);if(c!="drag"&&(c=="transform"||Math.abs(1-r)>t.scale_treshold||Math.abs(n)>t.rotation_treshold)){c="transform";a.center={x:(a.move[0].x+a.move[1].x)/2-g.left,y:(a.move[0].y+a.move[1].y)/2-g.top};if(l)a.startCenter=a.center;var i=a.center.x-a.startCenter.x;var o=a.center.y-a.startCenter.y;s=Math.sqrt(i*i+o*o);var u={originalEvent:e,position:a.center,scale:r,rotation:n,distance:s,distanceX:i,distanceY:o};if(l){A("transformstart",u);l=false}A("transform",u);O(e);return true}}return false},tap:function(e){var n=(new Date).getTime();var r=n-p;if(t.hold&&!(t.hold&&t.hold_timeout>r)){return}var i=function(){if(d&&t.tap_double&&h=="tap"&&p-v<t.tap_max_interval){var e=Math.abs(d[0].x-a.start[0].x);var n=Math.abs(d[0].y-a.start[0].y);return d&&a.start&&Math.max(e,n)<t.tap_double_distance}return false}();if(i){c="double_tap";v=null;A("doubletap",{originalEvent:e,position:a.start});O(e)}else{var o=a.move?Math.abs(a.move[0].x-a.start[0].x):0;var u=a.move?Math.abs(a.move[0].y-a.start[0].y):0;s=Math.max(o,u);if(s<t.tap_max_distance){c="tap";v=n;d=a.start;if(t.tap){A("tap",{originalEvent:e,position:a.start});O(e)}}}}};if(S){F(e,"touchstart touchmove touchend touchcancel",D)}else{F(e,"mouseup mousedown mousemove",D);F(e,"mouseout",P)}};