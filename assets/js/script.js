document.addEventListener("DOMContentLoaded", function () {
    var themeBrick = document.querySelectorAll(".theme-brick");
    var svgPrimary;
    var svgAccent;
    var getTheme;
    var theme = {
        yellow: {
            primary: "#FFB400",
            accent: "#070C2B"
        },
        blue: {
            primary: "#00B0FF",
            accent: "#0C0082"
        },
        red: {
            primary: "#FF7474",
            accent: "#140C65"
        },
        turquoise: {
            primary: "#2CE7A9",
            accent: "#24138A"
        },
        pink: {
            primary: "#FFB5DF",
            accent: "#0518D2"
        }
    };
    if (themeBrick != undefined && themeBrick != null) {
        for (var i = 0; i < themeBrick.length; i++) {
            themeBrick[i].addEventListener("click", function () {
                for (var j = 0; j < themeBrick.length; j++) {
                    if (themeBrick[j].classList.contains("active")) {
                        themeBrick[j].classList.remove("active");
                    }
                }
                this.classList.add("active");

                getTheme = this.dataset.theme;

                if(svgPrimary == undefined && svgPrimary == null && svgAccent == undefined && svgAccent == null){
                    svgPrimary = document.querySelectorAll(".vi-primary");
                    svgAccent = document.querySelectorAll(".vi-accent");
                }
                for(var k = 0; k < svgPrimary.length; k++){
                    svgPrimary[k].style.fill = theme[getTheme].primary;
                }
                for(var l = 0; l < svgAccent.length; l++){
                    svgAccent[l].style.fill = theme[getTheme].accent;
                }
            });
        }
    }
    //Distro
    var chDistroWrapper = document.querySelector(".ch-distro-wrapper");
    var chDistroIcon = document.querySelector(".ch-distro-icon");
    chDistroIcon.addEventListener("click", function () {
        if (this.classList.contains("ch-distro-icon-active")) {
            chDistroWrapper.classList.remove("ch-distro-wrapper-flap-up");
            chDistroWrapper.classList.add("ch-distro-wrapper-flap-down");
            setTimeout(function () {
                chDistroIcon.classList.remove("ch-distro-icon-active");
                chDistroWrapper.classList.remove("ch-distro-wrapper-visible");
            }, 400);
        } else {
            if (chDistroWrapper.classList.contains("ch-distro-wrapper-flap-down")) {
                chDistroWrapper.classList.remove("ch-distro-wrapper-flap-down");
            }
            chDistroWrapper.classList.add("ch-distro-wrapper-visible");
            chDistroWrapper.classList.add("ch-distro-wrapper-flap-up");
            this.classList.add("ch-distro-icon-active");
        }
    });
    var closeNotification = document.querySelector(".notification-close");
        var wrapperNotification = document.querySelector(".notification-wrapper");
        var createDate = new Date();

        if (wrapperNotification != undefined) {
            if (typeof (Storage) !== "undefined") {
                lastViewed = localStorage.getItem("lastView");
                if (lastViewed != undefined) {
                    if (lastViewed != createDate.getDate()) {
                        wrapperNotification.classList.add("notification-visible");
                    } else {
                        wrapperNotification.classList.remove("notification-visible");
                    }
                } else {
                    wrapperNotification.classList.add("notification-visible");
                }
            }
        }

        if (closeNotification != undefined) {
            closeNotification.addEventListener("click", function () {
                if (wrapperNotification != undefined) {
                    wrapperNotification.parentNode.removeChild(wrapperNotification);
                }
                if (typeof (Storage) !== "undefined") {
                    localStorage.setItem("lastView", createDate.getDate());
                }
            });
        };
});