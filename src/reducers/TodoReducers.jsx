
export function todoReducer(state, action) {
    switch (action.type) {
        case "add":
            localStorage.setItem("todoList", JSON.stringify([...state, action.payload]))
            return [...state, action.payload]
        case "delete":
            let newState = state.filter((e, i) => i !== action.payload)
            localStorage.setItem("todoList", JSON.stringify(newState))
            return newState
        case "edit":
            let updatedState = state.map((e, i) => {
                if (i == action.payload.index) {
                    return action.payload.task
                } else {
                    return e
                }
            })
            localStorage.setItem("todoList", JSON.stringify(updatedState))
            return updatedState
        default:
            return state;
    }
}