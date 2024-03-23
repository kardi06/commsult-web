window.commsult = {
    navigation: {
      isShowing: true,
      isMouseOver: false,
      isChanging: false,
      isExpanded: false,
    },
    super4: {
      line: 0,
      textLine: 0,
      rowHeight: $(window).height() - 101,
      rowCount: $(".cs-super-4 .row").length,
    },
    super5: {
      initialExpanded: false,
    },
    popUp: {
      haveOpened: false,
    },
    custom21: {
      animationStarted: false,
    },
    custom22: {
      animationStarted: false,
    },
    custom24: {
      slideNumber: 1,
    },
    contactOverlay: {
      isShowing: false,
    },
    impressumOverlay: {
      isShowing: false,
    },
    datenschutzOverlay: {
      isShowing: false,
    },
    mailregex: /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/,
  };
  
  // left: 37, up: 38, right: 39, down: 40,
  // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
  var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };
  
  function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault) e.preventDefault();
    e.returnValue = false;
  }
  
  function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
      preventDefault(e);
      return false;
    }
  }
  
  function disableScroll() {
    if (window.addEventListener)
      // older FF
      window.addEventListener("DOMMouseScroll", preventDefault, false);
    window.onwheel = preventDefault; // modern standard
    window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
    window.ontouchmove = preventDefault; // mobile
    document.onkeydown = preventDefaultForScrollKeys;
  }
  
  function enableScroll() {
    if (window.removeEventListener)
      window.removeEventListener("DOMMouseScroll", preventDefault, false);
    window.onmousewheel = document.onmousewheel = null;
    window.onwheel = null;
    window.ontouchmove = null;
    document.onkeydown = null;
  }
  
  switchCustom24 = (slideNumber) => {
    if (window.commsult.custom24.slideNumber !== slideNumber) {
      $(
        ".cs-custom-24 .cs-page-wrapper .cs-page-" +
          window.commsult.custom24.slideNumber
      ).removeClass("cs-active");
      $(".cs-custom-24 .cs-page-wrapper .cs-page-" + slideNumber).addClass(
        "cs-active"
      );
      $(
        ".cs-custom-24 .cs-label-wrapper .cs-caption-" +
          window.commsult.custom24.slideNumber
      ).animate({ opacity: "0" }, 400, "swing", () => {
        $(
          ".cs-custom-24 .cs-label-wrapper .cs-caption-" +
            window.commsult.custom24.slideNumber
        ).css({ display: "none" });
        $(".cs-custom-24 .cs-label-wrapper .cs-caption-" + slideNumber).css({
          display: "inline-block",
        });
        $(".cs-custom-24 .cs-label-wrapper .cs-caption-" + slideNumber).animate(
          { opacity: "1" },
          400,
          "swing"
        );
      });
      if (slideNumber === 1) {
        $(".cs-custom-24 h3 .cs-bottom-unerline").animate(
          {
            width: $("#csHauptgrafikL1").width() + "px",
            left: $("#csHauptgrafikL1").position().left + "px",
          },
          400,
          "swing"
        );
        $(".cs-standard-module-4.cs-custom-24-link").animate(
          { opacity: "0" },
          400,
          "swing",
          () => {
            $(".cs-standard-module-4.cs-custom-24-link h5").html(
              "Mit dem Direktzugriff ohne Umwege hin und zurÃ¼ck. Das ist Ontego Direct SAP."
            );
            $(".cs-standard-module-4.cs-custom-24-link p").html(
              "Direkter geht es nicht. Ontego kommuniziert Ã¼ber Webservices mit den Funktionsbausteinen ihrer Wahl. Keine Server, keine Wartung. Alles bleibt im fÃ¼hrenden SAP. Der Mobile Client sorgt dabei auch fÃ¼r Offline-Handling, so dass Daten im Falle eines Verbindungsabbruchs nicht verloren gehen."
            );
            $(".cs-standard-module-4.cs-custom-24-link").animate(
              {
                opacity: "1",
                height:
                  $(".cs-standard-module-4.cs-custom-24-link h5").height() +
                  $(".cs-standard-module-4.cs-custom-24-link p").height(),
              },
              400,
              "swing"
            );
          }
        );
      } else if (slideNumber === 2) {
        $(".cs-custom-24 h3 .cs-bottom-unerline").animate(
          {
            width: $("#csHauptgrafikL2").width() + "px",
            left: $("#csHauptgrafikL2").position().left + "px",
          },
          400,
          "swing"
        );
        $(".cs-standard-module-4.cs-custom-24-link").animate(
          { opacity: "0" },
          400,
          "swing",
          () => {
            $(".cs-standard-module-4.cs-custom-24-link h5").html(
              "Mehr FlexibilitÃ¤t fÃ¼r mobile Anwendungen gewinnen. Mit dem Ontego Mobility Layer."
            );
            $(".cs-standard-module-4.cs-custom-24-link p").html(
              "Alles flieÃŸt. FÃ¼r komplexe Anwendungen, wie im Field Service mÃ¼ssen oft Synchronisationen vorgenommen werden. Diese Operationen Ã¼bernimmt u.a. der Ontego Server. Aber mehr noch: neben Webservices kann die Anwendung dann direkt mit verschiedenen Backend-Systemen neben SAP kommunizieren. In heterogenen Umfeldern ein unschlagbares Feature!"
            );
            $(".cs-standard-module-4.cs-custom-24-link").animate(
              {
                opacity: "1",
                height:
                  $(".cs-standard-module-4.cs-custom-24-link h5").height() +
                  $(".cs-standard-module-4.cs-custom-24-link p").height(),
              },
              400,
              "swing"
            );
          }
        );
      }
      $(
        ".cs-custom-24 .cs-slide-" + window.commsult.custom24.slideNumber
      ).animate({ opacity: "0" }, 400, "swing", () => {
        $(".cs-custom-24 .cs-slide-" + slideNumber).animate(
          { opacity: "1" },
          400,
          "swing"
        );
        window.commsult.custom24.slideNumber = slideNumber;
      });
    }
  };
  
  openPopUp = () => {
    if (!window.commsult.popUp.haveOpened) {
      window.commsult.popUp.haveOpened = true;
      if ($(document).width() > 575) {
        $(".cs-popup").css({ right: "0px", opacity: 1 });
      } else {
        $(".cs-popup").css({ bottom: "0px", opacity: 1 });
      }
    }
  };
  
  closePopUp = () => {
    if ($(document).width() > 575) {
      $(".cs-popup").css({ right: "-700px", opacity: 0 });
    } else {
      $(".cs-popup").css({ bottom: "-520px", opacity: 0 });
    }
  };
  
  openContactOverlay = () => {
    if (!window.commsult.contactOverlay.isShowing) {
      window.commsult.contactOverlay.isShowing = true;
      $(".cs-contact-overlay").css({ bottom: "0", opacity: "1" });
      $(".cs-contact-top-border").css({ top: "0", opacity: "1" });
    }
  };
  
  closeContactOverlay = () => {
    window.commsult.contactOverlay.isShowing = false;
    $(".cs-contact-overlay").css({ bottom: "-120vh", opacity: "0" });
    $(".cs-contact-top-border").css({ top: "-60px", opacity: "0" });
  
    // Close modal error state
    if ($(".cs-contact-overlay .cs-hide-animate-4").css("display") !== "false") {
      $(".cs-contact-overlay .cs-hide-animate-4").animate(
        { opacity: "0" },
        800,
        "swing",
        () => {
          $(".cs-contact-overlay .cs-hide-animate-4").css({
            display: "none",
          });
          $(".cs-contact-overlay .cs-hide-animate-1").css({
            display: "flex",
          });
          $(".cs-contact-overlay .cs-hide-animate-1").animate(
            { opacity: "1" },
            800,
            "swing"
          );
        }
      );
    }
  };
  
  openSuccessContactOverlay = () => {
    if (!window.commsult.contactOverlay.isShowing) {
      window.commsult.contactOverlay.isShowing = true;
      $(".cs-contact-overlay").css({ bottom: "0", opacity: "1" });
      $(".cs-contact-top-border").css({ top: "0", opacity: "1" });
  
      $(".cs-contact-overlay .cs-hide-animate-1").css({
        display: "none",
      });
      $(".cs-contact-overlay .cs-hide-animate-3").css({
        display: "flex",
        opacity: "1",
      });
      setTimeout(function () {
        closeContactOverlay();
        $(".label-name").css({ display: "block" });
        $(".label-email").css({ display: "block" });
      }, 3000);
      setTimeout(function () {
        $(".cs-contact-overlay .cs-hide-animate-3").animate(
          { opacity: "0" },
          800,
          "swing",
          () => {
            $(".cs-contact-overlay .cs-hide-animate-3").css({
              display: "none",
            });
            $(".cs-contact-overlay .cs-hide-animate-1").css({
              display: "flex",
            });
            $(".cs-contact-overlay .cs-hide-animate-1").animate(
              { opacity: "1" },
              800,
              "swing"
            );
          }
        );
      }, 4000);
    }
  };
  openErrorContactOverlay = () => {
    if (!window.commsult.contactOverlay.isShowing) {
      window.commsult.contactOverlay.isShowing = true;
      $(".cs-contact-overlay").css({ bottom: "0", opacity: "1" });
      $(".cs-contact-top-border").css({ top: "0", opacity: "1" });
  
      $(".cs-contact-overlay .cs-hide-animate-1").css({
        display: "none",
      });
      $(".cs-contact-overlay .cs-hide-animate-4").css({
        display: "flex",
        opacity: "1",
      });
      setTimeout(function () {
        closeContactOverlay();
      }, 3000);
      setTimeout(function () {
        $(".cs-contact-overlay .cs-hide-animate-4").animate(
          { opacity: "0" },
          800,
          "swing",
          () => {
            $(".cs-contact-overlay .cs-hide-animate-4").css({
              display: "none",
            });
            $(".cs-contact-overlay .cs-hide-animate-1").css({
              display: "flex",
            });
            $(".cs-contact-overlay .cs-hide-animate-1").animate(
              { opacity: "1" },
              800,
              "swing"
            );
          }
        );
      }, 4000);
    }
  };
  
  openImpressumOverlay = () => {
    if (!window.commsult.impressumOverlay.isShowing) {
      window.commsult.impressumOverlay.isShowing = true;
      $(".cs-impressum-overlay").css({ bottom: "0", opacity: "1" });
      $(".cs-impressum-top-border").css({ top: "0", opacity: "1" });
    }
  };
  
  closeImpressumOverlay = () => {
    window.commsult.impressumOverlay.isShowing = false;
    $(".cs-impressum-overlay").css({ bottom: "-120vh", opacity: "0" });
    $(".cs-impressum-top-border").css({ top: "-60px", opacity: "0" });
  };
  
  openDatenschutzOverlay = () => {
    if (!window.commsult.datenschutzOverlay.isShowing) {
      window.commsult.datenschutzOverlay.isShowing = true;
      $(".cs-datenschutz-overlay").css({ bottom: "0", opacity: "1" });
      $(".cs-datenschutz-top-border").css({ top: "0", opacity: "1" });
    }
  };
  
  closeDatenschutzOverlay = () => {
    window.commsult.datenschutzOverlay.isShowing = false;
    $(".cs-datenschutz-overlay").css({ bottom: "-120vh", opacity: "0" });
    $(".cs-datenschutz-top-border").css({ top: "-60px", opacity: "0" });
  };
  
  closeDatenschutzOverlay = () => {
    window.commsult.datenschutzOverlay.isShowing = false;
    $(".cs-datenschutz-overlay").css({ bottom: "-120vh", opacity: "0" });
    $(".cs-datenschutz-top-border").css({ top: "-60px", opacity: "0" });
  };
  
  // Close on Error State Form
  
  closeErrorState = () => {
    window.commsult.contactOverlay.isShowing = false;
    $(".cs-contact-overlay").css({ bottom: "-120vh", opacity: "0" });
    $(".cs-contact-top-border").css({ top: "-60px", opacity: "0" });
    setTimeout(function () {
      $(".cs-contact-overlay .cs-hide-animate-4").animate(
        { opacity: "0" },
        800,
        "swing",
        () => {
          $(".cs-contact-overlay .cs-hide-animate-4").css({
            display: "none",
          });
          $(".cs-contact-overlay .cs-hide-animate-1").css({
            display: "flex",
          });
          $(".cs-contact-overlay .cs-hide-animate-1").animate(
            { opacity: "1" },
            800,
            "swing"
          );
        }
      );
    }, 2000);
    setTimeout(function () {
      window.open("mailto:vertrieb@commsult.de");
    }, 2000);
  };
  
  showHeader = (isMouseOverEvent) => () => {
    if ($(document).width() >= 992) {
      // console.log('show');
      if (isMouseOverEvent) {
        window.commsult.navigation.isMouseOver = true;
      }
      window.commsult.navigation.isChanging = true;
      $("#header").stop(true);
      $("#header-wrap").stop(true);
      $("#header").animate({ height: "48px" }, 300, "swing");
      $("#header-wrap").animate({ top: "0px" }, 290, "swing", () => {
        window.commsult.navigation.isChanging = false;
        window.commsult.navigation.isShowing = true;
      });
    }
  };
  
  hideHeader = (isMouseOverEvent) => () => {
    // if ($(document).width() >= 992) {
    //     // console.log('hide');
    //     if (isMouseOverEvent) {
    //         window.commsult.navigation.isMouseOver = false;
    //     }
    //     if (!window.commsult.navigation.isMouseOver && $w.scrollTop() > 8) {
    //         window.commsult.navigation.isChanging = true;
    //         $('#header').stop(true);
    //         $('#header-wrap').stop(true);
    //         $('#header').animate({ "height": "8px" }, 290, "swing");
    //         $('#header-wrap').animate({ "top": "-40px" }, 300, "swing", () => {
    //             window.commsult.navigation.isChanging = false;
    //             window.commsult.navigation.isShowing = false
    //         });
    //     }
    // }
  };
  
  toogleHeader = () => {
    if (window.commsult.navigation.isExpanded) {
      // console.log('close');
      $("#cs-header-row-top").stop(true);
      $("#header .icon-line-cross").animate(
        { opacity: "0" },
        300,
        "swing",
        () => {
          $("#header .icon-line-cross").addClass("icon-line-menu");
          $("#header .icon-line-menu").removeClass("icon-line-cross");
          $("#header .icon-line-menu").animate({ opacity: "1" }, 300, "swing");
          $("#cs-header-row-top").removeClass("cs-header-expanded");
        }
      );
      $("#cs-header-row-top").animate({ height: "48px" }, 300, "swing", () => {
        window.commsult.navigation.isExpanded = false;
      });
    } else {
      // console.log('open');
      $("#cs-header-row-top").stop(true);
      $("#header .icon-line-menu").animate({ opacity: "0" }, 300, "swing", () => {
        $("#header .icon-line-menu").addClass("icon-line-cross");
        $("#header .icon-line-cross").removeClass("icon-line-menu");
        $("#header .icon-line-cross").animate({ opacity: "1" }, 300, "swing");
        $("#cs-header-row-top").addClass("cs-header-expanded");
      });
      $("#cs-header-row-top").animate({ height: "100vh" }, 300, "swing", () => {
        window.commsult.navigation.isExpanded = true;
      });
    }
  };
  
  if ($(document).width() < 768) {
    $("[data-animate]").removeAttr("data-animate");
  }
  
  var prevScroll = $(document).scrollTop();
  
  $("#cs-header-row-bottom .row").scroll(() => {
    if ($("#cs-header-row-bottom .row").scrollLeft() === 0) {
      $("#cs-header-row-bottom .row").addClass("cs-scroll-start");
    } else if (
      $("#cs-header-row-bottom .row").scrollLeft() >
      $("#cs-header-row-bottom .cs-dropdown-logo").width() +
        15 +
        $("#cs-header-row-bottom .cs-dropdown-submenu-wrapper").width() +
        15 -
        $("#cs-header-row-bottom .row").width() -
        1
    ) {
      $("#cs-header-row-bottom .row").addClass("cs-scroll-end");
    } else {
      $(".cs-scroll-start").removeClass("cs-scroll-start");
      $(".cs-scroll-end").removeClass("cs-scroll-end");
    }
  });
  
  var $w = $(window).scroll(() => {
    var csProgressScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    var csProgressHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    var csProgressScrolled = (csProgressScroll / csProgressHeight) * 100;
    var csProgressBar = document.getElementById("cs-progress-bar");
    if (csProgressBar) {
      csProgressBar.style.width = csProgressScrolled + "%";
    }
  
    var newScroll = $(document).scrollTop();
    if (
      document.documentElement.scrollHeight - window.innerHeight - newScroll <
      400
    ) {
      openPopUp();
    }
    if (window.commsult.navigation.isChanging == false) {
      if (newScroll < prevScroll) {
        if (window.commsult.navigation.isShowing === false) {
          showHeader(false)();
        }
      } else {
        if ($w.scrollTop() > 8 && window.commsult.navigation.isShowing === true) {
          hideHeader(false)();
        } else if (
          $w.scrollTop() <= 8 &&
          window.commsult.navigation.isShowing === false
        ) {
          showHeader(false)();
        }
      }
    }
    prevScroll = newScroll;
  
    if (
      $(document).width() >= 992 &&
      window.commsult.super4.rowCount > $(".cs-super-4").length
    ) {
      var distanceToPrevSwitch =
        window.commsult.super4.line > 0
          ? ($(".cs-super-4").offset().top -
              101 +
              window.commsult.super4.rowHeight *
                (window.commsult.super4.line - 1) -
              $w.scrollTop()) *
            -1
          : null;
      var distanceToNextSwitch =
        window.commsult.super4.line <= window.commsult.super4.rowCount - 1
          ? $(".cs-super-4").offset().top -
            101 +
            window.commsult.super4.rowHeight * window.commsult.super4.line -
            $w.scrollTop()
          : null;
      var distanceToPrevTextSwitch =
        window.commsult.super4.textLine > 0
          ? ($(".cs-super-4").offset().top -
              101 +
              window.commsult.super4.rowHeight *
                (window.commsult.super4.textLine - 1 + 0.5) -
              $w.scrollTop()) *
            -1
          : null;
      var distanceToNextTextSwitch =
        window.commsult.super4.textLine < window.commsult.super4.rowCount - 1
          ? $(".cs-super-4").offset().top -
            101 +
            window.commsult.super4.rowHeight *
              (window.commsult.super4.textLine + 0.5) -
            $w.scrollTop()
          : null;
      if (distanceToNextSwitch && distanceToNextSwitch < 0) {
        if (window.commsult.super4.line === window.commsult.super4.rowCount - 1) {
          $(".cs-super-4 .cs-circle-wrapper").removeClass("cs-fixed");
          $(".cs-super-4 .cs-circle-wrapper").css({
            top:
              window.commsult.super4.rowHeight * window.commsult.super4.rowCount -
              window.commsult.super4.rowHeight +
              "px",
          });
        }
        window.commsult.super4.line++;
        if (window.commsult.super4.line === 1) {
          $(".cs-super-4 .cs-circle-wrapper").addClass("cs-fixed");
        }
      }
      if (distanceToPrevSwitch && distanceToPrevSwitch < 0) {
        if (window.commsult.super4.line === 1) {
          $(".cs-super-4 .cs-circle-wrapper").removeClass("cs-fixed");
          $(".cs-super-4 .cs-circle-wrapper").css({ top: "0px" });
        }
        window.commsult.super4.line--;
        if (window.commsult.super4.line === window.commsult.super4.rowCount - 1) {
          $(".cs-super-4 .cs-circle-wrapper").addClass("cs-fixed");
        }
      }
      if (distanceToNextTextSwitch && distanceToNextTextSwitch < 0) {
        $(".cs-super-4 .cs-col-txt")
          .eq(window.commsult.super4.textLine)
          .removeClass("cs-active");
        window.commsult.super4.textLine++;
        $(".cs-super-4 .cs-col-txt")
          .eq(window.commsult.super4.textLine)
          .addClass("cs-active");
      }
      if (distanceToPrevTextSwitch && distanceToPrevTextSwitch < 0) {
        $(".cs-super-4 .cs-col-txt")
          .eq(window.commsult.super4.textLine)
          .removeClass("cs-active");
        window.commsult.super4.textLine--;
        $(".cs-super-4 .cs-col-txt")
          .eq(window.commsult.super4.textLine)
          .addClass("cs-active");
      }
    }
  
    if ($(document).width() > 767) {
      $("#footer.dark").each(function (i) {
        var top_of_object = $(this).offset().top;
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if (bottom_of_window > top_of_object) {
          $(".cs-logo-animate-c1").css({
            animation: "cslogoanimatec1 4s",
            "animation-fill-mode": "forwards",
          });
          $(".cs-logo-animate-c2").css({
            animation: "cslogoanimatec2 4s",
            "animation-fill-mode": "forwards",
          });
          $(".cs-logo-animate-letters").css({
            animation: "cslogoanimateletters 4s",
            "animation-fill-mode": "forwards",
          });
        }
      });
  
      $(".cs-custom-15 .cs-img-circle").each(function (i) {
        var bottom_of_object =
          $(this).offset().top + ($(this).outerHeight() / 2 - 180);
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if (bottom_of_window > bottom_of_object) {
          $(".cs-custom-15").animate({ opacity: "1" }, 1500, "swing");
          $(".cs-custom-15 .cs-img-circle").animate(
            { left: "0px" },
            1000,
            "swing"
          );
          $(".cs-custom-15 .cs-heading-circle").animate(
            { left: "220px" },
            1000,
            "swing"
          );
          $(".cs-custom-15 h1")
            .delay(300)
            .animate({ opacity: "1" }, 500, "swing");
        }
      });
  
      $(".cs-custom-16 .cs-img-circle").each(function (i) {
        var bottom_of_object =
          $(this).offset().top + ($(this).outerHeight() / 2 - 180);
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if (bottom_of_window > bottom_of_object) {
          $(".cs-custom-16").animate({ opacity: "1" }, 1500, "swing");
          $(".cs-custom-16 .cs-img-circle").animate(
            { left: "0px" },
            1000,
            "swing"
          );
          $(".cs-custom-16 .cs-heading-circle").animate(
            { left: "180px" },
            1000,
            "swing"
          );
          $(".cs-custom-16 h1")
            .delay(300)
            .animate({ opacity: "1" }, 500, "swing");
        }
      });
  
      $("#cs-super-5 .cs-circle").each(function () {
        var bottom_of_object = $(this).offset().top + 150;
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if (bottom_of_window > bottom_of_object) {
          $("#cs-super-5 .cs-circle").animate({ opacity: "1" }, 500, "swing");
          $("#cs-super-5 .cs-pointer").each(function (i) {
            var that = this;
            setTimeout(function () {
              $(that).addClass("cs-animated");
            }, i * 200);
          });
        }
      });
  
      $(".cs-custom-20").each(function (i) {
        var bottom_of_object =
          $(this).offset().top + ($(this).outerHeight() / 2 - 150);
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if (bottom_of_window > bottom_of_object) {
          $(".cs-custom-20 .cs-img-l-data")
            .delay(400)
            .animate({ opacity: "1" }, 500, "swing");
          $(".cs-custom-20 .cs-img-l-process")
            .delay(700)
            .animate({ opacity: "1" }, 500, "swing");
          $(".cs-custom-20 .cs-img-l-ux")
            .delay(1000)
            .animate({ opacity: "1" }, 500, "swing");
        }
      });
  
      $(".cs-custom-23").each(function (i) {
        var bottom_of_object =
          $(this).offset().top + ($(this).outerHeight() / 2 - 800);
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if (bottom_of_window > bottom_of_object) {
          $(".cs-custom-23 .cs-location-point1")
            .delay(100)
            .animate({ opacity: "1" }, 300, "swing");
          $(".cs-custom-23 .cs-location-point2")
            .delay(200)
            .animate({ opacity: "1" }, 300, "swing");
          $(".cs-custom-23 .cs-location-point3")
            .delay(300)
            .animate({ opacity: "1" }, 300, "swing");
          $(".cs-custom-23 .cs-location-point4")
            .delay(400)
            .animate({ opacity: "1" }, 300, "swing");
          $(".cs-custom-23 .cs-location-point5")
            .delay(500)
            .animate({ opacity: "1" }, 300, "swing");
          $(".cs-custom-23 .cs-location-point6")
            .delay(600)
            .animate({ opacity: "1" }, 300, "swing");
          $(".cs-custom-23 .cs-location-point7")
            .delay(700)
            .animate({ opacity: "1" }, 300, "swing");
          $(".cs-custom-23 .cs-location-point8")
            .delay(800)
            .animate({ opacity: "1" }, 300, "swing");
          $(".cs-custom-23 .cs-location-point9")
            .delay(900)
            .animate({ opacity: "1" }, 300, "swing");
          $(".cs-custom-23 .cs-location-point10")
            .delay(1000)
            .animate({ opacity: "1" }, 300, "swing");
          $(".cs-custom-23 .cs-location-point11")
            .delay(1100)
            .animate({ opacity: "1" }, 300, "swing");
          $(".cs-custom-23 .cs-location-point12")
            .delay(1200)
            .animate({ opacity: "1" }, 300, "swing");
          $(".cs-custom-23 .cs-location-point13")
            .delay(1300)
            .animate({ opacity: "1" }, 300, "swing");
          $(".cs-custom-23 .cs-location-point14")
            .delay(1400)
            .animate({ opacity: "1" }, 300, "swing");
          $(".cs-custom-23 .cs-location-point15")
            .delay(1500)
            .animate({ opacity: "1" }, 300, "swing");
          $(".cs-custom-23 .cs-location-point16")
            .delay(1600)
            .animate({ opacity: "1" }, 300, "swing");
          $(".cs-custom-23 .cs-location-point17")
            .delay(1700)
            .animate({ opacity: "1" }, 300, "swing");
          $(".cs-custom-23 .cs-location-point18")
            .delay(1800)
            .animate({ opacity: "1" }, 300, "swing");
          $(".cs-custom-23 .cs-location-point19")
            .delay(1900)
            .animate({ opacity: "1" }, 300, "swing");
          $(".cs-custom-23 .cs-location-point20")
            .delay(2000)
            .animate({ opacity: "1" }, 300, "swing");
          $(".cs-custom-23 .cs-location-point21")
            .delay(2100)
            .animate({ opacity: "1" }, 300, "swing");
          $(".cs-custom-23 .cs-location-point22")
            .delay(2200)
            .animate({ opacity: "1" }, 300, "swing");
          $(".cs-custom-23 .cs-location-point23")
            .delay(2300)
            .animate({ opacity: "1" }, 300, "swing");
          $(".cs-custom-23 .cs-location-point24")
            .delay(2400)
            .animate({ opacity: "1" }, 300, "swing");
        }
      });
    }
  
    if (
      $(document).width() >= 992 &&
      $(document).find(".cs-super-5").length > 0
    ) {
      var bottom_of_object = $(".cs-super-5").offset().top;
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      if (
        bottom_of_window > bottom_of_object &&
        !window.commsult.super5.initialExpanded
      ) {
        window.commsult.super5.initialExpanded = true;
        $(".cs-pointer.cs-initial-expanded").delay(1400).addClass("cs-expanded");
        $(".cs-pointer-top-padding")
          .delay(1000)
          .animate(
            {
              height:
                (6 - $(".cs-pointer.cs-initial-expanded").prevAll().length) * 50,
            },
            400,
            "swing"
          );
        $(".cs-pointer.cs-expanded .cs-header")
          .delay(1400)
          .animate(
            { color: "#2D333D", fontSize: "30px", lineHeight: "36px" },
            400,
            "swing"
          );
        $(".cs-pointer.cs-expanded p")
          .delay(1400)
          .animate({ maxHeight: "140px", marginTop: "16px" }, 400, "swing");
        $(".cs-pointer.cs-expanded p").animate({ opacity: "1" }, 400, "swing");
        $(".cs-pointer.cs-expanded .cs-pointer-image")
          .delay(1780)
          .css({ display: "block" }, 1, "swing");
        $(".cs-pointer.cs-expanded .cs-pointer-image").animate(
          { opacity: "1" },
          400,
          "swing"
        );
      }
    }
  
    function animateOffline() {
      setTimeout(function () {
        $(".cs-custom-21 .cs-label-offline").attr("data-content", "Offlin");
      }, 3900);
      setTimeout(function () {
        $(".cs-custom-21 .cs-label-offline").attr("data-content", "Offli");
      }, 4000);
      setTimeout(function () {
        $(".cs-custom-21 .cs-label-offline").attr("data-content", "Offl");
      }, 4100);
      setTimeout(function () {
        $(".cs-custom-21 .cs-label-offline").attr("data-content", "Off");
      }, 4200);
      setTimeout(function () {
        $(".cs-custom-21 .cs-label-offline").attr("data-content", "Of");
      }, 4300);
      setTimeout(function () {
        $(".cs-custom-21 .cs-label-offline").attr("data-content", "O");
      }, 4400);
      setTimeout(function () {
        $(".cs-custom-21 .cs-label-offline").attr("data-content", "");
      }, 4500);
      setTimeout(function () {
        $(".cs-custom-21 .cs-label-offline").attr("data-content", "C");
      }, 4600);
      setTimeout(function () {
        $(".cs-custom-21 .cs-label-offline").attr("data-content", "Co");
      }, 4700);
      setTimeout(function () {
        $(".cs-custom-21 .cs-label-offline").attr("data-content", "Com");
      }, 4800);
      setTimeout(function () {
        $(".cs-custom-21 .cs-label-offline").attr("data-content", "Comp");
      }, 4900);
      setTimeout(function () {
        $(".cs-custom-21 .cs-label-offline").attr("data-content", "Compl");
      }, 5000);
      setTimeout(function () {
        $(".cs-custom-21 .cs-label-offline").attr("data-content", "Comple");
      }, 5100);
      setTimeout(function () {
        $(".cs-custom-21 .cs-label-offline").attr("data-content", "Complex");
      }, 5200);
      setTimeout(function () {
        $(".cs-custom-21 .cs-label-offline").attr("data-content", "Complex S");
      }, 5300);
      setTimeout(function () {
        $(".cs-custom-21 .cs-label-offline").attr("data-content", "Complex Sy");
      }, 5400);
      setTimeout(function () {
        $(".cs-custom-21 .cs-label-offline").attr("data-content", "Complex Syn");
      }, 5500);
      setTimeout(function () {
        $(".cs-custom-21 .cs-label-offline").attr("data-content", "Complex Sync");
      }, 5600);
      setTimeout(function () {
        $(".cs-custom-21 .cs-label-offline").attr(
          "data-content",
          "Complex Sync +"
        );
      }, 5700);
      setTimeout(function () {
        $(".cs-custom-21 .cs-label-offline").attr("data-content", "Complex Sync");
      }, 7700);
      setTimeout(function () {
        $(".cs-custom-21 .cs-label-offline").attr("data-content", "Complex Syn");
      }, 7800);
      setTimeout(function () {
        $(".cs-custom-21 .cs-label-offline").attr("data-content", "Complex Sy");
      }, 7900);
      setTimeout(function () {
        $(".cs-custom-21 .cs-label-offline").attr("data-content", "Complex S");
      }, 8000);
      setTimeout(function () {
        $(".cs-custom-21 .cs-label-offline").attr("data-content", "Complex");
      }, 8100);
      setTimeout(function () {
        $(".cs-custom-21 .cs-label-offline").attr("data-content", "Comple");
      }, 8200);
      setTimeout(function () {
        $(".cs-custom-21 .cs-label-offline").attr("data-content", "Compl");
      }, 8300);
      setTimeout(function () {
        $(".cs-custom-21 .cs-label-offline").attr("data-content", "Comp");
      }, 8400);
      setTimeout(function () {
        $(".cs-custom-21 .cs-label-offline").attr("data-content", "Com");
      }, 8500);
      setTimeout(function () {
        $(".cs-custom-21 .cs-label-offline").attr("data-content", "Co");
      }, 8600);
      setTimeout(function () {
        $(".cs-custom-21 .cs-label-offline").attr("data-content", "C");
      }, 8700);
      setTimeout(function () {
        $(".cs-custom-21 .cs-label-offline").attr("data-content", "");
      }, 8800);
      setTimeout(function () {
        $(".cs-custom-21 .cs-label-offline").attr("data-content", "O");
      }, 8900);
      setTimeout(function () {
        $(".cs-custom-21 .cs-label-offline").attr("data-content", "Of");
      }, 9000);
      setTimeout(function () {
        $(".cs-custom-21 .cs-label-offline").attr("data-content", "Off");
      }, 9100);
      setTimeout(function () {
        $(".cs-custom-21 .cs-label-offline").attr("data-content", "Offl");
      }, 9200);
      setTimeout(function () {
        $(".cs-custom-21 .cs-label-offline").attr("data-content", "Offli");
      }, 9300);
      setTimeout(function () {
        $(".cs-custom-21 .cs-label-offline").attr("data-content", "Offlin");
      }, 9400);
      setTimeout(function () {
        $(".cs-custom-21 .cs-label-offline").attr("data-content", "Offline");
      }, 9500);
      setTimeout(function () {
        animateOffline();
      }, 10000);
    }
  
    if ($(document).find(".cs-custom-21").length > 0) {
      var bottom_of_object = $(".cs-custom-21").offset().top;
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      if (
        bottom_of_window > bottom_of_object &&
        !window.commsult.custom21.animationStarted
      ) {
        window.commsult.custom21.animationStarted = true;
        $(".cs-custom-21 .cs-label-offline").attr("data-content", "Offline");
        $(".cs-custom-21 .cs-wrapper").css({ display: "block" });
        animateOffline();
        $(".cs-custom-21 .cs-wrapper").animate({ opacity: "1" }, 200, "swing");
      }
    }
  
    function animateUmlagerung() {
      $(".cs-custom-22 .cs-umlagerung-button").attr("data-content", "Umlagerung");
      setTimeout(function () {
        $(".cs-custom-22 .cs-umlagerung-button").attr("data-content", "Los");
      }, 8000);
      setTimeout(function () {
        $(".cs-custom-22 .cs-umlagerung-button").attr("data-content", "OK");
      }, 16000);
      setTimeout(function () {
        animateUmlagerung();
      }, 20000);
    }
  
    if ($(document).find(".cs-custom-22").length > 0) {
      var bottom_of_object =
        $(".cs-custom-22").offset().top + $(".cs-custom-22").outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      if (
        bottom_of_window > bottom_of_object &&
        !window.commsult.custom22.animationStarted
      ) {
        window.commsult.custom22.animationStarted = true;
        $(".cs-custom-22 .cs-umlagerung-button").attr(
          "data-content",
          "Umlagerung"
        );
        $(".cs-custom-22 .cs-wrapper").css({ display: "block" });
        animateUmlagerung();
        $(".cs-custom-22 .cs-wrapper").animate({ opacity: "1" }, 1000, "swing");
      }
    }
  });
  
  validateForm1 = () => {
    var cs10Input1 = $("#cs10Input1 input").val();
    var cs10Input2 = $("#cs10Input2 input").val();
    var cs10Input5 = $("#cs10Input5 input").is(":checked");
  
    if (
      cs10Input1 &&
      cs10Input2 &&
      cs10Input1 !== "" &&
      cs10Input2 !== "" &&
      window.commsult.mailregex.test(cs10Input2)
    ) {
      $(".cs-custom-10 .cs-hide-animate-2").css({ display: "block" });
      $(".cs-custom-10 .cs-hide-animate-2").animate(
        { opacity: "1", marginBottom: "10px", maxHeight: "80px" },
        800,
        "swing"
      );
      $("#cs10Input2").animate({ marginBottom: "10px" }, 400, "swing");
    } else {
      $("#cs10Input2").animate({ marginBottom: "0px" }, 400, "swing");
      $(".cs-custom-10 .cs-hide-animate-2").animate(
        { opacity: "0", marginBottom: "0px", maxHeight: "0px" },
        800,
        "swing",
        () => {
          $(".cs-custom-10 .cs-hide-animate-2").css({ display: "none" });
        }
      );
    }
  
    if (
      cs10Input1 &&
      cs10Input2 &&
      cs10Input1 !== "" &&
      cs10Input2 !== "" &&
      window.commsult.mailregex.test(cs10Input2) &&
      cs10Input5
    ) {
      $("#cs10Button1").removeClass("cs-button-disabled");
      $("#cs10Button1").animate({ opacity: 1 }, 300, "swing");
    } else {
      $("#cs10Button1").addClass("cs-button-disabled");
      $("#cs10Button1").animate({ opacity: 0.6 }, 300, "swing");
    }
  
    if (cs10Input1 !== "") {
      $("#cs10Input1 input")
        .stop(true)
        .animate(
          { borderColor: "rgba(255,0,0,0)", borderBottomColor: "#0077B6" },
          400,
          "swing"
        );
    }
    if (cs10Input2 !== "" && window.commsult.mailregex.test(cs10Input2)) {
      $("#cs10Input2 input")
        .stop(true)
        .animate(
          { borderColor: "rgba(255,0,0,0)", borderBottomColor: "#0077B6" },
          400,
          "swing"
        );
    }
    if (cs10Input5) {
      $("#cs10Input5 .cs-checkmark")
        .stop(true)
        .animate({ borderColor: "rgba(255,0,0,0)" }, 400, "swing");
    }
  };
  
  validateForm2 = () => {
    var cs10Input1 = $("#cs10Input1 input").val();
    var cs10Input2 = $("#cs10Input2 input").val();
    var cs10Input3 = $("#cs10Input3 input").val();
    var cs10Input4 = $("#cs10Input4 input").val();
    var cs10Input5 = $("#cs10Input5 input").is(":checked");
    var cs10InputH1 = $("#cs10InputH1").val();
    var cs10InputH2 = $("#cs10InputH2").val();
  
    if (
      cs10Input1 &&
      cs10Input2 &&
      cs10Input1 !== "" &&
      cs10Input2 !== "" &&
      window.commsult.mailregex.test(cs10Input2) &&
      cs10Input5
    ) {
      if (cs10InputH1 && cs10InputH2) {
        $.post("https://ontego.de/mailer/mail.html", {
          mail_to: cs10InputH1,
          mail_subject: cs10InputH2,
          name: cs10Input1,
          email: cs10Input2,
          company: cs10Input3 && cs10Input3 !== "" ? cs10Input3 : "",
          phone: cs10Input4 && cs10Input4 !== "" ? cs10Input4 : "",
          link: window.location.href,
          note: "",
        });
      }
      $(".cs-custom-10").animate({ maxHeight: "0px" }, 1000, "swing");
      $(".cs-custom-10 .cs-hide-animate-1, .cs-custom-10 .cs-hide-animate-2")
        .stop(true)
        .animate({ opacity: "0" }, 800, "swing", () => {
          $(
            ".cs-custom-10 .cs-hide-animate-1, .cs-custom-10 .cs-hide-animate-2"
          ).css({ display: "none" });
          $(".cs-custom-10 .cs-hide-animate-3").css({ display: "block" });
          $(".cs-custom-10 .cs-hide-animate-3").animate(
            { opacity: "1" },
            800,
            "swing"
          );
          $(".cs-custom-10").animate({ maxHeight: "350px" }, 1000, "swing");
        });
      $("#cs10Input12 input").val($("#cs10Input2 input").val());
      $("#cs10Input12 input").prop("readonly", true);
    } else {
      if (cs10Input1 === "") {
        $("#cs10Input1 input")
          .stop(true)
          .animate({ borderColor: "rgba(255,0,0,0.8)" }, 400, "swing", () => {
            $("#cs10Input1 input").animate(
              { borderColor: "rgba(255,0,0,0)" },
              400,
              "swing",
              () => {
                $("#cs10Input1 input").animate(
                  { borderColor: "rgba(255,0,0,0.6)" },
                  400,
                  "swing"
                );
              }
            );
          });
      }
      if (cs10Input2 === "" || !window.commsult.mailregex.test(cs10Input2)) {
        $("#cs10Input2 input")
          .stop(true)
          .animate({ borderColor: "rgba(255,0,0,0.8)" }, 400, "swing", () => {
            $("#cs10Input2 input").animate(
              { borderColor: "rgba(255,0,0,0)" },
              400,
              "swing",
              () => {
                $("#cs10Input2 input").animate(
                  { borderColor: "rgba(255,0,0,0.6)" },
                  400,
                  "swing"
                );
              }
            );
          });
      }
      if (!cs10Input5) {
        $("#cs10Input5 .cs-checkmark")
          .stop(true)
          .animate({ borderColor: "rgba(255,0,0,0.8)" }, 400, "swing", () => {
            $("#cs10Input5 .cs-checkmark").animate(
              { borderColor: "rgba(255,0,0,0)" },
              400,
              "swing",
              () => {
                $("#cs10Input5 .cs-checkmark").animate(
                  { borderColor: "rgba(255,0,0,0.6)" },
                  400,
                  "swing"
                );
              }
            );
          });
      }
    }
  };
  
  validateForm3 = () => {
    var cs10Input15 = $("#cs10Input15 input").is(":checked");
  
    if (cs10Input15) {
      $("#cs10Button2").removeClass("cs-button-disabled");
      $("#cs10Button2").animate({ opacity: 1 }, 300, "swing");
      $("#cs10Input15 .cs-checkmark")
        .stop(true)
        .animate({ borderColor: "rgba(255,0,0,0)" }, 400, "swing");
    } else {
      $("#cs10Button2").addClass("cs-button-disabled");
      $("#cs10Button2").animate({ opacity: 0.6 }, 300, "swing");
      $("#cs10Input15 .cs-checkmark")
        .stop(true)
        .animate({ borderColor: "rgba(255,0,0,0.8)" }, 400, "swing", () => {
          $("#cs10Input15 .cs-checkmark").animate(
            { borderColor: "rgba(255,0,0,0)" },
            400,
            "swing",
            () => {
              $("#cs10Input15 .cs-checkmark").animate(
                { borderColor: "rgba(255,0,0,0.6)" },
                400,
                "swing"
              );
            }
          );
        });
    }
  };
  
  validateForm4 = () => {
    var cs10Input1 = $("#cs10Input1 input").val();
    var cs10Input2 = $("#cs10Input2 input").val();
    var cs10Input3 = $("#cs10Input3 input").val();
    var cs10Input4 = $("#cs10Input4 input").val();
    var cs10Input15 = $("#cs10Input15 input").is(":checked");
  
    if (cs10Input15) {
      $.post(
        "https://ontego.de/mailer/cs_mailchimp_comment.html",
        {
          email: cs10Input2,
          name: cs10Input1,
          company: cs10Input3 && cs10Input3 !== "" ? cs10Input3 : "",
          phone: cs10Input4 && cs10Input4 !== "" ? cs10Input4 : "",
          link: window.location.href,
        },
        function (data) {
          console.log(data);
        }
      );
      $(".cs-custom-10").animate({ maxHeight: "0px" }, 1000, "swing");
      $(".cs-custom-10 .cs-hide-animate-3")
        .stop(true)
        .animate({ opacity: "0" }, 800, "swing", () => {
          $(".cs-custom-10 .cs-hide-animate-3").css({ display: "none" });
          $(
            ".cs-custom-10 .cs-hide-animate-4, .cs-custom-10 .cs-icon-wrapper"
          ).css({ display: "block" });
          $(".cs-custom-10 .cs-hide-animate-4").animate(
            { opacity: "1" },
            800,
            "swing"
          );
          $(".cs-custom-10").animate({ maxHeight: "350px" }, 1000, "swing");
        });
    } else {
      $("#cs10Input15 .cs-checkmark")
        .stop(true)
        .animate({ borderColor: "rgba(255,0,0,0.8)" }, 400, "swing", () => {
          $("#cs10Input15 .cs-checkmark").animate(
            { borderColor: "rgba(255,0,0,0)" },
            400,
            "swing",
            () => {
              $("#cs10Input15 .cs-checkmark").animate(
                { borderColor: "rgba(255,0,0,0.6)" },
                400,
                "swing"
              );
            }
          );
        });
    }
  };
  
  validateFormFooter = () => {
    var footerInput1 = $("#footerInput1").val();
    var footerInput2 = $("#footerInput2").val();
  
    $.post("https://ontego.de/mailer/mail.html", {
      mail_to: "vertrieb@commsult.de",
      mail_subject: "RÃ¼ckrufwunsch",
      name: footerInput1 && footerInput1 !== "" ? footerInput1 : "",
      email: "",
      company: "",
      phone: footerInput2 && footerInput2 !== "" ? footerInput2 : "",
      link: window.location.href,
      note: "",
    });
  
    $("#footer.dark .cs-form-wrapper .cs-body-2").animate(
      { opacity: 0 },
      300,
      "swing"
    );
    $("#footer.dark .cs-form-wrapper #footerInput1").animate(
      { opacity: 0 },
      300,
      "swing"
    );
    $("#footer.dark .cs-form-wrapper #footerInput2")
      .delay(100)
      .animate({ opacity: 0 }, 300, "swing");
    $("#footer.dark .cs-form-wrapper .cs-link-2")
      .delay(500)
      .animate({ opacity: 0 }, 300, "swing", () => {
        $("#footer.dark .cs-form-wrapper-inner").html(
          '<h6>Vielen Dank, wir rufen Sie unter der Nummer <b style="font-size: 20px;">' +
            footerInput2 +
            "</b> zurÃ¼ck!</h6>"
        );
        $("#footer.dark .cs-icon-wrapper").css({ display: "block" });
        $("#footer.dark .cs-form-wrapper h6")
          .delay(800)
          .animate({ opacity: 1 }, 300, "swing");
      });
  };
  
  validateFormPopUp1 = () => {
    var popupInput1 = $("#popupInput1 input").val();
    var popupInput2 = $("#popupInput2 input").is(":checked");
  
    if (
      popupInput1 &&
      popupInput1 !== "" &&
      window.commsult.mailregex.test(popupInput1) &&
      popupInput2
    ) {
      $(".cs-popup .cs-button").removeClass("cs-button-disabled");
      $(".cs-popup .cs-button").animate({ opacity: 1 }, 300, "swing");
    } else {
      $(".cs-popup .cs-button").addClass("cs-button-disabled");
      $(".cs-popup .cs-button").animate({ opacity: 0.6 }, 300, "swing");
    }
  
    if (popupInput1 !== "" && window.commsult.mailregex.test(popupInput1)) {
      $("#popupInput1 input")
        .stop(true)
        .animate(
          { borderColor: "rgba(255,0,0,0)", borderBottomColor: "#0077B6" },
          400,
          "swing"
        );
    }
    if (popupInput2) {
      $("#popupInput2 .cs-checkmark")
        .stop(true)
        .animate({ borderColor: "rgba(255,0,0,0)" }, 400, "swing");
    }
  };
  
  validateFormPopUp2 = () => {
    var popupInput1 = $("#popupInput1 input").val();
    var popupInput2 = $("#popupInput2 input").is(":checked");
  
    if (
      popupInput1 &&
      popupInput1 !== "" &&
      window.commsult.mailregex.test(popupInput1) &&
      popupInput2
    ) {
      if ($("#popupInput3").val() === "hardware_finder") {
        $.post(
          "https://ontego.de/mailer/cs_mailchimp_hardware_finder.html",
          {
            email: popupInput1,
          },
          function (data) {
            console.log(data);
          }
        );
      } else {
        $.post(
          "https://ontego.de/mailer/cs_mailchimp_gute_fragen.html",
          {
            email: popupInput1,
          },
          function (data) {
            console.log(data);
          }
        );
      }
      $(".cs-popup .cs-hide-animate-1")
        .stop(true)
        .animate({ opacity: "0" }, 800, "swing", () => {
          $(".cs-popup .cs-hide-animate-1").css({ display: "none" });
          $(".cs-popup .cs-hide-animate-2, .cs-popup .cs-icon-wrapper").css({
            display: "block",
          });
          $(".cs-popup .cs-hide-animate-2").animate(
            { opacity: "1" },
            800,
            "swing",
            () => {
              setTimeout(function () {
                closePopUp();
              }, 2000);
            }
          );
        });
    } else {
      if (popupInput1 === "" || !window.commsult.mailregex.test(popupInput1)) {
        $("#popupInput1 input")
          .stop(true)
          .animate({ borderColor: "rgba(255,0,0,0.8)" }, 400, "swing", () => {
            $("#popupInput1 input").animate(
              { borderColor: "rgba(255,0,0,0)" },
              400,
              "swing",
              () => {
                $("#popupInput1 input").animate(
                  { borderColor: "rgba(255,0,0,0.6)" },
                  400,
                  "swing"
                );
              }
            );
          });
      }
      if (!popupInput2) {
        $("#popupInput2 .cs-checkmark")
          .stop(true)
          .animate({ borderColor: "rgba(255,0,0,0.8)" }, 400, "swing", () => {
            $("#popupInput2 .cs-checkmark").animate(
              { borderColor: "rgba(255,0,0,0)" },
              400,
              "swing",
              () => {
                $("#popupInput2 .cs-checkmark").animate(
                  { borderColor: "rgba(255,0,0,0.6)" },
                  400,
                  "swing"
                );
              }
            );
          });
      }
    }
  };
  
  validateContact1 = () => {
    var contactInput1 = $("#contactInput1 input").val();
    var contactInput2 = $("#contactInput2 input").val();
    var contactInput6 = $("#contactInput6 input").is(":checked");
  
    if (
      contactInput1 &&
      contactInput2 &&
      contactInput1 !== "" &&
      contactInput2 !== "" &&
      window.commsult.mailregex.test(contactInput2) &&
      contactInput6
    ) {
      $("#contactButton1").removeClass("cs-button-disabled");
      $("#contactButton1").animate({ opacity: 1 }, 300, "swing");
    } else {
      $("#contactButton1").addClass("cs-button-disabled");
      $("#contactButton1").animate({ opacity: 0.6 }, 300, "swing");
    }
  
    if (contactInput1 !== "") {
      $("#contactInput1 input")
        .stop(true)
        .animate(
          { borderColor: "rgba(255,0,0,0)", borderBottomColor: "#0077B6" },
          400,
          "swing"
        );
      $("#contactInput1 .input-error-contact").stop(true).animate(
        {
          opacity: "0",
        },
        400,
        "swing"
      );
      $("#contactInput1 .input-error-contact").css({
        display: "none",
      });
    }
    if (contactInput2 !== "" && window.commsult.mailregex.test(contactInput2)) {
      $("#contactInput2 input")
        .stop(true)
        .animate(
          { borderColor: "rgba(255,0,0,0)", borderBottomColor: "#0077B6" },
          400,
          "swing"
        );
      $("#contactInput2 .input-error-contact").stop(true).animate(
        {
          opacity: "0",
        },
        400,
        "swing"
      );
      $("#contactInput2 .input-error-contact").css({
        display: "none",
      });
    }
    if (contactInput6) {
      $("#contactInput6 .cs-checkmark")
        .stop(true)
        .animate({ borderColor: "rgba(255,0,0,0)" }, 400, "swing");
    }
  };
  
  validateContact2 = (page = "") => {
    var contactInputU11 = $("#contactInputU11 input").is(":checked");
    var contactInputU12 = $("#contactInputU12 input").is(":checked");
    var contactInputU21 = $("#contactInputU21 input").is(":checked");
    var contactInputU22 = $("#contactInputU22 input").is(":checked");
    var contactInputU23 = $("#contactInputU23 input").is(":checked");
    var contactInputU24 = $("#contactInputU24 input").is(":checked");
    var contactInputU25 = $("#contactInputU25 input").is(":checked");
    var contactInputU26 = $("#contactInputU26 input").is(":checked");
    var contactInput1 = $("#contactInput1 input").val();
    var contactInput2 = $("#contactInput2 input").val();
    var contactInput3 = $("#contactInput3 input").val();
    var contactInput4 = $("#contactInput4 input").val();
    var contactInput5 = $("#contactInput5 textarea").val();
    var contactInput6 = $("#contactInput6 input").is(":checked");
  
    if (
      contactInput1 &&
      contactInput2 &&
      contactInput1 !== "" &&
      contactInput2 !== "" &&
      window.commsult.mailregex.test(contactInput2) &&
      contactInput6
    ) {
      var emailTo = page == "" ? "vertrieb@commsult.de" : "sdettrial@gmail.com"; //main : qa
      var company = contactInput3 && contactInput3 !== "" ? contactInput3 : "";
      var phone = contactInput4 && contactInput4 !== "" ? contactInput4 : "";
      var link = window.location.href;
      var note =
        "Ja, schicken Sie mir gerne einen Demo Termin: " +
        contactInputU11 +
        "\nJa, aber vorher habe ich noch Fragen: " +
        contactInputU12 +
        "\nLagerlogistik: " +
        contactInputU21 +
        "\nProduktion: " +
        contactInputU22 +
        "\nInventur: " +
        contactInputU23 +
        "\nService Management: " +
        contactInputU24 +
        "\nInstandhaltung: " +
        contactInputU25 +
        "\nWeitere Bereiche: " +
        contactInputU26 +
        "\nNachricht: " +
        contactInput5;
  
      var message =
        "Name:" +
        "\n" +
        contactInput1 +
        "\n\n" +
        "Email:" +
        "\n" +
        contactInput2 +
        "\n\n" +
        "Company:" +
        "\n" +
        company +
        "\n\n" +
        "Phone:" +
        "\n" +
        phone +
        "\n\n" +
        "Link:" +
        "\n" +
        link +
        "\n\n" +
        "Note:" +
        "\n" +
        note +
        "\n\n";
      console.log(message);
  
      var data = "DvFVm3=" + emailTo + "&FFVtM9=Anfrage" + "&CHRfqX=" + message;
      // "DvFVm3=vertrieb@commsult.de" + "&FFVtM9=Anfrage" + "&CHRfqX=" + message;
      // "DvFVm3=sdettrial@gmail.com" + "&FFVtM9=Anfrage" + "&CHRfqX=" + message;
  
      $.ajax({
        type: "POST",
        beforeSend: function (request) {
          request.setRequestHeader(
            "Authorization",
            `Basic ${btoa(`SFQtv5IC8puSPrdL:BSCIGZ28fTwjNzUk`)}`
          );
        },
        url: "https://skyinfra08.atmos.id/11695/Z6sJr6AYdPZ6cVUZka6Dcx/m/11018/r/DdQP8KwdxgqEWYzc",
        data: data,
        success: function (response) {
          if (response != "OK") {
            $(".cs-contact-overlay .cs-hide-animate-1")
              .stop(true)
              .animate({ opacity: "0" }, 800, "swing", () => {
                $(".cs-contact-overlay").animate(
                  { scrollTop: 0 },
                  500,
                  "easeOutQuad",
                  () => {
                    $(".cs-contact-overlay").stop(true);
                    $(".cs-contact-overlay .cs-hide-animate-1").css({
                      display: "none",
                    });
                    $(".cs-contact-overlay .cs-hide-animate-4").css({
                      display: "flex",
                    });
                    $(".cs-contact-overlay .cs-hide-animate-4").animate(
                      { opacity: "1" },
                      800,
                      "swing"
                    );
                  }
                );
              });
          } else {
            if (page == "QA") {
              $(".cs-hide-animate-1").css({ display: "none" });
              $(".cs-hide-animate-3").css({ display: "block" });
            } else {
              $(".cs-contact-overlay .cs-hide-animate-1")
                .stop(true)
                .animate({ opacity: "0" }, 800, "swing", () => {
                  $(".cs-contact-overlay").animate(
                    { scrollTop: 0 },
                    500,
                    "easeOutQuad",
                    () => {
                      $(".cs-contact-overlay").stop(true);
                      $(".cs-contact-overlay .cs-hide-animate-1").css({
                        display: "none",
                      });
                      $(".cs-contact-overlay .cs-hide-animate-2").css({
                        display: "flex",
                      });
                      $(".cs-contact-overlay .cs-hide-animate-2").animate(
                        { opacity: "1" },
                        800,
                        "swing"
                      );
                    }
                  );
                });
              $("#contactInput11 input").val($("#contactInput1 input").val());
              $("#contactInput12 input").val($("#contactInput2 input").val());
              $("#contactInput11 input").prop("readonly", true);
              $("#contactInput12 input").prop("readonly", true);
            }
          }
        },
      });
      // $.post("https://ontego.de/mailer/mail.html", {
      //   mail_to: "vertrieb@commsult.de",
      //   mail_subject: "Anfrage",
      //   name: contactInput1,
      //   email: contactInput2,
      //   company: contactInput3 && contactInput3 !== "" ? contactInput3 : "",
      //   phone: contactInput4 && contactInput4 !== "" ? contactInput4 : "",
      //   link: window.location.href,
      //   note:
      //     "Ja, schicken Sie mir gerne einen Demo Termin: " +
      //     contactInputU11 +
      //     "<br />" +
      //     "Ja, aber vorher habe ich noch Fragen: " +
      //     contactInputU12 +
      //     "<br />" +
      //     "Lagerlogistik: " +
      //     contactInputU21 +
      //     "<br />" +
      //     "Produktion: " +
      //     contactInputU22 +
      //     "<br />" +
      //     "Inventur: " +
      //     contactInputU23 +
      //     "<br />" +
      //     "Service Management: " +
      //     contactInputU24 +
      //     "<br />" +
      //     "Instandhaltung: " +
      //     contactInputU25 +
      //     "<br />" +
      //     "Weitere Bereiche: " +
      //     contactInputU26 +
      //     "<br />" +
      //     "Nachricht: " +
      //     contactInput5,
      // })
      //   .done(function (data) {
      //     $(".cs-contact-overlay .cs-hide-animate-1")
      //       .stop(true)
      //       .animate({ opacity: "0" }, 800, "swing", () => {
      //         $(".cs-contact-overlay").animate(
      //           { scrollTop: 0 },
      //           1000,
      //           "easeOutQuad",
      //           () => {
      //             $(".cs-contact-overlay").stop(true);
      //             $(".cs-contact-overlay .cs-hide-animate-1").css({
      //               display: "none",
      //             });
      //             $(".cs-contact-overlay .cs-hide-animate-2").css({
      //               display: "flex",
      //             });
      //             $(".cs-contact-overlay .cs-hide-animate-2").animate(
      //               { opacity: "1" },
      //               800,
      //               "swing"
      //             );
      //           }
      //         );
      //       });
      //     $("#contactInput11 input").val($("#contactInput1 input").val());
      //     $("#contactInput12 input").val($("#contactInput2 input").val());
      //     $("#contactInput11 input").prop("readonly", true);
      //     $("#contactInput12 input").prop("readonly", true);
      //   })
      //   .fail(function (error) {
      //     $(".cs-contact-overlay .cs-hide-animate-1")
      //       .stop(true)
      //       .animate({ opacity: "0" }, 800, "swing", () => {
      //         $(".cs-contact-overlay").animate(
      //           { scrollTop: 0 },
      //           1000,
      //           "easeOutQuad",
      //           () => {
      //             $(".cs-contact-overlay").stop(true);
      //             $(".cs-contact-overlay .cs-hide-animate-1").css({
      //               display: "none",
      //             });
      //             $(".cs-contact-overlay .cs-hide-animate-4").css({
      //               display: "flex",
      //             });
      //             $(".cs-contact-overlay .cs-hide-animate-4").animate(
      //               { opacity: "1" },
      //               800,
      //               "swing"
      //             );
      //           }
      //         );
      //       });
      //   });
    } else {
      if (contactInput1 === "") {
        $("#contactInput1 input")
          .stop(true)
          .animate({ borderColor: "rgba(255,0,0,0.8)" }, 400, "swing", () => {
            $("#contactInput1 input").animate(
              { borderColor: "rgba(255,0,0,0)" },
              400,
              "swing",
              () => {
                $("#contactInput1 input").animate(
                  { borderColor: "rgba(255,0,0,0.6)" },
                  400,
                  "swing"
                );
  
                // validation error message name
                $("#contactInput1 .input-error-contact").stop(true).animate(
                  {
                    opacity: "1",
                  },
                  400,
                  "swing"
                );
                $("#contactInput1 .input-error-contact").css({
                  display: "block",
                });
              }
            );
          });
      }
      if (
        contactInput2 === "" ||
        !window.commsult.mailregex.test(contactInput2)
      ) {
        $("#contactInput2 input")
          .stop(true)
          .animate({ borderColor: "rgba(255,0,0,0.8)" }, 400, "swing", () => {
            $("#contactInput2 input").animate(
              { borderColor: "rgba(255,0,0,0)" },
              400,
              "swing",
              () => {
                $("#contactInput2 input").animate(
                  { borderColor: "rgba(255,0,0,0.6)" },
                  400,
                  "swing"
                );
  
                // validation error message email
                $("#contactInput2 .input-error-contact").stop(true).animate(
                  {
                    opacity: "1",
                  },
                  400,
                  "swing"
                );
                $("#contactInput2 .input-error-contact").css({
                  display: "block",
                });
              }
            );
          });
      }
      if (!contactInput6) {
        $("#contactInput6 .cs-checkmark")
          .stop(true)
          .animate({ borderColor: "rgba(255,0,0,0.8)" }, 400, "swing", () => {
            $("#contactInput6 .cs-checkmark").animate(
              { borderColor: "rgba(255,0,0,0)" },
              400,
              "swing",
              () => {
                $("#contactInput6 .cs-checkmark").animate(
                  { borderColor: "rgba(255,0,0,0.6)" },
                  400,
                  "swing"
                );
              }
            );
          });
      }
    }
  };
  
  validateContact3 = () => {
    var contactInput16 = $("#contactInput16 input").is(":checked");
  
    if (contactInput16) {
      $("#contactButton2").removeClass("cs-button-disabled");
      $("#contactButton2").animate({ opacity: 1 }, 300, "swing");
      $("#contactInput16 .cs-checkmark")
        .stop(true)
        .animate({ borderColor: "rgba(255,0,0,0)" }, 400, "swing");
    } else {
      $("#contactButton2").addClass("cs-button-disabled");
      $("#contactButton2").animate({ opacity: 0.6 }, 300, "swing");
      $("#contactInput16 .cs-checkmark")
        .stop(true)
        .animate({ borderColor: "rgba(255,0,0,0.8)" }, 400, "swing", () => {
          $("#contactInput16 .cs-checkmark").animate(
            { borderColor: "rgba(255,0,0,0)" },
            400,
            "swing",
            () => {
              $("#contactInput16 .cs-checkmark").animate(
                { borderColor: "rgba(255,0,0,0.6)" },
                400,
                "swing"
              );
            }
          );
        });
    }
  };
  
  validateContact4 = () => {
    var contactInput1 = $("#contactInput1 input").val();
    var contactInput2 = $("#contactInput2 input").val();
    var contactInput3 = $("#contactInput3 input").val();
    var contactInput4 = $("#contactInput4 input").val();
    var contactInput16 = $("#contactInput16 input").is(":checked");
  
    if (contactInput16) {
      $.post("https://ontego.de/mailer/cs_mailchimp_comment.html", {
        email: contactInput2,
        name: contactInput1,
        company: contactInput3 && contactInput3 !== "" ? contactInput3 : "",
        phone: contactInput4 && contactInput4 !== "" ? contactInput4 : "",
        link: window.location.href,
      })
        .done(function (data) {
          $(".cs-contact-overlay .cs-hide-animate-2")
            .stop(true)
            .animate({ opacity: "0" }, 800, "swing", () => {
              $(".cs-contact-overlay").animate(
                { scrollTop: 0 },
                1000,
                "easeOutQuad",
                () => {
                  $(".cs-contact-overlay").stop(true);
                  $(".cs-contact-overlay .cs-hide-animate-2").css({
                    display: "none",
                  });
                  $(".cs-contact-overlay .cs-hide-animate-3").css({
                    display: "flex",
                  });
                  $(".cs-contact-overlay .cs-hide-animate-3").animate(
                    { opacity: "1" },
                    800,
                    "swing",
                    () => {
                      setTimeout(function () {
                        closeContactOverlay();
                      }, 2000);
                      setTimeout(function () {
                        $(".cs-contact-overlay .cs-hide-animate-3").animate(
                          { opacity: "0" },
                          800,
                          "swing",
                          () => {
                            $(".cs-contact-overlay .cs-hide-animate-3").css({
                              display: "none",
                            });
                            $(".cs-contact-overlay .cs-hide-animate-1").css({
                              display: "flex",
                            });
                            $(".cs-contact-overlay .cs-hide-animate-1").animate(
                              { opacity: "1" },
                              800,
                              "swing"
                            );
                          }
                        );
                      }, 3000);
                    }
                  );
                }
              );
            });
        })
        .fail(function (xhr, status, error) {
          // error handling
  
          $(".cs-contact-overlay .cs-hide-animate-2")
            .stop(true)
            .animate({ opacity: "0" }, 800, "swing", () => {
              $(".cs-contact-overlay").animate(
                { scrollTop: 0 },
                1000,
                "easeOutQuad",
                () => {
                  $(".cs-contact-overlay").stop(true);
                  $(".cs-contact-overlay .cs-hide-animate-2").css({
                    display: "none",
                  });
                  $(".cs-contact-overlay .cs-hide-animate-4").css({
                    display: "flex",
                  });
                  $(".cs-contact-overlay .cs-hide-animate-4").animate(
                    { opacity: "1" },
                    800,
                    "swing"
                  );
                }
              );
            });
        });
    } else {
      $("#contactInput16 .cs-checkmark")
        .stop(true)
        .animate({ borderColor: "rgba(255,0,0,0.8)" }, 400, "swing", () => {
          $("#contactInput16 .cs-checkmark").animate(
            { borderColor: "rgba(255,0,0,0)" },
            400,
            "swing",
            () => {
              $("#contactInput16 .cs-checkmark").animate(
                { borderColor: "rgba(255,0,0,0.6)" },
                400,
                "swing"
              );
            }
          );
        });
    }
  };
  
  jQuery(window).on("load", function () {
    setTimeout(function () {
      $(".cs-cookies-overlay").css({ bottom: "0px", opacity: 1 });
    }, 2000);
  
    $(".cs-cookies-overlay .cs-button").click(function () {
      $(".cs-cookies-overlay").css({ bottom: "-110px", opacity: 0 });
    });
  
    setInterval(function () {
      $("#cs-demo-button .cs-button").addClass("cs-hover");
      setTimeout(function () {
        $("#cs-demo-button .cs-button").removeClass("cs-hover");
      }, 1000);
    }, 30000);
  });
  
  $(function () {
    $(".cs-custom-24 .flexslider").flexslider({
      slideshow: false,
    });
  
    $("input[type=email]").blur(function () {
      if (!window.commsult.mailregex.test($(this).val())) {
        $(this)
          .stop(true)
          .animate({ borderColor: "rgba(255,0,0,0.8)" }, 400, "swing", () => {
            $(this).animate(
              { borderColor: "rgba(255,0,0,0)" },
              400,
              "swing",
              () => {
                $(this).animate(
                  { borderColor: "rgba(255,0,0,0.6)" },
                  400,
                  "swing"
                );
              }
            );
            target = "_blank";
          });
      } else {
        $(this)
          .stop(true)
          .animate(
            { borderColor: "rgba(255,0,0,0)", borderBottomColor: "#0077B6" },
            400,
            "swing"
          );
      }
    });
  
    $(".cs-custom-10 input").blur(function () {
      $(".cs-contact-overlay input, #footer input").prop("disabled", true);
      setTimeout(function () {
        $(".cs-contact-overlay input, #footer input").prop("disabled", false);
      }, 2000);
    });
    $("#cs10Input1 input").blur(function () {
      validateForm1();
    });
    $("#cs10Input2 input").blur(function () {
      validateForm1();
    });
    $("#cs10Input5 input").change(function () {
      validateForm1();
    });
    $("#cs10Button1").hover(function () {
      if ($("#cs10Button1").hasClass("cs-button-disabled")) {
        validateForm2();
      }
    });
    $("#cs10Button1").click(function () {
      validateForm2();
    });
    $("#cs10Input15 input").change(function () {
      validateForm3();
    });
    $("#cs10Button2").hover(function () {
      if ($("#cs10Button2").hasClass("cs-button-disabled")) {
        validateForm4();
      }
    });
    $("#cs10Button2").click(function () {
      validateForm4();
    });
  
    $("#footer.dark .cs-form-field-group .cs-link-2").click(function () {
      validateFormFooter();
    });
  
    $(".cs-popup #popupInput1 input").blur(function () {
      validateFormPopUp1();
    });
    $(".cs-popup #popupInput2 input").change(function () {
      validateFormPopUp1();
    });
    $(".cs-popup .cs-button").hover(function () {
      if ($(".cs-popup .cs-button").hasClass("cs-button-disabled")) {
        validateFormPopUp2();
      }
    });
    $(".cs-popup .cs-button").click(function () {
      validateFormPopUp2();
    });
  
    $("#contactInput1 input").blur(function () {
      validateContact1();
    });
    $("#contactInput2 input").blur(function () {
      validateContact1();
    });
    $("#contactInput6 input").change(function () {
      validateContact1();
    });
    $("#contactButton1").hover(function () {
      if ($("#contactButton1").hasClass("cs-button-disabled")) {
        validateContact2($("#contactButton1.qa-form").length != 0 ? "QA" : "");
      }
    });
    $("#contactButton1").click(function () {
      validateContact2($("#contactButton1.qa-form").length != 0 ? "QA" : "");
    });
    $("#contactInput16 input").change(function () {
      validateContact3();
    });
    $("#contactButton2").hover(function () {
      if ($("#contactButton2").hasClass("cs-button-disabled")) {
        validateContact4();
      }
    });
    $("#contactButton2").click(function () {
      validateContact4();
    });
  
    $(".cs-tabs .tab-nav li").hover(
      function () {
        var tabIndex = $(this).prevAll().length;
        $(this).addClass("cs-active-tab");
        $(".tab-container .tab-content ul")
          .eq(tabIndex)
          .addClass("cs-active-tab");
        $(".cs-tabs .tab-nav li.cs-initial-active-tab").addClass(
          "cs-inactive-tab"
        );
        $(".tab-container .tab-content ul.cs-initial-active-tab").addClass(
          "cs-inactive-tab"
        );
      },
      function () {
        if ($(".tab-container .tab-content ul:hover").length === 0) {
          var tabIndex = $(this).prevAll().length;
          $(this).removeClass("cs-active-tab");
          $(".tab-container .tab-content ul")
            .eq(tabIndex)
            .removeClass("cs-active-tab");
          $(".cs-tabs .tab-nav li.cs-initial-active-tab").removeClass(
            "cs-inactive-tab"
          );
          $(".tab-container .tab-content ul.cs-initial-active-tab").removeClass(
            "cs-inactive-tab"
          );
        }
        $(".tab-container .tab-content .cs-active-tab").hover(
          function () {},
          function () {
            $(this).removeClass("cs-active-tab");
            $(".cs-tabs .tab-nav li.cs-active-tab").removeClass("cs-active-tab");
            $(".cs-tabs .tab-nav li.cs-initial-active-tab").removeClass(
              "cs-inactive-tab"
            );
            $(".tab-container .tab-content ul.cs-initial-active-tab").removeClass(
              "cs-inactive-tab"
            );
          }
        );
      }
    );
  
    $(".cs-tabs .tab-nav li a").each(function () {
      var tabIndex = $(this).parent().prevAll().length;
      if (tabIndex === 0) {
        $(".tab-container .tab-content").eq(tabIndex).css({ paddingLeft: -100 });
      } else {
        if ($(document).width() >= 992) {
          $(".tab-container .tab-content")
            .eq(tabIndex)
            .css({ paddingLeft: $(this).position().left - 15 - 100 });
        } else {
          $(".tab-container .tab-content")
            .eq(tabIndex)
            .css({ paddingLeft: $(this).position().left + 15 - 100 });
        }
      }
    });
  
    // $('#cs-header-row-bottom .tab-container .tab-content').each(function (index) {
    //     if ($(document).width() >= 992) {
    //         if (index === 0) {
    //             $(this).css({ paddingLeft: 0 }, 1, "swing");
    //         } else {
    //             // console.log('#cs-header-row-bottom .tab-nav li[aria-controls="' + $(this).attr('id') + '"]');
    //             $(this).css({ paddingLeft: ($('#cs-header-row-bottom .tab-nav li[aria-controls="' + $(this).attr('id') + '"]').position().left - 30) }, 1, "swing");
    //         }
    //     } else {
    //         if (index === 0) {
    //             $(this).css({ paddingLeft: 0 }, 1, "swing");
    //         } else {
    //             // console.log('#cs-header-row-bottom .tab-nav li[aria-controls="' + $(this).attr('id') + '"]');
    //             $(this).css({ paddingLeft: ($('#cs-header-row-bottom .tab-nav li[aria-controls="' + $(this).attr('id') + '"]').position().left + 30) }, 1, "swing");
    //         }
    //     }
    // });
    $("#cs-header-row-top").hover(showHeader(true), hideHeader(true));
    // $("#cs-primary-menu > ul > li").click(
    //     function () {
    //         if ($(this).find(".cs-expand-dropdown").length > 0) {
    //             $(this).find(".cs-dropdown-wrapper").removeClass("cs-expand-dropdown");
    //             $(this).removeClass("cs-expand-dropdown-li");
    //         } else {
    //             $(".cs-expand-dropdown").removeClass("cs-expand-dropdown");
    //             $(".cs-expand-dropdown-li").removeClass("cs-expand-dropdown-li");
    //             $(this).find(".cs-dropdown-wrapper").addClass("cs-expand-dropdown");
    //             $(this).addClass("cs-expand-dropdown-li");
    //         }
    //     },
    // );
    $(".cs-pointer .cs-header").click(function () {
      if ($(document).width() >= 992) {
        $(".cs-pointer.cs-expanded .cs-pointer-image").animate(
          { opacity: "0" },
          400,
          "swing"
        );
        $(".cs-pointer.cs-expanded .cs-pointer-image").css(
          { display: "none" },
          1,
          "swing"
        );
        $(".cs-pointer.cs-expanded p").animate({ opacity: "0" }, 400, "swing");
        $(".cs-pointer.cs-expanded p").animate(
          { maxHeight: "0px", marginTop: "0px" },
          400,
          "swing"
        );
        $(".cs-pointer.cs-expanded .cs-header").animate(
          { color: "#0077B6", fontSize: "16px", lineHeight: "22px" },
          400,
          "swing"
        );
        $(".cs-pointer-top-padding").animate({ height: 100 }, 400, "swing");
        $(".cs-pointer.cs-expanded").removeClass("cs-expanded");
  
        $(this).parent().parent().delay(400).addClass("cs-expanded");
        $(".cs-pointer-top-padding").animate(
          { height: (6 - $(this).parent().parent().prevAll().length) * 50 },
          400,
          "swing"
        );
        $(".cs-pointer.cs-expanded .cs-header")
          .delay(400)
          .animate(
            { color: "#2D333D", fontSize: "30px", lineHeight: "36px" },
            400,
            "swing"
          );
        $(".cs-pointer.cs-expanded p")
          .delay(400)
          .animate({ maxHeight: "140px", marginTop: "16px" }, 400, "swing");
        $(".cs-pointer.cs-expanded p").animate({ opacity: "1" }, 400, "swing");
        $(".cs-pointer.cs-expanded .cs-pointer-image")
          .delay(780)
          .css({ display: "block" }, 1, "swing");
        $(".cs-pointer.cs-expanded .cs-pointer-image").animate(
          { opacity: "1" },
          400,
          "swing"
        );
      }
    });
  
    $(".cs-link-1 .cs-arrow").html(
      '<?xml version="1.0" encoding="utf-8"?> <!-- Generator: Adobe Illustrator 23.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --> <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" 	 viewBox="0 0 19.4 17" style="enable-background:new 0 0 19.4 13.4;" xml:space="preserve"> <style type="text/css"> 	.st0{fill:none;stroke:#FFFFFF;stroke-width:2;} </style> <title>arrow_light_blue@1x</title> <desc>Created with Sketch.</desc> <g id="Symbols"> 	<g id="Button-blue-default" transform="translate(-153.000000, -15.000000)"> 		<g id="Arrow-light-blue" transform="translate(153.000000, 16.000000)"> 			<g> 				<path id="Line-3" class="st0 cs-svg-arrow" d="M17,5.7H0"/> 				<polyline id="Shape" class="st0 cs-svg-arrow" points="12,-0.3 18,5.7 12,11.7 				"/> 			</g> 		</g> 	</g> </g> </svg>'
    );
    $(".cs-link-2 .cs-arrow").html(
      '<?xml version="1.0" encoding="utf-8"?> <!-- Generator: Adobe Illustrator 23.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --> <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" 	 viewBox="0 0 19.4 17" style="enable-background:new 0 0 19.4 13.4;" xml:space="preserve"> <style type="text/css"> 	.st0{fill:none;stroke:#FFFFFF;stroke-width:2;} </style> <title>arrow_light_blue@1x</title> <desc>Created with Sketch.</desc> <g id="Symbols"> 	<g id="Button-blue-default" transform="translate(-153.000000, -15.000000)"> 		<g id="Arrow-light-blue" transform="translate(153.000000, 16.000000)"> 			<g> 				<path id="Line-3" class="st0 cs-svg-arrow" d="M17,5.7H0"/> 				<polyline id="Shape" class="st0 cs-svg-arrow" points="12,-0.3 18,5.7 12,11.7 				"/> 			</g> 		</g> 	</g> </g> </svg>'
    );
    $(".cs-link-4 .cs-arrow").html(
      '<?xml version="1.0" encoding="utf-8"?> <!-- Generator: Adobe Illustrator 23.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --> <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" 	 viewBox="0 0 19.4 17" style="enable-background:new 0 0 19.4 13.4;" xml:space="preserve"> <style type="text/css"> 	.st0{fill:none;stroke:#FFFFFF;stroke-width:2;} </style> <title>arrow_light_blue@1x</title> <desc>Created with Sketch.</desc> <g id="Symbols"> 	<g id="Button-blue-default" transform="translate(-153.000000, -15.000000)"> 		<g id="Arrow-light-blue" transform="translate(153.000000, 16.000000)"> 			<g> 				<path id="Line-3" class="st0 cs-svg-arrow" d="M17,5.7H0"/> 				<polyline id="Shape" class="st0 cs-svg-arrow" points="12,-0.3 18,5.7 12,11.7 				"/> 			</g> 		</g> 	</g> </g> </svg>'
    );
  
    if (
      $(document).width() >= 992 &&
      $(".cs-custom-24 h3 .cs-bottom-unerline").length > 0 &&
      $("#csHauptgrafikL1").length > 0 &&
      $("#csHauptgrafikL2").length > 0
    ) {
      $(".cs-custom-24 h3 .cs-bottom-unerline").css({
        width: $("#csHauptgrafikL1").width() + "px",
        left: $("#csHauptgrafikL1").position().left + "px",
      });
    }
  
    if (
      $(document).width() >= 992 &&
      window.commsult.super4.rowCount > $(".cs-super-4").length
    ) {
      $(".cs-super-4").css({
        height:
          window.commsult.super4.rowHeight * window.commsult.super4.rowCount,
      });
    }
    if (window.commsult.super4.rowCount === $(".cs-super-4").length) {
      $(".cs-super-4 .cs-container-wrapper").css({ position: "relative" });
    }
  
    $(".cs-super-4").each(function () {
      $(this).find(".cs-col-txt").eq(0).addClass("cs-active");
    });
  
    if ($(document).width() < 992) {
      $("#cs-primary-menu > ul > li > a > div").eq(1).html("Warum?");
      // $('.cs-dropdown-row-multi, .cs-dropdown-row').css({ height: $(window).innerHeight() - 117 });
      // $('.cs-dropdown-row').css({ height: $(window).innerHeight() - 117 });
      // $('.cs-dropdown-row-multi').css({ height: 110, padding: 0, border: '20px solid transparent', overflow: 'hidden', position: 'relative' });
      $(".cs-super-4 .cs-col-txt").each(function (i) {
        $(this).appendTo($(this).parent().parent().parent().find(".row").eq(i));
      });
      $(".cs-super-5 .cs-pointer-image").each(function () {
        $(this).prependTo($(this).parent());
      });
      $(".cs-super-5 h2").each(function () {
        $(this).prependTo($(this).parent().parent());
      });
      // $('#cs-header-row-top .cs-dropdown-submenu-wrapper').each(function () {
      //     $('<div class="cs-button cs-button-arrow" onclick="openContactOverlay()" style="margin-top: 15px; width: 100%;">Demo anfragen</div>').appendTo($(this));
      // });
      $("#cs-header-row-top .cs-dropdown-wrapper").each(function (
        index,
        element
      ) {
        if (index === 0) {
          $(
            '<div style="padding: 0 40px; height: 98px;"><div class="cs-button cs-button-arrow" onclick="openContactOverlay()" style="margin-top: 50px; width: 100%;">Demo anfragen</div></div>'
          ).appendTo($(element));
        } else {
          $(
            '<div style="padding: 0 40px; height: 63px;"><div class="cs-button cs-button-arrow" onclick="openContactOverlay()" style="margin-top: 15px; width: 100%;">Demo anfragen</div></div>'
          ).appendTo($(element));
        }
      });
      var asdf = function () {
        var parentElement = $(this).parent();
        if (parentElement.hasClass("cs-dropdown-mobile-expanded")) {
          $(".cs-dropdown-row-multi").removeClass("cs-dropdown-mobile-expanded");
        } else {
          // $('.cs-dropdown-row-multi').removeClass('cs-dropdown-mobile-expanded');
          parentElement.addClass("cs-dropdown-mobile-expanded");
        }
      };
      $("#cs-header-row-top .cs-dropdown-row-multi").each(function (
        index,
        element
      ) {
        $('<div class="cs-dropdown-row-toogle"></div>').appendTo($(element));
      });
      $(".cs-dropdown-row-toogle").click(asdf);
      // $('#cs-header-row-top .cs-dropdown-wrapper').eq(0).css({ height: $(window).innerHeight() - 117, background: '#FFFFFF', overflowY: 'scroll', WebkitOverflowScrolling: 'touch' });
      $("#cs-header-row-top .cs-dropdown-wrapper").css({
        height: $(window).innerHeight() - 117,
        background: "#FFFFFF",
        overflowY: "scroll",
        WebkitOverflowScrolling: "touch",
        padding: "50px 0",
      });
      // $('<div style="padding: 40px; background: \"#FFFFFF\";"><div class="cs-button cs-button-arrow" onclick="openContactOverlay()" style="margin-top: 15px; width: 100%;">Demo anfragen</div>').appendTo($('#cs-header-row-top .cs-dropdown-wrapper').eq(0));
    }
  
    if ($(document).width() <= 767) {
      $(".cs-page-title-1 .cs-col-img").each(function () {
        $(this).prependTo($(this).parent());
      });
      $(".cs-standard-module-2 .cs-img").each(function () {
        $(this).parent().prependTo($(this).parent().parent());
        $(this).parent().css({ marginBottom: "30px" });
      });
      $(".cs-standard-module-3 .cs-col-txt").each(function () {
        $(this).prependTo($(this).parent());
        $(this).css({ marginBottom: "30px" });
      });
      $(".cs-custom-13 .cs-col-heading").each(function () {
        $(this).appendTo($(this).parent().parent().parent());
      });
      $(".cs-standard-module-2 .tright").addClass("center");
      $(".cs-standard-module-2 .tright").removeClass("tright");
    }
  
    if ($(document).width() <= 575) {
      $(".cs-popup .cs-button").each(function () {
        $(this).appendTo($(this).parent().parent());
      });
    }
  });
  
  csDownloadEvent = (title, note, location, dateStart, dateEnd) => {
    var iCalEvent = ics();
    iCalEvent.addEvent(title, note, location, dateStart, dateEnd);
    iCalEvent.download(title);
  };
  
  csDownloadTwoEvents = (
    title1,
    note1,
    location1,
    dateStart1,
    dateEnd1,
    title2,
    note2,
    location2,
    dateStart2,
    dateEnd2
  ) => {
    var iCalEvent = ics();
    iCalEvent.addEvent(title1, note1, location1, dateStart1, dateEnd1);
    iCalEvent.addEvent(title2, note2, location2, dateStart2, dateEnd2);
    iCalEvent.download(title1);
  };
  
  $(document).on("click", 'a[href^="#section"]', function (event) {
    event.preventDefault();
    $("html,body")
      .stop(true)
      .animate(
        {
          scrollTop: $($.attr(this, "href")).offset().top - 40,
        },
        1000,
        "easeOutQuad"
      );
  });
  
  // Hfinder
  
  // Contact Switcher
  
  // jquery
  
  $(document).ready(function () {
    //main tab
    $(".contact-switcher__btn a").click(function (e) {
      // active deactivate tab buttons
      $(".contact-switcher__btn  a").removeClass("active");
      $(this).addClass("active");
  
      // show hide tab content
      var tabName = $(this).attr("data-tab");
      $(".contact-tab__content").removeClass("active");
      $(".contact-tab #" + tabName).addClass("active");
  
      // stop reload
      e.preventDefault();
    });
  });
  
  // Contact Form with hubspot
  $(document).ready(function () {
    $("#iName").on("input", function (e) {
      if (e.target.value) {
        $(".label-name").css({ display: "none" });
      } else {
        $(".label-name").css({ display: "block" });
      }
    });
    $("#iEmail").on("input", function (e) {
      if (e.target.value) {
        $(".label-email").css({ display: "none" });
      } else {
        $(".label-email").css({ display: "block" });
      }
    });
    $("#iCompany").on("input", function (e) {
      if (e.target.value) {
        $(".label-company").css({ display: "none" });
      } else {
        $(".label-company").css({ display: "block" });
      }
    });
  });
  
  const onSubmitForm = async () => {
    var error = false;
  
    const emailReg = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
    // var radioInput1 = $("#iRadio1 input").is(":checked");
    // var radioInput2 = $("#iRadio2 input").is(":checked");
  
    if (!$("#iName").val() || $("#iName").val() === "") {
      $("#iName").addClass("error");
      $(".input-error__name").addClass("error");
      error = true;
    }
    if (
      !$("#iEmail").val() ||
      $("#iEmail").val() === "" ||
      !emailReg.test($("#iEmail").val())
    ) {
      $("#iEmail").addClass("error");
      $(".input-error__email").addClass("error");
      error = true;
    }
    if (!$("#iCompany").val() || $("#iCompany").val() === "") {
      $("#iCompany").addClass("error");
      $(".input-error__company").addClass("error");
      error = true;
    }
    if ($("input#iCheck").is(":checked") === false) {
      $(".cs-checkmark").addClass("error");
      error = true;
    }
  
    if (!error) {
      $("#hubspotButton").addClass("cs-btn__load");
      const portalId = "8592818";
      const formId = "4320e957-c3fc-4b7c-8081-2b6632342d9b";
  
      const url =
        "https://api.hsforms.com/submissions/v3/integration/submit/" +
        portalId +
        "/" +
        formId;
  
      // var radioInput = radioInput1
      //   ? "Ja, schicken Sie mir gerne einen Demo Termin, "
      //   : "\nJa, aber vorher habe ich noch Fragen, ";
  
      var data = {
        fields: [
          {
            objectTypeId: "0-1",
            name: "email",
            value: $("#iEmail").val(),
          },
          {
            objectTypeId: "0-1",
            name: "firstname",
            value: $("#iName").val(),
          },
          {
            objectTypeId: "0-1",
            name: "company",
            value: $("#iCompany").val(),
          },
          {
            objectTypeId: "0-1",
            name: "phone",
            value: $("#iPhone").val(),
          },
          {
            objectTypeId: "0-1",
            name: "message",
            value: $("#iMessage").val(),
          },
        ],
      };
  
      $.ajax({
        type: "POST",
        url: url,
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify(data),
        success: function (response) {
          $("#hubspotFormOtg").trigger("reset");
          $("#hubspotButton").removeClass("cs-btn__load");
          window.location.href = "thank-you.html";
          // if (response.inlineMessage.toLowerCase().indexOf("thanks") < 0) {
          //   $("#hubspotButton").removeClass("cs-btn__load");
          //   window.location.href = "error.html";
          // } else {
          //   $("#hubspotForm").trigger("reset");
          //   $("#hubspotButton").removeClass("cs-btn__load");
          //   window.location.href = "thank-you.html";
          // }
        },
        error,
      });
    }
  };
  
  const goToContactPage = () => {
    window.location.href = "/contact.html";
  };
  
  $(window).on("load", function () {
    $(".cs-underline").addClass("anim");
  });
  