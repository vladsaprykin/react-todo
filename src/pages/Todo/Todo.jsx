import React, {useMemo, useState} from "react";
import { useSelector } from "react-redux";
import TodoForm from "../../components/TodoForm";
import TodoBar from "../../components/TodoBar";
import TodoItem from "../../components/TodoItem";
import styles from "./.module.css"

const Todo = () => {
	const tasks = useSelector((state) => state.todo.tasks);
	const [filter, setFilter] = useState(0)
	const filteredTasks = useMemo(() => {
		if (filter === 0) return tasks;
		return tasks.filter(({isCompleted}) => filter === 2 ? isCompleted : !isCompleted);
	}, [tasks, filter]);
	return (
		<section className="todo">
			<div className="_container">
				<div className={styles["block-todo"]}>
					<TodoForm />
					{!!tasks.length &&
						<>
							<div className={styles["todo__items"]}>
								{filteredTasks.map((task, index) => {
									return <TodoItem
										task={task}
										index={index}
										key={task.id}
									/>
								})}
							</div>
							<TodoBar
								filter={filter}
								onChangeFilter={(value) => setFilter(value)}/>
						</>
					}
				</div>
			</div>
		</section>
	)
}
export default Todo;