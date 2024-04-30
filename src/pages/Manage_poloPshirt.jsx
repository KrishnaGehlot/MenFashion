import React, { useEffect, useState } from 'react'
import Sec_Header from "../components/Sec_Header";
import Slidebar from "../components/Slidebar";
import axios from 'axios';
function Manage_poloPshirt() {
 
    useEffect(()=>{
        fetch()
    },[])
    const [data , setData] = useState([])
    const fetch = async()=>{
        const res = await axios.get(`http://localhost:3000/polo_shirt`)
        console.log(res.data)
        setData(res.data)
    }
    const deletehandle = async(id)=>{
        const res =await axios.delete(`http://localhost:3000/polo_shirt/${id}`)
        console.log(res.data)
       fetch()
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
                      <h2>   Manage Casual</h2>
                    </div>
                  </div>
                </div>
                <div class="alert alert-info " role="alert">
                    Manage Casual
                </div>
                <table className="table table-striped custom-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Image</th>
                  <th></th>
                    <th>Prod_Description</th>
                    <th>Prod_Price</th>
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
                            <td>{value.Cust_Name}</td>
                            <td>{value.Age}</td>
                            <td>{value.Cust_Price}</td>
                            <td>{value.Cust_Desc}</td>
                            <td>{value.Discout_Price}</td>
                            <td> <button className='btn btn-success'>add</button> </td>
                            <td> <button className='btn btn-danger' onClick={()=> deletehandle(value.id)}>Delete</button> </td>
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

export default Manage_poloPshirt

