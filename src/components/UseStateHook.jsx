import React,{useState} from 'react'

const UseStateHook = () => {
const [state,setState]=useState(0);

const handleIncr=()=>{
setState(state+1)
}

const handleDeccr=()=>{
    setState(state-1)
    }
    
  return (
    <div className='text-center'>
        <h3>Counter is {state}</h3>
      <button className='ms-2 me-2 btn btn-success' onClick={handleIncr}>Increment</button>
      <button className='me-2 btn btn-danger' onClick={handleDeccr}>Decrement</button>
    </div>
  )
}

export default UseStateHook
