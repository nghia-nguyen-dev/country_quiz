const letters = ["A", "B", "C", "D"];

export default ({ question: { q, a, options, subject, imgSrc } }) => {
	const listOfOptions = options.map((option, index) => {
		return (
			<li className="question__item">
				<span className="question__item__letter">{letters[index]}</span>
				<p>{option}</p>
			</li>
		);
	});

	return (
		<div className="question">
			{subject === "flag" ? <img className="question__flag" src={imgSrc} /> : null}
			<h2>{q} ?</h2>
			<ul className="question__items">{listOfOptions}</ul>
			<button className="question__btn">Next</button>
		</div>
	);
};
