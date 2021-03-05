const letters = ["A", "B", "C", "D"];

export default QuizOptions = ({
	currentQuestion: { q, a, options, subject, imgSrc },
}) => {
	const listOfOptions = options.map((option, index) => {
		return <Option option={option} letter={letters[index]} />;
	});

	return <ul>{listOfOptions}</ul>;
};
