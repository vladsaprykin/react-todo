import React, {useState} from 'react';


const TodoForm = ({addTasks}) => {
	const [formInputs, setFormInputs] = useState({
		todo: "",
		isCompleted: false,
		id: '',
	});
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
		setFormInputs((prev) => ({
			...prev,
			...{
				todo: "",
			},
		}))
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