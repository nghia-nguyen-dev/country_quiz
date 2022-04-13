import countryCodes from "data/countryCodes.json";

export const questions = [
	function (countries) {
		const random = getRandomItem(countries);
		return {
			subject: "capital",
			question: `${random.capital} is the capital of`,
			answer: random.name,
			options: countries.map((country) => country.name),
		};
	},

	function (countries) {
		const random = getRandomItem(countries);
		return {
			subject: "flag",
			question: `This is the flag of`,
			answer: random.name,
			options: countries.map((country) => country.name),
			imgSrc: random.flags.png,
		};
	},
];

export const getRandomNum = (ceiling) => {
	return Math.floor(Math.random() * ceiling);
};

export const getRandomItem = (array) => {
	return array[getRandomNum(array.length)];
};

// Build an array of random country codes
export const getRandomCodes = (number) => {
	const temp = [];

	for (let i = 1; i <= number; i++) {
		let randomCode;
		do {
			randomCode = getRandomItem(countryCodes);
		} while (temp.includes(randomCode));
		temp.push(randomCode);
	}

	return temp;
};

// Append country codes to base url
export const buildQueryStr = (listOfCodes) => {
	const baseURL = `https://restcountries.com/v3.1/alpha?codes=`;
	return listOfCodes.reduce((accumulator, current) => {
		return accumulator + `${current},`;
	}, baseURL);
};

// Returns a Q&A object
export const generateQuestion = (countries) => {
	return getRandomItem(questions)(countries);
};
