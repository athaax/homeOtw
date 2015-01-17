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

var $tiles = $(".flippy").liveTile({ 
    playOnHover:true,
    repeatCount: 0,
    delay: 0,
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

