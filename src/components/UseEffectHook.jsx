import React,{ useState, useEffect } from 'react'


const UseEffectHook = () => {

    const [resData,SetresData]=useState([]);

    useEffect(()=>{
        getData()
    },[])

    const getData=async()=>{
            const data=await fetch('https://jsonplaceholder.typicode.com/users')
            const res= await data.json();
            SetresData(res);
    }

  return (
 <div>
      <h1>Using Effect Hooks</h1>
      <ul>
                {resData.map(user => (
                    <li key={user.id}>{user.name}</li>
                    
                )
                )}
            </ul>

    </div>
  )
}

export default UseEffectHook
