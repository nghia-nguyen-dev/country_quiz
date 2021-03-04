const Button = ({ nextQuestion, setCurrentQuestion, text }) => {
	return (
		<button
			onClick={() => {
				setCurrentQuestion(nextQuestion);
			}}
			className="quiz__btn"
		>
			{text}
		</button>
	);
};

export default Button;
