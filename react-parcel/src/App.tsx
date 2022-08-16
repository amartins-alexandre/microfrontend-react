import React, { useState, useEffect } from 'react'
//@ts-ignore
import { listenEvent } from '@mt/react-utility'

const App = () => {
  const [tasks, updateTasks] = useState([])

  useEffect(() => {
    let eventName = "@mt/react-form/todo/add-task"
    listenEvent(eventName, (event: CustomEvent) => {
      console.log(event)
      updateTasks(oldTasks => [
        ...oldTasks,
        event.detail,
      ])
    })
  }, [])

  return (
    <>
      <h1>@mt/react-parcel</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Task</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.describe}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default App