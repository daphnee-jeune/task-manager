import React from 'react'
import Task from './Task'

const TasksList = (props) => {
    return (
        <div>
        <div className="card-header text-uppercase text-center font-weight-bold">
            {props.status}
        </div>
            {props.tasks.map(task => (
                <Task key={task.id} task={task} statusChange={props.statusChange} handleRemove={props.handleRemove} />
            ))}
        </div>
    )
}

export default TasksList
