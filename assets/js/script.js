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

    // <div class="fade-overlay">
    //     <div class="dialog">
    //         <h2>Upvote on <span class="label">ProductHunt</span></h2>
    //         <p>You can really appreciate Vivid.JS - Open Source SVG Icons Library on ProductHunt to show your support.</p>
    //         <div class="buttons">
    //             <a class="dg-upvote" target="_blank" rel="noopener" href="https://www.producthunt.com/posts/vivid-js-svg-icons-javascript-library">Upvote</a>
    //             <a class="dg-close" href="javascript:void(0)">I don't care</a>
    //         </div>
            
    //     </div>
    // </div>
    var vBody = document.body;
    var vfadeOverlay = document.querySelector(".fade-overlay");
    var vDialog = document.querySelector(".dialog");
    var vUpvote = document.querySelector(".dg-upvote");
    var vClose = document.querySelector(".dg-close");
    var dialogPreview = localStorage.getItem("dialog");
    console.log(dialogPreview);
    
    var hideDialog = function(){
        vfadeOverlay.classList.add("hide-overlay");
        setTimeout(function(){
            if(vBody.classList.contains("overflow-blocked")){
                vBody.classList.remove("overflow-blocked");
            }
            if(vfadeOverlay.classList.contains("fade-overlay-show")){
                vfadeOverlay.classList.remove("fade-overlay-show");
            }
        },500);
    }

    var showDialog = function(){
       if(vfadeOverlay != undefined && vfadeOverlay != null){
            vBody.classList.add("overflow-blocked");
            vfadeOverlay.classList.add("fade-overlay-show");
            vUpvote.addEventListener("click", function(){
                hideDialog();
                if(typeof(Storage) !== "undefined"){
                    localStorage.setItem("dialog","hidden");
                }
            });
            vClose.addEventListener("click", function(){
                hideDialog();
                if(typeof(Storage) !== "undefined"){
                    localStorage.setItem("dialog","hidden");
                }
            });
       }
    };

    if(typeof(Storage) !== "undefined"){
        if(dialogPreview == undefined || dialogPreview == null || dialogPreview !== "hidden"){
            console.log(dialogPreview);
                setTimeout(showDialog, 15000);
        }
    }

});