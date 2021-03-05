export default Option = ({
	letter,
	option,
	handleOptionClick = "",
	className = "",
}) => {
	return (
		<li onClick={() => handleOptionClick(option)} className={className}>
			<span>{letter}</span>
			{option}
		</li>
	);
};
