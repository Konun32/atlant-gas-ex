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