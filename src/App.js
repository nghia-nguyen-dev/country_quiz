import React, { useState, useEffect } from "react";
import countryCodes from "./data/countryCodes.json";
import QuizOptions from "components/QuizOptions";

const config = {
	options: 4,
	questions: 5,
};

const questions = [
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
			subject: "language",
			question: `${random.languages[0].nativeName} is the native language of`,
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
	const [state, setState] = useState(1);
	const [counter, setCounter] = useState(config.questions);
	const [selected, setSelected] = useState("");

	useEffect(() => {
		// Only fetch in state 1
		if (state === 1) {
			console.log(`fetching data`);
			fetch(buildQueryStr(getRandomCodes(config.options)))
				.then((res) => res.json())
				.then((data) => generateQuestion(data))
				.then((q) => setCurrentQuestion(q));
		}
	}, [state]);

	const handleNextClick = () => {
		if (counter === 0) {
			setState(3);
		} else {
			setState(1);
		}
	};

	const handleOptionClick = (option) => {
		if (state === 2) {
			return;
		}
		console.log(`option clicked!`);
		setState(2);
		setCounter(counter - 1);
		setSelected(option);
	};

	const renderCard = (state) => {
		switch (state) {
			case 1:
				return (
					<div className="card">
						<p>state 1</p>
						<h2>{currentQuestion.question}</h2>
						<ul>
							<QuizOptions
								currentQuestion={currentQuestion}
								state={state}
								handleOptionClick={handleOptionClick}
								selected={selected}
							/>
						</ul>
						<button onClick={handleNextClick}>Next</button>
					</div>
				);

			case 2:
				return (
					<div className="card">
						<p>state 2</p>
						<h2>{currentQuestion.question}</h2>
						<ul>
							<QuizOptions
								currentQuestion={currentQuestion}
								state={state}
								handleOptionClick={handleOptionClick}
								selected={selected}
							/>
						</ul>
						<button onClick={handleNextClick}>Next</button>
					</div>
				);

			case 3:
				return <div className="card">state 3</div>;
		}
	};

	return (
		<div className="app">
			<div className="container">
				<h1>Country Quiz</h1>
				{renderCard(state)}
			</div>
		</div>
	);
};

export default App;

const state = {
	1: `show question`,
	2: "show answers",
	3: "show score card",
};
