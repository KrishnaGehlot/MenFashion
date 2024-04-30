import React, { useEffect, useState } from 'react'
import Sec_Header from "../components/Sec_Header";
import Slidebar from "../components/Slidebar";
import axios from 'axios';
import { toast } from 'react-toastify';
import { redirect, useNavigate } from 'react-router-dom';
function Manage_cargo() {
  const redirect= useNavigate()
  useEffect(() => {
    if (!(localStorage.getItem('uid'))) {
        redirect('/');
    }
    else {
        fetch();
    }
}, []);
    // useEffect(()=>{
    //     fetch()
    // },[])
    const [data , setData] = useState([])
    const fetch = async()=>{
      const result = await axios.get(`http://localhost:3000/cargo_pants`)
      console.log(result.data)
      setData(result.data)
    }
    const deletehand = async(id)=>{
        const res = await axios.delete(`http://localhost:3000/cargo_pants/${id}`)
        console.log(res.data)
        fetch();
        toast.success('delete data success');
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
                      <h2>   Manage  Cargo pants</h2>
                    </div>
                  </div>
                </div>
                <div class="alert alert-info " role="alert">
                  Manage Cargo pants
                </div>
                <table className="table table-striped custom-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Image</th>
                  <th>Prod_Name</th>
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
                                <td>{value.cate_name} </td>
                                <td> <img src={value.Image} alt="" width={100} /> </td>
                               <td>{value.cate_name}</td>
                                <td> {value.Prod_Name}</td>
                                <td>{value.Prod_Description}</td>
                                <td>{value.Price}</td>
                                <td> <button className='btn btn-success' onClick={()=> redirect('/Edit_cate/'+ data.id)}>Edit</button> </td>
                           <td> 
                             <button className='btn btn-danger' onClick={()=> deletehand(value.id)}>Delete</button> 
                             {/* <button className='btn btn-danger' onClick={()=> redirect('/Edit_cate')}>edit</button>  */}
                           
                           </td>
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

export default Manage_cargo

