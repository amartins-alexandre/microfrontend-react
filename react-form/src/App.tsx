import React, { useState } from 'react'
import Parcel from 'single-spa-react/parcel'
import { v4 as uuid } from 'uuid'
//@ts-ignore
import { emitEvent } from '@mt/react-utility'

const App = ({ name }) => {
  const [task, updateTask] = useState('')

  const handleChange = (event: any) => {
    updateTask(event.target.value)
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()

    let eventName = "@mt/react-form/todo/add-task"
    emitEvent(eventName, {
      id: uuid(),
      describe: task,
    })
    updateTask('')
  }

  return (
    <>
      <h1>{name}</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={task}/>
        <button>Add</button>
      </form>
      <Parcel
        config={() => System.import('@mc/react-parcel')}
      />
    </>
  )
}

export default App