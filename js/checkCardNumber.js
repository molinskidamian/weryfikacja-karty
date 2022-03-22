class CheckCardNumber {
	constructor(cardNumber) {
		this.cardNumber = cardNumber.join('');
		this.cardIssuer = ['MasterCard', 'Visa', 'American Express', 'Nieprawidłowy'];
	}

	setCardIssuer(cardNumber) {
		if (cardNumber.length === 13) {
			console.log(`Karta firmy: ${this.cardIssuer[1]}`); // Visa
		}
	}

	checkVisa() {
		if (cardNumber.indexOf(0) === 4) {
			console.log('Pierwsza cyfra to 4, więc jest to karta Visa');
		}
	}

	checkAmericanExpress() {
		if (this.cardNumber.length === 15) {
			console.log(`Karta posiada długość 15 tak jak American Express`); // American Express
			// console.log(this.cardNumber.at(0));

			if (this.cardNumber.at(0) == 3) {
				console.log('Dobrze: Pierwsza cyfra American Express to 3');

				if (this.cardNumber.at(1) == 4 || this.cardNumber.at(1) == 7) {
					console.log('Super! jest to karta American Express!');
					console.log(this.cardNumber);
				} else {
					console.log('Dwie pierwsze cyfry się nie zgadzają');
				}
			} else {
				console.log('Error: to nie jest carta American Express!');
			}
		} else {
			console.log('Number karty jest inny niż 15 cyfr');
		}
	}

	getCardNumber() {
		console.log(this.cardNumber);
		return this.cardNumber;
	}

	getCardIssuer() {
		// wydawca karty
	}
}

export default CheckCardNumber;
