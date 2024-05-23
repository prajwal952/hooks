import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from '../components/Home'
import UseStateHook from '../components/UseStateHook'
import UseEffectHook from '../components/UseEffectHook'
import UseEffectPagination from '../components/UseEffectPagination'
import UseReducerHook from '../components/UseReducerHook'

const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/UseState" element={<UseStateHook/>} />
            <Route path="/UseEffect" element={<UseEffectHook/>} />
            <Route path="/pagination" element={<UseEffectPagination/>}/>
            <Route path="/UseRedux" element={<UseReducerHook/>}/>

            
        </Routes>
      
    </div>
  )
}

export default Routing
