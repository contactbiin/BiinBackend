// JavaScript Document

/*----------------------------------------------------*/
/*	Preloader
 /*----------------------------------------------------*/

$(window).load(function () {

    "use strict";
    $('#status').delay(100).fadeOut('slow');
    $('#preloader').delay(500).fadeOut('slow');
    $('body').delay(500).css({'overflow': 'visible'});
});


$(window).load(function () {

    "use strict";

    $(window).stellar({});

});

/*----------------------------------------------------*/
/*	Scroll Navbar
 /*----------------------------------------------------*/
/*$(window).scroll(function () {

    "use strict";

    var b = $(window).scrollTop();

    if (b > 60) {
        $(".navbar").addClass("scroll-fixed-navbar");
    } else {
        $(".navbar").removeClass("scroll-fixed-navbar");
    }

});*/


/*----------------------------------------------------*/
/*	Mobile Menu Toggle
 /*----------------------------------------------------*/
$(document).ready(function () {

    "use strict";

    $('.navbar-nav li a').click(function () {
        $('#navigation-menu').css("height", "1px").removeClass("in").addClass("collapse");
        $('#navigation-menu').removeClass("open");
    });
});


/*----------------------------------------------------*/
/*	Animated Scroll To Anchor
 /*----------------------------------------------------*/
/**
 * Animated Scroll To Anchor v0.3
 * Author: David Vogeleer
 * http://www.individual11.com/
 *
 * THANKS:
 *
 * -> solution for setting the hash without jumping the page -> Lea Verou : http://leaverou.me/2011/05/change-url-hash-without-page-jump/
 * -> Add stop  - Joe Mafia
 * -> add some easing - Daniel Garcia
 * -> added use strict, cleaned up some white space adn added conditional for anchors without hashtag -> Bret Morris, https://github.com/bretmorris
 *
 * TODO:
 * -> Add hashchange support, but make it optional http://leaverou.me/2011/05/get-your-hash-the-bulletproof-way/
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 */

$(document).ready(function () {


    "use strict";
    $.fn.scrollTo = function (options) {

        var settings = {
            offset: -110,       //an integer allowing you to offset the position by a certain number of pixels. Can be negative or positive
            speed: 'slow',   //speed at which the scroll animates
            override: null,  //if you want to override the default way this plugin works, pass in the ID of the element you want to scroll through here
            easing: null //easing equation for the animation. Supports easing plugin as well (http://gsgd.co.uk/sandbox/jquery/easing/)
        };

        if (options) {
            if (options.override) {
                //if they choose to override, make sure the hash is there
                options.override = (override('#') != -1) ? options.override : '#' + options.override;
            }
            $.extend(settings, options);
        }

        return this.each(function (i, el) {
            $(el).click(function (e) {
                var idToLookAt;
                if ($(el).attr('href').match(/#/) !== null) {
                    e.preventDefault();
                    idToLookAt = (settings.override) ? settings.override : $(el).attr('href');//see if the user is forcing an ID they want to use
                    //if the browser supports it, we push the hash into the pushState for better linking later
                    if (history.pushState) {
                        history.pushState(null, null, idToLookAt);
                        $('html,body').stop().animate({scrollTop: $(idToLookAt).offset().top + settings.offset}, settings.speed, settings.easing);
                    } else {
                        //if the browser doesn't support pushState, we set the hash after the animation, which may cause issues if you use offset
                        $('html,body').stop().animate({scrollTop: $(idToLookAt).offset().top + settings.offset}, settings.speed, settings.easing, function (e) {
                            //set the hash of the window for better linking
                            window.location.hash = idToLookAt;
                        });
                    }
                }
            });
        });
    };

    $('#GoToMainContent, #GoToHome, #GoConoceBiin, #GoToAppMovil, #GoToCMS, #GoToFeatures, #GoToPricing, #GoToPricing2, #btnRegistrarme,#GoToNewsletter, #GoToPricing, #GoToContact').scrollTo({ speed: 1400 });

});


/*----------------------------------------------------*/
/*	Current Menu Item
 /*----------------------------------------------------*/
$(document).ready(function () {

    //Bootstraping variable
    headerWrapper = parseInt($('#navigation-menu').height());
    offsetTolerance = 100;

    //Detecting user's scroll
    if($("#intro").length)
        $(window).scroll(function () {

            //Check scroll position
            scrollPosition = parseInt($(this).scrollTop());

            //Move trough each menu and check its position with scroll position then add selected-nav class
            $('.navbar-nav > li > a').each(function () {
                thisHref = $(this).attr('href');
                if (thisHref) {
                    thisTruePosition = parseInt($(thisHref).offset().top);
                    thisPosition = thisTruePosition - headerWrapper - offsetTolerance;

                    if (scrollPosition >= thisPosition) {
                        $('.selected-nav').removeClass('selected-nav');
                        $('.navbar-nav > li > a[href=' + thisHref + ']').addClass('selected-nav');
                    }
                }
            });


            //If we're at the bottom of the page, move pointer to the last section
            bottomPage = parseInt($(document).height()) - parseInt($(window).height());

            if (scrollPosition == bottomPage || scrollPosition >= bottomPage) {

                $('.selected-nav').removeClass('selected-nav');
                $('navbar-nav > li > a:last').addClass('selected-nav');
            }
        });

});


/*----------------------------------------------------*/
/*	Intro Page Slider
 /*----------------------------------------------------*/
$(document).ready(function () {

    "use strict";

    if($("#slides").length>0)
        $("#slides").superslides({
            play: 9000,
            animation: "fade",
            pagination: true
        });

    /*
    $('#slides-forwhoIsBiin').superslides({
        play: 9000,
        animation: "fade",
        pagination: true
    });*/
});


/*----------------------------------------------------*/
/*	Parallax
 /*----------------------------------------------------*/
$(window).bind('load', function () {

    "use strict";
    parallaxInit();

});

function parallaxInit() {
    $('#newsletter').parallax("30%", 0.3);
    $('#features').parallax("30%", 0.3);
    $('#testimonials-rotator').parallax("30%", 0.3);
}


/*----------------------------------------------------*/
/*	Lightbox
 /*----------------------------------------------------*/
$(document).ready(function () {

    "use strict";

    $('.image_zoom').magnificPopup({type: 'image'});

});


/*----------------------------------------------------*/
/*	Flexslider
 /*----------------------------------------------------*/

$(document).ready(function () {

    "use strict";
    if($(".flexslider").length>0)
    $('.flexslider').flexslider({
        animation: "fade",
        controlNav: true,
        directionNav: false,
        slideshowSpeed: 4000,
        animationSpeed: 800,
        start: function (slider) {
            $('body').removeClass('loading');
        }
    });

    if($('.forwhoIsBiin-slider').length>0)
    $('.forwhoIsBiin-slider').flexslider({
        animation: "slide",
        controlNav: true,
        directionNav: true,
        slideshowSpeed: 4000,
        animationSpeed: 800,
        prevText:"",
        nextText:"",
        start: function (slider) {
            $('body').removeClass('loading');
        }
    });
});


/*----------------------------------------------------*/
/*	Newsletter Form Validation
 /*----------------------------------------------------*/

$(document).ready(function () {

    "use strict";

    $("#subscribe-form").validate({
        rules: {
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            email: {
                //required: "We need your email address to contact you",
                required: "Nosostros necesitamoso una dirección de correo electrónica para contactarte.",
                email: "Tu dirección de correo tiene que estar en el siguiente formato nombre@dominio.com"
            }
        }
    });

});


/*----------------------------------------------------*/
/*	Contact Form Validation
 /*----------------------------------------------------*/

$(document).ready(function () {

    "use strict";

    $("#contact-form").validate({
        rules: {
            first_name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            subject: {
                required: true,
                minlength: 4,
                maxlength: 24
            },
            message: {
                required: true,
                minlength: 2
            }
        },
        messages: {
            first_name: {
                required: "Tienes que ingresar al menos 5 letras."
            },
            email: {
                required: "Nosostros necesitamoso una dirección de correo electrónica para contactarte.",
                email: "Tu dirección de correo tiene que estar en el siguiente formato nombre@dominio.com"
            },
            subject: {
                required: "Tienes que ingresar al menos 5 letras."
            },
            message: {
                required: "Tienes que ingresar al menos 5 letras."
            }
        }
    });

});


/*----------------------------------------------------*/
/*	ScrollUp
 /*----------------------------------------------------*/
/**
 * scrollUp v1.1.0
 * Author: Mark Goodyear - http://www.markgoodyear.com
 * Git: https://github.com/markgoodyear/scrollup
 *
 * Copyright 2013 Mark Goodyear
 * Licensed under the MIT license
 * http://www.opensource.org/licenses/mit-license.php
 */

$(document).ready(function () {

    'use strict';

    $.scrollUp = function (options) {

        // Defaults
        var defaults = {
            scrollName: 'scrollUp', // Element ID
            topDistance: 600, // Distance from top before showing element (px)
            topSpeed: 1200, // Speed back to top (ms)
            animation: 'fade', // Fade, slide, none
            animationInSpeed: 200, // Animation in speed (ms)
            animationOutSpeed: 200, // Animation out speed (ms)
            scrollText: '', // Text for element
            scrollImg: false, // Set true to use image
            activeOverlay: false // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        };

        var o = $.extend({}, defaults, options),
            scrollId = '#' + o.scrollName;

        // Create element
        $('<a/>', {
            id: o.scrollName,
            href: '#top',
            title: o.scrollText
        }).appendTo('body');

        // If not using an image display text
        if (!o.scrollImg) {
            $(scrollId).text(o.scrollText);
        }

        // Minium CSS to make the magic happen
        $(scrollId).css({'display': 'none', 'position': 'fixed', 'z-index': '2147483647'});

        // Active point overlay
        if (o.activeOverlay) {
            $("body").append("<div id='" + o.scrollName + "-active'></div>");
            $(scrollId + "-active").css({ 'position': 'absolute', 'top': o.topDistance + 'px', 'width': '100%', 'border-top': '1px dotted ' + o.activeOverlay, 'z-index': '2147483647' });
        }

        // Scroll function
        $(window).scroll(function () {
            switch (o.animation) {
                case "fade":
                    $(($(window).scrollTop() > o.topDistance) ? $(scrollId).fadeIn(o.animationInSpeed) : $(scrollId).fadeOut(o.animationOutSpeed));
                    break;
                case "slide":
                    $(($(window).scrollTop() > o.topDistance) ? $(scrollId).slideDown(o.animationInSpeed) : $(scrollId).slideUp(o.animationOutSpeed));
                    break;
                default:
                    $(($(window).scrollTop() > o.topDistance) ? $(scrollId).show(0) : $(scrollId).hide(0));
            }
        });

        // To the top
        $(scrollId).click(function (event) {
            $('html, body').animate({scrollTop: 0}, o.topSpeed);
            event.preventDefault();
        });

    };

    $.scrollUp();

});

/*----------------------------------------------------*/
/*	Form login cancel click action
 /*----------------------------------------------------*/
$(document).ready(function() {

    //Send Subscription
    $('.subscribe-submit').click(function(e){
        if($('#subscribe-form').valid()){
            var subsEmail = $('.subscribe-input').val();

            $.ajax({
                type: "GET",
                data: {
                    typeEmail  : "NewsLetter",
                    subsEmail : subsEmail
                },
                url: "sendEmail/",
                beforeSend: function(){
                    $('.subscribe-submit').attr("disabled", "true");
                    $('.newsletterFirstText').text("Enviando tu solicitud...");
                    $('.newsletterSecondText').text("Procesando...");
                },
                success: function(){
                    $('.subscribe-submit').removeAttr("disabled");
                    $('.newsletterFirstText').text("Tu correo ha sido agregado exitosamente! muchas gracias!");
                    $('.newsletterSecondText').text("Ahora recibira noticias importantes de Biin en su correo electrónico.");

                    //Clean form
                    $('#subscribe-form').find("input[type=email]").val("");
                },
                error: function(){
                    $('.subscribe-submit').removeAttr("disabled");
                    $('.newsletterFirstText').text("Lo sentimos mucho");
                    $('.newsletterSecondText').text("Ocurrio un error inesperado al tratar de agregar tu email.");
                }
            });

            e.preventDefault();
        }
    });

    $('.btn-contact').click(function(e){
        if($('#contact-form').valid()){
            var name   = $('#name').val();
            var email    = $('#email').val();
            var title   = $('#subject').val();
            var comments = $('#comments').val();

            $.ajax({
                type: "GET",
                data: {
                    typeEmail : "Contact",
                    name      : name,
                    email     : email,
                    title     : title,
                    comments  : comments
                },
                url: "sendEmail/",
                beforeSend: function(){
                    $('.btn-contact').attr("disabled", "true");
                    $('.btn-contact').val("Enviando mensaje...");
                },
                success: function(){
                    $('.btn-contact').removeAttr("disabled");
                    $('.btn-contact').val("Mensaje enviado!");
                    $('.sent-message').text("Hemos recibido su mensaje pronto nos contactaremos con usted.");

                    //Clean form
                    $('#contact-form').find("input[type=text], textarea").val("");
                },
                error: function(){
                    $('.btn-contact').removeAttr("disabled");
                    $('.btn-contact').val("Error al enviar el mensaje");
                }
            });

            e.preventDefault();
        }
    });
});
/*----------------------------------------------------*/
/*  Document Controls
/*----------------------------------------------------*/
$(document).ready(function () {
    //Picker instance
    if($('.selectpicker').length>0)
        $('.selectpicker').selectpicker();

    //Number function
    $('.spinner .btn:first-of-type').on('click', function(e) {
        e.preventDefault();
        $('.spinner input').val( parseInt($('.spinner input').val(), 10) + 1);
    });
    $('.spinner .btn:last-of-type').on('click', function(e) {
        e.preventDefault();
        if(eval($('.spinner input').val())>0)
            $('.spinner input').val( parseInt($('.spinner input').val(), 10) - 1);
    });    

    if($('[isNumber]').length>0){

        $('[isNumber]').on('keypress',function(evt){            
            evt = (evt) ? evt : window.event;
            var charCode = (evt.which) ? evt.which : evt.keyCode;
            if (charCode > 31 && (charCode < 48 || charCode > 57)) {
                return false;
            }
        return true;
        });
    }
});
/*----------------------------------------------------*/
/*  Form pre-register
 /*----------------------------------------------------*/

$(document).ready(function () {

    "use strict";

    $("#pre-registform").validate({
        rules: {
            name: {
                required: true
            },
            company: {
                required: true
            },
            email: {
                required: true,
                minlength: 4,
                maxlength: 24
            },
            country: {
                required: true
            },
            state: {
                required: true
            },
            city: {
                required: true
            },
            zipCodes: {
                required: true
            } ,
            streetAddres: {
                required: true
            } ,
            qty:{
                required: true,
                number: true,
                min: 0
            },
            plan:{
                required:true
            },
            pack:{
                required:true
            }
        },
        messages: {
            name: {
                required: "Ingresa un nombre."
            },
            company: {
                required: "Ingresa una compa&ntilde;&iacute;a."
            },
            email: {
                required: "Ingresa un correo electrónico.",
                email: "Verifica el formato del correcto electr&oacute;nico nombre@dominio.com"
            },            
            phone: {
                required: "Ingresa un n&uacute;mero de tel&eacute;fono."
            },
            country: {
                required: "Ingresa un pa&iacute;s."
            },
            state: {
                required: "Ingresa un estado."
            },
            city: {
                required: "Ingresa una ciudad."
            },
            zipCodes: {
                required: "Ingresa tu zip-code."
            },
           pack:{
              required: "selecciona un packete de Beacons."  
            },            
            plan:{
              required: "selecciona un plan."  
            },
            qty:{
              required: "Ingresa una cantidad."  
            }
        }
    });

    $('#btn-preRegist').click(function(e){
        e.preventDefault();
        if($('#pre-registform').valid()){
            var name   = $('#name').val();
            var company    = $('#company').val();
            var email    = $('#email').val();
            var phone   = $('#phone').val();
            var country = $('#country').val();
            var state = $('#state').val();
            var city = $('#city').val();
            var zipCodes = $('#zipCodes').val();
            var streetAddres = $('#streetAddres').val();
            var plan =$('#plan').val();
            var qty = $('#qty').val();
            var pack = $('#pack').val();

            var msg=" <h1> Pre register Information</h1> "
            msg+="<br/><h2>Package Information</h2>";
            msg+=" <br/> Plan: " +plan;
            msg+=" <br/> Package: " +pack;
            msg+=" <br/> Quantity: " +qty;
            msg+="<br/><h2>Other Contact Information</h2>";
            msg+=" <br/> Phone: " +phone;
            msg+=" <br/> Country: " +country;
            msg+=" <br/> State: " +state;
            msg+=" <br/> City: " +city;
            msg+=" <br/> ZipCodes: " +zipCodes;
            msg+=" <br/> StreetAddres: " +streetAddres;

            //"<b>Nombre</b>: <pre style='font-size: 14px'>" + req.query.name + "</pre>" +
            $.ajax({
                type: "GET",
                data: {
                    typeEmail : "PreRegistrarBiin",
                    name      : name,
                    email     : email,
                    title     : "Pre-registrar Biin",
                    comments  : msg
                },
                url: "/sendEmail/",
                beforeSend: function(){
                    $('#btn-preRegist').attr("disabled", "true");
                    $('#btn-preRegist').val("Procesando...");
                },
                success: function(){
                    $('#btn-preRegist').removeAttr("disabled");
                    $('#btn-preRegist').val("Mensaje enviado!");
                    $('.sent-message').text("Hemos recibido su mensaje pronto nos contactaremos con usted.");
                    $("#pre-registform").find("input[type=text], textarea").val("");
                    $("#preRegister").hide();
                    $("#registerSucced").show();
                },
                error: function(){
                    $('#btn-preRegist').removeAttr("disabled");
                    $('#btn-preRegist').val("Error al enviar el mensaje");
                }
            });
        }
    });

});

/*----------------------------------------------------*/
/*  Form pre-order
 /*----------------------------------------------------*/

$(document).ready(function () {

    "use strict";

    $("#pre-order-form").validate({
        rules: {
            name: {
                required: true
            },
            company: {
                required: true
            },
            email: {
                required: true,
                minlength: 4,
                maxlength: 24
            },
            country: {
                required: true,
                minlength: 2
            },
            state: {
                required: true,
                minlength: 2
            },
            city: {
                required: true,
                minlength: 2
            },
            zipCodes: {
                required: true,
                minlength: 2
            } ,
            streetAddres: {
                required: true,
                minlength: 2
            } ,
            qty:{
                required: true,
                number: true,
                min: 0
            },
            plan:{
                required:true
            },
            pack:{
                required:true
            }
        },
        messages: {
            name: {
                required: "Ingresa un nombre."
            },
            company: {
                required: "Ingresa una compa&ntilde;&iacute;a."
            },
            email: {
                required: "Ingresa un correo electrónico.",
                email: "Verifica el formato del correcto electr&oacute;nico nombre@dominio.com"
            },            
            phone: {
                required: "Ingresa un n&uacute;mero de tel&eacute;fono."
            },
            country: {
                required: "Ingresa un pa&iacute;s."
            },
            state: {
                required: "Ingresa un estado."
            },
            city: {
                required: "Ingresa una ciudad."
            },
            zipCodes: {
                required: "Ingresa tu zip-code."
            },
           pack:{
              required: "selecciona un packete de Beacons."  
            },            
            plan:{
              required: "selecciona un plan."  
            },
            qty:{
              required: "Ingresa una cantidad."  
            }
        }
    });

    $('#btn-preOrder').click(function(e){
        e.preventDefault();
        if($('#pre-order-form').valid()){
            var name   = $('#name').val();
            var company    = $('#company').val();
            var email    = $('#email').val();
            var phone   = $('#pgone').val();
            var country = $('#country').val();
            var state = $('#state').val();
            var city = $('#city').val();
            var zipCodes = $('#zipCodes').val();
            var streetAddres = $('#streetAddres').val();
            var plan =$('#plan').val();
            var qty = $('#qty').val();
            var pack = $('#pack').val();

            var msg=" <h1> Pre Order Information</h1> "
            msg+="<br/><h2>Order Information</h2>";
            msg+=" <br/> Plan: " +plan;
            msg+=" <br/> Package: " +pack;
            msg+=" <br/> Quantity: " +qty;
            msg+="<br/> <h2>Other Contact Information</h2>";
            msg+=" <br/> Phone: " +phone;
            msg+=" <br/> Country: " +country;
            msg+=" <br/> State: " +state;
            msg+=" <br/> City: " +city;
            msg+=" <br/> ZipCodes: " +zipCodes;
            msg+=" <br/> StreetAddres: " +streetAddres;

            $.ajax({
                type: "GET",
                data: {
                    typeEmail : "PreOrderBeacons",
                    name      : name,
                    email     : email,
                    title     : "Beacons Pre-Order",
                    comments  : msg
                },
                url: "/sendEmail/",
                beforeSend: function(){
                    $('#btn-preOrder').attr("disabled", "true");
                    $('#btn-preOrder').val("Procesando...");
                },
                success: function(){
                    $('#btn-preOrder').removeAttr("disabled");
                    $('#btn-preOrder').val("Mensaje enviado!");
                    $('.sent-message').text("Hemos recibido su mensaje pronto nos contactaremos con usted.");
                    $("#pre-order-form").find("input[type=text], textarea").val("");
                    $("#preorder").hide();
                    $("#registerSucced").show();                    
                },
                error: function(){
                    $('#btn-preOrder').removeAttr("disabled");
                    $('#btn-preOrder').val("Error al enviar el mensaje");
                }
            });
        }
    });
    
    $(".validateCheck").on('click',function(){
        if(!this.checked){
            $('.btnEnviar').attr('disabled','disabled');
        }else
          $('.btnEnviar').removeAttr('disabled');
    })
});
