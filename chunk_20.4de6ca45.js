(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{190:function(e,t){var n;document.createTouch||(document.createTouch=function(e,t,n,c,u,i,r){return new o(t,n,{pageX:c,pageY:u,screenX:i,screenY:r,clientX:c-window.pageXOffset,clientY:u-window.pageYOffset},0,0)}),document.createTouchList||(document.createTouchList=function(){for(var e=c(),t=0;t<arguments.length;t++)e[t]=arguments[t];return e.length=arguments.length,e});var o=function(e,t,n,o,c){o=o||0,c=c||0,this.identifier=t,this.target=e,this.clientX=n.clientX+o,this.clientY=n.clientY+c,this.screenX=n.screenX+o,this.screenY=n.screenY+c,this.pageX=n.pageX+o,this.pageY=n.pageY+c};function c(){var e=[];return e.item=function(e){return this[e]||null},e.identifiedTouch=function(e){return this[e+1]||null},e}function u(e){return function(t){var o,c,u;1===t.which&&(("mousedown"===t.type||!n||n&&!n.dispatchEvent)&&(n=t.target),o=e,c=t,(u=document.createEvent("Event")).initEvent(o,!0,!0),u.altKey=c.altKey,u.ctrlKey=c.ctrlKey,u.metaKey=c.metaKey,u.shiftKey=c.shiftKey,u.touches=r(c),u.targetTouches=r(c),u.changedTouches=i(c),n.dispatchEvent(u),"mouseup"===t.type&&(n=null))}}function i(e){var t=c();return t.push(new o(n,1,e,0,0)),t}function r(e){return"mouseup"===e.type?c():i(e)}function s(){!function(){for(var e=[window,document.documentElement],t=["ontouchstart","ontouchmove","ontouchcancel","ontouchend"],n=0;n<e.length;n++)for(var o=0;o<t.length;o++)e[n]&&void 0===e[n][t[o]]&&(e[n][t[o]]=null)}(),window.addEventListener("mousedown",u("touchstart"),!0),window.addEventListener("mousemove",u("touchmove"),!0),window.addEventListener("mouseup",u("touchend"),!0)}s.multiTouchOffset=75,new s}}]);