import React from 'react'
import Slidebar from "../components/Slidebar";
import Sec_Header from "../components/Sec_Header";
function Comment() {
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
                    <h2>Comments</h2>
                  </div>
                </div>
              </div>
              <div class="alert alert-warning " role="alert">
 Comments
</div>
              <table class="table table-bordered-danger">
                <thead>
                  <tr>
                    <th>best Product 👍👍👍❤️❤️❤️</th>
                  </tr>
                  <tr>
                    <th>#That's a Beautiful Color on You 😘👍❤️</th>
                  </tr>
                </thead>
              
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comment
