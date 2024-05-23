import React, { useReducer } from 'react'

const UseReducerHook = () => {

const reducer=(currentState,action)=>{
 console.log('action is ',action)
 console.log('currentState is ',currentState)
 


//  if(currentState<5 ){
//     switch(action){
//         case "INCREMENT" : return currentState+1;
//         case "DECREMENT" : return currentState-1;
//         case "RESET" : return  0;
//     }
//  }


//  else{  
//     return currentState='Not possible'
//  }
    


switch(action){
    case'INCREMENT':
      return currentState <5 ? currentState+1 : 'Not-possible';

      case'DECREMENT':
      return currentState >1 ? currentState-1 : 'Not-possible';
   
      case'RESET':
      return 0;

}

}


const [count,dispatch]=useReducer(reducer,0)

console.log("count is ",count)


  return (
    <center>
        <h2>Use Reducer hook</h2>
        <p>Count value is {count}</p>

        <button className='btn btn-success ms-2' onClick={()=>{dispatch("INCREMENT")}}>Increment</button>
        <button className='btn btn-danger ms-2' onClick={()=>{dispatch("DECREMENT")}}>Decrement</button>
        <br />
        <button className='btn btn-warning ms-2 mt-2' onClick={()=>{dispatch("RESET")}}>RE-SET</button>
      
    </center>
  )
}

export default UseReducerHook
