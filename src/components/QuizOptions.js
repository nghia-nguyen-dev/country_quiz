import Icon from "components/Icon";

const QuizOptions = ({ currentQuestion, state, handleOptionClick, selected }) => {
	const listItems = currentQuestion.options?.map((option, index) => {
		const letters = ["A", "B", "C", "D", "E"];
		const { common } = option;

		const markSelection = (function () {
			if (state === 2) {
				if (option === currentQuestion.answer) {
					return "correct";
				} else if (option === selected) {
					return "incorrect";
				}
			}
		})();

		return (
			<li
				key={common}
				onClick={() => handleOptionClick(option)}
				className={`quiz-options__item ${markSelection}`}
			>
				<span>{letters[index]}</span>
				{common}
				<Icon
					markSelection={markSelection}
					className="quiz-options__icon"
				/>
			</li>
		);
	});

	return <ul className="quiz-options">{listItems}</ul>;
};

export default QuizOptions;