const carouselDescription = () => {
    $(".carousel_description ul li").mouseover(function () {
        let currentElement = $(this).attr("data-element");
        let offset =  $(`.carousel_container [data-carousel=${currentElement}]`).offset();
        offset.left -= 20;
        $('.carousel_container').animate({
            scrollLeft: offset.left
        });
        if(currentElement) {
            $(".cr_descriptions [data-description]").hide();
            $(`.cr_descriptions [data-description=${currentElement}]`).show();
            $(`.carousel_container [data-carousel=${currentElement}]`).addClass('active');
        }
    }).mouseleave(function() {
        $(".cr_descriptions [data-description]").hide();
        $(`.carousel_container [data-carousel]`).removeClass('active');
    });

    $(".carousel_img").mouseover(function () {
        let currentElement = $(this).attr("data-carousel");
        if(currentElement) {
            $(".cr_descriptions [data-description]").hide();
            $(`.cr_descriptions [data-description=${currentElement}]`).show();
            $(`.carousel_container [data-carousel=${currentElement}]`).addClass('active');
        }
    }).mouseleave(function() {
        $(".cr_descriptions [data-description]").hide();
        $(`.carousel_container [data-carousel]`).removeClass('active');
    });
}

const validateForm = () => {
    $("#contact_form").on("submit", function () {
        $('.ct_input').each(function(){
            if($(this).val() == ""){
                $(this).closest("div").find('label').css("color","#B90000");
                $(this).closest("div").append("<p class='error_message'>The field is required</p>");
            } else {
                $(this).closest("div").find('label').css("color","rgba(255, 255, 255, 0.87)");
                $(this).closest("div").find('.error_message').remove();
            }
        });

        if($(this).find('.error_message').length == 0) {
            return true;
        } else {
            return false;
        }
    });
}

carouselDescription();
validateForm();

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

$(".scroll_top").on("click", function(){
    $('html, body').animate({
        scrollTop: 0
    }, 500);
});
