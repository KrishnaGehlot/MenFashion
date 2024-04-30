import React from 'react'
import Sec_Header from "../components/Sec_Header";
import Slidebar from "../components/Slidebar";
function Casual() {
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
                        <th>#</th>
                        <th>First</th>
                        <th>Last</th>
                        <th>Handle</th>
                        <th>Image</th>
                        <th>Action</th>
                        <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                        <th>1</th>
                        <th>Jacob</th>
                        <th>Thornton</th>
                        <th>@Thornton</th>
                        <th style={{width : "100px"}} >
                            <img src="https://www.politix.com.au/on/demandware.static/-/Library-Sites-PolitixSharedLibrary/default/dwd28e7f0b/images/Blog/2021/09%20-%20Sep/Smart-casual-guide-for-men-in-2021/MicrosoftTeams-image%20%2820%29.png" height={200}  alt="" />
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
                            <img src="https://m.media-amazon.com/images/I/71wAR5-lggL._AC_UY1100_.jpg" height={200}  alt="" />
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
  )
}

export default Casual
