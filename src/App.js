import { useState, useEffect } from "react";
import Card from "./components/Card";
import Question from "./components/Question";
import countryCodes from "./data/countryCodes.json";

const questions = [
	function (countries) {
		const random = getRandomItem(countries);
		return {
			q: `${random.capital} is the capital of`,
			a: random.name,
			options: countries.map((country) => country.name),
		};
	},
	function (countries) {
		const random = getRandomItem(countries);
		return {
			q: `People in ${random.name}, speak`,
			a: random.languages[0].name,
			options: countries.map((country) => country.languages[0].name),
		};
	},
];

const getRandomNum = (ceiling) => {
	return Math.floor(Math.random() * ceiling);
};

const getRandomItem = (array) => {
	return array[getRandomNum(array.length)];
};

// Build an array of random country codes
const getRandomCodes = (number) => {
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
const buildQueryStr = (listOfCodes) => {
	let baseURL = `https://restcountries.eu/rest/v2/alpha?codes=`;
	return listOfCodes.reduce((accumulator, current) => {
		return accumulator + `${current};`;
	}, baseURL);
};

// Returns a Q&A object
const generateQuestion = (countries) => {
	// Get random question
	return getRandomItem(questions)(countries);
};

//  APP
const App = () => {
	const [currentQuestion, setCurrentQuestion] = useState("");
	const [countries, setCountries] = useState([]);
	const [selected, setSelected] = useState("");

	useEffct(() => {
		fetch(buildQueryStr(getRandomCodes(4)))
			.then((res) => res.json())
			.then((data) => setCountries(data));
	});

	return (
		<div className="app">
			<div>
				<h1>Country Quiz</h1>
				<Card>
					<Question question={currentQuestion} />
				</Card>
			</div>
		</div>
	);
};

export default App;
