import React, {useEffect, useMemo, useState} from "react";
const classNames = require("classnames");

const TodoBar = ({tasks,currentRef,completeTasks,handlerChangeCurrentRef,clearCompleteTasks}) => {
	const countNotCompletedTasks = useMemo(() => {
		return tasks.filter(item => !item.isCompleted).length
	}, [tasks]);
	const btnClassAll = classNames({
		"block-todo__bar__btn-center_all" : true,
		"active-btn": currentRef === 0,
	});
	const btnClassTodo = classNames({
		"block-todo__bar__btn-center_todo" : true,
		"active-btn": currentRef === 1,
	});
	const btnClassCompleted = classNames({
		"block-todo__bar__btn-center_completed" : true,
		"active-btn": currentRef === 2,
	});
	return(
		<div className="block-todo__bar">
			<div className="block-todo__bar__btn-left" onClick={completeTasks}>{countNotCompletedTasks} tasks left</div>
			<div className="block-todo__bar__btn-center">
				<div className={btnClassAll} onClick={() => handlerChangeCurrentRef(0)}>All</div>
				<div className={btnClassTodo} onClick={() => handlerChangeCurrentRef(1)}>ToDo</div>
				<div className={btnClassCompleted} onClick={() => handlerChangeCurrentRef(2)}>Completed</div>
			</div>
			<div className="block-todo__bar__btn-right">
				{(countNotCompletedTasks !== tasks.length) ? <div className="block-todo__bar__btn_clear-completed" onClick={clearCompleteTasks}>Clear completed</div> : ""}
			</div>
		</div>
	)
}
export default  TodoBar