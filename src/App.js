import Card from "./components/Card";
import Question from "./components/Question";

// pass in a random question
const listOfQuestions = [
	{
		question: "Hanoi is the capital of",
		answer: "Vietnam",
		options: ["Vietnam", "Japan", "China"],
	},
];

export default () => {
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
