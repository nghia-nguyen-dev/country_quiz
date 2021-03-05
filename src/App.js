import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import Quiz from "./components/Quiz";
import countryCodes from "./data/countryCodes.json";
import Button from "components/Button";
import LoadingScreen from "components/LoadingScreen";
import Results from "components/Results";

const config = {
	options: 4,
	questions: 5,
};

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
	const [currentQuestion, setCurrentQuestion] = useState({});
	const [counter, setCounter] = useState(5);
	const [selected, setSelected] = useState(false);
	const [showResults, setShowResults] = useState(false)

	useEffect(() => {
		fetch(buildQueryStr(getRandomCodes(config.options)))
			.then((res) => res.json())
			.then((data) => generateQuestion(data))
			.then((q) => setCurrentQuestion(q));
	}, [counter]);

	const QuizOptions = () => {
		return currentQuestion.options?.map((option) => {
			return (
				<li
					onClick={() => {
						console.log(`<li>`);
						setSelected(true);
						// show correct/wrong answer
						setShowResults(true)
					}}
				>
					{option}
				</li>
			);
		});
	};

	const QuizResults = () => {
		return <div>Results</div>
	}

	return (
		<div className="app">
			<div className="container">
				<h1>Country Quiz</h1>
				<div className="card">
					<h2>{currentQuestion.q}</h2>
					<ul>{showResults ? QuizResults():QuizOptions()}</ul>
					<button
						onClick={() => {
							setShowResults(false)
							if (counter !== 0) {
								setCounter(counter - 1);
							} else {
								// show score board
							}
						}}
					>
						Next
					</button>
				</div>
			</div>
		</div>
	);
};

export default App;
