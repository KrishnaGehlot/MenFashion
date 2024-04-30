import React, { useEffect, useState } from 'react'
import Sec_Header from "../components/Sec_Header";
import Slidebar from "../components/Slidebar";
import axios from 'axios';
import { toast } from 'react-toastify';
function Manage_Chambary() {
   useEffect(()=>{
    fetch()
   },[])
    const [data , setData] = useState([])
    const fetch = async()=>{
    const res = await axios.get(`http://localhost:3000/chambary`)
    console.log(res.data)
    setData(res.data)
   }
   const deletehandle = async(id)=>{
    const res = await axios.delete(`http://localhost:3000/chambary/${id}`)
    console.log(res.data)
    fetch()
    toast.success('delete data success')
   }
  return (
    <div className="full_container">
        <div className="inner_container">
          {/* Sidebar  */}
          <Slidebar />
          {/* end sidebar */}
          {/* right content */}
          <div id="content">
            {/* topbar */}
            <Sec_Header />
            {/* end topbar */}
            {/* dashboard inner */}
            <div className="midde_cont">
              <div className="container-fluid">
                <div className="row column_title">
                  <div className="col-md-12">
                    <div className="page_title">
                      <h2>   Manage Formal Outfit</h2>
                    </div>
                  </div>
                </div>
                <div class="alert alert-info " role="alert">
                  Manage Formal Outfit
                </div>
                 <table className="table table-striped custom-table">
                 <thead>
                  <tr>
                    <th>ID</th>
                    <th>Image</th>
                    <th>Prod_Name</th>
                    <th>Prod_Description</th>
                    <th>Price</th>
                    <th>Action</th>
                    <th className="text-left">Action</th>
                  </tr>
                </thead>
                  <tbody> 
                   {
                    data && data.map((value , index)=>{
                        return(
                            <tr key={index}>
                                <td>{value.id}</td>
                                <td> <img src={value.Image} alt="" width={100} /> </td>
                                <td>{value.Prod_Name}</td>
                                <td>{value.Prod_Description}</td>
                                <td>{value.Price}</td>
                                <td> <button  className='btn btn-success'>add</button> </td>
                                <td> <button className='btn btn-danger' onClick={()=>deletehandle(value.id)}>Delete</button> </td>
                            </tr>
                        )
                    })
                   }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
export default Manage_Chambary;

