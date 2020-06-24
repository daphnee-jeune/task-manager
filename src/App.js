import React from 'react'
import {connect} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import TaskPage from './components/TaskPage'
import {editTask, createTask, removeTask} from './actions'

const App = (props) => {

  const statusChange = (id, status) => {
    props.dispatch(editTask(id, {status}))
  }
 
  const handleCreateTask = ({title, desc}) => {
    props.dispatch(createTask({title, desc}))
  }

  const handleRemove = id => {
    props.dispatch(removeTask(id))
  }

  return (
    <>
      <TaskPage tasks={props.tasks} statusChange={statusChange} handleCreateTask={handleCreateTask} handleRemove={handleRemove}/>
    </>
  )
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks
  }
}

export default connect(mapStateToProps) (App)
