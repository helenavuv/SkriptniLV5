var classes = new Array("one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeem", "eighteen", "nineteen", "twenty", "twentyone", "twentytwo", "twentythree", "twentyfour");

$(document).ready(function () {
    var margin = 2;
    var $el;
    var oldPos = 0;
    var newPos = 0;
    var dragging = false;

    var selectionHeight = $('.list_container .list_item').height() + parseInt($('.list_container .list_item').css("border-bottom-width")) + parseInt($('.list_container .list_item').css("border-top-width")) + margin;

    var classInfo = '';

    $('.list_container .list_item').each(function (index) {
        $(this).addClass(classes[index]);
        classInfo += '.' + classes[index] + ' {top: ' + index * selectionHeight + 'px;}\n';
    });

    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = classInfo;
    document.getElementsByTagName('head')[0].appendChild(style);

    $('.list_item').mousedown(function (ev) {
        $el = $(this);
        oldPos = $el.index() + 1;
        newPos = oldPos;
        dragging = true;
        startY = ev.clientY;
        startT = parseInt($el.css('top'));
        $el.addClass('selected');
    });

    $(window).mousemove(function (ev) {
        if (dragging) {
            $el.attr('class', 'list_item')
            $el.addClass('selected');

            // ----- calculate new top
            var newTop = startT + (ev.clientY - startY);
            $el.css('cursor', 'pointer');
            // ------
            
            //------ stay in parent
            var maxTop = $el.parent().height() - $el.height();
            newTop = newTop < 0 ? 0 : newTop > maxTop ? maxTop : newTop;
            $el.css('top', newTop);
            //------

            newPos = getPos(newTop, selectionHeight);

            if (oldPos != newPos) {
                moveThings(oldPos, newPos, selectionHeight);
                oldPos = newPos;
            }
        }
    }).mouseup(function () {
        dragging = false;
        $el.removeClass('selected');
        setNewClass($el, newPos);
        $el.css('top', (newPos - 1) * selectionHeight);
    });
});

function getPos(a, b) { // a == topPos, b == selectionHeight
    return Math.round((a / b) + 1);
}

function moveThings(a, b, c) { // a == oldPos, b == newPos, c == selectedHeight
    var first = classes[b - 1];
    var $newEl = $('.list_container .' + first);

    if (a < b) { // oldPos less than newPos
        var second = classes[b - 2];
        var newTop = parseInt($newEl.css('top')) - c;
    } else { // oldPos more than newPos
        var second = classes[b];
        var newTop = parseInt($newEl.css('top')) + c;
    }

    $newEl.css('top', parseInt($newEl.css('top')));
    $newEl.removeClass(first);
    $newEl.animate({
        top: newTop
    }, 300, function () {
        $newEl.removeAttr('style');
    });
    $newEl.addClass(second);
    
    return false; // Cleans up animations
}

function setNewClass(e, a) { // e == selected element, a == newPos
    e.attr('class', 'list_item').addClass(classes[a - 1]);
}