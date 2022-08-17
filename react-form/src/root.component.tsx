import { useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'
//@ts-ignore
import { emitEvent } from '@mt/react-utility'


const Root = ({name, mountParcel}) => {
  
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

  useEffect(() => {
    System.import('@mt/react-parcel').then(it => {
      const domElement = document.querySelector("#table")
      mountParcel(it, {domElement})
    })
  }, [])



  // const MTReactParcel = new Parcel({ config: () =>  })

  return (
    <>
      <h1>{name}</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={task}/>
        <button>Add</button>
      </form>
      <div id="table"></div>
    </>
  )
}

export default Root
