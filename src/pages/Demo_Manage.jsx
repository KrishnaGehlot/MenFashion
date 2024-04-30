import React, { useEffect, useState } from "react";
import Sec_Header from "../components/Sec_Header";
import Slidebar from "../components/Slidebar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function Demo_Manage() {
  const hit = useNavigate();
  useEffect(() => {
    fetch();
  }, []);
  const [data, setData] = useState([]);
  const fetch = async () => {
    const res = await axios.get(`http://localhost:3000/polo_shirt`);
    console.log(res.data);
    setData(res.data);
  };
  const deletehand = async (id) => {
    const res = await axios.delete(`http://localhost:3000/polo_shirt/${id}`);
    console.log(res.data);
    fetch();
    toast.success("delete data success");
  };
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
                    <h2> Manage Casual</h2>
                  </div>
                </div>
              </div>
              <div class="alert alert-info " role="alert">
                Manage Casual
              </div>
              <table
                className="table table-striped table-bordered table-hover"
                id="dataTables-example"
              >
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Products Name</th>
                    <th>Prod Id</th>
                    <th>Products Price</th>
                    <th>Description</th>
                    <th>Images</th>
                    <th align="center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data &&
                    data.map((value, index) => {
                      return (
                        <tr className="odd gradeX" key={index}>
                          <td>{value.id}</td>
                          <td>{value.Prod_Name}</td>
                          <td>{value.Prod_id}</td>
                          <td>{value.Price}</td>
                          <td>{value.Prod_Description}</td>
                          <td>
                            <img src={value.Image} width="50px" alt="" />
                          </td>
                          <td className="center">
                            <button
                              className="btn btn-danger"
                              onClick={() => deletehand(value.id)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Demo_Manage;
