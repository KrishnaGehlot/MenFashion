import React from "react";
import Sec_Header from "../components/Sec_Header";
import Slidebar from "../components/Slidebar";
function Manage_formal_outfit() {
  return (
    // <Table striped>
    <>
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
                <table class="table table-bordered border-primary">
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
                    <tr>
                        <th>1</th>
                        <th>Jacob</th>
                        <th>Thornton</th>
                        <th>@Thornton</th>
                        <th style={{width : "100px"}} >
                            <img src="https://i.pinimg.com/originals/35/05/45/3505452c97e4ceb824cc20885d58c844.jpg" height={200}  alt="" />
                        </th>
                        <th style={{width : "120px"}}> <button className="btn btn-success">Edit</button> </th>
                        <th  style={{width : "120px"}}> <button className="btn btn-danger">Delete</button> </th>

                    </tr>
                    <tr>
                        <th>2</th>
                        <th>john</th>
                        <th>Lossy</th>
                        <th>123@john</th>
                        <th style={{width : "100px"}} >
                            <img src="https://i.pinimg.com/736x/e9/9a/b0/e99ab05c6dc40d59f8d301c39d16f45b.jpg" height={200}  alt="" />
                        </th>
                        <th style={{width : "120px"}}> <button className="btn btn-success">Edit</button> </th>
                        <th  style={{width : "120px"}}> <button className="btn btn-danger">Delete</button> </th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Manage_formal_outfit;
