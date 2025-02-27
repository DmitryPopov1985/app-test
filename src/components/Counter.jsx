import React, { useState } from 'react'

export default function Counter() {
    const [count,setCount] = useState(1)
    function increment() {
        setCount(count + 1) 
      }
      function decrement() {
        setCount(count - 1)
      }
  return (
    <div>
        <h1>{count}</h1>
      <button  onClick={increment}>Increment</button>
      <button onClick={decrement} >Decrement</button>
    </div>
  )
}
