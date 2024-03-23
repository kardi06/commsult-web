<!DOCTYPE html>
<html dir="ltr" lang="de-DE">

<head>

    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <meta name="description" content="Moblile Computer." />
    <meta name="author" content="commsult AG" />

    <meta property="og:title" content="Mobile Hardware" />
    <meta property="og:image" content="//https://ontego.de/images/commsult/content/A.1.3/A.1.3_02_Hardware_Finder_og.jpg" />
    <meta property="og:description" content="Many Type of mobile Phone." />

    <!-- Stylesheets
	============================================= -->
    
        <link rel="stylesheet" href="https://use.typekit.net/wqu6vcr.css">
        <link rel="stylesheet" href="{{url('css/bootstrap.css')}}" type="text/css" />
        {{-- <link rel="stylesheet" href="../style.css" type="text/css" /> --}}
        {{-- <link rel="stylesheet" href="{{url('css/canvas.css')}}" type="text/css" /> --}}
        <link rel="stylesheet" href="{{url('css/tes/basic.css')}}" type="text/css" />
        <link rel="stylesheet" href="{{url('css/swiper.css')}}" type="text/css" />
        <link rel="stylesheet" href="{{url('css/dark.css')}}" type="text/css" />
        <link rel="stylesheet" href="{{url('css/font-icons.css')}}" type="text/css" />
        <link rel="stylesheet" href="{{url('css/fonts.css')}}" type="text/css" />
        <link rel="stylesheet" href="{{url('css/animate.css')}}" type="text/css" />
        <link rel="stylesheet" href="{{url('css/magnific-popup.css')}}" type="text/css" />
        
        <link rel="stylesheet" href="{{url('css/tes/responsive.css')}}" type="text/css" />
         <!-- Range Slider CSS -->
         <link rel="stylesheet" href="{{url('css/ion.rangeslider.css')}}" type="text/css" />


        <link rel="stylesheet" href="{{url('css/tes/style_web.css')}}" type="text/css" />
        <link rel="stylesheet" href="{{url('css/tes/commsult.css')}}" type="text/css" />

    
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="{{asset('images/icon.ico')}}" />

    <!-- Document Title
	============================================= -->
    <!-- <title>Ontego Business Mobility</title> -->
    <title>Ontego Hardware Finder</title>

</head>
<body class="stretched" data-loader-html="<div class='cs-page-loader'></div>">
      <!-- Document Wrapper
	============================================= -->
    <div id="wrapper" class="clearfix">
        <!-- Header
		============================================= -->
                            <!-- Header
        ============================================= -->
        @include('part.header')
        <!-- #End Header -->
        
        <!-- Content
		============================================= -->
        <section id="content">
            <div class="content-wrap">
                <!-- Hero Image
				============================================= -->
                <div class="cs-page-title-1 cs-section" style="margin-top: 60px; margin-bottom: 0px;">
                    <div class="container clearfix">
                        <div class="row cs-row-title" style="margin-bottom: 0px;">
                            <div class="cs-col-txt col-md-7">
                                <div class="cs-text-wrapper">
                                    <h1>How do I find the <u>best mobile</u> <u>devices </u> for my employees?
                                    </h1>
                                </div>
                            </div>
                            <div class="cs-col-img offset-sm-4 col-sm-8">
                                <div class="cs-img" style="background-image: url('{{asset("images/hero-image.jpg")}}');">
                                </div>
                            </div>
                        </div>
                        <div class="row cs-row-p">
                            <div class="col-lg-8 offset-lg-2">
                                <p class="cs-body-1">
                                    Mobile applications are part of everyday life in companies today: in production, in warehouse logistics, maintenance or delivery. We give you an overview of mobile hardware from handheld computer to mobile scanners, forklift terminals and tablets to robust smartphones and mobile printers.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End Hero -->

                <!-- Product
				============================================= -->
                @include('part.product')
                <!-- End Product -->

                <!-- Contact Overlay
                ============================================= -->
                @include('part.overlay.contact')
                <!-- End Contact Overlay -->

                <!-- Impressum Overlay
                ============================================= -->
                @include('part.overlay.impresum')
                <!-- End Impressum Overlay -->

                <!-- Data Protection Overlay
                ============================================= -->
                @include('part.overlay.data')
                <!-- End Data Protection Overlay -->

                 <!-- Pop Up
				============================================= -->
                <div class="cs-popup">
                    <i class="icon-line-cross cs-hide-animate-1" onclick="closePopUp()"></i>
                    <div class="cs-icon-wrapper center" data-animate="flipInY">
                        <div style="height: 22px; width: 28px; background-image: url('../images/commsult/graphic/check_white.svg'); background-size: contain; background-repeat: no-repeat; background-position: center; display: inline-block;">
                        </div>
                    </div>
                    <h3 class="cs-hide-animate-2">Vielen für Ihr Interesse, Sie hören von uns.</h3>
                    <h3 class="cs-hide-animate-1">Möchten Sie über neue Geräte sofort informiert werden?</h3>
                    <p class="cs-body-2 cs-hide-animate-1">Wir schicken Ihnen gerne die wichtigsten Updates aus unserem
                        Hardware Finder.</p>
                    <div id="popupInput1" class="cs-form-field-group cs-form-field-white-input cs-hide-animate-1">
                        <input type="email" placeholder="Email *" autocomplete="false" />
                        <div class="cs-button cs-button-arrow cs-button-white cs-button-disabled">Abschicken</div>
                    </div>
                    <br />
                    <div id="popupInput2" class="cs-form-field-group cs-form-field-white-input cs-hide-animate-1">
                        <label class="cs-checkbox-container">Ich bin einverstanden, nur für Updates dieser Seite
                            kontaktiert zu werden.
                            <input type="checkbox">
                            <span class="cs-checkmark"></span>
                        </label>
                    </div>
                    <input id="popupInput3" type="hidden" value="hardware_finder" />
                </div>
                <!--  Pop Up End -->
            </div>
        </section>

        <!-- Footer
		============================================= -->
        @include('part.footer')
        <!-- End Footer -->
    </div>
    <!-- End Wrapper -->

    <!-- Go To Top
	============================================= -->
    <div id="gotoTop" class="icon-angle-up"></div>
    <!-- End Go To Top -->

    <!-- External JavaScripts
    ============================================= -->
    {{-- <script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script> --}}
    <script src="{{url('js/jquery.js')}}"></script>
    <script src="{{url('js/plugins.js')}}"></script>
    <script src="{{url('js/tes/ics.deps.min.js')}}"></script>
    <script src="{{url('js/tes/ics.min.js')}}"></script>

    <!-- Range Slider Plugin -->
    <script src="{{url('js/rangeslider.min.js')}}"></script>
    <script src="{{url('js/moment.js')}}"></script>

    <!-- Footer Scripts
    ============================================= -->
    <script src="{{url('js/functions.js')}}"></script>

    <!-- Other Scripts
    ============================================= -->
    <script src="{{url('js/tes/commsult.js')}}"></script>

    <script>
        recursiveSelector = (elementStack, index, csAndClasses, selectorArray) => {
            if (index === csAndClasses.length) {
                selectorArray.push(elementStack);
            } else {
                csAndClasses[index].forEach(function(element) {
                    recursiveSelector(elementStack + element, index + 1, csAndClasses, selectorArray)
                });
            }
        }
        closeExpandedItem = () => {
            var currentTop = parseInt($('.cs-expand-detail').css("top"), 10);
            var currentDetailHeight = parseInt($('.cs-expand-detail').find(".cs-item-detail").css("height"), 10);
            var containerHeight = parseInt($('.cs-hfinder-container').css("height"), 10);
            $('.cs-expand-detail').find(".cs-item-detail").css({
                "opacity": 0
            });
            $('.cs-expand-detail').find(".icon-line-cross").css({
                "opacity": 0
            });
            setTimeout(function() {
                $('.cs-hfinder-container > [class*="col-"]').addClass('cs-transition-top');
                $('.cs-expand-detail').removeClass("cs-expand-detail");
                $('.cs-hfinder-container > [class*="col-"]').each(function() {
                    var itemTop = parseInt($(this).css("top"), 10);
                    if (itemTop > currentTop) {
                        $(this).css({
                            "top": itemTop - currentDetailHeight
                        });
                    }
                });
                $('.cs-hfinder-container').css({
                    "height": containerHeight - currentDetailHeight
                });
                setTimeout(function() {
                    $('.cs-hfinder-container > [class*="col-"]').removeClass('cs-transition-top');
                }, 400);
            }, 400);
        }
        $(function() {
            $('.cs-hfinder-container > [class*="col-"]').click(function() {
                if ($('.cs-expand-detail').length > 0) {
                    if (!$(this).hasClass("cs-expand-detail")) {
                        closeExpandedItem();
                        var that = this;
                        setTimeout(function() {
                            $(that).addClass("cs-expand-detail");
                            $('.cs-hfinder-container > [class*="col-"]').addClass('cs-transition-top');
                            var currentLeft = parseInt($(that).position().left, 10);
                            var currentWidth = parseInt($(that).css("width"), 10);
                            $(that).find(".cs-item-detail").css({
                                "left": (currentLeft * -1)
                            });
                            $(that).find(".icon-line-cross").css({
                                "left": (currentWidth * 4) - 30 - currentLeft
                            });
                            var currentTop = parseInt($(that).css("top"), 10);
                            var currentDetailHeight = parseInt($(that).find(".cs-item-detail").css(
                                "height"), 10);
                            var containerHeight = parseInt($('.cs-hfinder-container').css("height"),
                                10);
                            $('.cs-hfinder-container > [class*="col-"]').each(function() {
                                var itemTop = parseInt($(this).css("top"), 10);
                                if (itemTop > currentTop) {
                                    $(this).css({
                                        "top": itemTop + currentDetailHeight
                                    });
                                }
                            });
                            $('.cs-hfinder-container').css({
                                "height": containerHeight + currentDetailHeight
                            });
                            setTimeout(function() {
                                $(that).find(".cs-item-detail").css({
                                    "opacity": 1
                                });
                                $(that).find(".icon-line-cross").css({
                                    "opacity": 1
                                });
                                $('.cs-hfinder-container > [class*="col-"]').removeClass(
                                    'cs-transition-top');
                            }, 400);
                        }, 1000);
                    }
                } else {
                    if (!$(this).hasClass("cs-expand-detail")) {
                        $(this).addClass("cs-expand-detail");
                        $('.cs-hfinder-container > [class*="col-"]').addClass('cs-transition-top');
                        var currentLeft = parseInt($(this).position().left, 10);
                        var currentWidth = parseInt($(this).css("width"), 10);
                        $(this).find(".cs-item-detail").css({
                            "left": (currentLeft * -1)
                        });
                        $(this).find(".icon-line-cross").css({
                            "left": (currentWidth * 4) - 30 - currentLeft
                        });
                        var currentTop = parseInt($(this).css("top"), 10);
                        var currentDetailHeight = parseInt($(this).find(".cs-item-detail").css("height"), 10);
                        var containerHeight = parseInt($('.cs-hfinder-container').css("height"), 10);
                        $('.cs-hfinder-container > [class*="col-"]').each(function() {
                            var itemTop = parseInt($(this).css("top"), 10);
                            if (itemTop > currentTop) {
                                $(this).css({
                                    "top": itemTop + currentDetailHeight
                                });
                            }
                        });
                        $('.cs-hfinder-container').css({
                            "height": containerHeight + currentDetailHeight
                        });
                        var that = this;
                        setTimeout(function() {
                            $(that).find(".cs-item-detail").css({
                                "opacity": 1
                            });
                            $(that).find(".icon-line-cross").css({
                                "opacity": 1
                            });
                            $('.cs-hfinder-container > [class*="col-"]').removeClass(
                                'cs-transition-top');
                        }, 400);
                    }
                }
            });
            $("#cs-reset-button").click(function() {
                var elementContainer = $(this).parent().parent().parent().parent().parent().parent().parent()
                    .find('.cs-hfinder-container');
                $(this).parent().parent().parent().parent().parent().parent().parent().find(
                    'input[type=checkbox]').each(function() {
                    $(this).parent().eq(0).removeClass('disabled');
                    $(this).prop('checked', false);
                });
                $('#cs-a-alle').prop('checked', true);
                $(".range_01").data("ionRangeSlider").reset();
                $(".range_02").data("ionRangeSlider").reset();
                var rangeValue1 = $(this).parent().parent().parent().parent().parent().parent().parent().find(
                    'input.range_01').val();
                var rangeValue1Array = rangeValue1.split(';');
                var rangeValue2 = $(this).parent().parent().parent().parent().parent().parent().parent().find(
                    'input.range_02').val();
                var rangeValue2Array = rangeValue2.split(';');
                if ($('.cs-expand-detail').length > 0) {
                    $('.cs-expand-detail').find(".cs-item-detail").css({
                        "opacity": 0
                    });
                    $('.cs-expand-detail').find(".icon-line-cross").css({
                        "opacity": 0
                    });
                    setTimeout(function() {
                        $('.cs-expand-detail').removeClass("cs-expand-detail");
                    }, 400);
                }
                elementContainer.isotope({
                    filter: function() {
                        var price = $(this).attr('cs-data-price');

                        return (
                            true &&
                            parseInt(price, 10) >= parseInt(rangeValue1Array[0], 10) &&
                            parseInt(price, 10) <= parseInt(rangeValue1Array[1], 10)
                        );
                    }
                });
            });
            $("#cs-expand-button").click(function() {
                if (window.csFilterExpanded) {
                    window.csFilterExpanded = false;
                    $('.cs-hfinder-filter-row-toogle-fade').animate({
                        "opacity": 0
                    }, 200, () => {
                        $('#cs-hfinder-expandable').css({
                            "max-height": csFilterCollapsedHeight
                        });
                        setTimeout(function() {
                            $('.cs-hfinder-filter-row-toogle').addClass(
                                "cs-hfinder-filter-row-toogle-inactive");
                            $("#cs-expand-button").html('Mehr Filter anzeigen');
                            $('.cs-hfinder-filter-row-toogle-fade').animate({
                                "opacity": 1
                            }, 400);
                        }, 360);
                    });
                } else {
                    window.csFilterExpanded = true;
                    $('.cs-hfinder-filter-row-toogle-fade').animate({
                        "opacity": 0
                    }, 200, () => {
                        $('.cs-hfinder-filter-row-toogle').removeClass(
                            "cs-hfinder-filter-row-toogle-inactive");
                        $('#cs-hfinder-expandable').css({
                            "max-height": 1000
                        });
                        $("#cs-expand-button").html('Filter ausblenden');
                        $('.cs-hfinder-filter-row-toogle-fade').animate({
                            "opacity": 1
                        }, 400);
                    });
                }
            });
            $(".cs-hfinder input").change(function() {
                if ($(this).attr('cs-data-filter') === '.cs-a-alle' && $(this).prop('checked')) {
                    $('#cs-a-favoriten').prop('checked', false);
                    $('#cs-a-mietgeräte').prop('checked', false);
                } else if ($(this).attr('cs-data-filter') === '.cs-a-alle' && !$(this).prop('checked')) {
                    $('#cs-a-alle').prop('checked', true);
                } else if (($(this).attr('cs-data-filter') === '.cs-a-favoriten' || $(this).attr(
                        'cs-data-filter') === '.cs-a-mietgeräte') && $(this).prop('checked')) {
                    $('#cs-a-alle').prop('checked', false);
                } else if ($(this).attr('cs-data-filter') === '.cs-a-favoriten' && !$(this).prop('checked') && !
                    $('#cs-a-mietgeräte').prop('checked')) {
                    $('#cs-a-alle').prop('checked', true);
                } else if ($(this).attr('cs-data-filter') === '.cs-a-mietgeräte' && !$(this).prop('checked') &&
                    !$('#cs-a-favoriten').prop('checked')) {
                    $('#cs-a-alle').prop('checked', true);
                }
                var elementContainer = $(this).parent().parent().parent().parent().parent().parent().parent()
                    .find('.cs-hfinder-container');
                var csAndClasses = [];
                $(this).parent().parent().parent().parent().parent().find('.cs-hfinder-filter-row').each(
                    function() {
                        var csOrSelector = [];
                        $(this).find('input:checked').each(function() {
                            csOrSelector.push($(this).attr('cs-data-filter'));
                        });
                        csAndClasses.push(csOrSelector);
                    });
                var trimmedAndClasses = [];
                csAndClasses.forEach(function(element) {
                    if (element.length > 0) {
                        trimmedAndClasses.push(element);
                    }
                });
                csAndClasses = trimmedAndClasses;
                var selectorArray = [];
                var selectorString = '';
                recursiveSelector('', 0, csAndClasses, selectorArray);
                selectorArray.forEach(function(selectorElement) {
                    if (selectorString !== '') {
                        selectorString += ', ';
                    }
                    selectorString += selectorElement;
                });
                var rangeValue1 = $(this).parent().parent().parent().parent().parent().find('input.range_01')
                    .val();
                var rangeValue1Array = rangeValue1.split(';');
                var rangeValue2 = $(this).parent().parent().parent().parent().parent().find('input.range_02')
                    .val();
                var rangeValue2Array = rangeValue2.split(';');
                if ($('.cs-expand-detail').length > 0) {
                    $('.cs-expand-detail').find(".cs-item-detail").css({
                        "opacity": 0
                    });
                    $('.cs-expand-detail').find(".icon-line-cross").css({
                        "opacity": 0
                    });
                    setTimeout(function() {
                        $('.cs-expand-detail').removeClass("cs-expand-detail");
                    }, 400);
                }
                elementContainer.isotope({
                    filter: function() {
                        var price = $(this).attr('cs-data-price');
                        var weight = $(this).attr('cs-data-weight');
                        if (selectorString !== '') {
                            return (
                                $(this).is(selectorString) &&
                                parseInt(price, 10) >= parseInt(rangeValue1Array[0], 10) &&
                                parseInt(price, 10) <= parseInt(rangeValue1Array[1], 10) &&
                                parseInt(weight, 10) >= parseInt(rangeValue2Array[0], 10) &&
                                parseInt(weight, 10) <= parseInt(rangeValue2Array[1], 10)
                            );
                        } else {
                            return (
                                true &&
                                parseInt(price, 10) >= parseInt(rangeValue1Array[0], 10) &&
                                parseInt(price, 10) <= parseInt(rangeValue1Array[1], 10) &&
                                parseInt(weight, 10) >= parseInt(rangeValue2Array[0], 10) &&
                                parseInt(weight, 10) <= parseInt(rangeValue2Array[1], 10)
                            );
                        }
                    }
                });
                var that = this;
                setTimeout(function() {
                    $(".cs-hfinder .cs-hfinder-filter-row .cs-chip-container input:not(:checked)").each(
                        function(index, item) {
                            var csAndClasses = [];
                            $(that).parent().parent().parent().parent().parent().find(
                                '.cs-hfinder-filter-row').each(function() {
                                var csOrSelector = [];
                                $(this).find('input:checked').each(function() {
                                    csOrSelector.push($(this).attr(
                                        'cs-data-filter'));
                                });
                                if ($(item).parent().parent().parent().get(0).isSameNode(
                                        this)) {
                                    csOrSelector.push($(item).attr('cs-data-filter'));
                                }
                                csAndClasses.push(csOrSelector);
                            });
                            var trimmedAndClasses = [];
                            csAndClasses.forEach(function(element) {
                                if (element.length > 0) {
                                    trimmedAndClasses.push(element);
                                }
                            });
                            csAndClasses = trimmedAndClasses;
                            var selectorArray = [];
                            var selectorString = '';
                            recursiveSelector('', 0, csAndClasses, selectorArray);
                            selectorArray.forEach(function(selectorElement) {
                                if (selectorString !== '') {
                                    selectorString += ', ';
                                }
                                selectorString += selectorElement;
                            });
                            if ($(selectorString).length === 0) {
                                $(item).parent().eq(0).addClass('disabled');
                            } else {
                                $(item).parent().eq(0).removeClass('disabled');
                            }
                        });
                }, 600);
            });
            $('.cs-hfinder-container').isotope({
                filter: function() {
                    return true;
                }
            });
            var minPrice = parseInt($('.cs-hfinder-container > [class*="col-"]').eq(0).attr('cs-data-price'), 10);
            var maxPrice = parseInt($('.cs-hfinder-container > [class*="col-"]').eq(0).attr('cs-data-price'), 10);
            var minWeight = parseInt($('.cs-hfinder-container > [class*="col-"]').eq(0).attr('cs-data-weight'), 10);
            var maxWeight = parseInt($('.cs-hfinder-container > [class*="col-"]').eq(0).attr('cs-data-weight'), 10);
            $('.cs-hfinder-container > [class*="col-"]').each(function() {
                var itemPrice = parseInt($(this).attr('cs-data-price'), 10);
                if (itemPrice < minPrice) {
                    minPrice = itemPrice;
                }
                if (itemPrice > maxPrice) {
                    maxPrice = itemPrice;
                }
                var itemWeight = parseInt($(this).attr('cs-data-weight'), 10);
                if (itemWeight < minWeight) {
                    minWeight = itemWeight;
                }
                if (itemWeight > maxWeight) {
                    maxWeight = itemWeight;
                }
            });
            $(".range_01").ionRangeSlider({
                type: "double",
                min: minPrice,
                max: maxPrice,
                from: minPrice,
                to: maxPrice,
                step: 10,
                hide_min_max: true,
                hide_from_to: false,
                prettify_enabled: true,
                prettify_separator: "."
            });
            $(".range_02").ionRangeSlider({
                type: "double",
                min: minWeight,
                max: maxWeight,
                from: minWeight,
                to: maxWeight,
                step: 5,
                hide_min_max: true,
                hide_from_to: false,
                prettify_enabled: true,
                prettify_separator: "."
            });
            $("#cs-reset-button").click();
            $('#cs-gl-checked').click();
            if (!window.csFilterCollapsedHeight) {
                window.csFilterCollapsedHeight = $('#cs-hfinder-expandable').outerHeight();
            }
            $('#cs-hfinder-expandable').css({
                "max-height": window.csFilterCollapsedHeight
            });
        });
    </script>
</body>