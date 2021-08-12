import * as types from "./constants";

const initialState = {
	tasks: [],
	formInput: {
		todo: "",
		isCompleted: false,
		id: "",
	}
}
export const tasksReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.CREATE_TASK:
			return {
				...state,
				tasks: state.tasks.concat([action.payload]),
				formInput: {todo: "", isCompleted: false, id: "",}
			}
		case types.TOGGLE_TASK:
			return {
				...state,
				tasks: state.tasks.map((item) => {
					if (action.payload.id === item.id) item.isCompleted = !item.isCompleted
					return item
				})
			}
		case types.DELETE_TASK:
			return {
				...state,
				tasks: state.tasks.filter((item) => (item.id !== action.payload.id))
			}
		case types.COMPLETE_ALL_TASKS:
			return {
				...state,
				tasks: state.tasks.map(item => {
					if (!item.isCompleted) item.isCompleted = true
					return item
				})
			}
		case types.CLEAR_COMPLETE_TASKS:
			return {
				...state,
				tasks: state.tasks.filter(item => (!item.isCompleted))
			}
		default:
			return state
	}
	return state
}