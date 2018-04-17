import "./normalize.css";
import "./index.scss";
'use strict';

window.onload = function () {
    
    var linkToTop = document.querySelector('.link-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 500) {
            linkToTop.style.opacity = 1;
        } else {
            linkToTop.style.opacity = 0;
        }
    });
}

