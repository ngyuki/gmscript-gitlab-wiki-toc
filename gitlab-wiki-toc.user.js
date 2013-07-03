// ==UserScript==
// @name        GitLab Wiki TOC
// @namespace   http://ngyuki.net/
// @include     http://demo.gitlab.com/*/wikis/*
// @version     0.0.1
// @grant       none
// ==/UserScript==

(function(d, func){
    var h = d.getElementsByTagName('head')[0];
    var s1 = d.createElement('script');
    s1.setAttribute('src', '//ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min.js');
    s1.addEventListener('load', function(){
        var s2 = d.createElement('script');
        s2.textContent = '(' + func.toString() + ')(jQuery.noConflict(true));';
        h.appendChild(s2);
    }, false);
    h.appendChild(s1);
})(document, function($){
    console.log("userscript gitlab wiki toc: jquery " + $().jquery);

    $(document).on('ready page:load', function(){

        var $container = $('.wiki');

        if ($container.size() === 0)
        {
            return;
        }

        var $box = $('<div style="float:right; margin:0; background-color:#eef; border:1px solid #000; border-radius:8px; opacity:0.8">');
        var $anc = $('<a href="#" style="float:right; display:block; text-decoration:none; text-align:center; width:16px; height:16px; line-height:16px">+</a>');
        var $toc = $('<div style="margin:0 20px 0 10px; padding:10px 0 10px 0">');

        $box.append($anc).append($toc).prependTo($container);

        var $elem = $toc;
        var prev = 0;

        $('h1,h2,h3', $container).each(function(){

            var $htag = $(this);
            var level = { h1:1, h2:2, h3:3 }[this.tagName.toLowerCase()];

            for (; prev < level; prev++)
            {
                $elem = $('<ul style="margin:0 0 0 10px !important; padding:0 !important">').appendTo($elem);
            }

            for (; prev > level; prev--)
            {
                $elem = $elem.parent();
            }

            $('<a href="#" style="text-decoration:none">')
                .appendTo('<li style="margin:0 0 5px 0 !important; padding:0 !important; list-style-position:inside; max-width:400px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap">')
                .text($htag.text())
                .click(function(){
                    var pos = $htag.position().top;
                    $('html,body').animate({scrollTop:pos}, 'fast');
                    $htag
                        .delay(200)
                        .animate({opacity:0}, 'fast')
                        .animate({opacity:1}, 'fast')
                        .animate({opacity:0}, 'fast')
                        .animate({opacity:1}, 'fast')
                    ;
                    return false;
                })
                .parent().appendTo($elem)
            ;
        });

        var key = 'ngyuki.wiki.toc';

        $anc.click(function(){
            if (localStorage[key] === '-')
            {
                localStorage[key] = '+';
                $anc.text('+');
                $toc.slideDown('fast');
            }
            else
            {
                localStorage[key] = '-';
                $anc.text('-');
                $toc.slideUp('fast');
            }
            return false;
        });

        if (localStorage[key] === "-")
        {
            $anc.text('-');
            $toc.hide();
        }
    })
})
