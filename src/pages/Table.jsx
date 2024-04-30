import React from "react";

function Table() {
  return (
    <div className="full_container">
      <div className="inner_container">
        {/* Sidebar  */}
        <nav id="sidebar">
          <div className="sidebar_blog_1">
            <div className="sidebar-header">
              <div className="logo_section">
                <a href="index.html">
                  <img
                    className="logo_icon img-responsive"
                    src="images/logo/logo_icon.png"
                    alt="#"
                  />
                </a>
              </div>
            </div>
            <div className="sidebar_user_info">
              <div className="icon_setting" />
              <div className="user_profle_side">
                <div className="user_img">
                  <img
                    className="img-responsive"
                    src="images/layout_img/user_img.jpg"
                    alt="#"
                  />
                </div>
                <div className="user_info">
                  <h6>John David</h6>
                  <p>
                    <span className="online_animation" /> Online
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="sidebar_blog_2">
            <h4>General</h4>
            <ul className="list-unstyled components">
              <li className="active">
                <a
                  href="#dashboard"
                  data-toggle="collapse"
                  aria-expanded="false"
                  className="dropdown-toggle"
                >
                  <i className="fa fa-dashboard yellow_color" />{" "}
                  <span>Dashboard</span>
                </a>
                <ul className="collapse list-unstyled" id="dashboard">
                  <li>
                      <a href="dashboard.html">
                      &gt; <span>Default Dashboard</span>
                    </a>
                  </li>
                   <li>
                      <a href="dashboard_2.html">
                      &gt; <span>Dashboard style 2</span>
                   </a>
                   </li>
                </ul>
              </li>
              <li>
                <a href="widgets.html">
                  <i className="fa fa-clock-o orange_color" />{" "}
                  <span>Widgets</span>
                </a>
              </li>
              <li>
                 <a
                  href="#element"
                  data-toggle="collapse"
                  aria-expanded="false"
                  className="dropdown-toggle"
                 >
                  <i className="fa fa-diamond purple_color" />{" "}
                  <span>Elements</span>
                </a>
                <ul className="collapse list-unstyled" id="element">
                  <li>
                    <a href="general_elements.html">
                      &gt; <span>General Elements</span>
                    </a>
                  </li>
                  <li>
                    <a href="media_gallery.html">
                      &gt; <span>Media Gallery</span>
                    </a>
                  </li>
                  <li>
                    <a href="icons.html">
                      &gt; <span>Icons</span>
                    </a>
                  </li>
                  <li>
                    <a href="invoice.html">
                      &gt; <span>Invoice</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="tables.html">
                  <i className="fa fa-table purple_color2" />{" "}
                  <span>Tables</span>
                </a>
              </li>
              <li>
                <a
                  href="#apps"
                  data-toggle="collapse"
                  aria-expanded="false"
                  className="dropdown-toggle"
                >
                  <i className="fa fa-object-group blue2_color" />{" "}
                  <span>Apps</span>
                </a>
                <ul className="collapse list-unstyled" id="apps">
                  <li>
                    <a href="email.html">
                      &gt; <span>Email</span>
                    </a>
                  </li>
                  <li>
                    <a href="calendar.html">
                      &gt; <span>Calendar</span>
                    </a>
                  </li>
                  <li>
                    <a href="media_gallery.html">
                      &gt; <span>Media Gallery</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="price.html">
                  <i className="fa fa-briefcase blue1_color" />{" "}
                  <span>Pricing Tables</span>
                </a>
              </li>
              <li>
                <a href="contact.html">
                  <i className="fa fa-paper-plane red_color" />{" "}
                  <span>Contact</span>
                </a>
              </li>
              <li className="active">
                <a
                  href="#additional_page"
                  data-toggle="collapse"
                  aria-expanded="false"
                  className="dropdown-toggle"
                >
                  <i className="fa fa-clone yellow_color" />{" "}
                  <span>Additional Pages</span>
                </a>
                <ul className="collapse list-unstyled" id="additional_page">
                  <li>
                    <a href="profile.html">
                      &gt; <span>Profile</span>
                    </a>
                  </li>
                  <li>
                    <a href="project.html">
                      &gt; <span>Projects</span>
                    </a>
                  </li>
                  <li>
                    <a href="login.html">
                      &gt; <span>Login</span>
                    </a>
                  </li>
                  <li>
                    <a href="404_error.html">
                      &gt; <span>404 Error</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="map.html">
                  <i className="fa fa-map purple_color2" /> <span>Map</span>
                </a>
              </li>
              <li>
                <a href="charts.html">
                  <i className="fa fa-bar-chart-o green_color" />{" "}
                  <span>Charts</span>
                </a>
              </li>
              <li>
                <a href="settings.html">
                  <i className="fa fa-cog yellow_color" /> <span>Settings</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        {/* end sidebar */}
        {/* right content */}
        <div id="content">
          {/* topbar */}
          <div className="topbar">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="full">
                <button
                  type="button"
                  id="sidebarCollapse"
                  className="sidebar_toggle"
                >
                  <i className="fa fa-bars" />
                </button>
                <div className="logo_section">
                  <a href="index.html">
                    <img
                      className="img-responsive"
                      src="images/logo/logo.png"
                      alt="#"
                    />
                  </a>
                </div>
                <div className="right_topbar">
                  <div className="icon_info">
                    <ul>
                      <li>
                        <a href="#">
                          {/* <i className="fa fa-bell-o" /> */}
                          <i className="fa-regular fa-bell"></i>

                          <span className="badge">2</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-question-circle" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          {/* <i className="fa fa-envelope-o" /> */}
                          <i className="fa-solid fa-message"></i>
                          <span className="badge">3</span>
                        </a>
                      </li>
                    </ul>
                    <ul className="user_profile_dd">
                      <li>
                        <a className="dropdown-toggle" data-toggle="dropdown">
                          <img
                            className="img-responsive rounded-circle"
                            src="images/layout_img/user_img.jpg"
                            alt="#"
                          />
                          <span className="name_user">John David</span>
                        </a>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="profile.html">
                            My Profile
                          </a>
                          <a className="dropdown-item" href="settings.html">
                            Settings
                          </a>
                          <a className="dropdown-item" href="help.html">
                            Help
                          </a>
                          <a className="dropdown-item" href="#">
                            <span>Log Out</span>{" "}
                            <i className="fa fa-sign-out" />
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
          </div>
          {/* end topbar */}
          {/* dashboard inner */}
          <div className="midde_cont">
            <div className="container-fluid">
              <div className="row column_title">
                <div className="col-md-12">
                  <div className="page_title">
                    <h2>Tables</h2>
                  </div>
                </div>
              </div>
              {/* row */}
              <div className="row">
                {/* table section */}
                <div className="col-md-6">
                  <div className="white_shd full margin_bottom_30">
                    <div className="full graph_head">
                      <div className="heading1 margin_0">
                        <h2>Basic Table</h2>
                      </div>
                    </div>
                    <div className="table_section padding_infor_info">
                      <div className="table-responsive-sm">
                        <table className="table">
                          <thead>
                            <tr>
                              <th>Firstname</th>
                              <th>Lastname</th>
                              <th>Email</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>John</td>
                              <td>Doe</td>
                              <td>john@example.com</td>
                            </tr>
                            <tr>
                              <td>Mary</td>
                              <td>Moe</td>
                              <td>mary@example.com</td>
                            </tr>
                            <tr>
                              <td>July</td>
                              <td>Dooley</td>
                              <td>july@example.com</td>
                            </tr>
                            <tr>
                              <td>Mary</td>
                              <td>Moe</td>
                              <td>mary@example.com</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                {/* table section */}
                <div className="col-md-6">
                  <div className="white_shd full margin_bottom_30">
                    <div className="full graph_head">
                      <div className="heading1 margin_0">
                        <h2>Striped Table</h2>
                      </div>
                    </div>
                    <div className="table_section padding_infor_info">
                      <div className="table-responsive-sm">
                        <table className="table table-striped">
                          <thead>
                            <tr>
                              <th>Firstname</th>
                              <th>Lastname</th>
                              <th>Email</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>John</td>
                              <td>Doe</td>
                              <td>john@example.com</td>
                            </tr>
                            <tr>
                              <td>Mary</td>
                              <td>Moe</td>
                              <td>mary@example.com</td>
                            </tr>
                            <tr>
                              <td>July</td>
                              <td>Dooley</td>
                              <td>july@example.com</td>
                            </tr>
                            <tr>
                              <td>Mary</td>
                              <td>Moe</td>
                              <td>mary@example.com</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                {/* table section */}
                <div className="col-md-6">
                  <div className="white_shd full margin_bottom_30">
                    <div className="full graph_head">
                      <div className="heading1 margin_0">
                        <h2>Bordered Table</h2>
                      </div>
                    </div>
                    <div className="table_section padding_infor_info">
                      <div className="table-responsive-sm">
                        <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th>Firstname</th>
                              <th>Lastname</th>
                              <th>Email</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>John</td>
                              <td>Doe</td>
                              <td>john@example.com</td>
                            </tr>
                            <tr>
                              <td>Mary</td>
                              <td>Moe</td>
                              <td>mary@example.com</td>
                            </tr>
                            <tr>
                              <td>July</td>
                              <td>Dooley</td>
                              <td>july@example.com</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                {/* table section */}
                <div className="col-md-6">
                  <div className="white_shd full margin_bottom_30">
                    <div className="full graph_head">
                      <div className="heading1 margin_0">
                        <h2>Hover Table</h2>
                      </div>
                    </div>
                    <div className="table_section padding_infor_info">
                      <div className="table-responsive-sm">
                        <table className="table table-hover">
                          <thead>
                            <tr>
                              <th>Firstname</th>
                              <th>Lastname</th>
                              <th>Email</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>John</td>
                              <td>Doe</td>
                              <td>john@example.com</td>
                            </tr>
                            <tr>
                              <td>Mary</td>
                              <td>Moe</td>
                              <td>mary@example.com</td>
                            </tr>
                            <tr>
                              <td>July</td>
                              <td>Dooley</td>
                              <td>july@example.com</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                {/* table section */}
                <div className="col-md-6">
                  <div className="white_shd full margin_bottom_30">
                    <div className="full graph_head">
                      <div className="heading1 margin_0">
                        <h2>Dark Table</h2>
                      </div>
                    </div>
                    <div className="table_section padding_infor_info">
                      <div className="table-responsive-sm">
                        <table className="table table-dark">
                          <thead>
                            <tr>
                              <th>Firstname</th>
                              <th>Lastname</th>
                              <th>Email</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>John</td>
                              <td>Doe</td>
                              <td>john@example.com</td>
                            </tr>
                            <tr>
                              <td>Mary</td>
                              <td>Moe</td>
                              <td>mary@example.com</td>
                            </tr>
                            <tr>
                              <td>July</td>
                              <td>Dooley</td>
                              <td>july@example.com</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                {/* table section */}
                <div className="col-md-6">
                  <div className="white_shd full margin_bottom_30">
                    <div className="full graph_head">
                      <div className="heading1 margin_0">
                        <h2>Dark Striped Table</h2>
                      </div>
                    </div>
                    <div className="table_section padding_infor_info">
                      <div className="table-responsive-sm">
                        <table className="table table-dark table-striped">
                          <thead>
                            <tr>
                              <th>Firstname</th>
                              <th>Lastname</th>
                              <th>Email</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>John</td>
                              <td>Doe</td>
                              <td>john@example.com</td>
                            </tr>
                            <tr>
                              <td>Mary</td>
                              <td>Moe</td>
                              <td>mary@example.com</td>
                            </tr>
                            <tr>
                              <td>July</td>
                              <td>Dooley</td>
                              <td>july@example.com</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                {/* table section */}
                <div className="col-md-6">
                  <div className="white_shd full margin_bottom_30">
                    <div className="full graph_head">
                      <div className="heading1 margin_0">
                        <h2>Contextual Table</h2>
                      </div>
                    </div>
                    <div className="table_section padding_infor_info">
                      <div className="table-responsive-sm">
                        <table className="table">
                          <thead>
                            <tr>
                              <th>Firstname</th>
                              <th>Lastname</th>
                              <th>Email</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Default</td>
                              <td>Defaultson</td>
                              <td>def@somemail.com</td>
                            </tr>
                            <tr className="table-primary">
                              <td>Primary</td>
                              <td>Joe</td>
                              <td>joe@example.com</td>
                            </tr>
                            <tr className="table-success">
                              <td>Success</td>
                              <td>Doe</td>
                              <td>john@example.com</td>
                            </tr>
                            <tr className="table-danger">
                              <td>Danger</td>
                              <td>Moe</td>
                              <td>mary@example.com</td>
                            </tr>
                            <tr className="table-info">
                              <td>Info</td>
                              <td>Dooley</td>
                              <td>july@example.com</td>
                            </tr>
                            <tr className="table-warning">
                              <td>Warning</td>
                              <td>Refs</td>
                              <td>bo@example.com</td>
                            </tr>
                            <tr className="table-active">
                              <td>Active</td>
                              <td>Activeson</td>
                              <td>act@example.com</td>
                            </tr>
                            <tr className="table-secondary">
                              <td>Secondary</td>
                              <td>Secondson</td>
                              <td>sec@example.com</td>
                            </tr>
                            <tr className="table-light">
                              <td>Light</td>
                              <td>Angie</td>
                              <td>angie@example.com</td>
                            </tr>
                            <tr className="table-dark text-dark">
                              <td>Dark</td>
                              <td>Bo</td>
                              <td>bo@example.com</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                {/* table section */}
                <div className="col-md-6">
                  <div className="white_shd full margin_bottom_30">
                    <div className="full graph_head">
                      <div className="heading1 margin_0">
                        <h2>Table Head Colors</h2>
                      </div>
                    </div>
                    <div className="table_section padding_infor_info">
                      <div className="table-responsive-sm">
                        <table className="table">
                          <thead className="thead-dark">
                            <tr>
                              <th>Firstname</th>
                              <th>Lastname</th>
                              <th>Email</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>John</td>
                              <td>Doe</td>
                              <td>john@example.com</td>
                            </tr>
                            <tr>
                              <td>Mary</td>
                              <td>Moe</td>
                              <td>mary@example.com</td>
                            </tr>
                            <tr>
                              <td>July</td>
                              <td>Dooley</td>
                              <td>july@example.com</td>
                            </tr>
                          </tbody>
                        </table>
                        <table className="table">
                          <thead className="thead-light">
                            <tr>
                              <th>Firstname</th>
                              <th>Lastname</th>
                              <th>Email</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>John</td>
                              <td>Doe</td>
                              <td>john@example.com</td>
                            </tr>
                            <tr>
                              <td>Mary</td>
                              <td>Moe</td>
                              <td>mary@example.com</td>
                            </tr>
                            <tr>
                              <td>July</td>
                              <td>Dooley</td>
                              <td>july@example.com</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                {/* table section */}
                <div className="col-md-12">
                  <div className="white_shd full margin_bottom_30">
                    <div className="full graph_head">
                      <div className="heading1 margin_0">
                        <h2>Responsive Tables</h2>
                      </div>
                    </div>
                    <div className="table_section padding_infor_info">
                      <div className="table-responsive-sm">
                        <table className="table">
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Firstname</th>
                              <th>Lastname</th>
                              <th>Age</th>
                              <th>City</th>
                              <th>Country</th>
                              <th>Sex</th>
                              <th>Example</th>
                              <th>Example</th>
                              <th>Example</th>
                              <th>Example</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>Anna</td>
                              <td>Pitt</td>
                              <td>35</td>
                              <td>New York</td>
                              <td>USA</td>
                              <td>Female</td>
                              <td>Yes</td>
                              <td>Yes</td>
                              <td>Yes</td>
                              <td>Yes</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* footer */}
            <div className="container-fluid">
              <div className="footer">
                <p>
                  Copyright © 2018 Designed by html.design. All rights reserved.
                </p>
              </div>
            </div>
          </div>
          {/* end dashboard inner */}
        </div>
      </div>
      {/* model popup */}
      {/* The Modal */}
      <div className="modal fade" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header">
              <h4 className="modal-title">Modal Heading</h4>
              <button type="button" className="close" data-dismiss="modal">
                ×
              </button>
            </div>
            {/* Modal body */}
            <div className="modal-body">Modal body..</div>
            {/* Modal footer */}
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* end model popup */}
    </div>
  );
}

export default Table;
