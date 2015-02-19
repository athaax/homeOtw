/*!
* Metro JS for jQuery
* http://drewgreenwell.com/ 
* For details and usage info see: http://drewgreenwell.com/projects/metrojs
Copyright (C) 2013, Drew Greenwell
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), 
to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, 
and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, 
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
(function(n){var r,f,e,o;n.fn.metrojs={capabilities:null,checkCapabilities:function(t,i){return(n.fn.metrojs.capabilities==null||typeof i!="undefined"&&i==!0)&&(n.fn.metrojs.capabilities=new n.fn.metrojs.MetroModernizr(t)),n.fn.metrojs.capabilities}};r=n.fn.metrojs;f=window.console;typeof f!="object"&&(f={},f.log=function(){},f.error=function(){});e=typeof n.error=="function"?n.error:f.error;o=99e3;n.fn.liveTile=function(t){var r,i;if(u[t]){for(r=[],i=1;i<=arguments.length;i++)r[i-1]=arguments[i];return u[t].apply(this,r)}return typeof t!="object"&&t?(n.error("Method "+t+" does not exist on jQuery.liveTile"),null):u.init.apply(this,arguments)};n.fn.liveTile.contentModules={modules:[],addContentModule:function(n,t){this.modules instanceof Array||(this.modules=[]);this.modules.push(t)},hasContentModule:function(n){if(typeof n=="undefined"||!(this.modules instanceof Array))return-1;for(var t=0;t<this.modules.length;t++)if(typeof this.modules[t].moduleName!="undefined"&&this.modules[t].moduleName==n)return t;return-1}};n.fn.liveTile.defaults={mode:"slide",speed:500,initDelay:-1,delay:5e3,stops:"100%",stack:!1,direction:"vertical",animationDirection:"forward",tileSelector:">div,>li,>p,>img,>a",tileFaceSelector:">div,>li,>p,>img,>a",ignoreDataAttributes:!1,click:null,link:"",newWindow:!1,bounce:!1,bounceDirections:"all",bounceFollowsMove:!0,pauseOnHover:!1,pauseOnHoverEvent:"both",playOnHover:!1,playOnHoverEvent:"both",onHoverDelay:0,onHoverOutDelay:200,repeatCount:-1,appendBack:!0,alwaysTrigger:!1,flipListOnHover:!1,flipListOnHoverEvent:"mouseout",noHAflipOpacity:"1",haTransFunc:"ease",noHaTransFunc:"linear",currentIndex:0,startNow:!0,useModernizr:typeof Modernizr!="undefined",useHardwareAccel:!0,useTranslate:!0,faces:{$front:null,$back:null},animationStarting:function(){},animationComplete:function(){},triggerDelay:function(){return Math.random()*3e3},swap:"",swapFront:"-",swapBack:"-",contentModules:[],rebindMessage:"tile data is missing. Are you missing a call to rebind or destroy? You may also be able to avoid this error by calling stop or pause"};var u={init:function(u){var f=n.extend({},n.fn.liveTile.defaults,u);return r.checkCapabilities(f),i.getBrowserPrefix(),n.fn.liveTile.contentModules.hasContentModule("image")==-1&&n.fn.liveTile.contentModules.addContentModule("image",s.imageSwap),n.fn.liveTile.contentModules.hasContentModule("html")==-1&&n.fn.liveTile.contentModules.addContentModule("html",s.htmlSwap),n(this).each(function(i,r){var e=n(r),u=t.initTileData(e,f),o;u.faces=t.prepTile(e,u);u.fade=function(n){t.fade(e,n)};u.slide=function(n){t.slide(e,n)};u.carousel=function(n){t.carousel(e,n)};u.flip=function(n){t.flip(e,n)};u.flipList=function(n){t.flipList(e,n)};o={fade:u.fade,slide:u.slide,carousel:u.carousel,flip:u.flip,"flip-list":u.flipList};u.doAction=function(n){var t=o[u.mode];typeof t=="function"&&(t(n),u.hasRun=!0);n==u.timer.repeatCount&&(u.runEvents=!1)};u.timer=new n.fn.metrojs.TileTimer(u.delay,u.doAction,u.repeatCount);e.data("LiveTile",u);(u.mode!=="flip-list"||u.flipListOnHover==!1)&&(u.pauseOnHover?t.bindPauseOnHover(e):u.playOnHover&&t.bindPlayOnHover(e,u));(u.link.length>0||typeof u.click=="function")&&e.css({cursor:"pointer"}).bind("click.liveTile",function(n){var t=!0;typeof u.click=="function"&&(t=u.click(e,u)||!1);t&&u.link.length>0&&(n.preventDefault(),u.newWindow?window.open(u.link):window.location=u.link)});t.bindBounce(e,u);u.startNow&&u.mode!="none"&&(u.runEvents=!0,u.timer.start(u.initDelay))})},goto:function(t){var i,r=typeof t,u;if(r==="undefined"&&(i={index:-99,delay:0,autoAniDirection:!1}),r!=="number"&&isNaN(t))if(r==="string")if(t=="next")i={index:-99,delay:0};else if(t.indexOf("prev")===0)i={index:-100,delay:0};else return n.error(t+' is not a recognized action for .liveTile("goto")'),n(this);else r==="object"&&(typeof t.delay=="undefined"&&(t.delay=0),u=typeof t.index,u==="undefined"?t.index=0:u==="string"&&(t.index==="next"?t.index=-99:t.index.indexOf("prev")===0&&(t.index=-100)),i=t);else i={index:parseInt(t,10),delay:0};return n(this).each(function(t,r){var o=n(r),u=o.data("LiveTile"),h=o.data("metrojs.tile"),f=i.index,s,e;if(h.animating===!0)return n(this);if(u.mode==="carousel"){if(s=u.faces.$listTiles.filter(".active"),e=u.faces.$listTiles.index(s),f===-100?((typeof i.autoAniDirection=="undefined"||i.autoAniDirection==!0)&&(u.tempValues.animationDirection=typeof i.animationDirection=="undefined"?"backward":i.animationDirection),f=e===0?u.faces.$listTiles.length-1:e-1):f===-99&&((typeof i.autoAniDirection=="undefined"||i.autoAniDirection==!0)&&(u.tempValues.animationDirection=typeof i.animationDirection=="undefined"?"forward":i.animationDirection),f=e+1),e==f)return;typeof i.direction!="undefined"&&(u.tempValues.direction=i.direction);typeof i.animationDirection!="undefined"&&(u.tempValues.animationDirection=i.animationDirection);u.currentIndex=f==0?u.faces.$listTiles.length:f-1}else u.currentIndex=f;u.runEvents=!0;u.timer.start(i.delay>=0?i.delay:u.delay)})},play:function(t){var i,r=typeof t;return r==="undefined"?i={delay:-1}:r==="number"?i={delay:t}:r==="object"&&(typeof t.delay=="undefined"&&(t.delay=-1),i=t),n(this).each(function(t,r){var f=n(r),u=f.data("LiveTile");u.runEvents=!0;i.delay<0&&!u.hasRun&&(i.delay=u.initDelay);u.timer.start(i.delay>=0?i.delay:u.delay)})},animate:function(){return n(this).each(function(t,i){var r=n(i),u=r.data("LiveTile");u.doAction()})},stop:function(){return n(this).each(function(t,i){var u=n(i),r=u.data("LiveTile");r.hasRun=!1;r.runEvents=!1;r.timer.stop();window.clearTimeout(r.eventTimeout);window.clearTimeout(r.flCompleteTimeout);window.clearTimeout(r.completeTimeout);r.mode==="flip-list"&&r.faces.$listTiles.each(function(t,i){var r=n(i).data("metrojs.tile");window.clearTimeout(r.eventTimeout);window.clearTimeout(r.flCompleteTimeout);window.clearTimeout(r.completeTimeout)})})},pause:function(){return n(this).each(function(t,i){var u=n(i),r=u.data("LiveTile");r.timer.pause();r.runEvents=!1;window.clearTimeout(r.eventTimeout);window.clearTimeout(r.flCompleteTimeout);window.clearTimeout(r.completeTimeout);r.mode==="flip-list"&&r.faces.$listTiles.each(function(t,i){var r=n(i).data("metrojs.tile");window.clearTimeout(r.eventTimeout);window.clearTimeout(r.flCompleteTimeout);window.clearTimeout(r.completeTimeout)})})},restart:function(t){var i,r=typeof t;return r==="undefined"?i={delay:-1}:r==="number"?i={delay:t}:r==="object"&&(typeof t.delay=="undefined"&&(t.delay=-1),i=t),n(this).each(function(t,r){var f=n(r),u=f.data("LiveTile");i.delay<0&&!u.hasRun&&(i.delay=u.initDelay);u.hasRun=!1;u.runEvents=!0;u.timer.restart(i.delay>=0?i.delay:u.delay)})},rebind:function(t){return n(this).each(function(n,i){typeof t!="undefined"?(typeof t.timer!="undefined"&&t.timer!=null&&t.timer.stop(),t.hasRun=!1,u.init.apply(i,[t])):u.init.apply(i,[{}])})},destroy:function(r){var f=typeof r,u;return f==="undefined"?u={removeCss:!1}:f==="boolean"?u={removeCss:r}:f==="object"&&(typeof r.removeCss=="undefined"&&(r.removeCss=!1),u=r),n(this).each(function(r,f){var o=n(f),e=o.data("LiveTile"),s;typeof e!="undefined"&&(o.unbind(".liveTile"),s=i.appendStyleProperties({margin:"",cursor:""},["transform","transition"],["",""]),e.timer.stop(),window.clearTimeout(e.eventTimeout),window.clearTimeout(e.flCompleteTimeout),window.clearTimeout(e.completeTimeout),e.faces.$listTiles!=null&&e.faces.$listTiles.each(function(i,r){var f=n(r),o,h;e.mode==="flip-list"?(o=f.data("metrojs.tile"),window.clearTimeout(o.eventTimeout),window.clearTimeout(o.flCompleteTimeout),window.clearTimeout(o.completeTimeout)):e.mode==="carousel"&&(h=e.listData[i],h.bounce&&t.unbindMsBounce(f,h));u.removeCss?(f.removeClass("ha"),f.find(e.tileFaceSelector).unbind(".liveTile").removeClass("bounce flip-front flip-back ha slide slide-front slide-back").css(s)):f.find(e.tileFaceSelector).unbind(".liveTile");f.removeData("metrojs.tile")}).unbind(".liveTile"),e.faces.$front!=null&&u.removeCss&&e.faces.$front.removeClass("flip-front flip-back ha slide slide-front slide-back").css(s),e.faces.$back!=null&&u.removeCss&&e.faces.$back.removeClass("flip-front flip-back ha slide slide-front slide-back").css(s),e.bounce&&t.unbindMsBounce(o,e),e.playOnHover&&t.unbindMsPlayOnHover(o,e),e.pauseOnhover&&t.unbindMsPauseOnHover(o,e),o.removeClass("ha"),o.removeData("LiveTile"),o.removeData("metrojs.tile"),e=null)})}},t={dataAtr:function(n,t,i){return typeof n.attr("data-"+t)!="undefined"?n.attr("data-"+t):i},dataMethod:function(n,t,i){return typeof n.data(t)!="undefined"?n.data(t):i},getDataOrDefault:null,initTileData:function(i,u){var s=u.ignoreDataAttributes==!1,f=null,e,v,o,a;this.getDataOrDefault==null&&(this.getDataOrDefault=r.capabilities.isOldJQuery?this.dataAtr:this.dataMethod);f=s?{speed:this.getDataOrDefault(i,"speed",u.speed),delay:this.getDataOrDefault(i,"delay",u.delay),stops:this.getDataOrDefault(i,"stops",u.stops),stack:this.getDataOrDefault(i,"stack",u.stack),mode:this.getDataOrDefault(i,"mode",u.mode),direction:this.getDataOrDefault(i,"direction",u.direction),useHardwareAccel:this.getDataOrDefault(i,"ha",u.useHardwareAccel),repeatCount:this.getDataOrDefault(i,"repeat",u.repeatCount),swap:this.getDataOrDefault(i,"swap",u.swap),appendBack:this.getDataOrDefault(i,"appendback",u.appendBack),currentIndex:this.getDataOrDefault(i,"start-index",u.currentIndex),animationDirection:this.getDataOrDefault(i,"ani-direction",u.animationDirection),startNow:this.getDataOrDefault(i,"start-now",u.startNow),tileSelector:this.getDataOrDefault(i,"tile-selector",u.tileSelector),tileFaceSelector:this.getDataOrDefault(i,"face-selector",u.tileFaceSelector),bounce:this.getDataOrDefault(i,"bounce",u.bounce),bounceDirections:this.getDataOrDefault(i,"bounce-dir",u.bounceDirections),bounceFollowsMove:this.getDataOrDefault(i,"bounce-follows",u.bounceFollowsMove),click:this.getDataOrDefault(i,"click",u.click),link:this.getDataOrDefault(i,"link",u.link),newWindow:this.getDataOrDefault(i,"new-window",u.newWindow),alwaysTrigger:this.getDataOrDefault(i,"always-trigger",u.alwaysTrigger),flipListOnHover:this.getDataOrDefault(i,"flip-onhover",u.flipListOnHover),pauseOnHover:this.getDataOrDefault(i,"pause-onhover",u.pauseOnHover),playOnHover:this.getDataOrDefault(i,"play-onhover",u.playOnHover),onHoverDelay:this.getDataOrDefault(i,"hover-delay",u.onHoverDelay),onHoverOutDelay:this.getDataOrDefault(i,"hoverout-delay",u.onHoverOutDelay),noHAflipOpacity:this.getDataOrDefault(i,"flip-opacity",u.noHAflipOpacity),useTranslate:this.getDataOrDefault(i,"use-translate",u.useTranslate),runEvents:!1,isReversed:!1,loopCount:0,contentModules:[],listData:[],height:i.height(),width:i.width(),tempValues:{}}:n.extend(!0,{runEvents:!1,isReversed:!1,loopCount:0,contentModules:[],listData:[],height:i.height(),width:i.width(),tempValues:{}},u);f.useTranslate=f.useTranslate&&f.useHardwareAccel&&r.capabilities.canTransform&&r.capabilities.canTransition;f.margin=f.direction==="vertical"?f.height/2:f.width/2;f.stops=typeof u.stops=="object"&&u.stops instanceof Array?u.stops:(""+f.stops).split(",");f.stops.length===1&&f.stops.push("0px");var h=f.swap instanceof Array?f.swap:f.swap.replace(" ","").split(","),c=s?this.getDataOrDefault(i,"swap-front",u.swapFront):u.swapFront,l=s?this.getDataOrDefault(i,"swap-back",u.swapBack):u.swapBack;for(f.swapFront=c instanceof Array?c:c==="-"?h:c.replace(" ","").split(","),f.swapBack=l instanceof Array?l:l==="-"?h:l.replace(" ","").split(","),e=0;e<f.swapFront.length;e++)f.swapFront[e].length>0&&n.inArray(f.swapFront[e],h)===-1&&h.push(f.swapFront[e]);for(e=0;e<f.swapBack.length;e++)f.swapBack[e].length>0&&n.inArray(f.swapBack[e],h)===-1&&h.push(f.swapBack[e]);for(f.swap=h,e=0;e<h.length;e++)h[e].length>0&&(v=n.fn.liveTile.contentModules.hasContentModule(h[e]),v>-1&&f.contentModules.push(n.fn.liveTile.contentModules.modules[v]));for(f.initDelay=s?this.getDataOrDefault(i,"initdelay",u.initDelay):u.initDelay,f.delay<-1?f.delay=u.triggerDelay(1):f.delay<0&&(f.delay=3500+Math.random()*4501),f.initDelay<0&&(f.initDelay=f.delay),o={},e=0;e<f.contentModules.length;e++)n.extend(o,f.contentModules[e].data);for(n.extend(o,u,f),o.mode==="flip-list"?(a=i.find(o.tileSelector).not(".tile-title"),a.each(function(i,r){var u=n(r),f={direction:s?t.getDataOrDefault(u,"direction",o.direction):o.direction,newWindow:s?t.getDataOrDefault(u,"new-window",!1):!1,link:s?t.getDataOrDefault(u,"link",""):"",faces:{$front:null,$back:null},height:u.height(),width:u.width(),isReversed:!1};f.margin=f.direction==="vertical"?f.height/2:f.width/2;o.listData.push(f)})):o.mode==="carousel"&&(o.stack=!0,a=i.find(o.tileSelector).not(".tile-title"),a.each(function(i,r){var u=n(r),f={bounce:s?t.getDataOrDefault(u,"bounce",!1):!1,bounceDirections:s?t.getDataOrDefault(u,"bounce-dir","all"):"all",link:s?t.getDataOrDefault(u,"link",""):"",newWindow:s?t.getDataOrDefault(u,"new-window",!1):!1,animationDirection:s?t.getDataOrDefault(u,"ani-direction",""):"",direction:s?t.getDataOrDefault(u,"direction",""):""};o.listData.push(f)})),e=0;e<f.contentModules.length;e++)typeof o.contentModules[e].initData=="function"&&o.contentModules[e].initData(o,i);return f=null,o},prepTile:function(u,f){var e,c,l,s,h,a,v,y;u.addClass(f.mode);e={$tileFaces:null,$listTiles:null,$front:null,$back:null};switch(f.mode){case"fade":e.$tileFaces=u.find(f.tileFaceSelector).not(".tile-title");e.$front=f.faces.$front!=null&&f.faces.$front.length>0?f.faces.$front.addClass("fade-front"):e.$tileFaces.filter(":first").addClass("fade-front");e.$back=f.faces.$back!=null&&f.faces.$back.length>0?f.faces.$back.addClass("fade-back"):e.$tileFaces.length>1?e.$tileFaces.filter(":last").addClass("fade-back"):f.appendBack?n('<div class="fade-back"><\/div>').appendTo(u):n("<div><\/div>");break;case"slide":e.$tileFaces=u.find(f.tileFaceSelector).not(".tile-title");e.$front=f.faces.$front!=null&&f.faces.$front.length>0?f.faces.$front.addClass("slide-front"):e.$tileFaces.filter(":first").addClass("slide-front");e.$back=f.faces.$back!=null&&f.faces.$back.length>0?f.faces.$back.addClass("slide-back"):e.$tileFaces.length>1?e.$tileFaces.filter(":last").addClass("slide-back"):f.appendBack?n('<div class="slide-back"><\/div>').appendTo(u):n("<div><\/div>");f.stack==!0&&(f.direction==="vertical"?(a="top",v="translate(0%, -100%) translateZ(0)"):(a="left",v="translate(-100%, 0%) translateZ(0)"),s={},f.useTranslate?i.appendStyleProperties(s,["transform"],[v]):s[a]="-100%",e.$back.css(s));u.data("metrojs.tile",{animating:!1});r.capabilities.canTransition&&f.useHardwareAccel&&(u.addClass("ha"),e.$front.addClass("ha"),e.$back.addClass("ha"));break;case"carousel":e.$listTiles=u.find(f.tileSelector).not(".tile-title");y=e.$listTiles.length;u.data("metrojs.tile",{animating:!1});f.currentIndex=Math.min(f.currentIndex,y-1);e.$listTiles.each(function(u,e){var s=n(e).addClass("slide"),o=f.listData[u],c=typeof o.animationDirection=="string"&&o.animationDirection.length>0?o.animationDirection:f.animationDirection,l=typeof o.direction=="string"&&o.direction.length>0?o.direction:f.direction;u==f.currentIndex?s.addClass("active"):c==="forward"?l==="vertical"?(h=f.useTranslate?i.appendStyleProperties({},["transform"],["translate(0%, 100%) translateZ(0)"]):{left:"0%",top:"100%"},s.css(h)):(h=f.useTranslate?i.appendStyleProperties({},["transform"],["translate(100%, 0%) translateZ(0)"]):{left:"100%",top:"0%"},s.css(h)):c==="backward"&&(l==="vertical"?(h=f.useTranslate?i.appendStyleProperties({},["transform"],["translate(0%, -100%) translateZ(0)"]):{left:"0%",top:"-100%"},s.css(h)):(h=f.useTranslate?i.appendStyleProperties({},["transform"],["translate(-100%, 0%) translateZ(0)"]):{left:"-100%",top:"0%"},s.css(h)));t.bindLink(s,o);f.useHardwareAccel&&r.capabilities.canTransition&&t.bindBounce(s,o);s=null;o=null});r.capabilities.canFlip3d&&f.useHardwareAccel&&(u.addClass("ha"),e.$listTiles.addClass("ha"));break;case"flip-list":e.$listTiles=u.find(f.tileSelector).not(".tile-title");e.$listTiles.each(function(u,e){var h=n(e).addClass("tile-"+(u+1)),y=h.find(f.tileFaceSelector).filter(":first").addClass("flip-front").css({margin:"0px"}),a,v,p,w;h.find(f.tileFaceSelector).length===1&&f.appendBack==!0&&h.append("<div><\/div>");a=h.find(f.tileFaceSelector).filter(":last").addClass("flip-back").css({margin:"0px"});f.listData[u].faces.$front=y;f.listData[u].faces.$back=a;h.data("metrojs.tile",{animating:!1,count:1,completeTimeout:null,flCompleteTimeout:null,index:u});v=h.data("metrojs.tile");r.capabilities.canFlip3d&&f.useHardwareAccel?(h.addClass("ha"),y.addClass("ha"),a.addClass("ha"),c=f.listData[u].direction==="vertical"?"rotateX(180deg)":"rotateY(180deg)",s=i.appendStyleProperties({},["transform"],[c]),a.css(s)):(l=f.listData[u].direction==="vertical"?{height:"100%",width:"100%",marginTop:"0px",opacity:"1"}:{height:"100%",width:"100%",marginLeft:"0px",opacity:"1"},s=f.listData[u].direction==="vertical"?{height:"0px",width:"100%",marginTop:f.listData[u].margin+"px",opacity:f.noHAflipOpacity}:{height:"100%",width:"0px",marginLeft:f.listData[u].margin+"px",opacity:f.noHAflipOpacity},y.css(l),a.css(s));p=function(){v.count++;v.count>=o&&(v.count=1)};f.flipListOnHover&&(w=f.flipListOnHoverEvent+".liveTile",y.bind(w,function(){t.flip(h,v.count,f,p)}),a.bind(w,function(){t.flip(h,v.count,f,p)}));f.listData[u].link.length>0&&h.css({cursor:"pointer"}).bind("click.liveTile",function(){f.listData[u].newWindow?window.open(f.listData[u].link):window.location=f.listData[u].link})});break;case"flip":e.$tileFaces=u.find(f.tileFaceSelector).not(".tile-title");e.$front=f.faces.$front!=null&&f.faces.$front.length>0?f.faces.$front.addClass("flip-front"):e.$tileFaces.filter(":first").addClass("flip-front");e.$back=f.faces.$back!=null&&f.faces.$back.length>0?f.faces.$back.addClass("flip-back"):e.$tileFaces.length>1?e.$tileFaces.filter(":last").addClass("flip-back"):f.appendBack?n('<div class="flip-back"><\/div>').appendTo(u):n("<div><\/div>");u.data("metrojs.tile",{animating:!1});r.capabilities.canFlip3d&&f.useHardwareAccel?(u.addClass("ha"),e.$front.addClass("ha"),e.$back.addClass("ha"),c=f.direction==="vertical"?"rotateX(180deg)":"rotateY(180deg)",s=i.appendStyleProperties({},["transform"],[c]),e.$back.css(s)):(l=f.direction==="vertical"?{height:"100%",width:"100%",marginTop:"0px",opacity:"1"}:{height:"100%",width:"100%",marginLeft:"0px",opacity:"1"},s=f.direction==="vertical"?{height:"0%",width:"100%",marginTop:f.margin+"px",opacity:"0"}:{height:"100%",width:"0%",marginLeft:f.margin+"px",opacity:"0"},e.$front.css(l),e.$back.css(s))}return e},bindPauseOnHover:function(t){(function(){var i=t.data("LiveTile"),f=!1,u=!1,e=i.pauseOnHoverEvent=="both"||i.pauseOnHoverEvent=="mouseover"||i.pauseOnHoverEvent=="mouseenter",o=i.pauseOnHoverEvent=="both"||i.pauseOnHoverEvent=="mouseout"||i.pauseOnHoverEvent=="mouseleave";i.pOnHoverMethods={pause:function(){i.timer.pause();i.mode==="flip-list"&&i.faces.$listTiles.each(function(t,i){window.clearTimeout(n(i).data("metrojs.tile").completeTimeout)})},over:function(){f||u||i.runEvents&&(u=!0,i.eventTimeout=window.setTimeout(function(){u=!1;o&&(f=!0);i.pOnHoverMethods.pause()},i.onHoverDelay))},out:function(){if(u){window.clearTimeout(i.eventTimeout);u=!1;return}if(e){if(!f&&!u)return;i.runEvents&&i.timer.start(i.hasRun?i.delay:i.initDelay)}else i.pOnHoverMethods.pause();f=!1}};r.capabilities.canTouch?window.navigator.msPointerEnabled?(e&&t[0].addEventListener("MSPointerOver",i.pOnHoverMethods.over,!1),o&&t[0].addEventListener("MSPointerOut",i.pOnHoverMethods.out,!1)):(e&&t.bind("touchstart.liveTile",i.pOnHoverMethods.over),o&&t.bind("touchend.liveTile",i.pOnHoverMethods.out)):(e&&t.bind("mouseover.liveTile",i.pOnHoverMethods.over),o&&t.bind("mouseout.liveTile",i.pOnHoverMethods.out))})()},unbindMsPauseOnHover:function(n,t){typeof t.pOnHoverMethods!="undefined"&&window.navigator.msPointerEnabled&&(n[0].removeEventListener("MSPointerOver",t.pOnHoverMethods.over,!1),n[0].removeEventListener("MSPointerOut",t.pOnHoverMethods.out,!1))},bindPlayOnHover:function(n,t){(function(){var f=!1,i=!1,e=t.playOnHoverEvent=="both"||t.playOnHoverEvent=="mouseover"||t.playOnHoverEvent=="mouseenter",o=t.playOnHoverEvent=="both"||t.playOnHoverEvent=="mouseout"||t.playOnHoverEvent=="mouseleave";t.onHoverMethods={over:function(){if(!f&&!i&&(!t.bounce||t.bounceMethods.down=="no")){var r=t.mode=="flip"||(t.startNow?!t.isReversed:t.isReversed);window.clearTimeout(t.eventTimeout);(t.runEvents&&r||!t.hasRun)&&(i=!0,t.eventTimeout=window.setTimeout(function(){i=!1;o&&(f=!0);u.play.apply(n[0],[0])},t.onHoverDelay))}},out:function(){if(i){window.clearTimeout(t.eventTimeout);i=!1;return}(!e||f||i)&&(window.clearTimeout(t.eventTimeout),t.eventTimeout=window.setTimeout(function(){var i=t.mode=="flip"||(t.startNow?t.isReversed:!t.isReversed);t.runEvents&&i&&u.play.apply(n[0],[0]);f=!1},t.speed+t.onHoverOutDelay))}};r.capabilities.canTouch?window.navigator.msPointerEnabled?(e&&n[0].addEventListener("MSPointerDown",t.onHoverMethods.over,!1),o&&n.bind("mouseleave.liveTile",t.onHoverMethods.out)):(e&&n.bind("touchstart.liveTile",t.onHoverMethods.over),o&&n.bind("touchend.liveTile",t.onHoverMethods.out)):(e&&n.bind("mouseenter.liveTile",t.onHoverMethods.over),o&&n.bind("mouseleave.liveTile",t.onHoverMethods.out))})()},unbindMsPlayOnHover:function(n,t){typeof t.onHoverMethods!="undefined"&&window.navigator.msPointerEnabled&&n[0].removeEventListener("MSPointerDown",t.onHoverMethods.over,!1)},bindBounce:function(t,u){u.bounce&&(t.addClass("bounce"),t.addClass("noselect"),function(){u.bounceMethods={down:"no",threshold:30,zeroPos:{x:0,y:0},eventPos:{x:0,y:0},inTilePos:{x:0,y:0},pointPos:{x:0,y:0},regions:{c:[0,0],tl:[-1,-1],tr:[1,-1],bl:[-1,1],br:[1,1],t:[null,-1],r:[1,null],b:[null,1],l:[-1,null]},targets:{all:["c","t","r","b","l","tl","tr","bl","br"],edges:["c","t","r","b","l"],corners:["c","tl","tr","bl","br"]},hitTest:function(t,i,f,e){var k=u.bounceMethods.regions,h=u.bounceMethods.targets[f],l=0,c=null,y=null,p={hit:[0,0],name:"c"},s,o;if(r.capabilities.isOldAndroid||!r.capabilities.canTransition)return p;typeof h=="undefined"&&(typeof f=="string"&&(h=f.split(",")),n.isArray(h)&&n.inArray("c")==-1&&(e=0,p=null));for(var d=t.width(),g=t.height(),a=[d*e,g*e],w=i.x-d*.5,b=i.y-g*.5,v=[w>0?Math.abs(w)<=a[0]?0:1:Math.abs(w)<=a[0]?0:-1,b>0?Math.abs(b)<=a[1]?0:1:Math.abs(b)<=a[1]?0:-1];l<h.length;l++){if(c!=null)return c;if(s=h[l],o=k[s],s=="*")return s=h[l+1],{region:k[s],name:s};v[0]==o[0]&&v[1]==o[1]?c={hit:o,name:s}:(v[0]==o[0]||o[0]==null)&&(v[1]==o[1]||o[1]==null)&&(y={hit:o,name:s})}return c!=null?c:y!=null?y:p},bounceDown:function(r){var o,s,h;if(r.target.tagName!="A"||n(r).is(".bounce")){var f=r.originalEvent&&r.originalEvent.touches?r.originalEvent.touches[0]:r,e=t.offset(),c=window.pageXOffset,l=window.pageYOffset;u.bounceMethods.pointPos={x:f.pageX,y:f.pageY};u.bounceMethods.inTilePos={x:f.pageX-e.left,y:f.pageY-e.top};u.$tileParent||(u.$tileParent=t.parent());o=u.$tileParent.offset();u.bounceMethods.eventPos={x:e.left-o.left+t.width()/2,y:e.top-o.top+t.height()/2};s=u.bounceMethods.hitTest(t,u.bounceMethods.inTilePos,u.bounceDirections,.25);s==null?u.bounceMethods.down="no":(window.navigator.msPointerEnabled?(document.addEventListener("MSPointerUp",u.bounceMethods.bounceUp,!1),t[0].addEventListener("MSPointerUp",u.bounceMethods.bounceUp,!1),document.addEventListener("MSPointerCancel",u.bounceMethods.bounceUp,!1),u.bounceFollowsMove&&t[0].addEventListener("MSPointerMove",u.bounceMethods.bounceMove,!1)):(n(document).bind("mouseup.liveTile, touchend.liveTile, touchcancel.liveTile, dragstart.liveTile",u.bounceMethods.bounceUp),u.bounceFollowsMove&&(t.bind("touchmove.liveTile",u.bounceMethods.bounceMove),t.bind("mousemove.liveTile",u.bounceMethods.bounceMove))),h="bounce-"+s.name,t.addClass(h),u.bounceMethods.down=h,u.bounceMethods.downPcss=i.appendStyleProperties({},["perspective-origin"],[u.bounceMethods.eventPos.x+"px "+u.bounceMethods.eventPos.y+"px"]),u.$tileParent.css(u.bounceMethods.downPcss))}},bounceUp:function(){u.bounceMethods.down!="no"&&(u.bounceMethods.unBounce(),window.navigator.msPointerEnabled?(document.removeEventListener("MSPointerUp",u.bounceMethods.bounceUp,!1),t[0].removeEventListener("MSPointerUp",u.bounceMethods.bounceUp,!1),document.removeEventListener("MSPointerCancel",u.bounceMethods.bounceUp,!1),u.bounceFollowsMove&&t[0].removeEventListener("MSPointerMove",u.bounceMethods.bounceMove,!1)):n(document).unbind("mouseup.liveTile, touchend.liveTile, touchcancel.liveTile, dragstart.liveTile",u.bounceMethods.bounceUp),u.bounceFollowsMove&&(t.unbind("touchmove.liveTile",u.bounceMethods.bounceMove),t.unbind("mousemove.liveTile",u.bounceMethods.bounceMove)))},bounceMove:function(n){var i;if(u.bounceMethods.down!="no"){var r=n.originalEvent&&n.originalEvent.touches?n.originalEvent.touches[0]:n,f=Math.abs(r.pageX-u.bounceMethods.pointPos.x),e=Math.abs(r.pageY-u.bounceMethods.pointPos.y);(f>u.bounceMethods.threshold||e>u.bounceMethods.threshold)&&(i=u.bounceMethods.down,u.bounceMethods.bounceDown(n),i!=u.bounceMethods.down&&t.removeClass(i))}},unBounce:function(){if(t.removeClass(u.bounceMethods.down),typeof u.bounceMethods.downPcss=="object")u.bounceMethods.downPcss=i.appendStyleProperties({},["perspective-origin","perspective-origin-x","perspective-origin-y"],["","",""]),window.setTimeout(function(){u.$tileParent.css(u.bounceMethods.downPcss)},200);u.bounceMethods.down="no";u.bounceMethods.inTilePos=u.bounceMethods.zeroPos;u.bounceMethods.eventPos=u.bounceMethods.zeroPos}};window.navigator.msPointerEnabled?t[0].addEventListener("MSPointerDown",u.bounceMethods.bounceDown,!1):r.capabilities.canTouch?t.bind("touchstart.liveTile",u.bounceMethods.bounceDown):t.bind("mousedown.liveTile",u.bounceMethods.bounceDown)}())},unbindMsBounce:function(n,t){t.bounce&&window.navigator.msPointerEnabled&&(n[0].removeEventListener("MSPointerDown",t.bounceMethods.bounceDown,!1),n[0].removeEventListener("MSPointerCancel",t.bounceMethods.bounceUp,!1),n[0].removeEventListener("MSPointerOut",t.bounceMethods.bounceUp,!1))},bindLink:function(t,i){i.link.length>0&&t.css({cursor:"pointer"}).bind("click.liveTile",function(t){(t.target.tagName!="A"||n(t).is(".live-tile,.slide,.flip"))&&(i.newWindow?window.open(i.link):window.location=i.link)})},runContenModules:function(n,t,i,r){for(var f,u=0;u<n.contentModules.length;u++)f=n.contentModules[u],typeof f.action=="function"&&f.action(n,t,i,r)},fade:function(i,r,u){var f=typeof u=="object"?u:i.data("LiveTile"),c=function(){(f.timer.repeatCount>0||f.timer.repeatCount==-1)&&f.timer.count!=f.timer.repeatCount&&f.timer.start(f.delay)},o,s,h;if(typeof f=="undefined"){e(n.fn.liveTile.defaults.rebindMessage);return}if(!f.faces.$front.is(":animated")){if(f.timer.pause(),o=f.loopCount+1,f.isReversed=o%2==0,s=f.animationStarting.call(i[0],f,f.faces.$front,f.faces.$back),typeof s!="undefined"&&s==!1){c();return}f.loopCount=o;h=function(){c();t.runContenModules(f,f.faces.$front,f.faces.$back);f.animationComplete.call(i[0],f,f.faces.$front,f.faces.$back)};f.isReversed?f.faces.$front.fadeIn(f.speed,f.noHaTransFunc,h):f.faces.$front.fadeOut(f.speed,f.noHaTransFunc,h)}},slide:function(u,f,o,s,h){var c=typeof o=="object"?o:u.data("LiveTile"),l=u.data("metrojs.tile"),tt,it,w,ut,d,g,ft,nt,st,ht;if(typeof c=="undefined"){e(n.fn.liveTile.defaults.rebindMessage);return}if(l.animating==!0||u.is(":animated")){c=null;l=null;return}if(tt=function(){(c.timer.repeatCount>0||c.timer.repeatCount==-1)&&c.timer.count!=c.timer.repeatCount&&c.timer.start(c.delay)},c.mode!=="carousel"){if(c.isReversed=c.currentIndex%2!=0,c.timer.pause(),it=c.animationStarting.call(u[0],c,c.faces.$front,c.faces.$back),typeof it!="undefined"&&it==!1){tt();return}c.loopCount=c.loopCount+1}else c.isReversed=!0;w=typeof c.tempValues.direction=="string"&&c.tempValues.direction.length>0?c.tempValues.direction:c.direction;c.tempValues.direction=null;var a={},v={},ct=typeof s=="undefined"?c.currentIndex:s,y=n.trim(c.stops[Math.min(ct,c.stops.length-1)]),et=y.indexOf("px"),p=0,b=0,lt=w==="vertical"?c.height:c.width,rt=w==="vertical"?"top":"left",k=c.stack==!0,ot=function(){typeof h=="undefined"?(c.currentIndex=c.currentIndex+1,c.currentIndex>c.stops.length-1&&(c.currentIndex=0)):h();c.mode!="carousel"&&tt();t.runContenModules(c,c.faces.$front,c.faces.$back,c.currentIndex);c.animationComplete.call(u[0],c,c.faces.$front,c.faces.$back);c=null;l=null};if(et>0?(b=parseInt(y.substring(0,et),10),p=b-lt+"px"):(b=parseInt(y.replace("%",""),10),p=b-100+"%"),r.capabilities.canTransition&&c.useHardwareAccel){if(typeof l.animating!="undefined"&&l.animating==!0)return;l.animating=!0;ut=["transition-property","transition-duration","transition-timing-function"];d=[c.useTranslate?"transform":rt,c.speed+"ms",c.haTransFunc];d[i.browserPrefix+"transition-property"]=i.browserPrefix+"transform";a=i.appendStyleProperties(a,ut,d);v=i.appendStyleProperties(v,ut,d);g=w==="vertical";ft=g?"top":"left";c.useTranslate?(nt=g?"translate(0%, "+y+")":"translate("+y+", 0%)",a=i.appendStyleProperties(a,["transform"],[nt+"translateZ(0)"]),k&&(nt=g?"translate(0%, "+p+")":"translate("+p+", 0%)",v=i.appendStyleProperties(v,["transform"],[nt+"translateZ(0)"]))):(a[ft]=y,k&&(v[ft]=p));c.faces.$front.css(a);k&&c.faces.$back.css(v);window.clearTimeout(c.completeTimeout);c.completeTimeout=window.setTimeout(function(){l.animating=!1;ot()},c.speed)}else a[rt]=y,v[rt]=p,l.animating=!0,st=c.faces.$front.stop(),ht=c.faces.$back.stop(),st.animate(a,c.speed,c.noHaTransFunc,function(){l.animating=!1;ot()}),k&&ht.animate(v,c.speed,c.noHaTransFunc,function(){})},carousel:function(u,f){var o=u.data("LiveTile"),a,b,tt,v,c,d,s,y,w;if(typeof o=="undefined"){e(n.fn.liveTile.defaults.rebindMessage);return}if(a=u.data("metrojs.tile"),a.animating==!0||o.faces.$listTiles.length<=1){a=null;return}b=function(){(o.timer.repeatCount>0||o.timer.repeatCount==-1)&&o.timer.count!=o.timer.repeatCount&&o.timer.start(o.delay)};o.timer.pause();var h=o.faces.$listTiles.filter(".active"),k=o.faces.$listTiles.index(h),g=o.currentIndex,nt=g!=k?g:k,p=nt+1>=o.faces.$listTiles.length?0:nt+1,l=o.listData[p];if(k==p){a=null;h=null;return}if(tt=typeof o.tempValues.animationDirection=="string"&&o.tempValues.animationDirection.length>0?o.tempValues.animationDirection:typeof l.animationDirection=="string"&&l.animationDirection.length>0?l.animationDirection:o.animationDirection,o.tempValues.animationDirection=null,typeof o.tempValues.direction=="string"&&o.tempValues.direction.length>0?v=o.tempValues.direction:typeof l.direction=="string"&&l.direction.length>0?(v=l.direction,o.tempValues.direction=v):v=o.direction,c=o.faces.$listTiles.eq(p),d=o.animationStarting.call(u[0],o,h,c),typeof d!="undefined"&&d==!1){b();return}o.loopCount=o.loopCount+1;s=i.appendStyleProperties({},["transition-duration"],["0s"]);y=v==="vertical";tt==="backward"?(o.useTranslate&&r.capabilities.canTransition?(w=y?"translate(0%, -100%)":"translate(-100%, 0%)",s=i.appendStyleProperties(s,["transform"],[w+" translateZ(0)"]),o.stops=["100%"]):(y?(s.top="-100%",s.left="0%"):(s.top="0%",s.left="-100%"),o.stops=["100%"]),o.faces.$front=h,o.faces.$back=c):(o.useTranslate&&r.capabilities.canTransition?(w=y?"translate(0%, 100%)":"translate(100%, 0%)",s=i.appendStyleProperties(s,["transform"],[w+" translateZ(0)"])):y?(s.top="100%",s.left="0%"):(s.top="0%",s.left="100%"),o.faces.$front=c,o.faces.$back=h,o.stops=["0%"]);c.css(s);window.setTimeout(function(){h.removeClass("active");c.addClass("active");t.slide(u,f,o,0,function(){o.currentIndex=p;a=null;h=null;c=null;b()})},150)},flip:function(u,f,o,s){var a=u.data("metrojs.tile"),h,nt,ft,tt,it;if(typeof a!="undefined"&&a.animating==!0){a=null;return}if(h=typeof o=="object"?o:u.data("LiveTile"),typeof h=="undefined"){e(n.fn.liveTile.defaults.rebindMessage);return}var c,l,w,g,rt,ut,k=typeof s=="undefined",v=0,y,d=function(){(h.timer.repeatCount>0||h.timer.repeatCount==-1)&&h.timer.count!=h.timer.repeatCount&&h.timer.start(h.delay)};if(k){if(h.timer.pause(),nt=h.loopCount+1,y=nt%2==0,h.isReversed=y,c=h.faces.$front,l=h.faces.$back,ft=y?[h,l,c]:[h,c,l],tt=h.animationStarting.apply(u[0],ft),typeof tt!="undefined"&&tt==!1){d();return}w=h.direction;height=h.height;width=h.width;margin=h.margin;h.loopCount=nt}else y=f%2==0,v=a.index,c=h.listData[v].faces.$front,l=h.listData[v].faces.$back,h.listData[v].isReversed=y,w=h.listData[v].direction,height=h.listData[v].height,width=h.listData[v].width,margin=h.listData[v].margin;if(r.capabilities.canFlip3d&&h.useHardwareAccel){g=y?"360deg":"180deg";rt=w==="vertical"?"rotateX("+g+")":"rotateY("+g+")";ut=i.appendStyleProperties({},["transform","transition"],[rt,"all "+h.speed+"ms "+h.haTransFunc+" 0s"]);var et=y?"540deg":"360deg",ht=w==="vertical"?"rotateX("+et+")":"rotateY("+et+")",ct=i.appendStyleProperties({},["transform","transition"],[ht,"all "+h.speed+"ms "+h.haTransFunc+" 0s"]);c.css(ut);l.css(ct);it=function(){a.animating=!1;var n,r;y?(n=w==="vertical"?"rotateX(0deg)":"rotateY(0deg)",r=i.appendStyleProperties({},["transform","transition"],[n,"all 0s "+h.haTransFunc+" 0s"]),c.css(r),t.runContenModules(h,c,l,v),k?(d(),h.animationComplete.call(u[0],h,c,l)):s(h,c,l),c=null,l=null,h=null,a=null):(t.runContenModules(h,l,c,v),k?(d(),h.animationComplete.call(u[0],h,l,c)):s(h,l,c))};h.mode==="flip-list"?(window.clearTimeout(h.listData[v].completeTimeout),h.listData[v].completeTimeout=window.setTimeout(it,h.speed)):(window.clearTimeout(h.completeTimeout),h.completeTimeout=window.setTimeout(it,h.speed))}else{var p=h.speed/2,ot=w==="vertical"?{height:"0px",width:"100%",marginTop:margin+"px",opacity:h.noHAflipOpacity}:{height:"100%",width:"0px",marginLeft:margin+"px",opacity:h.noHAflipOpacity},st=w==="vertical"?{height:"100%",width:"100%",marginTop:"0px",opacity:"1"}:{height:"100%",width:"100%",marginLeft:"0px",opacity:"1"},b;y?(a.animating=!0,l.stop().animate(ot,{duration:p}),b=function(){a.animating=!1;c.stop().animate(st,{duration:p,complete:function(){t.runContenModules(h,c,l,v);k?(d(),h.animationComplete.call(u[0],h,c,l)):s(h,c,l);a=null;c=null;l=null}})},h.mode==="flip-list"?(window.clearTimeout(h.listData[a.index].completeTimeout),h.listData[a.index].completeTimeout=window.setTimeout(b,p)):(window.clearTimeout(h.completeTimeout),h.completeTimeout=window.setTimeout(b,p))):(a.animating=!0,c.stop().animate(ot,{duration:p}),b=function(){a.animating=!1;l.stop().animate(st,{duration:p,complete:function(){t.runContenModules(h,l,c,v);k?(d(),h.animationComplete.call(u[0],h,l,c)):s(h,l,c);c=null;l=null;h=null;a=null}})},h.mode==="flip-list"?(window.clearTimeout(h.listData[a.index].completeTimeout),h.listData[a.index].completeTimeout=window.setTimeout(b,p)):(window.clearTimeout(h.completeTimeout),h.completeTimeout=window.setTimeout(b,p)))}},flipList:function(i){var r=i.data("LiveTile"),u=r.speed,s=!1,h=function(){(r.timer.repeatCount>0||r.timer.repeatCount==-1)&&r.timer.count!=r.timer.repeatCount&&r.timer.start(r.delay)},f;if(typeof r=="undefined"){e(n.fn.liveTile.defaults.rebindMessage);return}if(r.timer.pause(),f=r.animationStarting.call(i[0],r,null,null),typeof f!="undefined"&&f==!1){h();return}r.loopCount=r.loopCount+1;r.faces.$listTiles.each(function(i,f){var h=n(f),e=h.data("metrojs.tile"),a=r.triggerDelay(i),l=r.speed+Math.max(a,0),c=r.alwaysTrigger;c||(c=Math.random()*351>150?!0:!1);c&&(s=!0,u=Math.max(l+r.speed,u),window.clearTimeout(e.flCompleteTimeout),e.flCompleteTimeout=window.setTimeout(function(){t.flip(h,e.count,r,function(){e.count++;e.count>=o&&(e.count=1);h=null;e=null})},l))});s&&(window.clearTimeout(r.flCompleteTimeout),r.flCompleteTimeout=window.setTimeout(function(){t.runContenModules(r,null,null,-1);r.animationComplete.call(i[0],r,null,null);h()},u+r.speed))}},i={stylePrefixes:"Webkit Moz O ms Khtml ".split(" "),domPrefixes:"-webkit- -moz- -o- -ms- -khtml- ".split(" "),browserPrefix:null,appendStyleProperties:function(t,i,r){for(var u=0;u<=i.length-1;u++)t[n.trim(this.browserPrefix+i[u])]=r[u],t[n.trim(i[u])]=r[u];return t},applyStyleValue:function(t,i,r){return t[n.trim(this.browserPrefix+i)]=r,t[i]=r,t},getBrowserPrefix:function(){var t,n;if(this.browserPrefix==null){for(t="",n=0;n<=this.domPrefixes.length-1;n++)typeof document.body.style[this.domPrefixes[n]+"transform"]!="undefined"&&(t=this.domPrefixes[n]);return this.browserPrefix=t}return this.browserPrefix},shuffleArray:function(n){for(var t=[];n.length;)t.push(n.splice(Math.random()*n.length,1));while(t.length)n.push(t.pop());return n}},s={moduleName:"custom",customSwap:{data:{customDoSwapFront:function(){return!1},customDoSwapBack:function(){return!1},customGetContent:function(){return null}},initData:function(t){var i={};i.doSwapFront=n.inArray("custom",t.swapFront)>-1&&t.customDoSwapFront();i.doSwapBack=n.inArray("custom",t.swapBack)>-1&&t.customDoSwapBack();t.customSwap=typeof t.customSwap!="undefined"?n.extend(i,t.customSwap):i},action:function(){}},htmlSwap:{moduleName:"html",data:{frontContent:[],frontIsRandom:!0,frontIsInGrid:!1,backContent:[],backIsRandom:!0,backIsInGrid:!1},initData:function(i,r){var u={backBag:[],backIndex:0,backStaticIndex:0,backStaticRndm:-1,prevBackIndex:-1,frontBag:[],frontIndex:0,frontStaticIndex:0,frontStaticRndm:-1,prevFrontIndex:-1};i.ignoreDataAttributes?(u.frontIsRandom=i.frontIsRandom,u.frontIsInGrid=i.frontIsInGrid,u.backIsRandom=i.backIsRandom,u.backIsInGrid=i.backIsInGrid):(u.frontIsRandom=t.getDataOrDefault(r,"front-israndom",i.frontIsRandom),u.frontIsInGrid=t.getDataOrDefault(r,"front-isingrid",i.frontIsInGrid),u.backIsRandom=t.getDataOrDefault(r,"back-israndom",i.backIsRandom),u.backIsInGrid=t.getDataOrDefault(r,"back-isingrid",i.backIsInGrid));u.doSwapFront=n.inArray("html",i.swapFront)>-1&&i.frontContent instanceof Array&&i.frontContent.length>0;u.doSwapBack=n.inArray("html",i.swapBack)>-1&&i.backContent instanceof Array&&i.backContent.length>0;i.htmlSwap=typeof i.htmlSwap!="undefined"?n.extend(u,i.htmlSwap):u;i.htmlSwap.doSwapFront&&(i.htmlSwap.frontBag=this.prepBag(i.htmlSwap.frontBag,i.frontContent,i.htmlSwap.prevFrontIndex),i.htmlSwap.frontStaticRndm=i.htmlSwap.frontBag.pop());i.htmlSwap.doSwapBack&&(i.htmlSwap.backBag=this.prepBag(i.htmlSwap.backBag,i.backContent,i.htmlSwap.prevBackIndex),i.htmlSwap.backStaticRndm=i.htmlSwap.backBag.pop())},prepBag:function(n,t,r){var f,u;for(n=n||[],f=0,u=0;u<t.length;u++)(u!=r||n.length===1)&&(n[f]=u,f++);return i.shuffleArray(n)},getFrontSwapIndex:function(n){var t=0;return n.htmlSwap.frontIsRandom?(n.htmlSwap.frontBag.length===0&&(n.htmlSwap.frontBag=this.prepBag(n.htmlSwap.frontBag,n.frontContent,n.htmlSwap.prevFrontIndex)),t=n.htmlSwap.frontIsInGrid?n.htmlSwap.frontStaticRndm:n.htmlSwap.frontBag.pop()):t=n.htmlSwap.frontIsInGrid?n.htmlSwap.frontStaticIndex:n.htmlSwap.frontIndex,t},getBackSwapIndex:function(n){var t=0;return n.htmlSwap.backIsRandom?(n.htmlSwap.backBag.length===0&&(n.htmlSwap.backBag=this.prepBag(n.htmlSwap.backBag,n.backContent,n.htmlSwap.prevBackIndex)),t=n.htmlSwap.backIsInGrid?n.htmlSwap.backStaticRndm:n.htmlSwap.backBag.pop()):t=n.htmlSwap.backIsInGrid?n.htmlSwap.backStaticIndex:n.htmlSwap.backIndex,t},action:function(n,t,i,r){if(n.htmlSwap.doSwapFront||n.htmlSwap.doSwapBack){var f=n.mode==="flip-list",u=0,e=f?n.listData[Math.max(r,0)].isReversed:n.isReversed;if(f&&r==-1){e?n.htmlSwap.doSwapBack&&(n.htmlSwap.backBag.length===0&&(n.htmlSwap.backBag=this.prepBag(n.htmlSwap.backBag,n.backContent,n.htmlSwap.backStaticRndm)),n.htmlSwap.backStaticRndm=n.htmlSwap.backBag.pop(),n.htmlSwap.backStaticIndex++,n.htmlSwap.backStaticIndex>=n.backContent.length&&(n.htmlSwap.backStaticIndex=0)):n.htmlSwap.doSwapFront&&(n.htmlSwap.frontBag.length===0&&(n.htmlSwap.frontBag=this.prepBag(n.htmlSwap.frontBag,n.frontContent,n.htmlSwap.frontStaticRndm)),n.htmlSwap.frontStaticRndm=n.htmlSwap.frontBag.pop(),n.htmlSwap.frontStaticIndex++,n.htmlSwap.frontStaticIndex>=n.frontContent.length&&(n.htmlSwap.frontStaticIndex=0));return}if(e){if(!n.htmlSwap.doSwapBack)return;u=this.getBackSwapIndex(n);n.htmlSwap.prevBackIndex=u;i.html(n.backContent[n.htmlSwap.backIndex]);n.htmlSwap.backIndex++;n.htmlSwap.backIndex>=n.backContent.length&&(n.htmlSwap.backIndex=0);f||(n.htmlSwap.backStaticIndex++,n.htmlSwap.backStaticIndex>=n.backContent.length&&(n.htmlSwap.backStaticIndex=0))}else{if(!n.htmlSwap.doSwapFront)return;u=this.getFrontSwapIndex(n);n.htmlSwap.prevFrontIndex=u;n.mode==="slide"?n.startNow?i.html(n.frontContent[u]):t.html(n.frontContent[u]):i.html(n.frontContent[u]);n.htmlSwap.frontIndex++;n.htmlSwap.frontIndex>=n.frontContent.length&&(n.htmlSwap.frontIndex=0);f||(n.htmlSwap.frontStaticIndex++,n.htmlSwap.frontStaticIndex>=n.frontContent.length&&(n.htmlSwap.frontStaticIndex=0))}}}},imageSwap:{moduleName:"image",data:{preloadImages:!1,imageCssSelector:">img,>a>img",fadeSwap:!1,frontImages:[],frontIsRandom:!0,frontIsBackgroundImage:!1,frontIsInGrid:!1,backImages:null,backIsRandom:!0,backIsBackgroundImage:!1,backIsInGrid:!1},initData:function(i,r){var u={backBag:[],backIndex:0,backStaticIndex:0,backStaticRndm:-1,frontBag:[],frontIndex:0,frontStaticIndex:0,frontStaticRndm:-1,prevBackIndex:-1,prevFrontIndex:-1},f=i.ignoreDataAttributes;f?(u.imageCssSelector=t.getDataOrDefault(r,"image-css",i.imageCssSelector),u.fadeSwap=t.getDataOrDefault(r,"fadeswap",i.fadeSwap),u.frontIsRandom=t.getDataOrDefault(r,"front-israndom",i.frontIsRandom),u.frontIsInGrid=t.getDataOrDefault(r,"front-isingrid",i.frontIsInGrid),u.frontIsBackgroundImage=t.getDataOrDefault(r,"front-isbg",i.frontIsBackgroundImage),u.backIsRandom=t.getDataOrDefault(r,"back-israndom",i.backIsRandom),u.backIsInGrid=t.getDataOrDefault(r,"back-isingrid",i.backIsInGrid),u.backIsBackgroundImage=t.getDataOrDefault(r,"back-isbg",i.backIsBackgroundImage),u.doSwapFront=n.inArray("image",i.swapFront)>-1&&i.frontImages instanceof Array&&i.frontImages.length>0,u.doSwapBack=n.inArray("image",i.swapBack)>-1&&i.backImages instanceof Array&&i.backImages.length>0,u.alwaysSwapFront=t.getDataOrDefault(r,"front-alwaysswap",i.alwaysSwapFront),u.alwaysSwapBack=t.getDataOrDefault(r,"back-alwaysswap",i.alwaysSwapBack)):(u.imageCssSelector=i.imageCssSelector,u.fadeSwap=i.fadeSwap,u.frontIsRandom=i.frontIsRandom,u.frontIsInGrid=i.frontIsInGrid,u.frontIsBackgroundImage=i.frontIsBackgroundImage,u.backIsRandom=i.backIsRandom,u.backIsInGrid=i.backIsInGrid,u.backIsBackgroundImage=i.backIsBackgroundImage,u.doSwapFront=n.inArray("image",i.swapFront)>-1&&i.frontImages instanceof Array&&i.frontImages.length>0,u.doSwapBack=n.inArray("image",i.swapBack)>-1&&i.backImages instanceof Array&&i.backImages.length>0,u.alwaysSwapFront=i.alwaysSwapFront,u.alwaysSwapBack=i.alwaysSwapBack);i.imgSwap=typeof i.imgSwap!="undefined"?n.extend(u,i.imgSwap):u;i.imgSwap.doSwapFront&&(i.imgSwap.frontBag=this.prepBag(i.imgSwap.frontBag,i.frontImages,i.imgSwap.prevFrontIndex),i.imgSwap.frontStaticRndm=i.imgSwap.frontBag.pop(),i.preloadImages&&n(i.frontImages).metrojs.preloadImages(function(){}));i.imgSwap.doSwapBack&&(i.imgSwap.backBag=this.prepBag(i.imgSwap.backBag,i.backImages,i.imgSwap.prevBackIndex),i.imgSwap.backStaticRndm=i.imgSwap.backBag.pop(),i.preloadImages&&n(i.backImages).metrojs.preloadImages(function(){}))},prepBag:function(n,t,r){var f,u;for(n=n||[],f=0,u=0;u<t.length;u++)(u!=r||t.length===1)&&(n[f]=u,f++);return i.shuffleArray(n)},getFrontSwapIndex:function(n){var t=0;return n.imgSwap.frontIsRandom?(n.imgSwap.frontBag.length===0&&(n.imgSwap.frontBag=this.prepBag(n.imgSwap.frontBag,n.frontImages,n.imgSwap.prevFrontIndex)),t=n.imgSwap.frontIsInGrid?n.imgSwap.frontStaticRndm:n.imgSwap.frontBag.pop()):t=n.imgSwap.frontIsInGrid?n.imgSwap.frontStaticIndex:n.imgSwap.frontIndex,t},getBackSwapIndex:function(n){var t=0;return n.imgSwap.backIsRandom?(n.imgSwap.backBag.length===0&&(n.imgSwap.backBag=this.prepBag(n.imgSwap.backBag,n.backImages,n.imgSwap.prevBackIndex)),t=n.imgSwap.backIsInGrid?n.imgSwap.backStaticRndm:n.imgSwap.backBag.pop()):t=n.imgSwap.backIsInGrid?n.imgSwap.backStaticIndex:n.imgSwap.backIndex,t},setImageProperties:function(t,i,r){var f={},u={};typeof i.src!="undefined"&&(r?f.backgroundImage="url('"+i.src+"')":u.src=i.src);typeof i.alt!="undefined"&&(u.alt=i.alt);typeof i.css=="object"?t.css(n.extend(f,i.css)):t.css(f);typeof i.attr=="object"?t.attr(n.extend(u,i.attr)):t.attr(u)},action:function(n,t,i,r){var c,f,l,e;if(n.imgSwap.doSwapFront||n.imgSwap.doSwapBack){var o=n.mode==="flip-list",a=n.mode=="slide",u=0,h=o?n.listData[Math.max(r,0)].isReversed:n.isReversed;if(o&&r==-1){(n.alwaysSwapFront||!h)&&n.imgSwap.doSwapFront&&(n.imgSwap.frontBag.length===0&&(n.imgSwap.frontBag=this.prepBag(n.imgSwap.frontBag,n.frontImages,n.imgSwap.frontStaticRndm)),n.imgSwap.frontStaticRndm=n.imgSwap.frontBag.pop(),n.imgSwap.frontStaticIndex++,n.imgSwap.frontStaticIndex>=n.frontImages.length&&(n.imgSwap.frontStaticIndex=0));(n.alwaysSwapBack||h)&&n.imgSwap.doSwapBack&&(n.imgSwap.backBag.length===0&&(n.imgSwap.backBag=this.prepBag(n.imgSwap.backBag,n.backImages,n.imgSwap.backStaticRndm)),n.imgSwap.backStaticRndm=n.imgSwap.backBag.pop(),n.imgSwap.backStaticIndex++,n.imgSwap.backStaticIndex>=n.backImages.length&&(n.imgSwap.backStaticIndex=0));return}if(n.alwaysSwapFront||!h){if(!n.imgSwap.doSwapFront)return;u=this.getFrontSwapIndex(n);n.imgSwap.prevFrontIndex=u;c=n.mode==="slide"?t:i;f=c.find(n.imgSwap.imageCssSelector);l=typeof n.frontImages[u]=="object"?n.frontImages[u]:{src:n.frontImages[u]};e=function(t){var i=n.imgSwap.frontIsBackgroundImage;typeof t=="function"&&(i?window.setTimeout(t,100):f[0].onload=t);s.imageSwap.setImageProperties(f,l,i)};n.fadeSwap?f.fadeOut(function(){e(function(){f.fadeIn()})}):e();n.imgSwap.frontIndex++;n.imgSwap.frontIndex>=n.frontImages.length&&(n.imgSwap.frontIndex=0);o||(n.imgSwap.frontStaticIndex++,n.imgSwap.frontStaticIndex>=n.frontImages.length&&(n.imgSwap.frontStaticIndex=0))}if(n.alwaysSwapBack||h){if(!n.imgSwap.doSwapBack)return;u=this.getBackSwapIndex(n);n.imgSwap.prevBackIndex=u;c=i;f=c.find(n.imgSwap.imageCssSelector);l=typeof n.backImages[u]=="object"?n.backImages[u]:{src:n.backImages[u]};e=function(){s.imageSwap.setImageProperties(f,l,n.imgSwap.backIsBackgroundImage)};n.fadeSwap?f.fadeOut(function(){e(function(){f.fadeIn()})}):e();n.imgSwap.backIndex++;n.imgSwap.backIndex>=n.backImages.length&&(n.imgSwap.backIndex=0);o||(n.imgSwap.backStaticIndex++,n.imgSwap.backStaticIndex>=n.backImages.length&&(n.imgSwap.backStaticIndex=0))}}}}};n.fn.metrojs.TileTimer=function(n,t,i){this.timerId=null;this.interval=n;this.action=t;this.count=0;this.repeatCount=typeof i=="undefined"?0:i;this.start=function(t){window.clearTimeout(this.timerId);var i=this;this.timerId=window.setTimeout(function(){i.tick.call(i,n)},t)};this.tick=function(n){this.action(this.count+1);this.count++;this.count>=o&&(this.count=0);(this.repeatCount>0||this.repeatCount==-1)&&(this.count!=this.repeatCount?this.start(n):this.stop())};this.stop=function(){this.timerId=window.clearTimeout(this.timerId);this.reset()};this.resume=function(){(this.repeatCount>0||this.repeatCount==-1)&&this.count!=this.repeatCount&&this.start(n)};this.pause=function(){this.timerId=window.clearTimeout(this.timerId)};this.reset=function(){this.count=0};this.restart=function(n){this.stop();this.start(n)}};jQuery.fn.metrojs.theme={loadDefaultTheme:function(n){var t,i,r;typeof n=="undefined"||n==null?n=jQuery.fn.metrojs.theme.defaults:(t=jQuery.fn.metrojs.theme.defaults,jQuery.extend(t,n),n=t);i=typeof localStorage!="undefined";r=function(n){return typeof window.localStorage[n]!="undefined"&&window.localStorage[n]!=null};!i||r("Metro.JS.AccentColor")&&r("Metro.JS.BaseAccentColor")?i?(n.accentColor=window.localStorage["Metro.JS.AccentColor"],n.baseTheme=window.localStorage["Metro.JS.BaseAccentColor"],jQuery(n.accentCssSelector).addClass(n.accentColor).data("accent",n.accentColor),jQuery(n.baseThemeCssSelector).addClass(n.baseTheme),typeof n.loaded=="function"&&n.loaded(n.baseTheme,n.accentColor)):(jQuery(n.accentCssSelector).addClass(n.accentColor).data("accent",n.accentColor),jQuery(n.baseThemeCssSelector).addClass(n.baseTheme),typeof n.loaded=="function"&&n.loaded(n.baseTheme,n.accentColor),typeof n.preloadAltBaseTheme!="undefined"&&n.preloadAltBaseTheme&&jQuery([n.baseTheme=="dark"?n.metroLightUrl:n.metroDarkUrl]).metrojs.preloadImages(function(){})):(window.localStorage["Metro.JS.AccentColor"]=n.accentColor,window.localStorage["Metro.JS.BaseAccentColor"]=n.baseTheme,jQuery(n.accentCssSelector).addClass(n.accentColor).data("accent",n.accentColor),jQuery(n.baseThemeCssSelector).addClass(n.baseTheme),typeof n.loaded=="function"&&n.loaded(n.baseTheme,n.accentColor),typeof n.preloadAltBaseTheme!="undefined"&&n.preloadAltBaseTheme&&jQuery([n.baseTheme=="dark"?n.metroLightUrl:n.metroDarkUrl]).metrojs.preloadImages(function(){}))},applyTheme:function(n,t,i){var e,r,u,f;typeof i=="undefined"||i==null?i=jQuery.fn.metrojs.theme.defaults:(e=jQuery.fn.metrojs.theme.defaults,i=jQuery.extend({},e,i));typeof n!="undefined"&&n!=null&&(typeof localStorage!="undefined"&&(window.localStorage["Metro.JS.BaseAccentColor"]=n),r=jQuery(i.baseThemeCssSelector),r.length>0&&(n=="dark"?r.addClass("dark").removeClass("light"):n=="light"&&r.addClass("light").removeClass("dark")));typeof t!="undefined"&&t!=null&&(typeof localStorage!="undefined"&&(window.localStorage["Metro.JS.AccentColor"]=t),u=jQuery(i.accentCssSelector),u.length>0&&(f=!1,u.each(function(){var i,n;jQuery(this).addClass(t);i=jQuery(this).data("accent");i!=t&&(n=jQuery(this).attr("class").replace(i,""),n=n.replace(/(\s)+/," "),jQuery(this).attr("class",n),jQuery(this).data("accent",t),f=!0)}),f&&typeof i.accentPicked=="function"&&i.accentPicked(t)))},appendAccentColors:function(t){var r,i;typeof t=="undefined"||t==null?t=jQuery.fn.metrojs.theme.defaults:(r=jQuery.fn.metrojs.theme.defaults,t=jQuery.extend({},r,t));var u="",f=t.accentColors,e=t.accentListTemplate;for(i=0;i<f.length;i++)u+=e.replace(/\{0\}/g,f[i]);n(u).appendTo(t.accentListContainer)},appendBaseThemes:function(t){var r,i;typeof t=="undefined"||t==null?t=jQuery.fn.metrojs.theme.defaults:(r=jQuery.fn.metrojs.theme.defaults,t=jQuery.extend({},r,t));var u="",f=t.baseThemes,e=t.baseThemeListTemplate;for(i=0;i<f.length;i++)u+=e.replace(/\{0\}/g,f[i]);n(u).appendTo(t.baseThemeListContainer)},defaults:{baseThemeCssSelector:"body",accentCssSelector:".tiles",accentColor:"blue",baseTheme:"dark",accentColors:["amber","blue","brown","cobalt","crimson","cyan","magenta","lime","indigo","green","emerald","mango","mauve","olive","orange","pink","red","sienna","steel","teal","violet","yellow"],baseThemes:["light","dark"],accentListTemplate:"<li><a href='javascript:;' title='{0}' class='accent {0}'><\/a><\/li>",accentListContainer:"ul.theme-options,.theme-options>ul",baseThemeListTemplate:"<li><a href='javascript:;' title='{0}' class='accent {0}'><\/a><\/li>",baseThemeListContainer:"ul.base-theme-options,.base-theme-options>ul"}};jQuery.fn.applicationBar=function(t){var i=typeof jQuery.fn.metrojs.theme!="undefined"?jQuery.fn.metrojs.theme.defaults:{},r;if(jQuery.extend(i,jQuery.fn.applicationBar.defaults,t),typeof jQuery.fn.metrojs.theme!="undefined"){r=jQuery.fn.metrojs.theme;i.shouldApplyTheme&&r.loadDefaultTheme(i);var u=i.accentListContainer.replace(","," a,")+" a",f=function(){var n=jQuery(this).attr("class").replace("accent","").replace(" ","");r.applyTheme(null,n,i);typeof i.accentPicked=="function"&&i.accentPicked(n)},e=i.baseThemeListContainer.replace(","," a,")+" a",o=function(){var n=jQuery(this).attr("class").replace("accent","").replace(" ","");r.applyTheme(n,null,i);typeof i.themePicked=="function"&&i.themePicked(n)};if(typeof n.fn.on=="function"){n(this).on("click.appBar",u,f);n(this).on("click.appBar",e,o)}else n(u).live("click.appBar",f),n(e).live("click.appBar",o)}return n(this).each(function(t,r){var f=n(r),u=n.extend({},i);u.collapseHeight=="auto"&&(u.collapseHeight=n(this).outerHeight());navigator.userAgent.match(/(Android|webOS|iPhone|iPod|BlackBerry|PIE|IEMobile)/i)&&(navigator.userAgent.match(/(IEMobile\/1)/i)||navigator.userAgent.match(/(iPhone OS [56789])/i)||f.css({position:"absolute",bottom:"0px"}));u.slideOpen=function(){f.hasClass("expanded")||u.animateAppBar(!1)};u.slideClosed=function(){f.hasClass("expanded")&&u.animateAppBar(!0)};u.animateAppBar=function(n){var t=n?u.collapseHeight:u.expandHeight;n?f.removeClass("expanded"):f.hasClass("expanded")||f.addClass("expanded");f.stop().animate({height:t},{duration:u.duration})};f.data("ApplicationBar",u);f.find(i.handleSelector).click(function(){u.animateAppBar(f.hasClass("expanded"))});u.bindKeyboard==!0&&jQuery(document.documentElement).keyup(function(n){n.keyCode==38?n.target&&n.target.tagName.match(/INPUT|TEXTAREA|SELECT/i)==null&&(f.hasClass("expanded")||u.animateAppBar(!1)):n.keyCode==40&&n.target&&n.target.tagName.match(/INPUT|TEXTAREA|SELECT/i)==null&&f.hasClass("expanded")&&u.animateAppBar(!0)})})};jQuery.fn.applicationBar.defaults={applyTheme:!0,themePicked:function(){},accentPicked:function(){},loaded:function(){},duration:300,expandHeight:"320px",collapseHeight:"auto",bindKeyboard:!0,handleSelector:"a.etc",metroLightUrl:"images/metroIcons_light.jpg",metroDarkUrl:"images/metroIcons.jpg",preloadAltBaseTheme:!1};n.fn.metrojs.preloadImages=function(t){var i=n(this).toArray(),r=n("<img style='display:none;' />").appendTo("body");n(this).each(function(){var n=this;typeof this=="object"&&(n=this.src);r.attr({src:n}).load(function(){for(var n=0;n<i.length;n++)i[n]==element&&i.splice(n,1);i.length==0&&t()})});r.remove()};n.fn.metrojs.MetroModernizr=function(t){if(typeof t=="undefined"&&(t={useHardwareAccel:!0,useModernizr:typeof Modernizr!="undefined"}),this.isOldJQuery=/^1\.[0123]/.test(n.fn.jquery),this.isOldAndroid=function(){var t,i;try{if(t=navigator.userAgent,t.indexOf("Android")>=0&&(i=parseFloat(t.slice(t.indexOf("Android")+8)),i<2.3))return!0}catch(r){n.error(r)}return!1}(),this.canTransform=!1,this.canTransition=!1,this.canTransform3d=!1,this.canAnimate=!1,this.canTouch=!1,this.canFlip3d=t.useHardwareAccel,t.useHardwareAccel==!0)if(t.useModernizr==!1)if(typeof MetroModernizr!="undefined")this.canTransform=window.MetroModernizr.canTransform,this.canTransition=window.MetroModernizr.canTransition,this.canTransform3d=window.MetroModernizr.canTransform3d,this.canAnimate=window.MetroModernizr.canAnimate,this.canTouch=window.MetroModernizr.canTouch;else{window.MetroModernizr={};var i="metromodernizr",r=document.documentElement,e=document.head||document.getElementsByTagName("head")[0],u=document.createElement(i),o=u.style,s=" -webkit- -moz- -o- -ms- ".split(" "),l="Webkit Moz O ms Khtml".split(" "),f=function(n,t){for(var i in n)if(o[n[i]]!==undefined&&(!t||t(n[i],u)))return!0},h=function(n,t){var i=n.charAt(0).toUpperCase()+n.substr(1),r=(n+" "+l.join(i+" ")+i).split(" ");return!!f(r,t)},a=function(){var n=!!f(["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"]);return n&&"webkitPerspective"in r.style&&(n=c(["@media (",s.join("transform-3d),("),i,")","{#metromodernizr{left:9px;position:absolute;height:3px;}}"].join(""),function(n){return n.offsetHeight===3&&n.offsetLeft===9})),n},c=function(n,t){var f=document.createElement("style"),u=document.createElement("div"),o;return f.textContent=n,e.appendChild(f),u.id=i,r.appendChild(u),o=t(u),f.parentNode.removeChild(f),u.parentNode.removeChild(u),!!o},v=function(){return canTouch="ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch||typeof window.navigator.msMaxTouchPoints!="undefined"&&window.navigator.msMaxTouchPoints>0||c(["@media (",s.join("touch-enabled),("),i,")","{#metromodernizr{top:9px;position:absolute}}"].join(""),function(n){return n.offsetTop===9})};this.canTransform=!!f(["transformProperty","WebkitTransform","MozTransform","OTransform","msTransform"]);this.canTransition=h("transitionProperty");this.canTransform3d=a();this.canAnimate=h("animationName");this.canTouch=v();window.MetroModernizr.canTransform=this.canTransform;window.MetroModernizr.canTransition=this.canTransition;window.MetroModernizr.canTransform3d=this.canTransform3d;window.MetroModernizr.canAnimate=this.canAnimate;window.MetroModernizr.canTouch=this.canTouch;r=null;e=null;u=null;o=null}else this.canTransform=n("html").hasClass("csstransforms"),this.canTransition=n("html").hasClass("csstransitions"),this.canTransform3d=n("html").hasClass("csstransforms3d"),this.canAnimate=n("html").hasClass("cssanimations"),this.canTouch=n("html").hasClass("touch")||typeof window.navigator.msMaxTouchPoints!="undefined"&&window.navigator.msMaxTouchPoints>0;this.canFlip3d=this.canFlip3d&&this.canAnimate&&this.canTransform&&this.canTransform3d}})(jQuery);
// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs

$(document).foundation({
  offcanvas : {
    // Sets method in which offcanvas opens.
    // [ move | overlap_single | overlap ]
    open_method: 'move', 
    // Should the menu close when a menu link is clicked?
    // [ true | false ]
    close_on_click : false
  }
});


var windowHeight = window.innerHeight;
if ( ($(".full-height").height()) < windowHeight) {
	$(".full-height").css("min-height", windowHeight);
}



var $tiles = $(".flippy").liveTile({ 
    playOnHover:true,
    repeatCount: 0,
    delay: 1,
    initDelay: 0,
    startNow: false,
    animationComplete: function(tileData){
        $(this).liveTile("play");
        tileData.animationComplete = function(){};
		}
}).each(function(idx, ele){
   var delay = idx * 1000; 
    $(ele).liveTile("play", delay);
   
});

//if live tiles are hovere, peek
//

function scrollNav(el, fixPoint, collapsePoint, delay) {
    var $body = $('body'),
        $navMain = $(el),
        isFixed = $body.hasClass('nav-fixed'),
        isCollapsed = $body.hasClass('nav-collapsed');

    if ($(document).scrollTop() > fixPoint) {
        if (!isFixed) fix();
    } else {
        if (isFixed) unfix();
    }

    if ($(document).scrollTop() > collapsePoint) {
        if (!isCollapsed) {
            collapse();
            $navMain.off().hover(function() {
                uncollapse();
            }, function() {
                collapse();
            });
        }
    } else {
        $navMain.off();
        if (isCollapsed) uncollapse();
    }

    function fix() {
        $body.addClass('nav-fixed');
    }

    function unfix() {
        $body.removeClass('nav-fixed');
    }

    function collapse() {
      if(!$('body.accessibility-mode').length) {
        $body.addClass("nav-collapsed");
        $navMain.addClass('overflow');
      }
    }

    function uncollapse() {
        $body.removeClass("nav-collapsed");
        setTimeout(function() {
            $navMain.removeClass('overflow');
        }, delay);
    }
}

function navConfig(el, fixPoint, collapsePoint, delay) {
    scrollNav(el, fixPoint, collapsePoint, delay);
    $(document).off('scroll.navs').on('scroll.navs', function(e) {
        scrollNav(el, fixPoint, collapsePoint, delay);
    });
}

$(function() {

    var fixPoint,
        collapsePoint,
        delay = 900; //.9s, same as in the CSS

    function allNavs() {
        if ($(window).width() > 767) {
            fixPoint = 35; //initial position of navMain
            collapsePoint = fixPoint + 140;
            navConfig('#navMain', fixPoint, collapsePoint, delay);
        } else {
            fixPoint = 100; //$('.donate-mobile').offset().top;
            collapsePoint = fixPoint;
            navConfig('.donate-mobile', fixPoint, collapsePoint, delay);
        }
    }

    allNavs();

    $(window).resize(function() {
        allNavs();
    });

    /*
    $(".navmenu-fixed-right.offcanvas, .navmenu-fixed-left.offcanvas").swipe({
        swipe: function(event, direction) {
            $(".navmenu-fixed-right.offcanvas").offcanvas('toggle');
        },
        threshold: 100
    });
    */
    
});


$(function() {
    
    // Accessibility JS
    
    $('#accessibility-mode').click(function(e) {
      e.preventDefault();
      if($('body.accessibility-mode').length) {
        $('body').removeClass('accessibility-mode');
      } else {
        $('body').addClass('accessibility-mode');
      }
      $(this).blur();
    });
    
    
    
    $('#navMain li').focus(function(e) {
      
      if($(this).hasClass('dropdown-toggle')) {
        e.preventDefault();
        $('.dropdown').removeClass('open');
        $(this).parent('.dropdown').addClass('open');
      }
      
    }).blur(function() {
      
    });


    // BSDForm Tracking
    $('form[action*="//my.barackobama.com"],form[action*="//donate.barackobama.com"]').each(
        function(){
            function slugify(str) {
                return str.toString().toLowerCase()
                            .replace(/\s+/g, '-') // Replace spaces with -
                            .replace(/[^\w\-]+/g, '-') // Remove all non-word chars
                            .replace(/\-\-+/g, '-') // Replace multiple - with single -
                            .replace(/^-+/, '') // Trim - from start of text
                            .replace(/-+$/, ''); // Trim - from end of text
            }
            var target = $(this).attr('action');
            if (target.search('[?]') > 0) {
                target = target + '&';
            } else {
                target = target + '?';
            }
            var urlSlug = slugify(window.location.host);
            var pathSlug = slugify(window.location.pathname);
            if (pathSlug !== '') {
                urlSlug = urlSlug + '_' + pathSlug;
            }
            $(this).attr('action', target + 'subsource=monroe_' + urlSlug);
        }
    );


});

(function() {

var app = angular.module('portfolio', ['ngRoute']);

//perf
app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'themes/homeOtw/angularPartials/home.html',
        controller: 'HomeController'
      }).
      when('/portfolio/project', {
        templateUrl: 'themes/homeOtw/angularPartials/portfolio.html',
        controller: 'PortfolioController'
      }).
      when('/about', {
        templateUrl: 'themes/homeOtw/angularPartials/catchall.html',
        controller: 'FindMeController'
      }).otherwise({
         //redirectTo: '/#/'
      });
  }]);

app.controller('PortfolioController', function($scope, $http) {
	window.MY_SCOPE = $scope;
            $(document).foundation('equalizer', 'reflow');

    $scope.getProject = function($projectID) {
    	//console.log($projectID);
        $(document).foundation('equalizer', 'reflow');

    	$http.get('http://localhost:8888/homeotw/portfolio/getProject/' + $projectID).success(function(data, status, headers, config) {
    	$scope.project = data;
    	console.log('much success');
    	console.log(status);
        console.log(data);
        $(document).foundation('equalizer', 'reflow');


    }).error(function(data, status, headers, config) {
	    console.log('error');
    	console.log(status);
    	console.log(data);
        });
	};
    
    $scope.getSkill = function($skillID) {
    	//console.log($projectID);
    
    	$http.get('http://localhost:8888/homeotw/portfolio/getSkill/' + $skillID).success(function(data, status, headers, config) {
    	$scope.project = data;
    	console.log('much success');
    	console.log(status);
        //console.log(data);
    }).error(function(data, status, headers, config) {
	    console.log('error');
    	console.log(status);
    	console.log(data);
    });
	    
    };

	
	var init = function() {
		//$(document).foundation('equalizer', 'reflow');
        $(document).foundation('equalizer', 'reflow');

	}
	
	init()
});


app.controller('HomeController', function($scope, $http) {
    window.MY_SCOPE = $scope;

});

app.controller("FindMeController", function($scope, $http) {
    window.MY_SCOPE = $scope;
    $(document).foundation('tooltip', 'reflow');
    console.log('findmecalled');
   
    /*
    $scope.tweets = [
        {
            content: "this is a tweet",
            published: "12/14/84"
        },
        {
            content: "this is a tBETTER weet",
            published: "0999914/84"
        }

    ]
    */

    $scope.getActivityFeed = function() {

        $http.get('http://localhost:8888/homeotw/api/getActivityFeed/twitter')
            .success( function(data, status, headers, config) {
                $scope.activityFeed = data;
                console.log(status);
                //var newWindow = window.open();
                //newWindow.document.write(data);
            })
            .error( function( data, status, headers, config) {
                console.log(status);
                //var newWindow = window.open();
                //newWindow.document.write(data);

            });
    };
    
    $scope.init = function() {
        $(document).foundation();
 
    }

    $scope.init();

});



})();