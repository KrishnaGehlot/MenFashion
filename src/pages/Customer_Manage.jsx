import React, { useEffect, useState } from "react";
import Sec_Header from "../components/Sec_Header";
import Slidebar from "../components/Slidebar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import { status } from "server/reply";
function Customer_Manage() {
  // const hit = useNavigate();
  useEffect(() => {
    fetch();
  }, []);
  const [data, setData] = useState([]);
  const fetch = async () => {
    const res = await axios.get(`http://localhost:3000/customer`);
    console.log(res.data);
    setData(res.data);
  };
  const deletehand = async (id) => {
    const res = await axios.delete(`http://localhost:3000/customer/${id}`);
    console.log(res.data);
    fetch();
    toast.success('delete data success')
    
  };

  const statushand = async (id) => {
    const res = await axios.get(`http://localhost:3000/customer/${id}`);
    if(res.data.status=="Block")
    {
      const res1 = await axios.patch(`http://localhost:3000/customer/${id}` , {status : "Unblock"});
     if(res1.status == 200)
     {
      // localStorage.setItem('uid', res.data[0].id)
      // localStorage.setItem('uname', res.data[0].nam)
      console.log(res1.data);
      fetch();
      toast.success('Unblock success')
     }
     
    }
    else{
      const res1 = await axios.patch(`http://localhost:3000/customer/${id}` , {status : "Block"});
      if(res1.status == 200)
      {
       console.log(res1.data);
       fetch();
       toast.success('Block success')
      }
    }
   
    
    
  };


  
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
                    <h2>   Customer Details</h2>
                  </div>
                </div>
              </div>
              <div class="alert alert-info " role="alert">
            Customer Details
              </div>
              <table className="table table-striped custom-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                  <th>Email</th>
                  
                    <th>Phone Number</th>
                    <th>City</th>
                    <th>Action</th>
                    <th className="text-left">Action</th>
                
                  </tr>
                </thead>
                <tbody>
                  {data &&
                    data.map((value, index, ) => {
                      return (
                        <tr key={index}>
                          <td>{value.id}</td>
                          <td>
                           {value.name}
                          </td>
                          <td>{value.email}</td>
                          <td>{value.phone_Number}</td>
                          <td>{value.city}</td>
                         
          
                          {/* <td>{value.Discout_Price}</td> */}
                          <td>
                            <button
                              className="btn btn-success"
                              // onClick={() => {
                              //   hit("/edit_casual");
                              // }}
                              onClick={() => statushand(value.id)}
                              data-bs-toggle="modal"
                               data-bs-target="#myModal"
                            >
                              {value.status}
                            </button>
                          </td>
                          <td>
                            <button
                              className="btn btn-danger"
                              onClick={() => deletehand(value.id)}
                            >
                              Delete
                            </button>

                            
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customer_Manage;
