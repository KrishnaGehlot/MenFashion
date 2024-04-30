import React from "react";
import Slidebar from "../components/Slidebar";
import Sec_Header from "../components/Sec_Header";
function Form_one() {
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
                    <h2>Add Product</h2>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card-box">
                  <h4 className="card-title">Basic Form</h4>
                  <form action="#">
                    <div className="form-group">
                      <label>First Name</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label>Last Name</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label>Email Address</label>
                      <input type="email" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label>Username</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input type="password" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label>Repeat Password</label>
                      <input type="password" className="form-control" />
                    </div>
                    <div className="text-right">
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </div>
                    
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form_one;
