import React from 'react'
import Slidebar from "../components/Slidebar";
import Sec_Header from "../components/Sec_Header";
function Add_country() {
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
                  <h2>    Add Country</h2>
                </div>
              </div>
            </div>
            <form>
              <div className="alert alert-success" role="alert" style={{color : 'black'}}>
               Add Country
              </div>

              <div class="input-group mb-3">
                <span style={{marginTop : "-10px" , color : "balck"}}> Product Layout  </span>
                  {/* <label class="input-group-text" for="inputGroupSelect01">Options</label> */}
                 <br />
                  <select
                    class="form-select"
                    id="inputGroupSelect01"
                    style={{ width: "300%", height: "38px" , color :"grey" , borderColor :"lightgrey" }}
                  >
                    <option selected>Choose...</option>
                    <option value="1">India</option>
                    <option value="2">USA</option>
                    <option value="3">Canada</option>
                  </select>
                </div>
              <button type="submit" className="btn btn-primary">
                Add Country
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Add_country
