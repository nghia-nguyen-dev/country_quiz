import correctIcon from "assets/svgs/correct.svg";
import incorrectIcon from "assets/svgs/incorrect.svg";

const Icon = ({ markSelection }) => {
	if (markSelection === "correct") {
		return <img src={correctIcon} />;
	} else if (markSelection === "incorrect") {
		return <img src={incorrectIcon} />;
	} else {
		return null;
	}
};

export default Icon;