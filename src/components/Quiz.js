import { useState, useRef } from "react";

const Quiz = ({
	currentQuestion: { q, a, options, subject, imgSrc },
	score,
	setScore,
	counter,
	setCounter,
	fetchNextData,
}) => {
	console.log(`Quiz`);
	const [selected, setSelected] = useState("");
	const listOfOptions = options.map((option, index) => {
		const letters = ["A", "B", "C", "D"];
		return (
			<li
				onClick={(e) => {
					fetchNextData();

					if (option === a) {
						// Add green bg color
						setScore(score + 1);
					} else {
						// Add red bg color
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

	return (
		<div className="quiz">
			{subject === "flag" ? (
				<img className="quiz__flag" src={imgSrc} />
			) : null}
			<h2>{q} ?</h2>
			<ul className="quiz__items">{listOfOptions}</ul>
		</div>
	);
};

export default Quiz;
