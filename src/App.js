import React, { useState, useEffect } from "react";
import QuizOptions from "components/QuizOptions";
import { buildQueryStr, getRandomCodes, generateQuestion } from "utils/helpers";
import traveler from "assets/svgs/traveler.svg";

const config = {
	options: 4,
	questions: 3,
};

// ----------------------------------------------------------------- APP
const App = () => {
	const [currentQuestion, setCurrentQuestion] = useState({});
	const [state, setState] = useState(0);
	const [counter, setCounter] = useState(config.questions);
	const [selected, setSelected] = useState("");

	useEffect(() => {
		if (state === 1 || state === 0) {
			console.log(`fetching data`);
			fetch(buildQueryStr(getRandomCodes(config.options)))
				.then((res) => res.json())
				.then((data) => generateQuestion(data))
				.then((q) => {
					setCurrentQuestion(q);
					setState(1);
				});
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

	const restart = () => {
		setState(0);
	};

	const renderCard = (state) => {
		switch (state) {
			case 0:
				return <div>Loading...</div>;

			case 1:
			case 2:
				return (
					<div className="card">
						<div className="quiz">
							<img className="quiz__traveler" src={traveler} />
							{currentQuestion.subject === "flag" ? <img
								className="quiz__flag"
								src={currentQuestion.imgSrc}
							/> : null}
							<h2 className="quiz__question">
								{currentQuestion.question}
							</h2>

							<QuizOptions
								currentQuestion={currentQuestion}
								state={state}
								handleOptionClick={handleOptionClick}
								selected={selected}
							/>
						<button
							className={`quiz__btn ${state === 1 ? 'disable' : ''}`}
							onClick={handleNextClick}
							disabled={state === 1 ? true : false}
						>
							Next
						</button>
						</div>
					</div>
				);

			case 3:
				return (
					<div className="card">
						<h2>Results</h2>
						<p>You got 4 correct answers</p>
						<button onClick={restart}>Try again</button>
					</div>
				);
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
