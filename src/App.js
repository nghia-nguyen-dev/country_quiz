import { useState, useEffect } from "react";
import Card from "./components/Card";
import Question from "./components/Question";
import countryCodes from "./data/countryCodes.json";
import Button from "components/Button";
import LoadingScreen from "components/LoadingScreen";

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
export default App = () => {
	const [counter, setCounter] = useState(config.questions); // Number of questions
	const [score, setScore] = useState(0); // Correct answers
	const [currentQuestion, setCurrentQuestion] = useState(null);
	const [nextQuestion, setNextQuestion] = useState(null);

	useEffect(() => {
		fetch(buildQueryStr(getRandomCodes(config.options)))
			.then((res) => res.json())
			.then((data) => generateQuestion(data))
			.then((question) => setCurrentQuestion(question));
	}, []);

	const fetchNextData = () => {
		fetch(buildQueryStr(getRandomCodes(config.options)))
			.then((res) => res.json())
			.then((data) => generateQuestion(data))
			.then((question) => setNextQuestion(question));
	};

	const renderedResults = () => {
		return <div>{`You got ${score} correct out of 5`}</div>;
	};

	const renderContent = () => {
		return currentQuestion === null ? (
			<LoadingScreen />
		) : (
			<React.Fragment>
				<h1>Country Quiz</h1>
				<Card>
					{counter === 0 ? (
						renderedResults()
					) : (
						<Question
							currentQuestion={currentQuestion}
							setCurrentQuestion={setCurrentQuestion}
							score={score}
							setScore={setScore}
							counter={counter}
							setCounter={setCounter}
							nextQuestion={nextQuestion}
							fetchNextData={fetchNextData}
						/>
					)}
					<Button
						text="Next"
						nextQuestion={nextQuestion}
						setCurrentQuestion={setCurrentQuestion}
					/>
				</Card>
			</React.Fragment>
		);
	};

	return <div className="app">{renderContent()}</div>;
};
