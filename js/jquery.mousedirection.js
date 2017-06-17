/**
 * jQuery Mouse Direction Plugin
 * @version: 1.1
 * @author Hasin Hayder [hasin@leevio.com | http://hasin.me]
 */
(function ($) {
    var options = {};
    var oldx = 0;
    var oldy = 0;
    var direction="";
    $.mousedirection = function (opts) {
        var defaults = {
        };
        options = $.extend(defaults, opts);
        $(document).bind("mousemove", function (e) {
            var activeElement = e.target || e.srcElement;
            if (e.pageX > oldx && e.pageY > oldy) {
                direction="bottom-right";
            }
            else if (e.pageX > oldx && e.pageY < oldy) {
                direction="top-right";
            }
            else if (e.pageX < oldx && e.pageY < oldy) {
                direction="top-left";
            }
            else if (e.pageX < oldx && e.pageY > oldy) {
                direction="bottom-left";
            }
            else if (e.pageX > oldx && e.pageY == oldy) {
                direction="right";
            }
            else if (e.pageX == oldx && e.pageY > oldy) {
                direction="down";
            }
            else if (e.pageX == oldx && e.pageY < oldy) {
                direction="up";
            }
            else if (e.pageX < oldx && e.pageY == oldy) {
                direction="left";
            }
            $(activeElement).trigger(direction);
            $(activeElement).trigger({type:"mousedirection",direction:direction});
            oldx=e.pageX;
            oldy=e.pageY;
        });
    }
})(jQuery);