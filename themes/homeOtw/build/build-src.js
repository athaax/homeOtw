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


console.log('sanity check');
function reflow(pathvar, status) {
	$(document).foundation('equalizer', 'reflow');
}

window.loadScript = function loadScript( url, callback ) {
  var script = document.createElement( "script" )
  script.type = "text/javascript";
  if(script.readyState) {  //IE
    script.onreadystatechange = function() {
      if ( script.readyState === "loaded" || script.readyState === "complete" ) {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {  //Others
    script.onload = function() {
      callback();
    };
  }

  script.src = url;
  document.getElementsByTagName( "head" )[0].appendChild( script );
}


// call the function...
window.loadScript('https://www.goodreads.com/review/custom_widget/3575393.currently-reading?cover_position=left&cover_size=medium&num_books=5&order=a&shelf=currently-reading&show_author=1&show_cover=1&show_rating=0&show_review=0&show_tags=0&show_title=1&sort=date_added&widget_bg_color=FFFFFF&widget_bg_transparent=&widget_border_width=1&widget_id=1424323252&widget_text_color=000000&widget_title_size=medium&widget_width=medium',
 function() {
	$(document).foundation('equalizer', 'reflow');
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
      when('/portfolio', {
        templateUrl: 'themes/homeOtw/angularPartials/portfolioCover.html',
        controller: 'PortfolioController'
      }).
      when('/portfolio/project/:projectID', {
        templateUrl: 'themes/homeOtw/angularPartials/portfolio.html',
        controller: 'ProjectController'
      }).
      when('/about', {
        templateUrl: 'themes/homeOtw/angularPartials/catchall.html',
        controller: 'FindMeController'
      }).
      when('/security', {
        templateUrl: 'themes/homeOtw/angularPartials/login.html'
      }).
      otherwise({
         redirectTo: '/#/'
      });
  }]);

app.controller('PortfolioController', function($scope, $location, $http) {
	window.MY_SCOPE = $scope;

    $scope.getProjects = function($projectID) {
        //console.log($projectID);
        //$(document).foundation('equalizer', 'reflow');

        $http.get('http://localhost:8888/homeotw/portfolio/getProjects/', {cache: true}).success(function(data, status, headers, config) {
            $scope.projects = data;
            console.log('much success');
            console.log(status);
            console.log(data);
            //window.open("data:text/json," + encodeURIComponent(data), "_blank");
            //newWindow.document.write(data);

        }).error(function(data, status, headers, config) {
            console.log('error');
            console.log(status);
            var newWindow = window.open();
            newWindow.document.write(data);
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

	
	$scope.init = function() {
        $scope.getProjects();

	};
	
	$scope.init();

});

app.controller('ProjectController', function($scope, $http, $location, $routeParams) {

    //console.log($routeParams.projectID);

    $scope.getProject = function($projectID) {

        $http.get('http://localhost:8888/homeotw/portfolio/getProject/' + $projectID, {cache: true}).success(function(data, status, headers, config) {
            $scope.project = data;
            console.log(status);
            console.log(data);

        }).error(function(data, status, headers, config) {
            console.log('error');
            console.log(status);
            console.log(data);
            });
    };

    $scope.init = function() {
        $scope.getProject($routeParams.projectID);
    };

    $scope.init();
});

app.controller('HomeController', function($scope, $http) {
    window.MY_SCOPE = $scope;
   // $(document).foundation();
    $(document).foundation('equalizer', 'reflow');
    $(".navButton").removeClass("active");
    $("#homeButton").addClass("active");
    window.loadScript('https://www.goodreads.com/review/custom_widget/3575393.currently-reading?cover_position=left&cover_size=medium&num_books=5&order=a&shelf=currently-reading&show_author=1&show_cover=1&show_rating=0&show_review=0&show_tags=0&show_title=1&sort=date_added&widget_bg_color=FFFFFF&widget_bg_transparent=&widget_border_width=1&widget_id=1424323252&widget_text_color=000000&widget_title_size=medium&widget_width=medium',
     function() {
        $(document).foundation('equalizer', 'reflow');
    });
   // check if all async requests are done. 





});

app.controller("FindMeController", function($scope, $http) {
    window.MY_SCOPE = $scope;
    $(document).foundation('tooltip', 'reflow');
    console.log('findmecalled');
    $(".navButton").removeClass("active");
    $("#aboutButton").addClass("active");
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

    }

    $scope.init();

});



})();
/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.4.1
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */

/* global window, document, define, jQuery, setInterval, clearInterval */

(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }

}(function($) {
    'use strict';
    var Slick = window.Slick || {};

    Slick = (function() {

        var instanceUid = 0;

        function Slick(element, settings) {

            var _ = this,
                dataSettings, responsiveSettings, breakpoint;

            _.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: $(element),
                appendDots: $(element),
                arrows: true,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="previous">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="next">Next</button>',
                autoplay: false,
                autoplaySpeed: 3000,
                centerMode: false,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function(slider, i) {
                    return '<button type="button" data-role="none">' + (i + 1) + '</button>';
                },
                dots: false,
                dotsClass: 'slick-dots',
                draggable: true,
                easing: 'linear',
                edgeFriction: 0.35,
                fade: false,
                focusOnSelect: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnDotsHover: false,
                respondTo: 'window',
                responsive: null,
                rtl: false,
                slide: '',
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                variableWidth: false,
                vertical: false,
                waitForAnimate: true
            };

            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: false
            };

            $.extend(_, _.initials);

            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.hidden = "hidden";
            _.paused = false;
            _.positionProp = null;
            _.respondTo = null;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = "visibilitychange";
            _.windowWidth = 0;
            _.windowTimer = null;

            dataSettings = $(element).data('slick') || {};

            _.options = $.extend({}, _.defaults, dataSettings, settings);

            _.currentSlide = _.options.initialSlide;

            _.originalSettings = _.options;
            responsiveSettings = _.options.responsive || null;

            if (responsiveSettings && responsiveSettings.length > -1) {
                _.respondTo = _.options.respondTo || "window";
                for (breakpoint in responsiveSettings) {
                    if (responsiveSettings.hasOwnProperty(breakpoint)) {
                        _.breakpoints.push(responsiveSettings[
                            breakpoint].breakpoint);
                        _.breakpointSettings[responsiveSettings[
                            breakpoint].breakpoint] =
                            responsiveSettings[breakpoint].settings;
                    }
                }
                _.breakpoints.sort(function(a, b) {
                    if(_.options.mobileFirst === true) {
                        return a - b;
                    } else {
                        return b - a;
                    }
                });
            }

            if (typeof document.mozHidden !== "undefined") {
                _.hidden = "mozHidden";
                _.visibilityChange = "mozvisibilitychange";
            } else if (typeof document.msHidden !== "undefined") {
                _.hidden = "msHidden";
                _.visibilityChange = "msvisibilitychange";
            } else if (typeof document.webkitHidden !== "undefined") {
                _.hidden = "webkitHidden";
                _.visibilityChange = "webkitvisibilitychange";
            }

            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);

            _.instanceUid = instanceUid++;

            // A simple way to check for HTML strings
            // Strict HTML recognition (must start with <)
            // Extracted from jQuery v1.11 source
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;

            _.init();

            _.checkResponsive(true);

        }

        return Slick;

    }());

    Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            addBefore = index;
            index = null;
        } else if (index < 0 || (index >= _.slideCount)) {
            return false;
        }

        _.unload();

        if (typeof(index) === 'number') {
            if (index === 0 && _.$slides.length === 0) {
                $(markup).appendTo(_.$slideTrack);
            } else if (addBefore) {
                $(markup).insertBefore(_.$slides.eq(index));
            } else {
                $(markup).insertAfter(_.$slides.eq(index));
            }
        } else {
            if (addBefore === true) {
                $(markup).prependTo(_.$slideTrack);
            } else {
                $(markup).appendTo(_.$slideTrack);
            }
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slides.each(function(index, element) {
            $(element).attr("data-slick-index",index);
        });

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.animateHeight = function(){
        var _ = this;
        if(_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({height: targetHeight},_.options.speed);
        }
    };

    Slick.prototype.animateSlide = function(targetLeft, callback) {

        var animProps = {}, _ = this;

        _.animateHeight();

        if (_.options.rtl === true && _.options.vertical === false) {
            targetLeft = -targetLeft;
        }
        if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
                _.$slideTrack.animate({
                    left: targetLeft
                }, _.options.speed, _.options.easing, callback);
            } else {
                _.$slideTrack.animate({
                    top: targetLeft
                }, _.options.speed, _.options.easing, callback);
            }

        } else {

            if (_.cssTransitions === false) {
                if (_.options.rtl === true) {
                    _.currentLeft = -(_.currentLeft);
                }
                $({
                    animStart: _.currentLeft
                }).animate({
                    animStart: targetLeft
                }, {
                    duration: _.options.speed,
                    easing: _.options.easing,
                    step: function(now) {
                        now = Math.ceil(now);
                        if (_.options.vertical === false) {
                            animProps[_.animType] = 'translate(' +
                                now + 'px, 0px)';
                            _.$slideTrack.css(animProps);
                        } else {
                            animProps[_.animType] = 'translate(0px,' +
                                now + 'px)';
                            _.$slideTrack.css(animProps);
                        }
                    },
                    complete: function() {
                        if (callback) {
                            callback.call();
                        }
                    }
                });

            } else {

                _.applyTransition();
                targetLeft = Math.ceil(targetLeft);

                if (_.options.vertical === false) {
                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                } else {
                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                }
                _.$slideTrack.css(animProps);

                if (callback) {
                    setTimeout(function() {

                        _.disableTransition();

                        callback.call();
                    }, _.options.speed);
                }

            }

        }

    };

    Slick.prototype.asNavFor = function(index) {
        var _ = this, asNavFor = _.options.asNavFor !== null ? $(_.options.asNavFor).slick('getSlick') : null;
        if(asNavFor !== null) asNavFor.slideHandler(index, true);
    };

    Slick.prototype.applyTransition = function(slide) {

        var _ = this,
            transition = {};

        if (_.options.fade === false) {
            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
        } else {
            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
        }

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.autoPlay = function() {

        var _ = this;

        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }

        if (_.slideCount > _.options.slidesToShow && _.paused !== true) {
            _.autoPlayTimer = setInterval(_.autoPlayIterator,
                _.options.autoplaySpeed);
        }

    };

    Slick.prototype.autoPlayClear = function() {

        var _ = this;
        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }

    };

    Slick.prototype.autoPlayIterator = function() {

        var _ = this;

        if (_.options.infinite === false) {

            if (_.direction === 1) {

                if ((_.currentSlide + 1) === _.slideCount -
                    1) {
                    _.direction = 0;
                }

                _.slideHandler(_.currentSlide + _.options.slidesToScroll);

            } else {

                if ((_.currentSlide - 1 === 0)) {

                    _.direction = 1;

                }

                _.slideHandler(_.currentSlide - _.options.slidesToScroll);

            }

        } else {

            _.slideHandler(_.currentSlide + _.options.slidesToScroll);

        }

    };

    Slick.prototype.buildArrows = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow = $(_.options.prevArrow);
            _.$nextArrow = $(_.options.nextArrow);

            if (_.htmlExpr.test(_.options.prevArrow)) {
                _.$prevArrow.appendTo(_.options.appendArrows);
            }

            if (_.htmlExpr.test(_.options.nextArrow)) {
                _.$nextArrow.appendTo(_.options.appendArrows);
            }

            if (_.options.infinite !== true) {
                _.$prevArrow.addClass('slick-disabled');
            }

        }

    };

    Slick.prototype.buildDots = function() {

        var _ = this,
            i, dotString;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            dotString = '<ul class="' + _.options.dotsClass + '">';

            for (i = 0; i <= _.getDotCount(); i += 1) {
                dotString += '<li>' + _.options.customPaging.call(this, _, i) + '</li>';
            }

            dotString += '</ul>';

            _.$dots = $(dotString).appendTo(
                _.options.appendDots);

            _.$dots.find('li').first().addClass('slick-active').attr("aria-hidden","false");

        }

    };

    Slick.prototype.buildOut = function() {

        var _ = this;

        _.$slides = _.$slider.children(_.options.slide +
            ':not(.slick-cloned)').addClass(
            'slick-slide');
        _.slideCount = _.$slides.length;

        _.$slides.each(function(index, element) {
            $(element).attr("data-slick-index",index);
        });

        _.$slidesCache = _.$slides;

        _.$slider.addClass('slick-slider');

        _.$slideTrack = (_.slideCount === 0) ?
            $('<div class="slick-track"/>').appendTo(_.$slider) :
            _.$slides.wrapAll('<div class="slick-track"/>').parent();

        _.$list = _.$slideTrack.wrap(
            '<div aria-live="polite" class="slick-list"/>').parent();
        _.$slideTrack.css('opacity', 0);

        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
            _.options.slidesToScroll = 1;
        }

        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

        _.setupInfinite();

        _.buildArrows();

        _.buildDots();

        _.updateDots();

        if (_.options.accessibility === true) {
            _.$list.prop('tabIndex', 0);
        }

        _.setSlideClasses(typeof this.currentSlide === 'number' ? this.currentSlide : 0);

        if (_.options.draggable === true) {
            _.$list.addClass('draggable');
        }

    };

    Slick.prototype.checkResponsive = function(initial) {

        var _ = this,
            breakpoint, targetBreakpoint, respondToWidth;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();
        if (_.respondTo === "window") {
          respondToWidth = windowWidth;
        } else if (_.respondTo === "slider") {
          respondToWidth = sliderWidth;
        } else if (_.respondTo === "min") {
          respondToWidth = Math.min(windowWidth, sliderWidth);
        }

        if (_.originalSettings.responsive && _.originalSettings
            .responsive.length > -1 && _.originalSettings.responsive !== null) {

            targetBreakpoint = null;

            for (breakpoint in _.breakpoints) {
                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    }
                }
            }

            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint) {
                        _.activeBreakpoint =
                            targetBreakpoint;
                        if(_.breakpointSettings[targetBreakpoint] === "unslick") {
                            _.unslick();
                        } else {
                            _.options = $.extend({}, _.originalSettings,
                                _.breakpointSettings[
                                    targetBreakpoint]);
                            if(initial === true)
                                _.currentSlide = _.options.initialSlide;
                            _.refresh();
                        }
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if(_.breakpointSettings[targetBreakpoint] === "unslick") {
                        _.unslick();
                    } else {
                        _.options = $.extend({}, _.originalSettings,
                            _.breakpointSettings[
                                targetBreakpoint]);
                        if(initial === true)
                            _.currentSlide = _.options.initialSlide;
                        _.refresh();
                    }
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if(initial === true)
                        _.currentSlide = _.options.initialSlide;
                    _.refresh();
                }
            }

        }

    };

    Slick.prototype.changeSlide = function(event, dontAnimate) {

        var _ = this,
            $target = $(event.target),
            indexOffset, slideOffset, unevenOffset;

        // If target is a link, prevent default action.
        $target.is('a') && event.preventDefault();

        unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

        switch (event.data.message) {

            case 'previous':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide  - slideOffset, false, dontAnimate);
                }
                break;

            case 'next':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                }
                break;

            case 'index':
                var index = event.data.index === 0 ? 0 :
                    event.data.index || $(event.target).parent().index() * _.options.slidesToScroll;

                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                break;

            default:
                return;
        }

    };

    Slick.prototype.checkNavigable = function(index) {

        var _ = this, navigables, prevNavigable;

        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if(index > navigables[navigables.length -1]){
            index = navigables[navigables.length -1];
        } else {
            for(var n in navigables) {
                if(index < navigables[n]) {
                    index = prevNavigable;
                    break;
                }
                prevNavigable = navigables[n];
            }
        }

        return index;
    };

    Slick.prototype.clickHandler = function(event) {

        var _ = this;

        if(_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }

    };

    Slick.prototype.destroy = function() {

        var _ = this;

        _.autoPlayClear();

        _.touchObject = {};

        $('.slick-cloned', _.$slider).remove();
        if (_.$dots) {
            _.$dots.remove();
        }
        if (_.$prevArrow && (typeof _.options.prevArrow !== 'object')) {
            _.$prevArrow.remove();
        }
        if (_.$nextArrow && (typeof _.options.nextArrow !== 'object')) {
            _.$nextArrow.remove();
        }


        _.$slides.removeClass('slick-slide slick-active slick-center slick-visible')
            .attr("aria-hidden","true")
            .removeAttr('data-slick-index')
            .css({
                position: '',
                left: '',
                top: '',
                zIndex: '',
                opacity: '',
                width: ''
            });

        _.$slider.removeClass('slick-slider');
        _.$slider.removeClass('slick-initialized');

        _.$list.off('.slick');
        $(window).off('.slick-' + _.instanceUid);
        $(document).off('.slick-' + _.instanceUid);

        _.$slider.html(_.$slides);

    };

    Slick.prototype.disableTransition = function(slide) {

        var _ = this,
            transition = {};

        transition[_.transitionType] = "";

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.fadeSlide = function(slideIndex, callback) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).css({
                zIndex: 1000
            });

            _.$slides.eq(slideIndex).animate({
                opacity: 1
            }, _.options.speed, _.options.easing, callback);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 1,
                zIndex: 1000
            });

            if (callback) {
                setTimeout(function() {

                    _.disableTransition(slideIndex);

                    callback.call();
                }, _.options.speed);
            }

        }

    };

    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {

        var _ = this;

        if (filter !== null) {

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {

        var _ = this;
        return _.currentSlide;

    };

    Slick.prototype.getDotCount = function() {

        var _ = this;

        var breakPoint = 0;
        var counter = 0;
        var pagerQty = 0;

        if(_.options.infinite === true) {
            pagerQty = Math.ceil(_.slideCount / _.options.slidesToScroll);
        } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount;
        } else {
            while (breakPoint < _.slideCount){
                ++pagerQty;
                breakPoint = counter + _.options.slidesToShow;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll  : _.options.slidesToShow;
            }
        }

        return pagerQty - 1;

    };

    Slick.prototype.getLeft = function(slideIndex) {

        var _ = this,
            targetLeft,
            verticalHeight,
            verticalOffset = 0,
            targetSlide;

        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight();

        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
                verticalOffset = (verticalHeight * _.options.slidesToShow) * -1;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    if(slideIndex > _.slideCount) {
                        _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
                        verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
                    } else {
                        _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
                        verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
                    }
                }
            }
        } else {
            if(slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
                verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
            }
        }

        if (_.slideCount <= _.options.slidesToShow){
            _.slideOffset = 0;
            verticalOffset = 0;
        }

        if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
        } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
        }

        if (_.options.vertical === false) {
            targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
        } else {
            targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
        }

        if (_.options.variableWidth === true) {

            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
            } else {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
            }

            targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;

            if (_.options.centerMode === true) {
                if(_.options.infinite === false) {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                }
                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
            }
        }

        return targetLeft;

    };

    Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {

        var _ = this;

        return _.options[option];

    };

    Slick.prototype.getNavigableIndexes = function() {

        var _ = this, breakPoint = 0, counter = 0, indexes = [], max;

        if(_.options.infinite === false) {
            max = _.slideCount - _.options.slidesToShow + 1;
            if (_.options.centerMode === true) max = _.slideCount;
        } else {
            breakPoint = _.slideCount * -1;
            counter = _.slideCount * -1;
            max = _.slideCount * 2;
        }

        while (breakPoint < max){
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll  : _.options.slidesToShow;
        }

        return indexes;

    };

    Slick.prototype.getSlick = function() {

        return this;

    };

    Slick.prototype.getSlideCount = function() {

        var _ = this, slidesTraversed, swipedSlide, centerOffset;

        centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

        if(_.options.swipeToSlide === true) {
            _.$slideTrack.find('.slick-slide').each(function(index, slide){
                if (slide.offsetLeft - centerOffset + ($(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {
                    swipedSlide = slide;
                    return false;
                }
            });

            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;

            return slidesTraversed;

        } else {
            return _.options.slidesToScroll;
        }

    };

    Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'index',
                index: parseInt(slide)
            }
        }, dontAnimate);

    };

    Slick.prototype.init = function() {

        var _ = this;

        if (!$(_.$slider).hasClass('slick-initialized')) {

            $(_.$slider).addClass('slick-initialized');
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();
        }

        _.$slider.trigger("init", [ _ ]);

    };

    Slick.prototype.initArrowEvents = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow.on('click.slick', {
                message: 'previous'
            }, _.changeSlide);
            _.$nextArrow.on('click.slick', {
                message: 'next'
            }, _.changeSlide);
        }

    };

    Slick.prototype.initDotEvents = function() {

        var _ = this;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            $('li', _.$dots).on('click.slick', {
                message: 'index'
            }, _.changeSlide);
        }

        if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.options.autoplay === true) {
            $('li', _.$dots)
                .on('mouseenter.slick', function(){
                    _.paused = true;
                    _.autoPlayClear();
                })
                .on('mouseleave.slick', function(){
                    _.paused = false;
                    _.autoPlay();
                });
        }

    };

    Slick.prototype.initializeEvents = function() {

        var _ = this;

        _.initArrowEvents();

        _.initDotEvents();

        _.$list.on('touchstart.slick mousedown.slick', {
            action: 'start'
        }, _.swipeHandler);
        _.$list.on('touchmove.slick mousemove.slick', {
            action: 'move'
        }, _.swipeHandler);
        _.$list.on('touchend.slick mouseup.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('touchcancel.slick mouseleave.slick', {
            action: 'end'
        }, _.swipeHandler);

        _.$list.on('click.slick', _.clickHandler);

        if (_.options.autoplay === true) {

            $(document).on(_.visibilityChange, function(){
                _.visibility();
            });

            if( _.options.pauseOnHover === true ) {

                _.$list.on('mouseenter.slick', function(){
                    _.paused = true;
                    _.autoPlayClear();
                });
                _.$list.on('mouseleave.slick', function(){
                    _.paused = false;
                    _.autoPlay();
                });

            }

        }

        if(_.options.accessibility === true) {
            _.$list.on('keydown.slick', _.keyHandler);
        }

        if(_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        $(window).on('orientationchange.slick.slick-' + _.instanceUid, function() {
            _.checkResponsive();
            _.setPosition();
        });

        $(window).on('resize.slick.slick-' + _.instanceUid, function() {
            if ($(window).width() !== _.windowWidth) {
                clearTimeout(_.windowDelay);
                _.windowDelay = window.setTimeout(function() {
                    _.windowWidth = $(window).width();
                    _.checkResponsive();
                    _.setPosition();
                }, 50);
            }
        });

        $('*[draggable!=true]', _.$slideTrack).on('dragstart', function(e){ e.preventDefault(); });

        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(document).on('ready.slick.slick-' + _.instanceUid, _.setPosition);

    };

    Slick.prototype.initUI = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.show();
            _.$nextArrow.show();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.show();

        }

        if (_.options.autoplay === true) {

            _.autoPlay();

        }

    };

    Slick.prototype.keyHandler = function(event) {

        var _ = this;

        if (event.keyCode === 37 && _.options.accessibility === true) {
            _.changeSlide({
                data: {
                    message: 'previous'
                }
            });
        } else if (event.keyCode === 39 && _.options.accessibility === true) {
            _.changeSlide({
                data: {
                    message: 'next'
                }
            });
        }

    };

    Slick.prototype.lazyLoad = function() {

        var _ = this,
            loadRange, cloneRange, rangeStart, rangeEnd;

        function loadImages(imagesScope) {
            $('img[data-lazy]', imagesScope).each(function() {
                var image = $(this),
                    imageSource = $(this).attr('data-lazy');

                image
                  .load(function() { image.animate({ opacity: 1 }, 200); })
                  .css({ opacity: 0 })
                  .attr('src', imageSource)
                  .removeAttr('data-lazy')
                  .removeClass('slick-loading');
            });
        }

        if (_.options.centerMode === true) {
            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow/2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2;
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow/2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow/2 + 1) + _.currentSlide;
            }
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = rangeStart + _.options.slidesToShow;
            if (_.options.fade === true ) {
                if(rangeStart > 0) rangeStart--;
                if(rangeEnd <= _.slideCount) rangeEnd++;
            }
        }

        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);
        loadImages(loadRange);

          if (_.slideCount <= _.options.slidesToShow){
              cloneRange = _.$slider.find('.slick-slide');
              loadImages(cloneRange);
          }else
        if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
            loadImages(cloneRange);
        } else if (_.currentSlide === 0) {
            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
            loadImages(cloneRange);
        }

    };

    Slick.prototype.loadSlider = function() {

        var _ = this;

        _.setPosition();

        _.$slideTrack.css({
            opacity: 1
        });

        _.$slider.removeClass('slick-loading');

        _.initUI();

        if (_.options.lazyLoad === 'progressive') {
            _.progressiveLazyLoad();
        }

    };

    Slick.prototype.next = Slick.prototype.slickNext = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'next'
            }
        });

    };

    Slick.prototype.pause = Slick.prototype.slickPause = function() {

        var _ = this;

        _.autoPlayClear();
        _.paused = true;

    };

    Slick.prototype.play = Slick.prototype.slickPlay = function() {

        var _ = this;

        _.paused = false;
        _.autoPlay();

    };

    Slick.prototype.postSlide = function(index) {

        var _ = this;

        _.$slider.trigger("afterChange", [ _, index]);

        _.animating = false;

        _.setPosition();

        _.swipeLeft = null;

        if (_.options.autoplay === true && _.paused === false) {
            _.autoPlay();
        }

    };

    Slick.prototype.prev = Slick.prototype.slickPrev = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'previous'
            }
        });

    };

    Slick.prototype.progressiveLazyLoad = function() {

        var _ = this,
            imgCount, targetImage;

        imgCount = $('img[data-lazy]', _.$slider).length;

        if (imgCount > 0) {
            targetImage = $('img[data-lazy]', _.$slider).first();
            targetImage.attr('src', targetImage.attr('data-lazy')).removeClass('slick-loading').load(function() {
                targetImage.removeAttr('data-lazy');
                _.progressiveLazyLoad();
                
                if( _.options.adaptiveHeight === true ) {
                    _.setPosition();
                }
            })
         .error(function () {
          targetImage.removeAttr('data-lazy');
          _.progressiveLazyLoad();
         });
        }

    };

    Slick.prototype.refresh = function() {

        var _ = this,
            currentSlide = _.currentSlide;

        _.destroy();

        $.extend(_, _.initials);

        _.init();

        _.changeSlide({
            data: {
                message: 'index',
                index: currentSlide
            }
        }, true);

    };

    Slick.prototype.reinit = function() {

        var _ = this;

        _.$slides = _.$slideTrack.children(_.options.slide).addClass(
            'slick-slide');

        _.slideCount = _.$slides.length;

        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }

        _.setProps();

        _.setupInfinite();

        _.buildArrows();

        _.updateArrows();

        _.initArrowEvents();

        _.buildDots();

        _.updateDots();

        _.initDotEvents();

        if(_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        _.setSlideClasses(0);

        _.setPosition();

        _.$slider.trigger("reInit", [ _ ]);

    };

    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1;
        } else {
            index = removeBefore === true ? --index : index;
        }

        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
            return false;
        }

        _.unload();

        if(removeAll === true) {
            _.$slideTrack.children().remove();
        } else {
            _.$slideTrack.children(this.options.slide).eq(index).remove();
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.setCSS = function(position) {

        var _ = this,
            positionProps = {}, x, y;

        if (_.options.rtl === true) {
            position = -position;
        }
        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';

        positionProps[_.positionProp] = position;

        if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps);
        } else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                _.$slideTrack.css(positionProps);
            } else {
                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                _.$slideTrack.css(positionProps);
            }
        }

    };

    Slick.prototype.setDimensions = function() {

        var _ = this;

        if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: ('0px ' + _.options.centerPadding)
                });
            }
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: (_.options.centerPadding + ' 0px')
                });
            }
        }

        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();


        if(_.options.vertical === false && _.options.variableWidth === false) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));

        } else if (_.options.variableWidth === true) {
            var trackWidth = 0;
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.children('.slick-slide').each(function(){
                trackWidth += _.listWidth;
            });
            _.$slideTrack.width(Math.ceil(trackWidth) + 1);
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
        }

        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);

    };

    Slick.prototype.setFade = function() {

        var _ = this,
            targetLeft;

        _.$slides.each(function(index, element) {
            targetLeft = (_.slideWidth * index) * -1;
            if (_.options.rtl === true) {
                $(element).css({
                    position: 'relative',
                    right: targetLeft,
                    top: 0,
                    zIndex: 800,
                    opacity: 0
                });
            } else {
                $(element).css({
                    position: 'relative',
                    left: targetLeft,
                    top: 0,
                    zIndex: 800,
                    opacity: 0
                });
            }
        });

        _.$slides.eq(_.currentSlide).css({
            zIndex: 900,
            opacity: 1
        });

    };

    Slick.prototype.setHeight = function() {

        var _ = this;

        if(_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css('height', targetHeight);
        }

    };

    Slick.prototype.setOption = Slick.prototype.slickSetOption = function(option, value, refresh) {

        var _ = this;
        _.options[option] = value;

        if (refresh === true) {
            _.unload();
            _.reinit();
        }

    };

    Slick.prototype.setPosition = function() {

        var _ = this;

        _.setDimensions();

        _.setHeight();

        if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide));
        } else {
            _.setFade();
        }

        _.$slider.trigger("setPosition", [ _ ]);

    };

    Slick.prototype.setProps = function() {

        var _ = this,
            bodyStyle = document.body.style;

        _.positionProp = _.options.vertical === true ? 'top' : 'left';

        if (_.positionProp === 'top') {
            _.$slider.addClass('slick-vertical');
        } else {
            _.$slider.removeClass('slick-vertical');
        }

        if (bodyStyle.WebkitTransition !== undefined ||
            bodyStyle.MozTransition !== undefined ||
            bodyStyle.msTransition !== undefined) {
            if(_.options.useCSS === true) {
                _.cssTransitions = true;
            }
        }

        if (bodyStyle.OTransform !== undefined) {
            _.animType = 'OTransform';
            _.transformType = "-o-transform";
            _.transitionType = 'OTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = 'MozTransform';
            _.transformType = "-moz-transform";
            _.transitionType = 'MozTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = 'webkitTransform';
            _.transformType = "-webkit-transform";
            _.transitionType = 'webkitTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = 'msTransform';
            _.transformType = "-ms-transform";
            _.transitionType = 'msTransition';
            if (bodyStyle.msTransform === undefined) _.animType = false;
        }
        if (bodyStyle.transform !== undefined && _.animType !== false) {
            _.animType = 'transform';
            _.transformType = "transform";
            _.transitionType = 'transition';
        }
        _.transformsEnabled = (_.animType !== null && _.animType !== false);

    };


    Slick.prototype.setSlideClasses = function(index) {

        var _ = this,
            centerOffset, allSlides, indexOffset, remainder;

        _.$slider.find('.slick-slide').removeClass('slick-active').attr("aria-hidden","true").removeClass('slick-center');
        allSlides = _.$slider.find('.slick-slide');

        if (_.options.centerMode === true) {

            centerOffset = Math.floor(_.options.slidesToShow / 2);

            if(_.options.infinite === true) {

                if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {
                    _.$slides.slice(index - centerOffset, index + centerOffset + 1).addClass('slick-active').attr("aria-hidden","false");
                } else {
                    indexOffset = _.options.slidesToShow + index;
                    allSlides.slice(indexOffset - centerOffset + 1, indexOffset + centerOffset + 2).addClass('slick-active').attr("aria-hidden","false");
                }

                if (index === 0) {
                    allSlides.eq(allSlides.length - 1 - _.options.slidesToShow).addClass('slick-center');
                } else if (index === _.slideCount - 1) {
                    allSlides.eq(_.options.slidesToShow).addClass('slick-center');
                }

            }

            _.$slides.eq(index).addClass('slick-center');

        } else {

            if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {
                _.$slides.slice(index, index + _.options.slidesToShow).addClass('slick-active').attr("aria-hidden","false");
            } else if ( allSlides.length <= _.options.slidesToShow ) {
                allSlides.addClass('slick-active').attr("aria-hidden","false");
            } else {
                remainder = _.slideCount%_.options.slidesToShow;
                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;
                if(_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {
                    allSlides.slice(indexOffset-(_.options.slidesToShow-remainder), indexOffset + remainder).addClass('slick-active').attr("aria-hidden","false");
                } else {
                    allSlides.slice(indexOffset, indexOffset + _.options.slidesToShow).addClass('slick-active').attr("aria-hidden","false");
                }
            }

        }

        if (_.options.lazyLoad === 'ondemand') {
            _.lazyLoad();
        }

    };

    Slick.prototype.setupInfinite = function() {

        var _ = this,
            i, slideIndex, infiniteCount;

        if (_.options.fade === true) {
            _.options.centerMode = false;
        }

        if (_.options.infinite === true && _.options.fade === false) {

            slideIndex = null;

            if (_.slideCount > _.options.slidesToShow) {

                if (_.options.centerMode === true) {
                    infiniteCount = _.options.slidesToShow + 1;
                } else {
                    infiniteCount = _.options.slidesToShow;
                }

                for (i = _.slideCount; i > (_.slideCount -
                    infiniteCount); i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex-_.slideCount)
                        .prependTo(_.$slideTrack).addClass('slick-cloned');
                }
                for (i = 0; i < infiniteCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex+_.slideCount)
                        .appendTo(_.$slideTrack).addClass('slick-cloned');
                }
                _.$slideTrack.find('.slick-cloned').find('[id]').each(function() {
                    $(this).attr('id', '');
                });

            }

        }

    };

    Slick.prototype.selectHandler = function(event) {

        var _ = this;
        var index = parseInt($(event.target).parents('.slick-slide').attr("data-slick-index"));
        if(!index) index = 0;

        if(_.slideCount <= _.options.slidesToShow){
            _.$slider.find('.slick-slide').removeClass('slick-active').attr("aria-hidden","true");
            _.$slides.eq(index).addClass('slick-active').attr("aria-hidden","false");
            if(_.options.centerMode === true) {
                _.$slider.find('.slick-slide').removeClass('slick-center');
                _.$slides.eq(index).addClass('slick-center');
            }
            _.asNavFor(index);
            return;
        }
        _.slideHandler(index);

    };

    Slick.prototype.slideHandler = function(index,sync,dontAnimate) {

        var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
            _ = this;

        sync = sync || false;

        if (_.animating === true && _.options.waitForAnimate === true) {
            return;
        }

        if (_.options.fade === true && _.currentSlide === index) {
            return;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            return;
        }

        if (sync === false) {
            _.asNavFor(index);
        }

        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);

        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if(_.options.fade === false) {
                targetSlide = _.currentSlide;
                if(dontAnimate!==true) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
            if(_.options.fade === false) {
                targetSlide = _.currentSlide;
                if(dontAnimate!==true) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        }

        if (_.options.autoplay === true) {
            clearInterval(_.autoPlayTimer);
        }

        if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
            } else {
                animSlide = _.slideCount + targetSlide;
            }
        } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = 0;
            } else {
                animSlide = targetSlide - _.slideCount;
            }
        } else {
            animSlide = targetSlide;
        }

        _.animating = true;

        _.$slider.trigger("beforeChange", [ _ , _.currentSlide, animSlide]);

        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;

        _.setSlideClasses(_.currentSlide);

        _.updateDots();
        _.updateArrows();

        if (_.options.fade === true) {
            if(dontAnimate!==true) {
                _.fadeSlide(animSlide, function() {
                    _.postSlide(animSlide);
                });
            } else {
                _.postSlide(animSlide);
            }
            _.animateHeight();
            return;
        }

        if(dontAnimate!==true) {
            _.animateSlide(targetLeft, function() {
                _.postSlide(animSlide);
            });
        } else {
            _.postSlide(animSlide);
        }

    };

    Slick.prototype.startLoad = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.hide();
            _.$nextArrow.hide();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.hide();

        }

        _.$slider.addClass('slick-loading');

    };

    Slick.prototype.swipeDirection = function() {

        var xDist, yDist, r, swipeAngle, _ = this;

        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);

        swipeAngle = Math.round(r * 180 / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }

        if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
            return (_.options.rtl === false ? 'right' : 'left');
        }

        return 'vertical';

    };

    Slick.prototype.swipeEnd = function(event) {

        var _ = this, slideCount;

        _.dragging = false;

        _.shouldClick = (_.touchObject.swipeLength > 10) ? false : true;

        if (_.touchObject.curX === undefined) {
            return false;
        }

        if (_.touchObject.edgeHit === true) {
            _.$slider.trigger("edge", [  _, _.swipeDirection()]);
        }

        if (_.touchObject.swipeLength >= _.touchObject.minSwipe) {

            switch (_.swipeDirection()) {
                case 'left':
                    slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide + _.getSlideCount()) : _.currentSlide + _.getSlideCount();
                    _.slideHandler(slideCount);
                    _.currentDirection = 0;
                    _.touchObject = {};
                    _.$slider.trigger("swipe", [ _, "left"]);
                    break;

                case 'right':
                    slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide - _.getSlideCount()) : _.currentSlide - _.getSlideCount();
                    _.slideHandler(slideCount);
                    _.currentDirection = 1;
                    _.touchObject = {};
                    _.$slider.trigger("swipe", [ _, "right"]);
                    break;
            }
        } else {
            if(_.touchObject.startX !== _.touchObject.curX) {
                _.slideHandler(_.currentSlide);
                _.touchObject = {};
            }
        }

    };

    Slick.prototype.swipeHandler = function(event) {

        var _ = this;

        if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
           return;
        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
           return;
        }

        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?
            event.originalEvent.touches.length : 1;

        _.touchObject.minSwipe = _.listWidth / _.options
            .touchThreshold;

        switch (event.data.action) {

            case 'start':
                _.swipeStart(event);
                break;

            case 'move':
                _.swipeMove(event);
                break;

            case 'end':
                _.swipeEnd(event);
                break;

        }

    };

    Slick.prototype.swipeMove = function(event) {

        var _ = this,
            edgeWasHit = false,
            curLeft, swipeDirection, swipeLength, positionOffset, touches;

        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

        if (!_.dragging || touches && touches.length !== 1) {
            return false;
        }

        curLeft = _.getLeft(_.currentSlide);

        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

        _.touchObject.swipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

        swipeDirection = _.swipeDirection();

        if (swipeDirection === 'vertical') {
            return;
        }

        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            event.preventDefault();
        }

        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);

        swipeLength = _.touchObject.swipeLength;

        _.touchObject.edgeHit = false;

        if (_.options.infinite === false) {
            if ((_.currentSlide === 0 && swipeDirection === "right") || (_.currentSlide >= _.getDotCount() && swipeDirection === "left")) {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true;
            }
        }

        if (_.options.vertical === false) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        } else {
            _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
        }

        if (_.options.fade === true || _.options.touchMove === false) {
            return false;
        }

        if (_.animating === true) {
            _.swipeLeft = null;
            return false;
        }

        _.setCSS(_.swipeLeft);

    };

    Slick.prototype.swipeStart = function(event) {

        var _ = this,
            touches;

        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false;
        }

        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
            touches = event.originalEvent.touches[0];
        }

        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

        _.dragging = true;

    };

    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {

        var _ = this;

        if (_.$slidesCache !== null) {

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.unload = function() {

        var _ = this;

        $('.slick-cloned', _.$slider).remove();
        if (_.$dots) {
            _.$dots.remove();
        }
        if (_.$prevArrow && (typeof _.options.prevArrow !== 'object')) {
            _.$prevArrow.remove();
        }
        if (_.$nextArrow && (typeof _.options.nextArrow !== 'object')) {
            _.$nextArrow.remove();
        }
        _.$slides.removeClass('slick-slide slick-active slick-visible').attr("aria-hidden","true").css('width', '');

    };

    Slick.prototype.unslick = function() {

        var _ = this;
        _.destroy();

    };

    Slick.prototype.updateArrows = function() {

        var _ = this, centerOffset;

        centerOffset = Math.floor(_.options.slidesToShow / 2);

        if (_.options.arrows === true && _.options.infinite !==
            true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow.removeClass('slick-disabled');
            _.$nextArrow.removeClass('slick-disabled');
            if (_.currentSlide === 0) {
                _.$prevArrow.addClass('slick-disabled');
                _.$nextArrow.removeClass('slick-disabled');
            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {
                _.$nextArrow.addClass('slick-disabled');
                _.$prevArrow.removeClass('slick-disabled');
            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {
                _.$nextArrow.addClass('slick-disabled');
                _.$prevArrow.removeClass('slick-disabled');
            }
        }

    };

    Slick.prototype.updateDots = function() {

        var _ = this;

        if (_.$dots !== null) {

            _.$dots.find('li').removeClass('slick-active').attr("aria-hidden","true");
            _.$dots.find('li').eq(Math.floor(_.currentSlide / _.options.slidesToScroll)).addClass('slick-active').attr("aria-hidden","false");

        }

    };

    Slick.prototype.visibility = function() {

        var _ = this;

        if( document[ _.hidden ] ) {
            _.paused = true;
            _.autoPlayClear();
        } else {
            _.paused = false;
            _.autoPlay();
        }

    };

    $.fn.slick = function() {
        var _ = this, opt = arguments[0], args = Array.prototype.slice.call(arguments,1), l = _.length, i = 0, ret;
        for(i; i < l; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined')
                _[i].slick =  new Slick(_[i], opt);
            else
                ret = _[i].slick[opt].apply(_[i].slick, args);
                if (typeof ret != 'undefined') return ret;
        }
        return _;
    };

    $(function(){
        $('[data-slick]').slick();
    });

}));

/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.4.1
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */

!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):"undefined"!=typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){"use strict";var b=window.Slick||{};b=function(){function c(c,d){var f,g,h,e=this;if(e.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:a(c),appendDots:a(c),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(a,b){return'<button type="button" data-role="none">'+(b+1)+"</button>"},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rtl:!1,slide:"",slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0},e.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1},a.extend(e,e.initials),e.activeBreakpoint=null,e.animType=null,e.animProp=null,e.breakpoints=[],e.breakpointSettings=[],e.cssTransitions=!1,e.hidden="hidden",e.paused=!1,e.positionProp=null,e.respondTo=null,e.shouldClick=!0,e.$slider=a(c),e.$slidesCache=null,e.transformType=null,e.transitionType=null,e.visibilityChange="visibilitychange",e.windowWidth=0,e.windowTimer=null,f=a(c).data("slick")||{},e.options=a.extend({},e.defaults,f,d),e.currentSlide=e.options.initialSlide,e.originalSettings=e.options,g=e.options.responsive||null,g&&g.length>-1){e.respondTo=e.options.respondTo||"window";for(h in g)g.hasOwnProperty(h)&&(e.breakpoints.push(g[h].breakpoint),e.breakpointSettings[g[h].breakpoint]=g[h].settings);e.breakpoints.sort(function(a,b){return e.options.mobileFirst===!0?a-b:b-a})}"undefined"!=typeof document.mozHidden?(e.hidden="mozHidden",e.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.msHidden?(e.hidden="msHidden",e.visibilityChange="msvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(e.hidden="webkitHidden",e.visibilityChange="webkitvisibilitychange"),e.autoPlay=a.proxy(e.autoPlay,e),e.autoPlayClear=a.proxy(e.autoPlayClear,e),e.changeSlide=a.proxy(e.changeSlide,e),e.clickHandler=a.proxy(e.clickHandler,e),e.selectHandler=a.proxy(e.selectHandler,e),e.setPosition=a.proxy(e.setPosition,e),e.swipeHandler=a.proxy(e.swipeHandler,e),e.dragHandler=a.proxy(e.dragHandler,e),e.keyHandler=a.proxy(e.keyHandler,e),e.autoPlayIterator=a.proxy(e.autoPlayIterator,e),e.instanceUid=b++,e.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,e.init(),e.checkResponsive(!0)}var b=0;return c}(),b.prototype.addSlide=b.prototype.slickAdd=function(b,c,d){var e=this;if("boolean"==typeof c)d=c,c=null;else if(0>c||c>=e.slideCount)return!1;e.unload(),"number"==typeof c?0===c&&0===e.$slides.length?a(b).appendTo(e.$slideTrack):d?a(b).insertBefore(e.$slides.eq(c)):a(b).insertAfter(e.$slides.eq(c)):d===!0?a(b).prependTo(e.$slideTrack):a(b).appendTo(e.$slideTrack),e.$slides=e.$slideTrack.children(this.options.slide),e.$slideTrack.children(this.options.slide).detach(),e.$slideTrack.append(e.$slides),e.$slides.each(function(b,c){a(c).attr("data-slick-index",b)}),e.$slidesCache=e.$slides,e.reinit()},b.prototype.animateHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.animate({height:b},a.options.speed)}},b.prototype.animateSlide=function(b,c){var d={},e=this;e.animateHeight(),e.options.rtl===!0&&e.options.vertical===!1&&(b=-b),e.transformsEnabled===!1?e.options.vertical===!1?e.$slideTrack.animate({left:b},e.options.speed,e.options.easing,c):e.$slideTrack.animate({top:b},e.options.speed,e.options.easing,c):e.cssTransitions===!1?(e.options.rtl===!0&&(e.currentLeft=-e.currentLeft),a({animStart:e.currentLeft}).animate({animStart:b},{duration:e.options.speed,easing:e.options.easing,step:function(a){a=Math.ceil(a),e.options.vertical===!1?(d[e.animType]="translate("+a+"px, 0px)",e.$slideTrack.css(d)):(d[e.animType]="translate(0px,"+a+"px)",e.$slideTrack.css(d))},complete:function(){c&&c.call()}})):(e.applyTransition(),b=Math.ceil(b),d[e.animType]=e.options.vertical===!1?"translate3d("+b+"px, 0px, 0px)":"translate3d(0px,"+b+"px, 0px)",e.$slideTrack.css(d),c&&setTimeout(function(){e.disableTransition(),c.call()},e.options.speed))},b.prototype.asNavFor=function(b){var c=this,d=null!==c.options.asNavFor?a(c.options.asNavFor).slick("getSlick"):null;null!==d&&d.slideHandler(b,!0)},b.prototype.applyTransition=function(a){var b=this,c={};c[b.transitionType]=b.options.fade===!1?b.transformType+" "+b.options.speed+"ms "+b.options.cssEase:"opacity "+b.options.speed+"ms "+b.options.cssEase,b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.autoPlay=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer),a.slideCount>a.options.slidesToShow&&a.paused!==!0&&(a.autoPlayTimer=setInterval(a.autoPlayIterator,a.options.autoplaySpeed))},b.prototype.autoPlayClear=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer)},b.prototype.autoPlayIterator=function(){var a=this;a.options.infinite===!1?1===a.direction?(a.currentSlide+1===a.slideCount-1&&(a.direction=0),a.slideHandler(a.currentSlide+a.options.slidesToScroll)):(0===a.currentSlide-1&&(a.direction=1),a.slideHandler(a.currentSlide-a.options.slidesToScroll)):a.slideHandler(a.currentSlide+a.options.slidesToScroll)},b.prototype.buildArrows=function(){var b=this;b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow=a(b.options.prevArrow),b.$nextArrow=a(b.options.nextArrow),b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.appendTo(b.options.appendArrows),b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.appendTo(b.options.appendArrows),b.options.infinite!==!0&&b.$prevArrow.addClass("slick-disabled"))},b.prototype.buildDots=function(){var c,d,b=this;if(b.options.dots===!0&&b.slideCount>b.options.slidesToShow){for(d='<ul class="'+b.options.dotsClass+'">',c=0;c<=b.getDotCount();c+=1)d+="<li>"+b.options.customPaging.call(this,b,c)+"</li>";d+="</ul>",b.$dots=a(d).appendTo(b.options.appendDots),b.$dots.find("li").first().addClass("slick-active")}},b.prototype.buildOut=function(){var b=this;b.$slides=b.$slider.children(b.options.slide+":not(.slick-cloned)").addClass("slick-slide"),b.slideCount=b.$slides.length,b.$slides.each(function(b,c){a(c).attr("data-slick-index",b)}),b.$slidesCache=b.$slides,b.$slider.addClass("slick-slider"),b.$slideTrack=0===b.slideCount?a('<div class="slick-track"/>').appendTo(b.$slider):b.$slides.wrapAll('<div class="slick-track"/>').parent(),b.$list=b.$slideTrack.wrap('<div class="slick-list"/>').parent(),b.$slideTrack.css("opacity",0),(b.options.centerMode===!0||b.options.swipeToSlide===!0)&&(b.options.slidesToScroll=1),a("img[data-lazy]",b.$slider).not("[src]").addClass("slick-loading"),b.setupInfinite(),b.buildArrows(),b.buildDots(),b.updateDots(),b.options.accessibility===!0&&b.$list.prop("tabIndex",0),b.setSlideClasses("number"==typeof this.currentSlide?this.currentSlide:0),b.options.draggable===!0&&b.$list.addClass("draggable")},b.prototype.checkResponsive=function(b){var d,e,f,c=this,g=c.$slider.width(),h=window.innerWidth||a(window).width();if("window"===c.respondTo?f=h:"slider"===c.respondTo?f=g:"min"===c.respondTo&&(f=Math.min(h,g)),c.originalSettings.responsive&&c.originalSettings.responsive.length>-1&&null!==c.originalSettings.responsive){e=null;for(d in c.breakpoints)c.breakpoints.hasOwnProperty(d)&&(c.originalSettings.mobileFirst===!1?f<c.breakpoints[d]&&(e=c.breakpoints[d]):f>c.breakpoints[d]&&(e=c.breakpoints[d]));null!==e?null!==c.activeBreakpoint?e!==c.activeBreakpoint&&(c.activeBreakpoint=e,"unslick"===c.breakpointSettings[e]?c.unslick():(c.options=a.extend({},c.originalSettings,c.breakpointSettings[e]),b===!0&&(c.currentSlide=c.options.initialSlide),c.refresh())):(c.activeBreakpoint=e,"unslick"===c.breakpointSettings[e]?c.unslick():(c.options=a.extend({},c.originalSettings,c.breakpointSettings[e]),b===!0&&(c.currentSlide=c.options.initialSlide),c.refresh())):null!==c.activeBreakpoint&&(c.activeBreakpoint=null,c.options=c.originalSettings,b===!0&&(c.currentSlide=c.options.initialSlide),c.refresh())}},b.prototype.changeSlide=function(b,c){var f,g,h,d=this,e=a(b.target);switch(e.is("a")&&b.preventDefault(),h=0!==d.slideCount%d.options.slidesToScroll,f=h?0:(d.slideCount-d.currentSlide)%d.options.slidesToScroll,b.data.message){case"previous":g=0===f?d.options.slidesToScroll:d.options.slidesToShow-f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide-g,!1,c);break;case"next":g=0===f?d.options.slidesToScroll:f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide+g,!1,c);break;case"index":var i=0===b.data.index?0:b.data.index||a(b.target).parent().index()*d.options.slidesToScroll;d.slideHandler(d.checkNavigable(i),!1,c);break;default:return}},b.prototype.checkNavigable=function(a){var c,d,b=this;if(c=b.getNavigableIndexes(),d=0,a>c[c.length-1])a=c[c.length-1];else for(var e in c){if(a<c[e]){a=d;break}d=c[e]}return a},b.prototype.clickHandler=function(a){var b=this;b.shouldClick===!1&&(a.stopImmediatePropagation(),a.stopPropagation(),a.preventDefault())},b.prototype.destroy=function(){var b=this;b.autoPlayClear(),b.touchObject={},a(".slick-cloned",b.$slider).remove(),b.$dots&&b.$dots.remove(),b.$prevArrow&&"object"!=typeof b.options.prevArrow&&b.$prevArrow.remove(),b.$nextArrow&&"object"!=typeof b.options.nextArrow&&b.$nextArrow.remove(),b.$slides.removeClass("slick-slide slick-active slick-center slick-visible").removeAttr("data-slick-index").css({position:"",left:"",top:"",zIndex:"",opacity:"",width:""}),b.$slider.removeClass("slick-slider"),b.$slider.removeClass("slick-initialized"),b.$list.off(".slick"),a(window).off(".slick-"+b.instanceUid),a(document).off(".slick-"+b.instanceUid),b.$slider.html(b.$slides)},b.prototype.disableTransition=function(a){var b=this,c={};c[b.transitionType]="",b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.fadeSlide=function(a,b){var c=this;c.cssTransitions===!1?(c.$slides.eq(a).css({zIndex:1e3}),c.$slides.eq(a).animate({opacity:1},c.options.speed,c.options.easing,b)):(c.applyTransition(a),c.$slides.eq(a).css({opacity:1,zIndex:1e3}),b&&setTimeout(function(){c.disableTransition(a),b.call()},c.options.speed))},b.prototype.filterSlides=b.prototype.slickFilter=function(a){var b=this;null!==a&&(b.unload(),b.$slideTrack.children(this.options.slide).detach(),b.$slidesCache.filter(a).appendTo(b.$slideTrack),b.reinit())},b.prototype.getCurrent=b.prototype.slickCurrentSlide=function(){var a=this;return a.currentSlide},b.prototype.getDotCount=function(){var a=this,b=0,c=0,d=0;if(a.options.infinite===!0)d=Math.ceil(a.slideCount/a.options.slidesToScroll);else if(a.options.centerMode===!0)d=a.slideCount;else for(;b<a.slideCount;)++d,b=c+a.options.slidesToShow,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d-1},b.prototype.getLeft=function(a){var c,d,f,b=this,e=0;return b.slideOffset=0,d=b.$slides.first().outerHeight(),b.options.infinite===!0?(b.slideCount>b.options.slidesToShow&&(b.slideOffset=-1*b.slideWidth*b.options.slidesToShow,e=-1*d*b.options.slidesToShow),0!==b.slideCount%b.options.slidesToScroll&&a+b.options.slidesToScroll>b.slideCount&&b.slideCount>b.options.slidesToShow&&(a>b.slideCount?(b.slideOffset=-1*(b.options.slidesToShow-(a-b.slideCount))*b.slideWidth,e=-1*(b.options.slidesToShow-(a-b.slideCount))*d):(b.slideOffset=-1*b.slideCount%b.options.slidesToScroll*b.slideWidth,e=-1*b.slideCount%b.options.slidesToScroll*d))):a+b.options.slidesToShow>b.slideCount&&(b.slideOffset=(a+b.options.slidesToShow-b.slideCount)*b.slideWidth,e=(a+b.options.slidesToShow-b.slideCount)*d),b.slideCount<=b.options.slidesToShow&&(b.slideOffset=0,e=0),b.options.centerMode===!0&&b.options.infinite===!0?b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)-b.slideWidth:b.options.centerMode===!0&&(b.slideOffset=0,b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)),c=b.options.vertical===!1?-1*a*b.slideWidth+b.slideOffset:-1*a*d+e,b.options.variableWidth===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow),c=f[0]?-1*f[0].offsetLeft:0,b.options.centerMode===!0&&(f=b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow+1),c=f[0]?-1*f[0].offsetLeft:0,c+=(b.$list.width()-f.outerWidth())/2)),c},b.prototype.getOption=b.prototype.slickGetOption=function(a){var b=this;return b.options[a]},b.prototype.getNavigableIndexes=function(){var e,a=this,b=0,c=0,d=[];for(a.options.infinite===!1?(e=a.slideCount-a.options.slidesToShow+1,a.options.centerMode===!0&&(e=a.slideCount)):(b=-1*a.slideCount,c=-1*a.slideCount,e=2*a.slideCount);e>b;)d.push(b),b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d},b.prototype.getSlick=function(){return this},b.prototype.getSlideCount=function(){var c,d,e,b=this;return e=b.options.centerMode===!0?b.slideWidth*Math.floor(b.options.slidesToShow/2):0,b.options.swipeToSlide===!0?(b.$slideTrack.find(".slick-slide").each(function(c,f){return f.offsetLeft-e+a(f).outerWidth()/2>-1*b.swipeLeft?(d=f,!1):void 0}),c=Math.abs(a(d).attr("data-slick-index")-b.currentSlide)||1):b.options.slidesToScroll},b.prototype.goTo=b.prototype.slickGoTo=function(a,b){var c=this;c.changeSlide({data:{message:"index",index:parseInt(a)}},b)},b.prototype.init=function(){var b=this;a(b.$slider).hasClass("slick-initialized")||(a(b.$slider).addClass("slick-initialized"),b.buildOut(),b.setProps(),b.startLoad(),b.loadSlider(),b.initializeEvents(),b.updateArrows(),b.updateDots()),b.$slider.trigger("init",[b])},b.prototype.initArrowEvents=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.on("click.slick",{message:"previous"},a.changeSlide),a.$nextArrow.on("click.slick",{message:"next"},a.changeSlide))},b.prototype.initDotEvents=function(){var b=this;b.options.dots===!0&&b.slideCount>b.options.slidesToShow&&a("li",b.$dots).on("click.slick",{message:"index"},b.changeSlide),b.options.dots===!0&&b.options.pauseOnDotsHover===!0&&b.options.autoplay===!0&&a("li",b.$dots).on("mouseenter.slick",function(){b.paused=!0,b.autoPlayClear()}).on("mouseleave.slick",function(){b.paused=!1,b.autoPlay()})},b.prototype.initializeEvents=function(){var b=this;b.initArrowEvents(),b.initDotEvents(),b.$list.on("touchstart.slick mousedown.slick",{action:"start"},b.swipeHandler),b.$list.on("touchmove.slick mousemove.slick",{action:"move"},b.swipeHandler),b.$list.on("touchend.slick mouseup.slick",{action:"end"},b.swipeHandler),b.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},b.swipeHandler),b.$list.on("click.slick",b.clickHandler),b.options.autoplay===!0&&(a(document).on(b.visibilityChange,function(){b.visibility()}),b.options.pauseOnHover===!0&&(b.$list.on("mouseenter.slick",function(){b.paused=!0,b.autoPlayClear()}),b.$list.on("mouseleave.slick",function(){b.paused=!1,b.autoPlay()}))),b.options.accessibility===!0&&b.$list.on("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),a(window).on("orientationchange.slick.slick-"+b.instanceUid,function(){b.checkResponsive(),b.setPosition()}),a(window).on("resize.slick.slick-"+b.instanceUid,function(){a(window).width()!==b.windowWidth&&(clearTimeout(b.windowDelay),b.windowDelay=window.setTimeout(function(){b.windowWidth=a(window).width(),b.checkResponsive(),b.setPosition()},50))}),a("*[draggable!=true]",b.$slideTrack).on("dragstart",function(a){a.preventDefault()}),a(window).on("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).on("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.initUI=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.show(),a.$nextArrow.show()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.show(),a.options.autoplay===!0&&a.autoPlay()},b.prototype.keyHandler=function(a){var b=this;37===a.keyCode&&b.options.accessibility===!0?b.changeSlide({data:{message:"previous"}}):39===a.keyCode&&b.options.accessibility===!0&&b.changeSlide({data:{message:"next"}})},b.prototype.lazyLoad=function(){function g(b){a("img[data-lazy]",b).each(function(){var b=a(this),c=a(this).attr("data-lazy");b.load(function(){b.animate({opacity:1},200)}).css({opacity:0}).attr("src",c).removeAttr("data-lazy").removeClass("slick-loading")})}var c,d,e,f,b=this;b.options.centerMode===!0?b.options.infinite===!0?(e=b.currentSlide+(b.options.slidesToShow/2+1),f=e+b.options.slidesToShow+2):(e=Math.max(0,b.currentSlide-(b.options.slidesToShow/2+1)),f=2+(b.options.slidesToShow/2+1)+b.currentSlide):(e=b.options.infinite?b.options.slidesToShow+b.currentSlide:b.currentSlide,f=e+b.options.slidesToShow,b.options.fade===!0&&(e>0&&e--,f<=b.slideCount&&f++)),c=b.$slider.find(".slick-slide").slice(e,f),g(c),b.slideCount<=b.options.slidesToShow?(d=b.$slider.find(".slick-slide"),g(d)):b.currentSlide>=b.slideCount-b.options.slidesToShow?(d=b.$slider.find(".slick-cloned").slice(0,b.options.slidesToShow),g(d)):0===b.currentSlide&&(d=b.$slider.find(".slick-cloned").slice(-1*b.options.slidesToShow),g(d))},b.prototype.loadSlider=function(){var a=this;a.setPosition(),a.$slideTrack.css({opacity:1}),a.$slider.removeClass("slick-loading"),a.initUI(),"progressive"===a.options.lazyLoad&&a.progressiveLazyLoad()},b.prototype.next=b.prototype.slickNext=function(){var a=this;a.changeSlide({data:{message:"next"}})},b.prototype.pause=b.prototype.slickPause=function(){var a=this;a.autoPlayClear(),a.paused=!0},b.prototype.play=b.prototype.slickPlay=function(){var a=this;a.paused=!1,a.autoPlay()},b.prototype.postSlide=function(a){var b=this;b.$slider.trigger("afterChange",[b,a]),b.animating=!1,b.setPosition(),b.swipeLeft=null,b.options.autoplay===!0&&b.paused===!1&&b.autoPlay()},b.prototype.prev=b.prototype.slickPrev=function(){var a=this;a.changeSlide({data:{message:"previous"}})},b.prototype.progressiveLazyLoad=function(){var c,d,b=this;c=a("img[data-lazy]",b.$slider).length,c>0&&(d=a("img[data-lazy]",b.$slider).first(),d.attr("src",d.attr("data-lazy")).removeClass("slick-loading").load(function(){d.removeAttr("data-lazy"),b.progressiveLazyLoad()}).error(function(){d.removeAttr("data-lazy"),b.progressiveLazyLoad()}))},b.prototype.refresh=function(){var b=this,c=b.currentSlide;b.destroy(),a.extend(b,b.initials),b.init(),b.changeSlide({data:{message:"index",index:c}},!0)},b.prototype.reinit=function(){var b=this;b.$slides=b.$slideTrack.children(b.options.slide).addClass("slick-slide"),b.slideCount=b.$slides.length,b.currentSlide>=b.slideCount&&0!==b.currentSlide&&(b.currentSlide=b.currentSlide-b.options.slidesToScroll),b.slideCount<=b.options.slidesToShow&&(b.currentSlide=0),b.setProps(),b.setupInfinite(),b.buildArrows(),b.updateArrows(),b.initArrowEvents(),b.buildDots(),b.updateDots(),b.initDotEvents(),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),b.setSlideClasses(0),b.setPosition(),b.$slider.trigger("reInit",[b])},b.prototype.removeSlide=b.prototype.slickRemove=function(a,b,c){var d=this;return"boolean"==typeof a?(b=a,a=b===!0?0:d.slideCount-1):a=b===!0?--a:a,d.slideCount<1||0>a||a>d.slideCount-1?!1:(d.unload(),c===!0?d.$slideTrack.children().remove():d.$slideTrack.children(this.options.slide).eq(a).remove(),d.$slides=d.$slideTrack.children(this.options.slide),d.$slideTrack.children(this.options.slide).detach(),d.$slideTrack.append(d.$slides),d.$slidesCache=d.$slides,d.reinit(),void 0)},b.prototype.setCSS=function(a){var d,e,b=this,c={};b.options.rtl===!0&&(a=-a),d="left"==b.positionProp?Math.ceil(a)+"px":"0px",e="top"==b.positionProp?Math.ceil(a)+"px":"0px",c[b.positionProp]=a,b.transformsEnabled===!1?b.$slideTrack.css(c):(c={},b.cssTransitions===!1?(c[b.animType]="translate("+d+", "+e+")",b.$slideTrack.css(c)):(c[b.animType]="translate3d("+d+", "+e+", 0px)",b.$slideTrack.css(c)))},b.prototype.setDimensions=function(){var a=this;if(a.options.vertical===!1?a.options.centerMode===!0&&a.$list.css({padding:"0px "+a.options.centerPadding}):(a.$list.height(a.$slides.first().outerHeight(!0)*a.options.slidesToShow),a.options.centerMode===!0&&a.$list.css({padding:a.options.centerPadding+" 0px"})),a.listWidth=a.$list.width(),a.listHeight=a.$list.height(),a.options.vertical===!1&&a.options.variableWidth===!1)a.slideWidth=Math.ceil(a.listWidth/a.options.slidesToShow),a.$slideTrack.width(Math.ceil(a.slideWidth*a.$slideTrack.children(".slick-slide").length));else if(a.options.variableWidth===!0){var b=0;a.slideWidth=Math.ceil(a.listWidth/a.options.slidesToShow),a.$slideTrack.children(".slick-slide").each(function(){b+=a.listWidth}),a.$slideTrack.width(Math.ceil(b)+1)}else a.slideWidth=Math.ceil(a.listWidth),a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0)*a.$slideTrack.children(".slick-slide").length));var c=a.$slides.first().outerWidth(!0)-a.$slides.first().width();a.options.variableWidth===!1&&a.$slideTrack.children(".slick-slide").width(a.slideWidth-c)},b.prototype.setFade=function(){var c,b=this;b.$slides.each(function(d,e){c=-1*b.slideWidth*d,b.options.rtl===!0?a(e).css({position:"relative",right:c,top:0,zIndex:800,opacity:0}):a(e).css({position:"relative",left:c,top:0,zIndex:800,opacity:0})}),b.$slides.eq(b.currentSlide).css({zIndex:900,opacity:1})},b.prototype.setHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.css("height",b)}},b.prototype.setOption=b.prototype.slickSetOption=function(a,b,c){var d=this;d.options[a]=b,c===!0&&(d.unload(),d.reinit())},b.prototype.setPosition=function(){var a=this;a.setDimensions(),a.setHeight(),a.options.fade===!1?a.setCSS(a.getLeft(a.currentSlide)):a.setFade(),a.$slider.trigger("setPosition",[a])},b.prototype.setProps=function(){var a=this,b=document.body.style;a.positionProp=a.options.vertical===!0?"top":"left","top"===a.positionProp?a.$slider.addClass("slick-vertical"):a.$slider.removeClass("slick-vertical"),(void 0!==b.WebkitTransition||void 0!==b.MozTransition||void 0!==b.msTransition)&&a.options.useCSS===!0&&(a.cssTransitions=!0),void 0!==b.OTransform&&(a.animType="OTransform",a.transformType="-o-transform",a.transitionType="OTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.MozTransform&&(a.animType="MozTransform",a.transformType="-moz-transform",a.transitionType="MozTransition",void 0===b.perspectiveProperty&&void 0===b.MozPerspective&&(a.animType=!1)),void 0!==b.webkitTransform&&(a.animType="webkitTransform",a.transformType="-webkit-transform",a.transitionType="webkitTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.msTransform&&(a.animType="msTransform",a.transformType="-ms-transform",a.transitionType="msTransition",void 0===b.msTransform&&(a.animType=!1)),void 0!==b.transform&&a.animType!==!1&&(a.animType="transform",a.transformType="transform",a.transitionType="transition"),a.transformsEnabled=null!==a.animType&&a.animType!==!1},b.prototype.setSlideClasses=function(a){var c,d,e,f,b=this;b.$slider.find(".slick-slide").removeClass("slick-active").removeClass("slick-center"),d=b.$slider.find(".slick-slide"),b.options.centerMode===!0?(c=Math.floor(b.options.slidesToShow/2),b.options.infinite===!0&&(a>=c&&a<=b.slideCount-1-c?b.$slides.slice(a-c,a+c+1).addClass("slick-active"):(e=b.options.slidesToShow+a,d.slice(e-c+1,e+c+2).addClass("slick-active")),0===a?d.eq(d.length-1-b.options.slidesToShow).addClass("slick-center"):a===b.slideCount-1&&d.eq(b.options.slidesToShow).addClass("slick-center")),b.$slides.eq(a).addClass("slick-center")):a>=0&&a<=b.slideCount-b.options.slidesToShow?b.$slides.slice(a,a+b.options.slidesToShow).addClass("slick-active"):d.length<=b.options.slidesToShow?d.addClass("slick-active"):(f=b.slideCount%b.options.slidesToShow,e=b.options.infinite===!0?b.options.slidesToShow+a:a,b.options.slidesToShow==b.options.slidesToScroll&&b.slideCount-a<b.options.slidesToShow?d.slice(e-(b.options.slidesToShow-f),e+f).addClass("slick-active"):d.slice(e,e+b.options.slidesToShow).addClass("slick-active")),"ondemand"===b.options.lazyLoad&&b.lazyLoad()},b.prototype.setupInfinite=function(){var c,d,e,b=this;if(b.options.fade===!0&&(b.options.centerMode=!1),b.options.infinite===!0&&b.options.fade===!1&&(d=null,b.slideCount>b.options.slidesToShow)){for(e=b.options.centerMode===!0?b.options.slidesToShow+1:b.options.slidesToShow,c=b.slideCount;c>b.slideCount-e;c-=1)d=c-1,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d-b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");for(c=0;e>c;c+=1)d=c,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d+b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");b.$slideTrack.find(".slick-cloned").find("[id]").each(function(){a(this).attr("id","")})}},b.prototype.selectHandler=function(b){var c=this,d=parseInt(a(b.target).parents(".slick-slide").attr("data-slick-index"));return d||(d=0),c.slideCount<=c.options.slidesToShow?(c.$slider.find(".slick-slide").removeClass("slick-active"),c.$slides.eq(d).addClass("slick-active"),c.options.centerMode===!0&&(c.$slider.find(".slick-slide").removeClass("slick-center"),c.$slides.eq(d).addClass("slick-center")),c.asNavFor(d),void 0):(c.slideHandler(d),void 0)},b.prototype.slideHandler=function(a,b,c){var d,e,f,g,h=null,i=this;return b=b||!1,i.animating===!0&&i.options.waitForAnimate===!0||i.options.fade===!0&&i.currentSlide===a||i.slideCount<=i.options.slidesToShow?void 0:(b===!1&&i.asNavFor(a),d=a,h=i.getLeft(d),g=i.getLeft(i.currentSlide),i.currentLeft=null===i.swipeLeft?g:i.swipeLeft,i.options.infinite===!1&&i.options.centerMode===!1&&(0>a||a>i.getDotCount()*i.options.slidesToScroll)?(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d)),void 0):i.options.infinite===!1&&i.options.centerMode===!0&&(0>a||a>i.slideCount-i.options.slidesToScroll)?(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d)),void 0):(i.options.autoplay===!0&&clearInterval(i.autoPlayTimer),e=0>d?0!==i.slideCount%i.options.slidesToScroll?i.slideCount-i.slideCount%i.options.slidesToScroll:i.slideCount+d:d>=i.slideCount?0!==i.slideCount%i.options.slidesToScroll?0:d-i.slideCount:d,i.animating=!0,i.$slider.trigger("beforeChange",[i,i.currentSlide,e]),f=i.currentSlide,i.currentSlide=e,i.setSlideClasses(i.currentSlide),i.updateDots(),i.updateArrows(),i.options.fade===!0?(c!==!0?i.fadeSlide(e,function(){i.postSlide(e)}):i.postSlide(e),i.animateHeight(),void 0):(c!==!0?i.animateSlide(h,function(){i.postSlide(e)}):i.postSlide(e),void 0)))},b.prototype.startLoad=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.hide(),a.$nextArrow.hide()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.hide(),a.$slider.addClass("slick-loading")},b.prototype.swipeDirection=function(){var a,b,c,d,e=this;return a=e.touchObject.startX-e.touchObject.curX,b=e.touchObject.startY-e.touchObject.curY,c=Math.atan2(b,a),d=Math.round(180*c/Math.PI),0>d&&(d=360-Math.abs(d)),45>=d&&d>=0?e.options.rtl===!1?"left":"right":360>=d&&d>=315?e.options.rtl===!1?"left":"right":d>=135&&225>=d?e.options.rtl===!1?"right":"left":"vertical"},b.prototype.swipeEnd=function(){var c,b=this;if(b.dragging=!1,b.shouldClick=b.touchObject.swipeLength>10?!1:!0,void 0===b.touchObject.curX)return!1;if(b.touchObject.edgeHit===!0&&b.$slider.trigger("edge",[b,b.swipeDirection()]),b.touchObject.swipeLength>=b.touchObject.minSwipe)switch(b.swipeDirection()){case"left":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide+b.getSlideCount()):b.currentSlide+b.getSlideCount(),b.slideHandler(c),b.currentDirection=0,b.touchObject={},b.$slider.trigger("swipe",[b,"left"]);break;case"right":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide-b.getSlideCount()):b.currentSlide-b.getSlideCount(),b.slideHandler(c),b.currentDirection=1,b.touchObject={},b.$slider.trigger("swipe",[b,"right"])}else b.touchObject.startX!==b.touchObject.curX&&(b.slideHandler(b.currentSlide),b.touchObject={})},b.prototype.swipeHandler=function(a){var b=this;if(!(b.options.swipe===!1||"ontouchend"in document&&b.options.swipe===!1||b.options.draggable===!1&&-1!==a.type.indexOf("mouse")))switch(b.touchObject.fingerCount=a.originalEvent&&void 0!==a.originalEvent.touches?a.originalEvent.touches.length:1,b.touchObject.minSwipe=b.listWidth/b.options.touchThreshold,a.data.action){case"start":b.swipeStart(a);break;case"move":b.swipeMove(a);break;case"end":b.swipeEnd(a)}},b.prototype.swipeMove=function(a){var d,e,f,g,h,b=this;return h=void 0!==a.originalEvent?a.originalEvent.touches:null,!b.dragging||h&&1!==h.length?!1:(d=b.getLeft(b.currentSlide),b.touchObject.curX=void 0!==h?h[0].pageX:a.clientX,b.touchObject.curY=void 0!==h?h[0].pageY:a.clientY,b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curX-b.touchObject.startX,2))),e=b.swipeDirection(),"vertical"!==e?(void 0!==a.originalEvent&&b.touchObject.swipeLength>4&&a.preventDefault(),g=(b.options.rtl===!1?1:-1)*(b.touchObject.curX>b.touchObject.startX?1:-1),f=b.touchObject.swipeLength,b.touchObject.edgeHit=!1,b.options.infinite===!1&&(0===b.currentSlide&&"right"===e||b.currentSlide>=b.getDotCount()&&"left"===e)&&(f=b.touchObject.swipeLength*b.options.edgeFriction,b.touchObject.edgeHit=!0),b.swipeLeft=b.options.vertical===!1?d+f*g:d+f*(b.$list.height()/b.listWidth)*g,b.options.fade===!0||b.options.touchMove===!1?!1:b.animating===!0?(b.swipeLeft=null,!1):(b.setCSS(b.swipeLeft),void 0)):void 0)},b.prototype.swipeStart=function(a){var c,b=this;return 1!==b.touchObject.fingerCount||b.slideCount<=b.options.slidesToShow?(b.touchObject={},!1):(void 0!==a.originalEvent&&void 0!==a.originalEvent.touches&&(c=a.originalEvent.touches[0]),b.touchObject.startX=b.touchObject.curX=void 0!==c?c.pageX:a.clientX,b.touchObject.startY=b.touchObject.curY=void 0!==c?c.pageY:a.clientY,b.dragging=!0,void 0)},b.prototype.unfilterSlides=b.prototype.slickUnfilter=function(){var a=this;null!==a.$slidesCache&&(a.unload(),a.$slideTrack.children(this.options.slide).detach(),a.$slidesCache.appendTo(a.$slideTrack),a.reinit())},b.prototype.unload=function(){var b=this;a(".slick-cloned",b.$slider).remove(),b.$dots&&b.$dots.remove(),b.$prevArrow&&"object"!=typeof b.options.prevArrow&&b.$prevArrow.remove(),b.$nextArrow&&"object"!=typeof b.options.nextArrow&&b.$nextArrow.remove(),b.$slides.removeClass("slick-slide slick-active slick-visible").css("width","")},b.prototype.unslick=function(){var a=this;a.destroy()},b.prototype.updateArrows=function(){var b,a=this;b=Math.floor(a.options.slidesToShow/2),a.options.arrows===!0&&a.options.infinite!==!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.removeClass("slick-disabled"),a.$nextArrow.removeClass("slick-disabled"),0===a.currentSlide?(a.$prevArrow.addClass("slick-disabled"),a.$nextArrow.removeClass("slick-disabled")):a.currentSlide>=a.slideCount-a.options.slidesToShow&&a.options.centerMode===!1?(a.$nextArrow.addClass("slick-disabled"),a.$prevArrow.removeClass("slick-disabled")):a.currentSlide>=a.slideCount-1&&a.options.centerMode===!0&&(a.$nextArrow.addClass("slick-disabled"),a.$prevArrow.removeClass("slick-disabled")))
},b.prototype.updateDots=function(){var a=this;null!==a.$dots&&(a.$dots.find("li").removeClass("slick-active"),a.$dots.find("li").eq(Math.floor(a.currentSlide/a.options.slidesToScroll)).addClass("slick-active"))},b.prototype.visibility=function(){var a=this;document[a.hidden]?(a.paused=!0,a.autoPlayClear()):(a.paused=!1,a.autoPlay())},a.fn.slick=function(){var g,a=this,c=arguments[0],d=Array.prototype.slice.call(arguments,1),e=a.length,f=0;for(f;e>f;f++)if("object"==typeof c||"undefined"==typeof c?a[f].slick=new b(a[f],c):g=a[f].slick[c].apply(a[f].slick,d),"undefined"!=typeof g)return g;return a},a(function(){a("[data-slick]").slick()})});