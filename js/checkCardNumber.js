class CheckCardNumber {
	constructor(cardNumber) {
		this.cardNumber = cardNumber;
	}

	getCardNumber() {
		console.log(`Nr karty: ${this.cardNumber}`);
		return this.cardNumber;
	}
}

export default CheckCardNumber;
