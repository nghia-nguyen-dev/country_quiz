import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./App";

const MyComponent = () => {
	return (
		<main>
			<h1 className="title">Hello World</h1>
		</main>
	);
};

ReactDOM.render(<App />, document.querySelector("#root"));
