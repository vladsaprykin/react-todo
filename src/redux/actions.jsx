import * as types from "./constants";

export const createTask = (task) => {
	return {
		type: types.CREATE_TASK,
		payload: task
	}
}
export const toggleTask = (task) => {
	return {
		type: types.TOGGLE_TASK,
		payload: task
	}
}
export const deleteTask = (task) => {
	return {
		type: types.DELETE_TASK,
		payload: task
	}
}
export const completeAllTasks = () => {
	return {
		type: types.COMPLETE_ALL_TASKS,
	}
}
export const clearCompleteTasks = () => {
	return {
		type: types.CLEAR_COMPLETE_TASKS,
	}
}