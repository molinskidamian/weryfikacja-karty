import CheckCardNumber from './checkCardNumber';

const btn = document.querySelector('.btn-check');
const result = document.querySelector('.result');

btn.addEventListener('click', e => {
	e.preventDefault();

	const cardNumberParts = document.querySelectorAll('.card-number');
	const cardNumberPartsArr = [...cardNumberParts];

	const card = new CheckCardNumber(cardNumberPartsArr.map(el => el.value));
	result.textContent = card.getCardNumber();
	card.checkAmericanExpress();
});
