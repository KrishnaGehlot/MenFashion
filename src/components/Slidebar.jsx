import React from "react";
import { NavLink } from "react-router-dom";

function Slidebar() {
  return (
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
                <NavLink to="/dashboard">
                  &gt; <span>Default Dashboard</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard">
                  &gt; <span>Dashboard style 2</span>
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <a href="widgets.html">
              <i className="fa fa-clock-o orange_color" /> <span>Add </span>
            </a>
          </li>
          <li>
            <a
              href="#element"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              <i className="fa-solid fa-person" style={{ color: "#df9b26" }} />
              <span> Add Categories</span>
            </a>
            <ul className="collapse list-unstyled" id="element">
              <li>
                <NavLink to="/add_cargo">
                  &gt; <span>Add Product</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/Add_product_sec">
                  &gt; <span>Add Product Id</span>
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <a href="widgets.html">
              <i className="fa fa-clock-o orange_color" /> <span>Manage </span>
            </a>
          </li>
          <li>
            <NavLink to="/manage_party_outfit">
              {/* <i className="fa fa-briefcase blue1_color" />{" "} */}
              <i className="fa fa-clock yellow_color" />{" "}
              <span>Manage Party Dress</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/manage_casual">
              {/* <i className="fa fa-briefcase blue1_color" />{" "} */}
              <i className="fa fa-star red_color" /> <span>Manage Casual</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/price">
              <i className="fa fa-snowflake blue1_color" />{" "}

 <span>Manage Formal</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Manage_cargo">
              <i
                className="fa-solid fa-champagne-glasses"
                style={{ color: "#B197FC" }}
              />

              <span>Manage Cargo Pants</span>
            </NavLink>
          </li>
          <li>
                <NavLink to="/manage_chambary">
                <i
                className="fa-solid fa-chart-simple"
                style={{ color: "#31c469" }}
              />
                 <span>Manage Chambray</span>
                </NavLink>
              </li>
           
          <li>
            <NavLink to="/customer">
              {/* <i className="fa fa-briefcase blue1_color" />{" "} */}
              <i className="fa fa-circle-user yellow_color" /> <span>Manage Employee</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/customer">
              {/* <i className="fa fa-briefcase blue1_color" />{" "} */}
              <i className="fa fa-user yellow_color" /> <span> Manage Customer</span>
            </NavLink>
          </li>
          
          <li>
            <NavLink to="/contact">
              <i className="fa fa-paper-plane red_color" /> <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Slidebar;
