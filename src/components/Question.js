// pass in question and options to pick from App

export default ({ question: { question, answer, options } }) => {
   
	return (
		<div className="question">
			<h2>{question}?</h2>
			<div className="question__options">

         </div>
		</div>
	);
};
