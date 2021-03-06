import Option from "components/Option";

export default ({ currentQuestion, state, handleOptionClick, selected }) => {
	return currentQuestion.options?.map((option, index) => {
		const letters = ["A", "B", "C", "D"];

		const customOption = (className) => {
			return (
				<Option
					handleOptionClick={handleOptionClick}
					letter={letters[index]}
					option={option}
					className={className}
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
};
