import React from "react";
import { BsFillTrashFill } from "react-icons/bs";

const TodoItem = ({task,onToggle,onRemove}) => {


	return(
		<div className="block-todo__item">
			<input
				checked={task.isCompleted}
				type="checkbox"
				onChange={() => onToggle(task)}
				id={task.id}
			/>
			<label htmlFor={task.id} />
			<span className="item__text">{task.todo}</span>
			<BsFillTrashFill
				color="#c6c4c6"
				onClick={() => onRemove(task)}
				cursor="pointer"
			/>
		</div>
	)
}
export default TodoItem