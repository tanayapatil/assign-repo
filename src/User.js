import React, { useEffect } from 'react'

const User = () => {
    const userData=[
        { user : "Sateesh", address : "Hyd", count : 10},
        { user : "Ranjith", address : "Delhi", count : 30},
        { user : "Mahesh", address : "Mumbai", count : 20}
        ]

    const userFunc=(key)=>{
       const filterData=userData.filter(item=>item.user===key)
       const countData=userData.map((countvalue,index)=>{
        console.log("count value",countvalue.count)
        return countvalue.count
       })
       console.log(userFunc("Sateesh"))

      
       
    }
    
    useEffect(()=>{
        // userFunc("Sateesh")
    },[])
  return (
    <>
      <button onClick={userFunc("Sateesh")} >Click here</button>
    </>
  )
}

export default User
