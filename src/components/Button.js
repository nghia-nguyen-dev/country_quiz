const Button = ({ nextQuestion, setCurrentQuestion, setReveal }) => {
	return (
		<button
			onClick={() => {
				setCurrentQuestion(nextQuestion);
				setReveal(false);
			}}
			className="quiz__btn"
		>
			Next
		</button>
	);
};

export default Button;
