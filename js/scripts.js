import CheckCardNumber from './checkCardNumber';

const btn = document.querySelector('.btn-check');
const result = document.querySelector('.result');

btn.addEventListener('click', e => {
	e.preventDefault();

	const cardNumberParts = document.querySelectorAll('.card-number');
	// const cardNumberPartsArr = Array.from(cardNumberParts);
	const cardNumberPartsArr = [...cardNumberParts];

	const cardNumber = cardNumberPartsArr.map(el => el.value);
	console.log(cardNumber);
	// cardNumber.toString();

	const card = new CheckCardNumber(cardNumber);
	result.textContent = card.getCardNumber();
});
