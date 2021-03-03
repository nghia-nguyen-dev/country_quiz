const letters = ["A", "B", "C", "D"];

export default ({ question: { q, a, options } }) => {
	const listOfOptions = options.map((option, index) => {
		return (
			<li className="question__option">
				<span className="question__option__letter">
					{letters[index]}
				</span>
				<p>{option}</p>
			</li>
		);
	});

	return (
		<div className="question">
			<h2>{q} ?</h2>
			<ul className="question__options">{listOfOptions}</ul>
			<button className="question__btn">Next</button>
		</div>
	);
};
