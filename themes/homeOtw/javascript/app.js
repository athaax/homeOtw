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
