import React, {useEffect, useState, useMemo} from "react";

import "./style.css"
import TodoForm from "../../components/TodoForm";
import TodoBar from "../../components/TodoBar";
import TodoItem from "../../components/TodoItem";


const Todo = () => {
	const [tasks, setTasks] = useState([])
	const [currentRef, setCurrentRef] = useState(0);

	const filteredTasks = useMemo(() => {
		if (!currentRef) return tasks;
		return tasks.filter(({isCompleted}) => currentRef === 2 ? isCompleted : !isCompleted);
	}, [tasks, currentRef]);

	const handlerAddTasks = (task) => {
		task.id = new Date().getTime();
		setTasks(tasks.concat([
			task
		]))
	}
	const toggleTask = (task) => {
		setTasks(tasks.map((item) => {
			if (task.id === item.id) item.isCompleted = !item.isCompleted
			return item
		}))
	}
	const removeTask = (task) => {
		setTasks(tasks.filter((item) => (item.id !== task.id)))
	}
	const completeAllTasks = () => {
		setTasks(tasks.map(item => {
			if (!item.isCompleted) item.isCompleted = true
			return item
		}))
	}
	const clearCompleteTasks = () => {
		setTasks(tasks.filter(item => (!item.isCompleted)))
	}

	return (
		<section className="todo">
			<div className="_container">
				<div className="block-todo">
					<TodoForm addTasks={handlerAddTasks}/>
					{!!tasks.length &&
					<>
						<div className="block-todo__items">
							{filteredTasks.map((task, index) => {
								return <TodoItem
									task={task}
									index={index}
									onToggle={toggleTask}
									onRemove={removeTask}
									key={task.id}
								/>
							})}
						</div>
						<TodoBar
							tasks={tasks}
							completeTasks={completeAllTasks}
							currentRef={currentRef}
							handlerChangeCurrentRef={(f) => setCurrentRef(f)}
							clearCompleteTasks={clearCompleteTasks}
						/>
					</>
					}
				</div>
			</div>
		</section>
	)
}
export default Todo