$(document).ready(function () {
    $(".hamburger-menu").on("click", function (e) {
        e.stopPropagation()
        $(".mobile-navigation-drawer").toggleClass("hidden");
        setTimeout(function() {
            $(".mobile-menu-container").toggleClass("open");
        }, 1);
        $("body").toggleClass("no-scroll");
    });

    $(".mobile-navigation-drawer").on("click", function (e) {
        e.stopPropagation()
        if (!$(e.target).closest(".mobile-menu-container").length) {
            $(".mobile-menu-container").removeClass("open"); 
            setTimeout(function() {
                $(".mobile-navigation-drawer").removeClass("hidden");
            }, 200);
            $("body").removeClass("no-scroll");
        }
    });


function updateIndicators() {
    var activeIndex = $('.slider-inner section').index($('.slider-inner section.active'));
    $('.slider-indicator').removeClass('slider-indicator-active');
    $('.slider-indicator').eq(activeIndex).addClass('slider-indicator-active');
}

function goToNextSlide() {
    const currentSlide = $('.slider-inner section.active');
    let nextSlide = currentSlide.next('section');

    if (!nextSlide.length) {
        nextSlide = $('.slider-inner section:first');
    }

    currentSlide.removeClass('active');
    nextSlide.addClass('active');
    updateIndicators();
}

function goToPrevSlide() {
    const currentSlide = $('.slider-inner section.active');
    let prevSlide = currentSlide.prev('section');

    if (!prevSlide.length) {
        prevSlide = $('.slider-inner section:last');
    }

    currentSlide.removeClass('active');
    prevSlide.addClass('active');
    updateIndicators();
}

let autoSlideInterval = setInterval(goToNextSlide, 5000);

$('.next').on('click', function () {
    clearInterval(autoSlideInterval); 
    goToNextSlide();
    autoSlideInterval = setInterval(goToNextSlide, 5000); 
});

$('.prev').on('click', function () {
    clearInterval(autoSlideInterval); 
    goToPrevSlide();
    autoSlideInterval = setInterval(goToNextSlide, 5000);
});



    $("#my-form").on("submit", function (event) {
        event.preventDefault();

        const firstName = $("#first-name").val().trim();
        const lastName = $("#last-name").val().trim();
        const isChecked = $("#agree").is(":checked");

        if (!firstName || !lastName) {
            alert("Both First Name and Last Name are required.");
            return;
        }

        if (!isChecked) {
            alert("You must consent to the collection and use of your information.");
            return;
        }

        alert("Form submitted successfully!");
    });
    
    $(".thumbnail-image").click(function () {
        const imageUrl = $(this).attr("src");
        $("#large-image").attr("src", imageUrl); 
        $("#image-viewer").addClass("active");
        $("body").toggleClass("no-scroll");
      });
    
      $(".close").click(function () {
        $("#image-viewer").removeClass("active"); 
        $("body").removeClass("no-scroll");
      });
    
      $("#image-viewer").click(function (e) {
        if (e.target.id === "image-viewer") {
          $(this).removeClass("active");
          $("body").removeClass("no-scroll");
        }
      });
      
      $(".read-more-btn").click(function () {
        const button = $(this);
        const article = button.closest(".article-container");
        const truncated = article.find(".truncated-text");
        const full = article.find(".full-text");
        const moreContent = article.find(".more-content");
    

        if (button.text() === "Read More") {
            truncated.hide();
            full.fadeIn(50); 
            moreContent.fadeIn(50);
            button.text("Read Less");
        } else {
            moreContent.fadeOut(50, function () {
                full.fadeOut(50, function () {
                    truncated.fadeIn(50);
                });
            });
            button.text("Read More");
        }
    });
    
});
