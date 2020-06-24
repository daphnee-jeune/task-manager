import {CREATE_TASK, REMOVE_TASK} from '../actions/types'
import {EDIT_TASK} from '../actions/types'

const initialState = [
    // {
    //     id: 1,
    //     title: "Learn React",
    //     desc: "Let's learn React js today",
    //     status: "Completed"
    // },
    // {
    //     id: 2,
    //     title: "Learn Redux",
    //     desc: "Let's learn Redux js today",
    //     status: "In Progress"
    // },
    // {
    //     id: 3,
    //     title: "Learn MERN stack",
    //     desc: "I like the Mern Stack!",
    //     status: "In Progress"
    // }
]


const tasks = (state = { tasks: initialState }, action) => {
    const {payload} = action
    switch(action.type) {
        case EDIT_TASK: {
            return {
                tasks: state.tasks.map(task => {
                    if (task.id === payload.id ) {
                        return Object.assign({}, task, payload.params)
                        }
                            return task
                })
            }
        }
        case CREATE_TASK: {
            return {
                tasks: state.tasks.concat(action.payload)
            }
        }
        case REMOVE_TASK: {
            return {
                tasks: state.tasks.filter(task => {
                    return task.id !== action.id
                })
            }
        }
        default : {
            return state
        }
    }
    
}

export default tasks