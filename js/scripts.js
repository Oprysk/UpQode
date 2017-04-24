var dropDownSelector = $('#second-level');
var activeLink = $('li a.second-dropdown');

$('.second-dropdown').hover(                               //menu-dropDown
    function(){
        dropDownSelector.css('display','block');
        activeLink.css('color', '#fff200');
    },
    function(){
        dropDownSelector.css('display', 'none');
        activeLink.css('color', '#000');
    });


$(window).on('scroll', function() {                  //activation menu links by scrolling
    var yScrollPos = window.pageYOffset +150;
    var scrollPosAbout = $('#about-us').offset().top;
    var scrollPosContact = $('#contact').offset().top;
    var scrollPosProduct = $('#products').offset().top;
    var activeSelector = $('#bs-example-navbar-collapse-1 li');

    if(yScrollPos >= scrollPosProduct && yScrollPos < scrollPosAbout) {
        activeSelector.removeClass('active');
        $('li.products').addClass('active');
    }
    else if(yScrollPos >= scrollPosAbout && yScrollPos < scrollPosContact) {
        activeSelector.removeClass('active');
        $('li.about-us').addClass('active');
        startProgress();
    }
    else if(yScrollPos >= scrollPosContact) {
        activeSelector.removeClass('active');
        $('li.contact').addClass('active');
    }
    else {
        activeSelector.removeClass('active');
        $('li.home').addClass('active');
    }
});




function scrollTo(e) {                          // scroll to element with simple animation
    var idPage = $(e).attr('data-id');
    idPage = '#' + idPage;
    $('html, body').animate({
        scrollTop: $(idPage).offset().top
    }, 1000);
}


var skillsLoad = false;    // this variable is set to function progress-bar operate one times

function progress(percent, element) {                // load progress-bar
    var progressBarWidth = percent * element.width() / 100;

    element.find('.loading').animate({ width: progressBarWidth }, 500);
    element.find('.interest').html(percent + "%");

}

function startProgress() {       // start load progress-bar

    if( skillsLoad == false) {
    progress(79, $('.photoshop-skill'));
    progress(90, $('.html-css-skill'));
    progress(69, $('.javascript-skill'));
    progress(92, $('.wordpress-skill'));
    skillsLoad = true;
    }
}
