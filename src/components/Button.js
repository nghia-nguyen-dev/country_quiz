export default ({ text, handleClick }) => {
	return <button onClick={() => handleClick()}>{text}</button>;
};
