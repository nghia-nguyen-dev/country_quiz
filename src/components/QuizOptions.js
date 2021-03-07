import Option from "components/Option";

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
			<Option
				key={option}
				handleOptionClick={handleOptionClick}
				letter={letters[index]}
				option={option}
				className={`quiz-options__item ${markSelection}`}
			/>
		);

		// Return different look/snapshot base on current state
	});

	return <ul className="quiz-options">{listItems}</ul>;
};
