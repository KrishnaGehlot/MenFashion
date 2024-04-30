import React, { useEffect, useState } from "react";
import Slidebar from "../components/Slidebar";
import Sec_Header from "../components/Sec_Header";
import axios from "axios";
import { toast } from "react-toastify";
function Add_cargo() {
  useEffect(() => {
    fetch();
}, []);
const [data, setData] = useState([]);
const fetch = async () => {
    const res = await axios.get(`http://localhost:3000/categories`);
    console.log(res.data);
    setData(res.data);
}

  const [formValue, setFormValue] = useState({
    id:"",
    cate_id :"",
    cate_name : "",
    Prod_Name: "",
    Prod_Description: "",
    Price: "",
    Image: "",
  });
  
  const onChange = (event) => {
    const { name, value } = event.target;
    setFormValue({
      ...formValue,
      id: new Date().getTime().toString(),
      // created_at: getCurrentDateTime(),
      [name] : value,
    });
  };

  const validateForm = () => {
    let result = true;
    const { cate_name, Prod_Name, Prod_Description, Price, Image } =
      formValue;
    if (
      !cate_name ||
      !Prod_Name ||
      !Prod_Description||
      !Price ||
      !Image 
    )  {
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
        console.log(response);
        if (response.status == 201) {
          toast.success("Your product has been added successfully.");
           setFormValue({
            ...formValue,
            cate_name : "",
            Prod_Name:"",
            Prod_Description :"",
            Price: "",
            Image: "",
            status: "Available",
           });
          // setFormValue({...formValue , cate_name : "" , Prod_Name : "" , Prod_Description : "" , Price : "",  Image : ""})
        } else {
          toast.warning("Failed to add the product.");
        }
      }
       catch (error) {
        toast.error("An error occurred while adding the product.");
        console.error(error);
      }
      return false
    }
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
                    <h2>Add Product</h2>
                  </div>
                </div>
              </div>
            {/* <form role="form" action="" onSubmit={submithandle} method="post">
                <div className="alert alert-success" role="alert" style={{color : 'black'}}>
                  Add Product
                </div>

                <div class="input-group mb-3">
                <span style={{marginTop : "-10px" , color : "balck"}}> Product Layout  </span>
                  
                 <br />
                 
                  <select
                    class="form-select"
                    id="inputGroupSelect01"
                    style={{ width: "300%", height: "38px" , color :"grey" , borderColor :"lightgrey" }}
                    name="Categories"
                    onChange={onchange}>
                    <option >Casual</option>
                    <option >Formal Dress</option>
                    <option >Party Dress</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label  htmlFor="exampleInputPassword1"  style={{color : 'black'}} className="form-label">
                    Product Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword12"
                    value={form.Prod_Name}
                    name="Prod_Name"
                    onChange={onchangehandle}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1"  style={{color : 'black'}} className="form-label">
                    Product Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    value={form.Prod_Description}
                    name="Prod_Description"
                    onChange={onchangehandle}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1"  style={{color : 'black'}} className="form-label">
                   Price
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    value={form.Price}
                    name="Price"
                    onChange={onchangehandle}
                  />
                </div>
               
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1"  style={{color : 'black'}} className="form-label ">
                    Product Image URL
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    value={form.Image}
                    name="Image"
                    onChange={onchangehandle}
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label"  style={{color : 'black'}} htmlFor="exampleCheck1">
                    Check me out
                  </label>
                </div>
                <button type="submit" className="btn btn-primary">
                  Add Product
                </button>
              </form> */}
              <form role="form" method="post">
                   

                    <div className="form-group">
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
                    </div>

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
          </div>
        </div>
      </div>
    </div>
  );
  }

export default Add_cargo;

