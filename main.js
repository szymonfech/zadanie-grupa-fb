let anchor1 = document.querySelector(".trigger1");
let anchor2 = document.querySelector(".trigger2");
let anchor3 = document.querySelector(".trigger3");
let anchor4 = document.querySelector(".trigger4");
let anchor5 = document.querySelector(".trigger5");
let anchor6 = document.querySelector(".trigger6");

let menuAnchor1 = document.querySelector(".menuAnchor1");
let menuAnchor2 = document.querySelector(".menuAnchor2");
let menuAnchor3 = document.querySelector(".menuAnchor3");

let content1 = document.querySelector(".section-content__1");
let content2 = document.querySelector(".section-content__2");
let content3 = document.querySelector(".section-content__3");

let contentRecomendetOffers1 = document.querySelector(".offer-one1");
let contentRecomendetOffers2 = document.querySelector(".offer-two2");
let contentRecomendetOffers3 = document.querySelector(".offer-one3");
let contentRecomendetOffers4 = document.querySelector(".offer-two4");
let contentRecomendetOffers5 = document.querySelector(".offer-one5");
let contentRecomendetOffers6 = document.querySelector(".offer-two6");

anchor1.addEventListener("click", function (e) {
    e.preventDefault();
    contentRecomendetOffers1.classList.toggle("showHide")
})
anchor2.addEventListener("click", function (e) {
    e.preventDefault();
    contentRecomendetOffers2.classList.toggle("showHide")
})
anchor3.addEventListener("click", function (e) {
    e.preventDefault();
    contentRecomendetOffers3.classList.toggle("showHide")
})
anchor4.addEventListener("click", function (e) {
    e.preventDefault();
    contentRecomendetOffers4.classList.toggle("showHide")
})
anchor5.addEventListener("click", function (e) {
    e.preventDefault();
    contentRecomendetOffers5.classList.toggle("showHide")
})
anchor6.addEventListener("click", function (e) {
    e.preventDefault();
    contentRecomendetOffers6.classList.toggle("showHide")
})




menuAnchor1.addEventListener("click", function () {
    content1.classList.toggle("showHide");
    menuAnchor1.classList.toggle("active");
    menuAnchor2.classList.remove("active");
    menuAnchor3.classList.remove("active");
    content2.classList.add("showHide");
    content3.classList.add("showHide");



});

menuAnchor2.addEventListener("click", function () {
    content1.classList.add("showHide");
    content2.classList.toggle("showHide");
    menuAnchor2.classList.toggle("active");
    menuAnchor1.classList.remove("active");
    menuAnchor3.classList.remove("active");
    content3.classList.add("showHide");
});

menuAnchor3.addEventListener("click", function () {

    content1.classList.add("showHide");
    content2.classList.add("showHide");
    content3.classList.toggle("showHide");
    menuAnchor3.classList.toggle("active");
    menuAnchor2.classList.remove("active");
    menuAnchor1.classList.remove("active");
});
