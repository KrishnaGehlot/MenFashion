import React from "react";
import Sec_Header from "../components/Sec_Header";
import Slidebar from "../components/Slidebar";

function Manage_categories() {
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
                    <h2>Manage Categories</h2>
                  </div>
                </div>
              </div>
              <div class="alert alert-info " role="alert">
  Manage Categories
</div>
              <table class="table table-bordered-danger">
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
                    <td>John</td>
                    <td>Doe</td>
                    <td>john@example.com</td>
                    <td style={{ width: "120px" }}>
                      {" "}
                      <button class="btn btn-success">Edit</button>{" "}
                    </td>
                    <td style={{ width: "120px" }}>
                      {" "}
                      <button class="btn btn-danger">Delete</button>{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>Mary</td>
                    <td>Moe</td>
                    <td>mary@example.com</td>
                    <td style={{ width: "120px" }}>
                      {" "}
                      <button class="btn btn-success">Edit</button>{" "}
                    </td>
                    <td style={{ width: "120px" }}>
                      {" "}
                      <button class="btn btn-danger">Delete</button>{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>July</td>
                    <td>Dooley</td>
                    <td>july@example.com</td>
                    <td style={{ width: "120px" }}>
                      {" "}
                      <button class="btn btn-success">Edit</button>{" "}
                    </td>
                    <td style={{ width: "120px" }}>
                      {" "}
                      <button class="btn btn-danger">Delete</button>{" "}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Manage_categories;
