import Option from "components/Option";

export default ({ currentQuestion, state, handleOptionClick, selected }) => {
	const listItems = currentQuestion.options?.map((option, index) => {
		const letters = ["A", "B", "C", "D"];

		const customOption = (className) => {
			return (
				<Option
					key={option}
					handleOptionClick={handleOptionClick}
					letter={letters[index]}
					option={option}
					className={`quiz-options__item ${className}`}
				/>
			);
		};

		// Return different look/snapshot base on current state
		if (state === 2) {
			if (option === currentQuestion.answer) {
				return customOption("correct");
			} else if (option === selected) {
				return customOption("incorrect");
			}
		}

		return customOption("");
	});

	return <ul className="quiz-options">{listItems}</ul>;
};
