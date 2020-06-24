import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const TASKS_STATUSES = ['Start', 'In Progress', 'Completed']

const Task = (props) => {

    const statusChange = e => {
        props.statusChange(props.task.id, e.target.value)
    }

    const handleRemove = () => {
        props.handleRemove(props.task.id)
    }

    return (
        <>
            <form onChange={statusChange}>
                <select defaultValue={props.task.status}>
                    {TASKS_STATUSES.map(status => (
                        <option value={status} key={status}> {status} </option>
                    ))}
                </select>
            </form>
            <h2 className="card-title mt-3 text-uppercase px-2" style={{color: "#3a4"}}>{props.task.title}</h2>
            <p className="card-text mb-3 text-muted font-weight-bold px-2">{props.task.desc}</p>
            <FontAwesomeIcon icon="fa fa-trash" className="float-right m-5" style={{color: 'tomato', cursor: "pointer"}} onClick={() => handleRemove(props.task.id)} />
        </>
    )
}

export default Task
