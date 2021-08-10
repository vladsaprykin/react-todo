import './App.css';
import React, {useState} from 'react';
import Todo from "./pages/Todo/Todo";



function App() {
	const h1Style = {
		fontWeight: 400
	};

	return (
		<div className="App">
			<h1 style={h1Style}>Your todo list</h1>
			<Todo/>
		</div>
	);
}

export default App;
