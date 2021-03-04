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
	const [counter, setCounter] = useState(config.questions); // Number of questions
	const [score, setScore] = useState(0); // Correct answers
	const [currentQuestion, setCurrentQuestion] = useState(null);
	const [nextQuestion, setNextQuestion] = useState(null);
	const [reveal, setReveal] = useState(false)

	useEffect(() => {
		fetch(buildQueryStr(getRandomCodes(config.options)))
			.then((res) => res.json())
			.then((data) => generateQuestion(data))
			.then((q) => setCurrentQuestion(q));
	}, []);

	const fetchNextData = () => {
		fetch(buildQueryStr(getRandomCodes(config.options)))
			.then((res) => res.json())
			.then((data) => generateQuestion(data))
			.then((question) => setNextQuestion(question));
	};

	return (
		<div className="app">
			{currentQuestion === null ? (
				<LoadingScreen />
			) : (
				<div>
					<h1>Country Quiz</h1>
					<Card>
						{counter === 0 ? (
							<Results score={score} />
						) : (
							<Quiz
								currentQuestion={currentQuestion}
								score={score}
								setScore={setScore}
								counter={counter}
								setCounter={setCounter}
								fetchNextData={fetchNextData}
								reveal={reveal}
								setReveal={setReveal}
							/>
						)}
						<Button
							nextQuestion={nextQuestion}
							setCurrentQuestion={setCurrentQuestion}
							setReveal={setReveal}
						/>
					</Card>
				</div>
			)}
		</div>
	);
};

export default App;
