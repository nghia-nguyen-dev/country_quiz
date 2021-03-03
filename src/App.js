import { useState, useEffect } from "react";
import Card from "./components/Card";
import Question from "./components/Question";
import countryCodes from "./data/countryCodes.json";

const listOfQuestions = [
	{
		question: "Hanoi is the capital of",
		answer: "Vietnam",
		options: ["Vietnam", "Japan", "China", "Taiwan"],
	},
];

const generateQuestion = () => {
	return;
};

const getRandomNum = (ceiling) => {
	return Math.floor(Math.random() * ceiling);
};

const getRandomItem = (array) => {
	return array[getRandomNum(array.length)];
};

// Build list of random country codes

const listOfRandomCodes = (numberOftimes) => {
	const temp = [];

	for (let i = 1; i <= numberOftimes; i++) {
		let randomCode;
		do {
			randomCode = getRandomItem(countryCodes);
		} while (temp.includes(randomCode));
		temp.push(randomCode);
	}

	return temp;
};


// Fetch data with those 10 codes

export default () => {
	const [currentQuestion, setCurrentQuestion] = useState(
		getRandomItem(listOfQuestions)
	);

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
