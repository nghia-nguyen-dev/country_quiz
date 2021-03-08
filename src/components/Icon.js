import correctIcon from "assets/svgs/correct.svg";
import incorrectIcon from "assets/svgs/incorrect.svg";

const Icon = ({ markSelection, className = "" }) => {
	if (markSelection === "correct") {
		return <img src={correctIcon} className={className} />;
	} else if (markSelection === "incorrect") {
		return <img src={incorrectIcon} className={className} />;
	} else {
		return null;
	}
};

export default Icon;
