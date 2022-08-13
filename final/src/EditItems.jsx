import React, { useState ,useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";

export const EditItems = (props) => {
  const { productId } = useParams();
  const { getProductById, onEditProduct } = props;
  const product = getProductById(productId);

  // const [errorSubmit, setErrorSubmit] = useState("");



  useEffect(() => {
    setFormData((previousState) => ({
      ...previousState,
      name: product?.name ,
    
    }));
  }, [product]);


  const [formData, setFormData] = useState({
    name: product?.name,
    errors: {},
  
  
  });

  

  const handleOnChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    
  };
  
  const navigate = useNavigate();
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { errors, ...product } = {...formData, id: productId,};

    const isValid = validate();
    if (isValid) {
      onEditProduct (product);
      navigate("/Home", { replace: true });
      
    }
  }

  const validate = () => {
    let errors = {};
    if (!formData.name.trim()) {
      errors.name = "please enter the name";
    }
    setFormData((prev) => ({ ...prev, errors }));
    return !Object.keys(errors).length;
  };
  if (!product) {
    return (
      <div>
        <h3>Cannot edit a not-found product!</h3>
      </div>
    );
  }
  console.log(formData)
  return (

    <div className="pt-5 px-5 mt-5 bg-light">
      <h3>Edit product</h3>
      <hr />
      <form onSubmit={handleOnSubmit}>
        
        <div className="mb-3">
          <label htmlFor="product-name" className="form-label">
            Product name:
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={handleOnChange}
            className="form-control"
            id="product-name"
            name="name"
          />
  
          


          <div className="text-danger my-2">{formData.errors.name}</div>
        </div>
      
        <div className="d-flex gap-5 " style={{ width: "50%" }}>

          <button type="submit"    className="btn btn-info flex-grow-1">
            Save
          </button>
          
          <Link to="/Home" className="btn btn-secondary flex-grow-1">
            Cancel
          </Link>
        
        </div>
      </form>
    </div>
  );
};
