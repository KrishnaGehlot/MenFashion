import React, { useState , useEffect } from "react";
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const redirect=useNavigate()

//   useEffect(()=>{
//     if(localStorage.getItem('uid'))
//     {
//         redirect('/');
//     }
// });

  const [formvalue , setFormvalue] = useState({
    email : "",
    password: ""
  })
  const onchagehandle = (e)=>{
    setFormvalue({...formvalue , [e.target.name] : e.target.value})
    console.log(formvalue);
  }
  
  function validation() {
    var ans = true

    if(formvalue.email=="")
    {
       toast.error('email feild is required ')
       ans= false;
       return false
    }

    if(formvalue.password=="")
    {
       toast.error('password feild is required ')
       ans= false;
       return false
    }
    return ans;
  }


  const onsubmithandle = async(i)=>{
    i.preventDefault()
if(validation()){
 const res_arr = await axios.get(`http://localhost:3000/customer?email=${formvalue.email}`)
  console.log(res_arr) 
  if(res_arr.data.length>0)
  {
    if(res_arr.data[0].password==formvalue.password)
    {
            if(res_arr.data[0].status=="Unblock")
            {
              localStorage.setItem('uid', res_arr.data[0].id)
              localStorage.setItem('uname', res_arr.data[0].name)
              toast.success('Login success')
              return redirect('/')
            }
            else
            {
              toast.error('Account block contact branch')
              setFormvalue({...formvalue , email : "" , password : ""})
              return false;
            }
    }
    else
    {
      toast.error('password does  not match')
      setFormvalue({...formvalue , email : "" , password : ""})
      return false;
    }
  }
  else{
    toast.error('please correct email feild ')
    setFormvalue({...formvalue , email : "" , password : ""})
    return false
  }
}

}
useEffect(()=>{
  const res =  localStorage.getItem('uid')
  console.log(res);
  if(res==null)
  {
  redirect('/login')
  }
  else{
    redirect('/')
  }
 },[])
  return (
    <div>
      <div className="full_container">
        <div className="container">
          <div className="center verticle_center full_height">
            <div className="login_section">
              <div className="logo_login">
                <div className="center">
                  <img width={210} src="images/logo/logo.png" alt="#" />
                </div>
              </div>
              <div className="login_form">
                <form role="form" method="post" onSubmit={onsubmithandle}>
                  <fieldset>
                    <div className="field">
                      <label className="label_field">EmailAddress</label>
                      <input type="email" 
                       placeholder="E-mail"
                       name='email'
                       value={formvalue.email}
                       onChange={onchagehandle}
                       />
                    </div>
                    <div className="field">
                      <label className="label_field">Password</label>
                      <input
                        type="password"
                        placeholder="Password"
                        name='password'
                        value={formvalue.password}
                        onChange={onchagehandle}
                      />
                    </div>
                    <div className="field">
                      <label className="label_field hidden">hidden label</label>
                      <label className="form-check-label">
                        <input type="checkbox"
                         className="form-check-input"
                        
                         />{" "}
                        Remember Me
                      </label>
                      <a className="forgot" href>
                        Forgotten Password?
                      </a>
                    </div>
                    <div className="field margin_0">
                      <label className="label_field hidden">hidden label</label>
                      <button className="main_bt">Login </button>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
