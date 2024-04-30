import React, { useEffect, useState } from "react";
import Slidebar from "../components/Slidebar";
import Sec_Header from "../components/Sec_Header";
import axios from "axios";
import { toast } from "react-toastify";
function Add_product_sec() {
  useEffect(() => {
    fetch();
  }, []);
  const [data, setData] = useState([]);
  const fetch = async () => {
    const res = await axios.get(`http://localhost:3000/Casual`);
    console.log(res.data);
    setData(res.data);
  };

  const [formvalue, setFormvalue] = useState({
    id:"",
    cate_id :"",
    Prod_Name: "",
    Prod_Description: "",
    Price: "",
    Image: "",
  });

  const onChangehandel = (e) => {
    setFormvalue({
      ...formvalue,
      id: new Date().getTime().toString(),
      [e.target.name]: e.target.value,
    });
    console.log(formvalue);
  };
  function validation() {
    var ans = true;
    if (formvalue.cate_id == "") {
      toast.error("Select Categories Field is required");
      ans = false;
      return false;
    }
    if (formvalue.Prod_Name == "") {
      toast.error("Product Name Field is required");
      ans = false;
      return false;
    }

    if (formvalue.Prod_Description == "") {
      toast.error("Description Field is required");
      ans = false;
      return false;
    }
    if (formvalue.Price == "") {
      toast.error("Price Field is required");
      ans = false;
      return false;
    }
    if (formvalue.Image == "") {
      toast.error("Prodcuts Images Field is required");
      ans = false;
      return false;
    }
    return ans;
  }
  const submitHandel = async (e) => {
    console.log(formvalue);
    e.preventDefault();
    if (validation()) {
      const res = await axios.post(`http://localhost:3000/Casual`, formvalue);
      console.log(res);
      if (res.status == 201) {
        toast.success("Data Add Success");
        setFormvalue({
          ...formvalue,
          id: "",
          Prod_Name: "",
          Prod_Description: "",
          Price: "",
          Image: "",
        });
      }
    }
  };
  return (
    <div className="full_container">
      <div className="inner_container">
        {/* Sidebar  */}
        <Slidebar />
        <div id="content">
          <Sec_Header />
          <div className="midde_cont">
            <div className="container-fluid">
              <div className="row column_title">
                <div className="col-md-12">
                  <div className="page_title">
                    <h2>Add Product</h2>
                  </div>
                </div>
              </div>
              <form role="form" action="" onSubmit={submitHandel} method="post">
                <div className="form-group">
                  <label>Product Categorties</label>
                  <select
                    onChange={onChangehandel}
                    value={formvalue.cate_id}
                    name="cate_id"
                    className="form-control"
                  >
                    <option value="">Select Categories</option>
                    {data &&
                      data.map((value) => {
                        return (
                          <option value={value.id}>{value.Prod_Name}</option>
                        );
                    })}
                  </select>
                </div>
                <div className="form-group">
                  <label>Product Name</label>
                  <input
                    type="text"
                    onChange={onChangehandel}
                    value={formvalue.Prod_Name}
                    name="Prod_Name"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>Product Price</label>
                  <input
                    type="number"
                    onChange={onChangehandel}
                    value={formvalue.Price}
                    name="Price"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <textarea
                    onChange={onChangehandel}
                    value={formvalue.Prod_Description}
                    name="Prod_Description"
                    className="form-control"
                  ></textarea>
                </div>

                <div className="form-group">
                  <label>Categories Image</label>
                  <input
                    type="url"
                    onChange={onChangehandel}
                    value={formvalue.Image}
                    name="Image"
                    className="form-control"
                  />
                </div>

                <button type="submit" className="btn btn-default">
                  Submit Button
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Add_product_sec;
