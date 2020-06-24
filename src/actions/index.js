import { EDIT_TASK } from "./types"
import { CREATE_TASK } from "./types"
import { REMOVE_TASK } from "./types"
import uuid from "react-uuid"

export const editTask = (id, params = {}) => {
    return {
        type: EDIT_TASK,
        payload: {
            id,
            params
        }
    }
}

export const createTask = ({title, desc}) => {
    return {
        type: CREATE_TASK,
        paylod: {
            id: uuid(),
            title,
            desc,
            status: "Start"
        }
    }
}

export const removeTask = id => {
    return {
        type: REMOVE_TASK,
        id
    }
}