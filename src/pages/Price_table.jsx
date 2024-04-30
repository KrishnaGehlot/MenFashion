import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Sec_Header from "../components/Sec_Header";
import Slidebar from "../components/Slidebar";
import axios from "axios";
import { toast } from "react-toastify";
function Price_table() {
  useEffect(() => {
    fetch();
  }, []);

  const [data, setData] = useState([]);
  const fetch = async () => {
    const res = await axios.get(`http://localhost:3000/Formal_outfit`);
    console.log(res.data);
    setData(res.data);
  };
  const deletehand = async (id) => {
    const res = await axios.delete(`http://localhost:3000/Formal_outfit/${id}`);
    console.log(res.data);
    toast.success("delete success");
    fetch();
  };
  const [formValue, setFormValue] = useState({
    id: "",
    cate_name: "",
    Prod_Name: "",
    Prod_Description: "",
    Price: "",
    Image: "",
  });
  const edithandle = async (id) => {
    const res = await axios.get(`http://localhost:3000/Formal_outfit/${id}`);
    console.log(res.data);
    setFormValue(res.data);
  };

  const onChange = (event) => {
    const { name, value } = event.target;
    setFormValue({
      ...formValue,
      // created_at: getCurrentDateTime(),
      [name]: value,
    });
  };

  const validateForm = () => {
    let result = true;
    const { cate_name, Prod_Name, Prod_Description, Price, Image } = formValue;
    if (!cate_name || !Prod_Name || !Prod_Description || !Price || !Image);
    {
      toast.error("Please fill in all the required fields.");
      result = false;
    }
    return result;
  };
  const onSubmit = async (event) => {
    console.log(formValue);
    event.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post(
          `http://localhost:3000/${formValue.cate_name}`,
          formValue
        );
        if (response.status == 201) {
          toast.success("Your product has been added successfully.");
          setFormValue({
            ...formValue,
            cate_name: "",
            Prod_Name: "",
            Prod_Description: "",
            Price: "",
            Image: "",
            status: "Available",
          });
          setFormValue({
            ...formValue,
            cate_name: "",
            Prod_Name: "",
            Prod_Description: "",
            Price: "",
            Image: "",
          });
        } else {
          toast.warning("Failed to add the product.");
        }
      } catch (error) {
        toast.error("An error occurred while adding the product.");
        console.error(error);
      }
      return false;
    }
  };
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
          <link rel="stylesheet" type="text/css" href="assets/css/style.css" />
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
                    <tr style={{ padding: "50px" }}>
                      <th>ID</th>
                      <th>Image</th>
                      <th> Prod_Name</th>
                      {/* <th>Prod_id</th> */}
                      <th> Prod_Description</th>
                      <th> Price</th>
                      <th>Action</th>
                      <th className="text-left">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data &&
                      data.map((value, index) => {
                        return (
                          <tr key={index}>
                            <td>{value.id}</td>
                            <td>
                              {" "}
                              <img src={value.Image} alt="" width={50} />{" "}
                            </td>
                            <td>{value.Prod_Name}</td>
                            {/* <td>{value.Prod_id}</td> */}
                            <td>{value.Prod_Description}</td>

                            <td>
                              {" "}
                              <i class="fa-solid fa-indian-rupee-sign"></i>
                              {value.Price}
                            </td>
                            <td>
                              <button
                                className="btn btn-success"
                                onClick={() => edithandle(data.id)}
                                data-toggle="modal"
                                data-target="#exampleModal"
                              >
                                Edit
                              </button>
                            </td>
                            <td>
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
                <div
                  class="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                        Edit categories 
                        </h5>
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                      <form role="form" method="post">
                    {/* <div className="form-group">
                      <label> Category Name </label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Enter the Category Name here..."
                        name="cate_name"
                        onChange={onChange}
                      />
                    </div> */}

                    {/* <div className="form-group">
                      <label> Category Name </label>
                      <select
                        id=""
                        className="form-control"
                        name="cate_name"
                        onChange={onChange}
                       >
                        <option disabled selected>
                          {" "}
                          Select Category{" "}
                        </option>
                        <option value="Casual"> Casual Outfit </option>
                        <option value="Formal_outfit"> Formal Outfit </option>
                        <option value="Party_Outfit">
                          {" "}
                           Party Dress{" "}
                        </option>
                        <option value="cargo_pants">Cargo Outfit</option>
                        <option value="chambary">chambary</option>
                      </select>
                    </div> */}

                    <div className="form-group">
                      <label> Product Name </label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Enter the Product Name here..."
                        name="Prod_Name"
                        onChange={onChange}
                      />
                    </div>
                    <div className="form-group">
                      <label> Product Description </label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Enter the Product Description here..."
                        name="Prod_Description"
                        onChange={onChange}
                      />
                    </div>

                    <div className="form-group">
                      <label> Price</label>
                      <input
                        className="form-control"
                        type="number"
                        placeholder="Enter the Main Price of Product ( ₹ )"
                        name="Price"
                        onChange={onChange}
                      />
                    </div>

                    {/* <div className="form-group">
                      <label> Discounted Price</label>
                      <input
                        className="form-control"
                        type="number"
                        placeholder="Enter the Discounted Price of Product ( ₹ )"
                        name="discounted_Price"
                        onChange={onChange}
                      />
                    </div> */}

                    <div className="form-group">
                      <label> Product Image URL </label>
                      <input
                        className="form-control"
                        type="url"
                        placeholder="Enter the Product Image URL"
                        name="Image"
                        onChange={onChange}
                      />
                    </div>

                    <hr />
                    <div className="text-center">
                      <button
                        type="submit"
                        className="btn btn-success"
                        onClick={onSubmit}
                      >
                        Add Product
                      </button>
                    </div>
                  </form>
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" class="btn btn-primary">
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Price_table;
