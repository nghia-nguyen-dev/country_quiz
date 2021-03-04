const Questions = ({
	currentQuestion: { q, a, options, subject, imgSrc },
	score,
	setScore,
	counter,
	setCounter,
	fetchNextData,
}) => {
	const listOfOptions = options.map((option, index) => {
		const letters = ["A", "B", "C", "D"];
		return (
			<li
				onClick={() => {
					fetchNextData();

					if (option === a) {
						// Add green bg color
						setScore(score + 1);
					} else {
						// Add red bg color
					}

					setCounter(counter - 1);

					// Enable next button
				}}
				className="question__item"
			>
				<span className="question__item__letter">{letters[index]}</span>
				<p>{option}</p>
			</li>
		);
	});

	return (
		<div className="question">
			{subject === "flag" ? (
				<img className="question__flag" src={imgSrc} />
			) : null}
			<h2>{q} ?</h2>
			<ul className="question__items">{listOfOptions}</ul>
		</div>
	);
};

export default Questions;
