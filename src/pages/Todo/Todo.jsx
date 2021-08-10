import React, {useEffect, useState} from 'react';

import TodoForm from "../../components/TodoForm/TodoForm";
import TodoList from "../../components/TodoList/TodoList";
import './todoStyle.css'
import TodoBar from "../../components/TodoBar/TodoBar";

const Todo = () => {
	const [tasks, setTasks] = useState([])
	const [tempTasks,setTempTasks] = useState([])

	useEffect(() => {
		setTempTasks([...tasks])
	},[tasks])

	const addTasks = (task) => {
		task.id = new Date().getTime();
		setTasks(tasks.concat([
			task
		]))
	}
	const toggleTodo = (task) => {
		setTasks(tasks.map((item) => {
			if (task.id === item.id) item.isCompleted = !item.isCompleted
			return item
		}))
	}
	const removeTodo = (task) => {
		setTasks(tasks.filter((item) => {
			return (item.id === task.id) ? false : true
		}))
	}
	const completeAllTasks = () => {
		setTasks(tasks.map(item => {
			if (!item.isCompleted) item.isCompleted = true
			return item
		}))
	}
	const clearCompleteTasks = () => {
		setTasks(tasks.filter(item => {
			return (item.isCompleted) ? false : true
		}))
	}


	const showAll = () => {
		setTempTasks([...tasks])
	}
	const showTodo = () => {
		setTempTasks([...tasks].filter(item => {
			return (item.isCompleted === false) ? true : false
		}))
	}
	const showCompleted = () => {
		setTempTasks([...tasks].filter(item => {
			return (item.isCompleted === true) ? true : false
		}))
	}

	return (
		<section className="todo">
			<div className="_container">
				<div className="block-todo">
					<TodoForm addTasks={addTasks}/>
					{tasks.length ? (
						<>
							<TodoList
								tasks={tempTasks}
								onToggle={toggleTodo}
								onRemove={removeTodo}
							/>
							<TodoBar
								tasks={tasks}
								completeTasks={completeAllTasks}
								showAll={showAll}
								showTodo={showTodo}
								showCompleted={showCompleted}
								clearCompleteTasks={clearCompleteTasks}
							/>
						</>
					) : (
						''
					)}
				</div>
			</div>
		</section>
	)
}

export default Todo