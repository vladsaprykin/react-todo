import React, {useEffect} from "react";

const TodoBar = ({tasks,completeTasks,showTodo,showCompleted,showAll,clearCompleteTasks}) => {
	const notCompleted = (tasks) => {
		const notCompleted = [...tasks];
		return notCompleted.filter(item => item.isCompleted ? false : true).length
	}
	const addActiveClass = (target) => {
		console.log(document.querySelector('.block-todo__bar__btn-center').childNodes)
		const arr = [...document.querySelector('.block-todo__bar__btn-center').childNodes]
		arr.map(item => {
			item.classList.remove("active-btn")
		})
		target.classList.add('active-btn')
	}


	return(
		<div className="block-todo__bar">
			<div className="block-todo__bar__btn-left" onClick={completeTasks}>{notCompleted(tasks)} tasks left</div>
			<div className="block-todo__bar__btn-center">
				<div className="block-todo__bar__btn-center_all active-btn" onClick={(e) => {
					addActiveClass(e.target)
					showAll()
					}
				}>All</div>
				<div className="block-todo__bar__btn-center_todo" onClick={(e) => {
					addActiveClass(e.target)
					showTodo()
					}
				}>ToDo</div>
				<div className="block-todo__bar__btn-center_completed" onClick={(e) => {
					addActiveClass(e.target)
					showCompleted()
					}
				}>Completed</div>
			</div>
			<div className="block-todo__bar__btn-right">
				{(notCompleted(tasks) !== tasks.length) ? <div className="block-todo__bar__btn_clear-completed" onClick={clearCompleteTasks}>Clear completed</div> : ""}
			</div>
		</div>
	)
}
export default  TodoBar