//"use strict"

//switching buttons
let buttons = document.querySelectorAll(".volume__button");
let images = document.querySelectorAll("volume__slide");
let image = 0;
if (buttons.length > 0) {
	for (let index = 0; index < buttons.length; index++) {
		const button = buttons[index];
		button.addEventListener("click", function(e) {
			for (let i = 0; i < buttons.length; i++) {
				if (buttons[i].classList.contains("volume__button_active")) {
					buttons[i].classList.remove("volume__button_active");
				}
			}
			if (document.documentElement.clientWidth > 625) {
				document.querySelector('.volume__slider-line').style.marginLeft = `${-596*(index-image)}px`;
			} else {
				document.querySelector('.volume__slider-line').style.marginLeft = `${-93*(index-image)}vw`;
			}
			button.classList.add("volume__button_active");
		})
	}
}

//slick slider
$(document).ready(function(){
	$('.reviews__slider').slick({
		arrows: true,
		dots: true,
		centerMode: true,
		slidesToShow: 1,
		responsive: [
			{
				breakpoint: 600,
				settings: {
					arrows: false,
				}
			},
		]
	});
});