document.addEventListener('DOMContentLoaded', () => {
	let answers = {
		'reading': {
			'correct': 0,
			'incorrect': 0
		},
		'writing': {
			'correct': 0,
			'incorrect': 0
		},
		'math_nocalc': {
			'correct': 0,
			'incorrect': 0
		},
		'math_calc': {
			'correct': 0,
			'incorrect': 0
		}
	}

	function updateLocalStorage(){
		localStorage.setItem("answers", JSON.stringify(answers))
	}

	function updateTotals(){
		document.querySelector('.total__correct.reading').innerHTML = answers['reading']['correct']
		document.querySelector('.total__incorrect.reading').innerHTML = answers['reading']['incorrect']
		document.querySelector('.total__correct.writing').innerHTML = answers['writing']['correct']
		document.querySelector('.total__incorrect.writing').innerHTML = answers['writing']['incorrect']
		document.querySelector('.total__correct.math_calc').innerHTML = answers['math_calc']['correct']
		document.querySelector('.total__incorrect.math_calc').innerHTML = answers['math_calc']['incorrect']
		document.querySelector('.total__correct.math_nocalc').innerHTML = answers['math_nocalc']['correct']
		document.querySelector('.total__incorrect.math_nocalc').innerHTML = answers['math_nocalc']['incorrect']
		updateLocalStorage()
	}

	document.querySelectorAll('.correct').forEach(correct => {
		correct.onclick = () => {
			incorrect = correct.parentElement.children[1]
			
			if (incorrect.dataset.is_selected == "1"){
				incorrect.style.backgroundColor = 'white'
				incorrect.style.color = 'red'
				incorrect.dataset.is_selected = "0"
				answers[incorrect.parentElement.parentElement.parentElement.parentElement.dataset.part]['incorrect'] -= 1
			}

			if (correct.dataset.is_selected == '0'){
				correct.style.backgroundColor = 'limegreen'
				correct.style.color = 'white'
				correct.dataset.is_selected = "1"
				answers[correct.parentElement.parentElement.parentElement.parentElement.dataset.part]['correct'] += 1
			} else {
				correct.style.backgroundColor = 'white'
				correct.style.color = 'green'
				correct.dataset.is_selected = "0"
				answers[correct.parentElement.parentElement.parentElement.parentElement.dataset.part]['correct'] -= 1
			}
			updateTotals()
		}
	})
	document.querySelectorAll('.incorrect').forEach(incorrect => {
		incorrect.onclick = () => {
			correct = incorrect.parentElement.children[0]

			if (correct.dataset.is_selected == "1"){
				correct.style.backgroundColor = 'white'
				correct.style.color = 'green'
				correct.dataset.is_selected = "0"
				answers[correct.parentElement.parentElement.parentElement.parentElement.dataset.part]['correct'] -= 1
			}

			if (incorrect.dataset.is_selected == '0'){
				incorrect.style.backgroundColor = 'red'
				incorrect.style.color = 'white'
				incorrect.dataset.is_selected = "1"
				answers[incorrect.parentElement.parentElement.parentElement.parentElement.dataset.part]['incorrect'] += 1
			} else {
				incorrect.style.backgroundColor = 'white'
				incorrect.style.color = 'red'
				incorrect.dataset.is_selected = "0"
				answers[incorrect.parentElement.parentElement.parentElement.parentElement.dataset.part]['incorrect'] -= 1
			}
			updateTotals()
		}
	})
})