

$(window).resize(function () {
    adaptive_function()
})
function adaptive_header(w, h) {
    let headerMenu = $('.header-menu')
    let headerContacts = $('.header-top-lang')
    if (w < 767) {
        if (!headerContacts.hasClass('done')) {
            headerContacts.addClass('done').appendTo(headerMenu)
        }
    } else {
        if (headerContacts.hasClass('done')) {
            headerContacts.removeClass('done').prependTo($('.header-top'))
        }
    }
    if (w < 767) {
        if (!$('.header-bottom-menu').hasClass('done')) {
            $('.header-bottom-menu').addClass('done').appendTo(headerMenu)
        }
    } else {
        $.each($('.header-bottom-menu'), function (index,val) {
            if ($(this).hasClass('right')) {
                if ($(this).hasClass('done')) {
                    $(this).removeClass('done').prependTo($('.header-bottom__column').eq(2))
                }
            }else{
                if ($(this).hasClass('done')) {
                    $(this).removeClass('done').prependTo($('.header-bottom__column').eq(0))
                }
            }
        })
        
    }
}

function adaptive_function() {
    var w = $(window).outerWidth()
    var h = $(window).outerHeight()
    adaptive_header(w, h)
}
adaptive_function()

$('.header-menu__icon').click(function () {
    $(this).toggleClass('active');
    $('.header-menu').toggleClass('active');
    if ($(this).hasClass('active')) {
        $('body').data('scroll',$(window).scrollTop())
    }
    $('body').toggleClass('lock');
    if (!$(this).hasClass('active')) {
        $('body, html').scrollTop(parseInt($('body').data('scroll')))
    }
})


let arr = document.querySelectorAll('.menu-link');
console.log(arr);

arr.forEach(item => {
    item.onclick = () => {
        // Remove 'active-lang' class from all items
        arr.forEach(i => i.classList.remove('active'));
        // Add 'active-lang' class to the clicked item
        item.classList.add('active');
    }
});

function ibg() {
    $.each($('.ibg'), function (index, val) {
        if ($(this).find('img').length > 0) {
            $(this).css('background-image', 'url("'+ $(this).find('img').attr('src') + '")')
        }
    })
}
ibg();

//ZOOM
if ($('.gallery').length>0) {
    baguetteBox.run('.gallery',{

    })
}

//FILTER

$('.filter-item').click(function () {
    var i = $(this).data('filter')
    if (i == 1) {
        $('.portfolio__column').show()
    }else{
        $('.portfolio__column').hide()
        $('.portfolio__column.f_'+i).show()
    }

    $('.filter-item').removeClass('active')
    $(this).addClass('active')
    return false
})


$('.goto').click(function () {
	var el = $(this).attr('href').replace('#', '');
	var offset = 0;
	$('body,html').animate({ scrollTop: $('.' + el).offset().top + offset }, 500, function () { });

	if ($('.menu__body').hasClass('active')) {
		$('.menu__body,.icon-menu').removeClass('active');
		$('body').removeClass('lock');
	}
	return false;
});


$(window).scroll(function (params) {
    var s = $(this).scrollTop()/2
    $('.mainblock__image').css('transform','tanslate3d(0,'+s+'px,0)')
})