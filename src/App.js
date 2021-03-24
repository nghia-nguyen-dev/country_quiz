import React, { useState, useEffect } from "react";
import QuizOptions from "components/QuizOptions";
import { buildQueryStr, getRandomCodes, generateQuestion } from "utils/helpers";
import traveler from "assets/svgs/traveler.svg";
import resultsSvg from "assets/svgs/results.svg";
import config from 'utils/config'


const App = () => {
	const [currentQuestion, setCurrentQuestion] = useState({});
	const [state, setState] = useState(1);
	const [counter, setCounter] = useState(config.questions);
	const [selected, setSelected] = useState("");
	const [score, setScore] = useState(0);

	useEffect(() => {
	
		if (state === 1) {
			fetch(buildQueryStr(getRandomCodes(config.options)))
				.then((res) => res.json())
				.then((data) => generateQuestion(data))
				.then((q) => {
					setCurrentQuestion(q);
					setState(1);
				});
		}
	}, [state]);

	useEffect(() => {
		if (selected === currentQuestion.answer) {
			setScore(score + 1);
		}
	}, [selected]);

	const handleNextClick = () => {
		if (counter === 0) {
			setCurrentQuestion({});
			setState(3);
		} else {
			setState(1);
		}
	};

	const handleOptionClick = (option) => {
		if (state === 2) {
			return;
		}

		setState(2);
		setCounter(counter - 1);
		setSelected(option);
	};

	const restart = () => {
		setState(1);
		setScore(0);
		setCounter(config.questions);
	};

	const renderCard = (state) => {
		switch (state) {
			case 1:
			case 2:
				return currentQuestion.subject !== undefined ? (
					<div className="card">
						<div className="quiz">
							<img className="quiz__traveler" src={traveler} />
							{currentQuestion.subject === "flag" ? (
								<img
									className="quiz__flag"
									src={currentQuestion.imgSrc}
								/>
							) : null}
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
								className={`quiz__btn ${
									state === 1 ? "disable" : ""
								}`}
								onClick={handleNextClick}
								disabled={state === 1 ? true : false}
							>
								Next
							</button>
						</div>
					</div>
				) : (
					<p className="loading-txt">Loading...</p>
				);

			case 3:
				return (
					<div className="card">
						<div className="results">
							<img src={resultsSvg} />
							<div className="results__content">
								<h2>Results</h2>
								<p>
									You got{" "}
									<span className="results__correct">
										{score}
									</span>{" "}
									out of{" "}
									<span className="results__questions">
										{config.questions}
									</span>{" "}
								</p>
							</div>
							<button className="results__btn" onClick={restart}>
								Try again
							</button>
						</div>
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
