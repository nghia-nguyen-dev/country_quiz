import Icon from "components/Icon";

export default ({ currentQuestion, state, handleOptionClick, selected }) => {
	const listItems = currentQuestion.options?.map((option, index) => {
		const letters = ["A", "B", "C", "D"];

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
				key={option}
				onClick={() => handleOptionClick(option)}
				className={`quiz-options__item ${markSelection}`}
			>
				<span>{letters[index]}</span>
				{option}
				<Icon
					markSelection={markSelection}
					className="quiz-options__icon"
				/>
			</li>
		);
	});

	return <ul className="quiz-options">{listItems}</ul>;
};
