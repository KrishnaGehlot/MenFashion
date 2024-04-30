import React from "react";
import { Helmet } from "react-helmet";
import Sec_Header from "../components/Sec_Header";
import Slidebar from "../components/Slidebar";

function Table_Data() {
  return (
    <>
  
      <Helmet>
        <div>
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="assets/img/favicon.ico"
          />
          <title>
            Preclinic - Medical &amp; Hospital - Bootstrap 4 Admin Template
          </title>
          <link
            rel="stylesheet"
            type="text/css"
            href="assets/css/bootstrap.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="assets/css/font-awesome.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="assets/css/select2.min.css"
          />
          <link  rel="stylesheet"  type="text/css" href="assets/css/style.css" />
        </div>
        <script src="assets/js/jquery-3.2.1.min.js"></script>
        <script src="assets/js/popper.min.js"></script>
        <script src="assets/js/bootstrap.min.js"></script>
        <script src="assets/js/jquery.slimscroll.js"></script>
        <script src="assets/js/select2.min.js"></script>
        <script src="assets/js/app.js"></script>
      </Helmet>
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
                      <h2> Manage Formal Outfit</h2>
                    </div>
                  </div>
                </div>
                <div class="alert alert-info " role="alert">
                  Manage Formal Outfit
                </div>
                <table className="table table-striped custom-table">
                  <thead>
                    <tr>
                      <th>Appointment ID</th>
                      <th>Patient Name</th>
                      <th>Age</th>
                      <th>Doctor Name</th>
                      {/* <th>Department</th> */}
                      <th>Appointment Date</th>
                      <th>Appointment Time</th>
                      <th>Status</th>
                      <th className="text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>APT0001</td>
                      <td>
                        <img
                          width={28}
                          height={28}
                          src="assets/img/user.jpg"
                          className="rounded-circle m-r-5"
                          alt
                        />{" "}
                        Denise Stevens
                      </td>
                      <td>35</td>
                      <td>Henry Daniels</td>
                      {/* <td>Cardiology</td> */}
                      <td>30 Dec 2018</td>
                      <td>10:00am - 11:00am</td>
                      <td>
                        <span className="custom-badge status-red">
                          Inactive
                        </span>
                      </td>
                      <td className="text-right">
                        <div className="dropdown dropdown-action">
                          <a
                            href="#"
                            className="action-icon dropdown-toggle"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="fa fa-ellipsis-v" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a
                              className="dropdown-item"
                              href="edit-appointment.html"
                            >
                              <i className="fa fa-pencil m-r-5" /> Edit
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                              data-toggle="modal"
                              data-target="#delete_appointment"
                             >
                              <i className="fa fa-trash-o m-r-5" /> Delete
                             </a>
                           </div>
                         </div>
                       </td>
                       </tr>
                     <tr>
                      <td>APT0002</td>
                      <td>
                        <img
                          width={28}
                          height={28}
                          src="assets/img/user.jpg"
                          className="rounded-circle m-r-5"
                          alt
                        />{" "}
                        Denise Stevens
                      </td>
                      <td>35</td>
                      <td>Henry Daniels</td>
                      {/* <td>Cardiology</td> */}
                      <td>30 Dec 2018</td>
                      <td>10:00am - 11:00am</td>
                      <td>
                        <span className="custom-badge status-green">
                          Active
                        </span>
                      </td>
                      <td className="text-right">
                        <div className="dropdown dropdown-action">
                          <a
                            href="#"
                            className="action-icon dropdown-toggle"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="fa fa-ellipsis-v" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a
                              className="dropdown-item"
                              href="edit-appointment.html"
                            >
                              <i className="fa fa-pencil m-r-5" /> Edit
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                              data-toggle="modal"
                              data-target="#delete_appointment"
                            >
                              <i className="fa fa-trash-o m-r-5" /> Delete
                            </a>
                          </div>
                        </div>
                      </td>
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

export default Table_Data;
