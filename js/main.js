
"use strict"

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
				document.querySelector('.volume__slider-line').style.marginLeft = (-596*(index-image))+'px';
			} else {
				document.querySelector('.volume__slider-line').style.marginLeft = (-93*(index-image))+'vw';
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
document.querySelectorAll('.answers__answer').forEach((item) => 
	item.addEventListener('click', () => {
		if (item.classList.contains('answers__answer_active')) {
			item.classList.remove('answers__answer_active');
			item.nextElementSibling.classList.remove('answers__text_active')		
		} else {
			let answers = document.querySelectorAll('.answers__answer');
			for (let index = 0; index < answers.length; index++) {
				let item = answers[index];
				item.classList.remove('answers__answer_active');
				item.nextElementSibling.classList.remove('answers__text_active')			
			}
			item.classList.add('answers__answer_active');
			item.nextElementSibling.classList.add('answers__text_active')			
		}
	}))
const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector("body");
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;

const timeout = 600;

if (popupLinks.length > 0) {
	for (let index = 0; index < popupLinks.length; index++) {
		const popupLink = popupLinks[index];
		popupLink.addEventListener("click", function (e) {
			const popupName = popupLink.getAttribute('popup-name');
			const curentPopup = document.getElementById(popupName);
			popupOpen(curentPopup);
			e.preventDefault();
		});
	}
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
	for (let index = 0; index < popupCloseIcon.length; index++) {
		const el = popupCloseIcon[index];
		el.addEventListener('click', function (e) {
			popupClose(el.closest('.popup'));
			e.preventDefault();
		});
	}
}

function popupOpen(curentPopup) {
	if (curentPopup && unlock) {
		const popupActive = document.querySelector('.popup.open');
		if (popupActive) {
			popupClose(popupActive, false);
		} else {
			bodyLock();
		}
		curentPopup.classList.add('open');
		curentPopup.addEventListener('click', function (e) {
			if (!e.target.closest('.popup__content')) {
				popupClose(e.target.closest('.popup'));
			}
		});
	}
}

function popupClose(popupActive, doUnlock = true) {
	if (unlock) {
		popupActive.classList.remove('open');
		if (doUnlock) {
			bodyUnLock();
		}
	}
}

function bodyLock() {
	const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

	if (lockPadding.length > 0) {
		for (let index = 0; index < lockPadding.length; index++) {
			const el = lockPadding[index];
			el.style.paddingRight = lockPaddingValue;
		}
	}
	body.style.paddingRight = lockPaddingValue;
	body.classList.add('lock');

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

function bodyUnLock() {
	setTimeout(function () {
		if (lockPadding.length > 0) {
			for (let index = 0; index < lockPadding.length; index++) {
				const el = lockPadding[index];
				el.style.paddingRight = '0px';
			}
		}
		body.style.paddingRight = '0px';
		body.classList.remove('lock');
	}, timeout);

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

document.addEventListener('keydown', function(e) {
	if (e.which === 27) {
		const popupActive = document.querySelector('.popup.open');
		popupClose(popupActive);
	}
})

// Полифилы
/*(function() {

	// проверяем поддержку
	if (!Element.prototype.closest) {
		// реализуем
		Element.prototype.closest = function(css) {
			var node = this;
			while (node) {
				if (node.matches(css)) return node;
				else node = node.parentElement;
			}
			return null;
		};
	}
})();
(function () {
	// проверяем поддержку
	if (!Element.prototype.matches) {
		// реализуем
		Element.prototype.matches = Element.prototype.matchesSelector ||
			Element.prototype.webkitMatchesSelector ||
			Element.prototype.mozMatchesSelector ||
			Element.prototype.msMatchesSelector;
	}
})();*/
const animItems = document.getElementsByClassName('_anim-item');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')){
					animItem.classList.remove('_active');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
	}
	animOnScroll();
}