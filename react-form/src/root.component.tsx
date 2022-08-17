import { useState } from 'react'
import Parcel from 'single-spa-react/parcel'
import { v4 as uuid } from 'uuid'
//@ts-ignore
import { emitEvent } from '@mt/react-utility'

const Root = ({ name }) => {
  const [task, updateTask] = useState('')

  const handleChange = (event: any) => {
    updateTask(event.target.value)
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()

    let eventName = "@mt/react-form/todo/add-task"
    emitEvent(eventName, {
      detail:{
        id: uuid(),
        describe: task,
      }
    })
    updateTask('')
  }

  const MTReactParcel = new Parcel({config: () => System.import('@mt/react-parcel')})

  return (
    <>
      <h1>{name}</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={task}/>
        <button>Add</button>
      </form>
      {MTReactParcel.render()}
    </>
  )
}

export default Root
