import React, {useState} from 'react';
import TodoItem from "./TodoItem/TodoItem";



const TodoList = ({tasks,onToggle,onRemove}) => {

	return (
		<div className="block-todo__items">
				{tasks.map((task, index) => {
					return <TodoItem
						task={task}
						index={index}
						onToggle={onToggle}
						onRemove={onRemove}
						key={task.id}
					/>
				})}
		</div>
	)
}
export default TodoList