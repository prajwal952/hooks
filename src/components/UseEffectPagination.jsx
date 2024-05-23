import React, { useEffect, useState } from 'react'
import Pageloder from './Pageloder';

const UseEffectPagination = () => {
const[userdata,setUserdata]=useState([]);
const[pageNumber,setPageNumber]=useState(0);

useEffect(()=>{
getUserData();

},[pageNumber])

const getUserData= async()=>{
 const res=await fetch(`https://dummyapi.io/data/v1/user?page=${pageNumber}&limit=10`,{
    method:'GET',
    headers: {
        "app-id" : "66147e107d71bf812a6c7a6e"
    }
 })

 const {data}= await res.json()
 console.log(data);
 setUserdata(data);
}

const handleClickButton=(num)=>{
    setPageNumber(num)
}



  return (


    <div>
            <div className="container text-center">
                <h2>User Data</h2>
                <div className='row'>
                {
                     userdata.length ?(

                            userdata.map((ele)=>(
                                    <div className="col-md-6 border p-3 my-2">
                                        <div className="col-md-3">
                                            <img src={ele.picture}  />
                                        </div>
                                        <div className="col-md-9">
                                        <h5>{ele.id}</h5>
                                        <p>{ele.title} {ele.firstName}</p>
                                    </div>
                                    </div>
                            ))

                        )
                        :
                        (<Pageloder/>)

                }
                </div>

               { [1,2,3,4,5,6,7,8,9].map((num)=>(
                 // <button className='btn btn-primary ms-2 mt-1' onClick={handleClickButton(num)}>{num}</button>
                  <button className='btn btn-primary ms-2 mt-1' onClick={()=>handleClickButton(num)}>{num}</button>
                )

                )}
            </div>


    </div>





  )
}

export default UseEffectPagination;