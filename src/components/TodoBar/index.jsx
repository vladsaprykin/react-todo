import React, { useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { completeAllTasks, clearCompleteTasks } from "../../redux/actions";
import styles from "./.module.css"

const classNames = require("classnames");

const TodoBar = ({filter, onChangeFilter}) => {
	const btnCenterFilter = [{text: "All", count: 0}, {text: "ToDo", count: 1}, {text: "Completed", count: 2}];
	const dispatch = useDispatch();
	const tasks = useSelector((state) => state.todo.tasks);
	const countNotCompletedTasks = useMemo(() => {
		return tasks.filter(item => !item.isCompleted).length;
	}, [tasks]);
	return (
		<div className={styles["todo__bar"]}>
			<div className={styles["todo__bar__btn-left"]}
					 onClick={() => dispatch(completeAllTasks())}>{countNotCompletedTasks} tasks left
			</div>
			<div className={styles["todo__bar__btn-center"]}>
				{
					btnCenterFilter.map(item => {
						return <div
							className={
								classNames(styles["todo__bar__btn-center_filter"], {[styles["active-btn"]]: filter === item.count})}
							onClick={() => onChangeFilter(item.count)
							}
						>{item.text}</div>
					})
				}
			</div>
			<div className={styles["todo__bar__btn-right"]}>{
				(countNotCompletedTasks !== tasks.length) && <div
					className={styles["todo__bar__btn_clear-completed"]}
					onClick={
						() => dispatch(clearCompleteTasks())
					}
				>Clear completed</div>
			}
			</div>
		</div>
	)
}
export default TodoBar;