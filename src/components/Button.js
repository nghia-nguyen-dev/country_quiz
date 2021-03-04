export default Button = ({ nextQuestion, setCurrentQuestion, text }) => {
	return (
		<button
			onClick={() => {
				setCurrentQuestion(nextQuestion);
			}}
			className="question__btn"
		>
			{text}
		</button>
	);
};
