import React from "react";
import Slidebar from "../components/Slidebar";
import Sec_Header from "../components/Sec_Header";
function Add_categories() {
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
                    <h2>Add Categories</h2>
                  </div>
                </div>
              </div>

              <form>
                <div
                  className="alert alert-success"
                  role="alert"
                  style={{ color: "black" }}
                >
                  Add Categories
                </div>
{/* 
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputPassword1"
                    style={{ color: "black" }}
                    className="form-label"
                  >
                    Categories Name
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div> */}

                <div class="input-group mb-3">
                <span style={{marginTop : "-10px" , color : "balck"}}> Categories  </span>
                  {/* <label class="input-group-text" for="inputGroupSelect01">Options</label> */}
                  
                 <br />
                 
                  <select
                    class="form-select"
                    id="inputGroupSelect01"
                    style={{ width: "300%", height: "38px" , color :"grey" , borderColor :"lightgrey" }}
                  >
                    <option selected>Choose...</option>
                    <option value="1">Casual</option>
                    <option value="2">Formal Outfit</option>
                    <option value="3">Party Outfit</option>
                  </select>
                </div>
                
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputPassword1"
                    style={{ color: "black" }}
                    className="form-label"
                  >
                  Prod_Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="exampleInputPassword1"
                    style={{ color: "black" }}
                    className="form-label"
                  >
                    Prod_Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="exampleInputPassword1"
                    style={{ color: "black" }}
                    className="form-label "
                  >
                   Image 
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label
                    className="form-check-label"
                    style={{ color: "black" }}
                    htmlFor="exampleCheck1"
                  >
                    Check me out
                  </label>
                  </div>
                <button type="submit" className="btn btn-primary">
                  Add Categories
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Add_categories;
