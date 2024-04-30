import axios from "axios";
import React, { useEffect, useState } from "react";
import {   Link, useNavigate } from "react-router-dom";
// import {toast} from "react-toastify"
import {toast} from 'react-toastify'
function Edit_cate() {

  const redirect= useNavigate
  useEffect(()=>{
    if(localStorage.getItem('uid'))
    {
      redirect('/Edit_cate')
    }
  })
    const [formvalue , setFormvalue] = useState({
        id : "",
        name : "",
        email : "",
        phone_Number : "", 
        city : "",
        password:""
    })
    const onchangehandle= (e)=>{
      setFormvalue({...formvalue , id : new Date().getTime().toString(), status:"Unblock" , [e.target.name] : e.target.value})
    console.log(formvalue);
    }

    const onsubmithandle = async(i)=>{
        i.preventDefault()
        const res =  await axios.get(`http://localhost:3000/customer?email=${formvalue.email}`)
        console.log(res.data);
        if(res.data.length > 0)
        {
          toast.error('email id already exist')
          setFormvalue({...formvalue , id: "" , name:"" , email : "" , phone_Number : "" , city : "" , password : ""})
      }
      else{
        const res = await axios.post(`http://localhost:3000/customer` , formvalue)
        console.log(res)
        if(res.status == 201)
        {
          toast.success('data add success')
          setFormvalue({...formvalue , id: "" , name:"" , email : "" , phone_Number : "" , city : "" , password : ""})
        }
      }
    }

  return (
    <>
      <section className="sign-in-form section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto col-12">
              <h1 className="hero-title text-center mb-5">Sign_up</h1>
              <div className="row">
                <div className="col-lg-8 col-11 mx-auto">
                  <form role="form" method="post" onSubmit={onsubmithandle} >
                    <div className="form-floating mb-4 p-0">
                      <input
                        type="text"
                        id="email"
                        className="form-control"
                        placeholder="Email address"
                        value={formvalue.name}
                        name="name"
                        onChange={onchangehandle}
                      />
                      <label htmlFor="email">Full Name</label>
                    </div>
                    <div className="form-floating mb-4 p-0">
                      <input
                        type="email"
                       
                        id="email"
                        pattern="[^ @]*@[^ @]*"
                        className="form-control"
                        placeholder="Email address"
                        required
                        value={formvalue.email}
                        name="email"
                        onChange={onchangehandle}
                      />
                      <label htmlFor="email">Email Address</label>
                    </div>
                    <div className="form-floating mb-4 p-0">
                      <input
                        type="number"
                      
                        id="email"
                        pattern="[^ @]*@[^ @]*"
                        className="form-control"
                        placeholder="Email address"
                        required
                        value={formvalue.phone_Number}
                        name="phone_Number"
                        onChange={onchangehandle}
                      />
                      <label htmlFor="email">Phone Number</label>
                    </div>
                    <div className="form-floating mb-4 p-0">
                      <input
                        type="text"
                      
                        id="email"
                        className="form-control"
                        placeholder="Email address"
                        required
                        value={formvalue.city}
                        name="city"
                        onChange={onchangehandle}
                      />
                      <label htmlFor="email">City</label>
                    </div>
                    <div className="form-floating p-0">
                      <input
                        type="password"
                        id="password"
                        className="form-control"
                        placeholder="Password"
                        required
                        value={formvalue.password}
                        name="password"
                        onChange={onchangehandle}
                       />
                      <label htmlFor="password">Password</label>
                    </div>
                    <button
                      type="submit"
                      className="btn custom-btn form-control mt-4 mb-3"
                    >
                    Sign up
                    </button>
                    <p className="text-center">
                      Don’t have an account?{" "}
                      <Link to="/login">Login </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Edit_cate;
