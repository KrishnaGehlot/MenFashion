import axios from 'axios';
import React, { useEffect, useState } from 'react'

 function Demo() {
   useEffect(()=>{
    fetch();
   })
   const [data , setData] =useState()
   const fetch = async ()=>{
 const res = await axios.get(`http://localhost:3000/polo_shirt`)
 console.log(res.data)
 setData(res.data)
   }
   const deletehandle = async(id)=>{
     const ress = await axios.delete(`http://localhost:3000/polo_shirt/${id}`)
     fetch()
   }
  return (
    
    <div>
      <table cellSpacing={10}>
        <thead>
          <tr>
            <td>id</td>
            <td>Cust_Name</td>
            <td>Age</td>
            <td>Cust_desp</td>
           <td>Discout_Price</td>
          </tr>
        </thead>
        {
          data && data.map((value ,index)=>{
            return(
              <tr key={index}>
              <td>{value.id}</td>               
              <td>{value.Cust_Name}</td>
              <td>{value.Age}</td>
              <td>{value.Cust_Price}</td>
               <td>{value.Cust_Desc}</td>
               <button classname="btn btn-Success">edit</button>
   <td>
   <button className='btn btn-danger' onClick={()=> deletehandle(value.id)}>delete</button>
   </td>
   </tr>
            )
          })
        }
      </table>
    </div>
  )
}

export default Demo
