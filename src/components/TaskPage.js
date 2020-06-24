import React, {useState} from 'react'
import TasksList from './TasksList'

const TASKS_STATUSES = ['Start', 'In Progress', 'Completed']

const TaskPage = (props) => {

    const [cardForm, showCardForm] = useState(false)
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')

    const formToggler = () => {
        showCardForm(!cardForm)
    }

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleDesc = (e) => {
        setDesc(e.target.value)
    }

    const handleCreateTask = e => {
        e.preventDefault()

        props.handleCreateTask({
            title,
            desc
        })
        resetForm()
    }

    const resetForm = () => {
        setTitle("")
        setDesc("")
        showCardForm(false)
    }

    const renderTaskLists = () => {
        const {tasks} = props 
        return TASKS_STATUSES.map((status, id) => {
            const statusTasks = tasks.filter(task => task.status === status)
            return (
                <div className="col-md-3 card m-2 p-0" key={id}>
                    <TasksList key={status} status={status} tasks={statusTasks} statusChange={props.statusChange} handleRemove={props.handleRemove} />
                </div>
            )
        })
    }


    return (
        <div className="container my-5">
            <div className="jumbotron py-3">
                <div className="row">
                    <div className="col-md-2">
                        <button className="btn btn-success m-3" onClick={formToggler}>+</button>
                    </div>

                    <div className="col-md-10">
                        <h2 className="display-4 text-center text-uppercase">Task Manager</h2>
                    </div>
                </div>
                {cardForm &&
                <form onSubmit={handleCreateTask}>
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="task title"
                            onChange={handleTitle} 
                        />
                    </div>

                    <div className="form-group">
                        <textarea
                            type="text" 
                            className="form-control" 
                            placeholder="task description"
                            onChange={handleDesc} 
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                }
            </div>
            <div className="row d-flex justify-content-center position-relative" style={{background: "#e9ecef"}}>
                {renderTaskLists()}
            </div>
        </div>
    )
}

export default TaskPage
