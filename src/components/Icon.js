import correctIcon from "assets/svgs/correct.svg";
import incorrectIcon from "assets/svgs/incorrect.svg";

const Icon = ({ markSelection, className = "" }) => {
	if (markSelection === "correct") {
		return <img src={correctIcon} className={className} alt="Check mark"/>;
	} else if (markSelection === "incorrect") {
		return <img src={incorrectIcon} className={className} alt="X mark"/>;
	} else {
		return null;
	}
};

export default Icon;
