import React, { useState } from 'react'

function Header(props) {
    const [title , setTitle] = useState('Header Component');
    const [count, setCount] = useState(0);
  return (
      <div className='header'>
        <h1>Welcome </h1>
        {/* <h1>Age {props.age}</h1>
        <h1>{title}</h1>
        <p>You clicked {count} times</p>
        <button onClick={() => {
            setCount(count + 1)
            setTitle("New Header")} 
            }>
            Click me
        </button> */}
    </div>
  )
}

export default Header