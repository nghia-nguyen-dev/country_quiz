import { useState, useEffect } from "react";
import Card from "./components/Card";
import Question from "./components/Question";

const listOfQuestions = [
	{
		question: "Hanoi is the capital of",
		answer: "Vietnam",
		options: ["Vietnam", "Japan", "China", "Taiwan"],
	},
];

const getRandomNum = (ceiling) => {
   return Math.floor(Math.random() * ceiling)
}

const getRandomQuestion = (index) => {
   return listOfQuestions[num]
}

export default () => {
   const [ currentQuestion, setCurrentQuestion] = useState()

	return (
		<div className="app">
			<div>
				<h1>Country Quiz</h1>
				<Card>
					<Question question={listOfQuestions[0]} />
				</Card>
			</div>
		</div>
	);
};
