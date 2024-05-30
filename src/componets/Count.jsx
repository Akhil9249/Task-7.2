import React, { useReducer } from 'react'

const countReducer = (state,action)=>{

}

const Count = () => {
   const [state,dispatch] = useReducer(countReducer,{
    count:0
   })
  return (
    <div>
      
    </div>
  )
}

export default Count
