document.querySelectorAll('.answers__answer').forEach((item) => 
	item.addEventListener('click', () => {
		if (item.classList.contains('answers__answer_active')) {
			item.classList.remove('answers__answer_active');
			item.nextElementSibling.classList.remove('answers__text_active')
			//item.nextElementSibling.hidden = true;
			
		} else {
			let answers = document.querySelectorAll('.answers__answer');
			for (let index = 0; index < answers.length; index++) {
				let item = answers[index];
				item.classList.remove('answers__answer_active');
				item.nextElementSibling.classList.remove('answers__text_active')
				//item.nextElementSibling.hidden = true;
				
			}
			item.classList.add('answers__answer_active');
			item.nextElementSibling.classList.add('answers__text_active')
			//item.nextElementSibling.hidden = false;
			
		}
	}))
/*let answers = document.querySelectorAll('.answers__answer');
if (answers.length > 0) {
	for (let index = 0; index < answers.length; index++) {
		let item = answers[index];
		if (item.classList.contains('answers__answer_active')) {
			item.nextElementSibling.hidden = false;
		} else {
			item.nextElementSibling.hidden = true;
		}
	}
}*/

//----------------------------------------------------------------------

/* SLIDE UP */

/*let _slideUp = (target, duration=500) => {

    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.boxSizing = 'border-box';
    target.style.height = target.offsetHeight + 'px';
    target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    window.setTimeout( () => {
          target.style.display = 'none';
          target.style.removeProperty('height');
          target.style.removeProperty('padding-top');
          target.style.removeProperty('padding-bottom');
          target.style.removeProperty('margin-top');
          target.style.removeProperty('margin-bottom');
          target.style.removeProperty('overflow');
          target.style.removeProperty('transition-duration');
          target.style.removeProperty('transition-property');
          //alert("!");
    }, duration);
}

// SLIDE DOWN 
let _slideDown = (target, duration=500) => {

    target.style.removeProperty('display');
    let display = window.getComputedStyle(target).display;
    if (display === 'none') display = 'block';
    target.style.display = display;
    let height = target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.boxSizing = 'border-box';
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + 'ms';
    target.style.height = height + 'px';
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    window.setTimeout( () => {
      target.style.removeProperty('height');
      target.style.removeProperty('overflow');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
    }, duration); 
}

// TOOGLE 
var _slideToggle = (target, duration = 500) => {
    if (window.getComputedStyle(target).display === 'none') {
      return slideDown(target, duration);
    } else {
      return slideUp(target, duration);
    }
}*/