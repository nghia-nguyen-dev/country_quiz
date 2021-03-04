import { useState, useRef } from "react";
const letters = ["A", "B", "C", "D"];

const Quiz = ({
	currentQuestion: { q, a, options, subject, imgSrc },
	score,
	setScore,
	counter,
	setCounter,
	fetchNextData,
	reveal,
	setReveal,
}) => {
	const [selected, setSelected] = useState("");

	const before = options.map((option, index) => {
		return (
			<li
				onClick={(e) => {
					setReveal(true);
					setSelected(option);
					fetchNextData();
					if (option === a) {
						console.log(`correct`);
						setScore(score + 1);
					}
					setCounter(counter - 1);
				}}
				className={`quiz__item`}
			>
				<span className="quiz__item__letter">{letters[index]}</span>
				<p>{option}</p>
			</li>
		);
	});

	const after = options.map((option, index) => {
		if (option === selected) {
			return (
				<li
					className={`quiz__item ${
						option === a
							? "quiz__item--correct"
							: "quiz__item--wrong"
					}`}
				>
					<span className="quiz__item__letter">{letters[index]}</span>
					<p>{option}</p>
				</li>
			);
		}

		return (
			<li
				className={`quiz__item ${
					option === a ? "quiz__item--correct" : ""
				}`}
			>
				<span className="quiz__item__letter">{letters[index]}</span>
				<p>{option}</p>
			</li>
		);
	});

	return (
		<div className="quiz">
			{subject === "flag" ? (
				<img className="quiz__flag" src={imgSrc} />
			) : null}
			<h2>{q} ?</h2>
			<ul className="quiz__items">{reveal === false ? before : after}</ul>
		</div>
	);
};

export default Quiz;
