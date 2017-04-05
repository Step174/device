var active = document.querySelector(".js-modal-content");
var popup = document.querySelector(".modal-content");
var close = popup.querySelector(".modal-content-close");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");
var storage = localStorage.getItem("login");

active.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("modal-content-show");

    if (storage) {
        login.value = storage;
        password.focus();
    } else {
        login.focus();
    }

});

close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("modal-content-show");
    popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(event) {
    event.preventDefault();
    if (!login.value || !password.value) {
        event.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
    } else {
        localStorage.setItem("login", login.value);
    }
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        if (popup.classList.contains("modal-content-show")) {
            popup.classList.remove("modal-content-show");
            popup.classList.remove("modal-error");
        }
    }
});



var mapOpen = document.querySelector(".js-open-map");

var mapPopup = document.querySelector(".modal-content-map");
var mapClose = mapPopup.querySelector(".modal-content-close");

mapOpen.addEventListener("click", function(event) {
    event.preventDefault();
    mapPopup.classList.add("modal-content-show");
});

mapClose.addEventListener("click", function(event) {
    event.preventDefault();
    mapPopup.classList.remove("modal-content-show");
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        if (mapPopup.classList.contains("modal-content-show")) {
            mapPopup.classList.remove("modal-content-show");
        }
    }
});



var slider1 = document.querySelector(".js-slider1");
var slider2 = document.querySelector(".js-slider2");
var slider3 = document.querySelector(".js-slider3");

var promo1 = document.querySelector(".slider-1");
var promo2 = document.querySelector(".slider-2");
var promo3 = document.querySelector(".slider-3");

var btnSlider = document.querySelectorAll(".item-promo-info .btn");



slider1.addEventListener("click", function() {
    promo1.classList.add("show-slider");
    promo2.classList.remove("show-slider");
    promo3.classList.remove("show-slider");
});

slider2.addEventListener("click", function() {
    promo2.classList.add("show-slider");
    promo1.classList.add("slider-none");
    promo1.classList.remove("show-slider");
    promo3.classList.remove("show-slider");
});

slider3.addEventListener("click", function() {
    promo3.classList.add("show-slider");
    promo1.classList.add("slider-none");
    promo1.classList.remove("show-slider");
    promo2.classList.remove("show-slider");
});