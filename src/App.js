import { useState, useEffect } from "react";
import Card from "./components/Card";
import Question from "./components/Question";
import countryCodes from "./data/countryCodes.json";

const questions = [
	function (countries) {
		const random = getRandomItem(countries);
		return {
			subject: "capital",
			q: `${random.capital} is the capital of`,
			a: random.name,
			options: countries.map((country) => country.name),
		};
	},
	function (countries) {
		const random = getRandomItem(countries);
		return {
			subject: "language",
			q: `${random.languages[0].nativeName} is the native language of`,
			a: random.name,
			options: countries.map((country) => country.name),
		};
	},
	function (countries) {
		const random = getRandomItem(countries);
		return {
			subject: "flag",
			q: `This is the flag of`,
			a: random.name,
			options: countries.map((country) => country.name),
			imgSrc: random.flag,
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
	const baseURL = `https://restcountries.eu/rest/v2/alpha?codes=`;
	return listOfCodes.reduce((accumulator, current) => {
		return accumulator + `${current};`;
	}, baseURL);
};

// Returns a Q&A object
const generateQuestion = (countries) => {
	return getRandomItem(questions)(countries);
};

// ----------------------------------------------------------------- APP
const App = () => {
	const [tally, setTally] = useState(0);
	const [countries, setCountries] = useState([]);
	const [questions, setQuestions] = useState(5);

	useEffect(() => {
      console.log(`effect`)
		fetch(buildQueryStr(getRandomCodes(4)))
			.then((res) => res.json())
			.then((data) => setCountries(data));
	}, [questions]);

	const renderedResults = () => {
		return <div>{`You got ${tally} correct out of 5`}</div>;
	};

	const renderContent = () => {
		return !countries.length ? (
			<div className="loading-text">Loading...</div>
		) : (
			<div>
				<h1>Country Quiz</h1>
				<Card>
					{questions === 0 ? (
						renderedResults()
					) : (
						<Question
							question={generateQuestion(countries)}
							tally={tally}
							setTally={setTally}
							questions={questions}
							setQuestions={setQuestions}
						/>
					)}
				</Card>
			</div>
		);
	};

	return <div className="app">{renderContent()}</div>;
};

export default App;
