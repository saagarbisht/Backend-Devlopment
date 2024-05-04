import React, { useEffect, useState } from 'react'
import axios from "axios"

export default function App() {
  const [todo,setTodo] = useState([]);
  useEffect(() => {
    axios.get("/api/todos")
    .then(res => setTodo(res.data))
    .catch(err => console.log(err))
  },[])
  return (
    <>
      <h1>Todo App</h1>
      <h2>Today's Todo {todo.length}</h2>
      {todo.map(items => {
        return (
            <div key={items.id}>
              <h3>{items.title}</h3>
              <p>Status : {items.completed ? "Completed" : "Not Completed Yet"}</p>
            </div>
        )
      })}
    </>
  )
}
