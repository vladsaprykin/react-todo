import React from "react";
import { toggleTask } from "../../redux/actions";
import { useDispatch } from "react-redux";
import styles from "./.module.css"

const TodoCustomCheckBox = ({ task }) => {
	const dispatch = useDispatch();
	return (
		<>
			<input
			className={styles['custom-check-box']}
			checked={task.isCompleted}
			type="checkbox"
			onChange={() => dispatch(toggleTask(task))}
			id={task.id}
			/>
			<label className={styles['custom-label']} htmlFor={task.id} />
		</>

	)
}
export default TodoCustomCheckBox;