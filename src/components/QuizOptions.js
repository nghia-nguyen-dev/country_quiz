import Option from "components/Option";

export default ({ currentQuestion, state, handleOptionClick, selected }) => {

   if (currentQuestion.options === undefined) {
      return null
   }

	return currentQuestion.options?.map((option, index) => {
		const letters = ["A", "B", "C", "D"];

		// Return different look/snapshot base on current state
		if (state === 2) {
			if (option === currentQuestion.answer) {
				return (
					<Option
						handleOptionClick={handleOptionClick}
						letter={letters[index]}
						option={option}
						className="correct"
					/>
				);
			} else if (option === selected) {
				return (
					<Option
						handleOptionClick={handleOptionClick}
						letter={letters[index]}
						option={option}
						className="incorrect"
					/>
				);
			} else {
				return (
					<Option
						handleOptionClick={handleOptionClick}
						letter={letters[index]}
						option={option}
						className=""
					/>
				);
			}
		}

		return (
			<Option
				handleOptionClick={handleOptionClick}
				letter={letters[index]}
				option={option}
				className=""
			/>
		);
	});
};
