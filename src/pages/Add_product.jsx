import React, { useEffect, useState } from "react";
import Slidebar from "../components/Slidebar";
import Sec_Header from "../components/Sec_Header";
import axios from "axios";
import { toast } from "react-toastify";
function Add_product() {
  useEffect(()=>{
    fetch();
  },[])
  const [data , setData] = useState([])
  const fetch = async()=>{
    const result = await axios.get(`http://localhost:3000/Formal_outfit`)
    console.log(result.data)
    setData(result.data)
  }
  
   const [form , setForm] = useState({
    id : "",
    Image : "",
    Prod_Name :"",
    Prod_Description : "",
    Price : "",
    Prod_id : ""
   })

  const onchangehandle =  (e)=>{
   setForm({...form, id :new Date().getTime().toString(), [e.target.name]:e.target.value})
  console.log(form)
  }

function validation(){      
  var ans = true;
  if(form.Prod_Name==="")
  {
    toast.error('Prod Name is feild required')
    ans= false
    return false;
  }
  if(form.Image==="")
  {
   toast.error('Image is feild required')
   ans= false
   return false;
  }
  return ans;
}


  const submithandle = async(i)=>{
  i.preventDefault();
  if(validation()){
  const res = await axios.post(`http://localhost:3000/Formal_outfit`, form)
  console.log(res)
  if(res.status === 201)
  {
  toast.success('data add success')
  setForm({...form , id:"", Prod_Name:"",  Prod_id :"", Price:"", Prod_Description :"", Image :"" })
  }
}
  }
  return (
      <div className="full_container">
      <div className="inner_container">
        {/* Sidebar  */}
        <Slidebar />
        {/* end sidebar */}
        {/* right content */}
        <div id="content">

          <Sec_Header />
       
          <div className="midde_cont">
            <div className="container-fluid">
              <div className="row column_title">
                <div className="col-md-12"> 
                  <div className="page_title">
                    <h2>Add Product</h2>
                  </div>
                </div>
              </div>
            <form  action="" onSubmit={submithandle} method="post">
                <div className="alert alert-success" role="alert" style={{color : 'black'}}>
                  Add Product
                </div>
                <div class="input-group mb-3">
                <span style={{marginTop : "-10px" , color : "balck"}}> Product Layout  </span>
                  {/* <label class="input-group-text" for="inputGroupSelect01">Options</label> */}
                 <br />
                  <select
                    class="form-select"
                    style={{ width: "300%", height: "38px" , color :"grey" , borderColor :"lightgrey" }}
                    value={form.Prod_id}
                    name="Prod_id"
                    onChange={onchangehandle}>
                    <option value="" >Choose</option>
                    <option value="casula" >Casual</option>
                    <option value="party" >Party</option>
                    <option value="formal" >Formal</option>
                    <option value=""></option>
                    <option value=""></option>
                    {/* {
                      data && data.map((value)=>{
                        return(
                          <option value={value.id}>{value.}</option>
                        )
                      })
                    } */}
                    {/* <option >Casual</option>
                    <option >Formal Dress</option>
                    <option >Party Dress</option> */}
                  </select>
                </div>
                <div className="mb-3">
                  <label  htmlFor="exampleInputPassword1"  style={{color : 'black'}} className="form-label">
                    Product Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword12"
                    value={form.Prod_Name}
                    name="Prod_Name"
                    onChange={onchangehandle}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1"  style={{color : 'black'}} className="form-label">
                    Product Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    value={form.Prod_Description}
                    name="Prod_Description"
                    onChange={onchangehandle}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1"  style={{color : 'black'}} className="form-label">
                   Price
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    value={form.Price}
                    name="Price"
                    onChange={onchangehandle}
                  />
                </div>
               
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1"  style={{color : 'black'}} className="form-label ">
                    Product Image URL
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    value={form.Image}
                    name="Image"
                    onChange={onchangehandle}
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label"  style={{color : 'black'}} htmlFor="exampleCheck1">
                    Check me out
                  </label>
                </div>
                <button type="submit" className="btn btn-primary">
                  Add Product
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  }

export default Add_product;
