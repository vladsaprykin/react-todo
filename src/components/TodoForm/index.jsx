import React, {useState} from 'react';

const TodoForm = ({addTasks}) => {
	const initialState = {
		todo: "",
		isCompleted: false,
		id: '',
	}
	const [formInputs, setFormInputs] = useState(initialState);
	const handleChange = (event) => {
		setFormInputs((prev) => ({
			...prev,
			...{
				[event.target.name]: event.target.value,
			},
		}));
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		addTasks(formInputs)
		setFormInputs(initialState);
	}

	return (
		<form className="block-todo__form" onSubmit={handleSubmit}>
			<input
				type="text"
				className="form__input"
				name="todo"
				value={formInputs.todo}
				onChange={handleChange}
				placeholder="Enter your task name here"
				required
				minLength="3"
			/>
		</form>
	);
}
export default TodoForm