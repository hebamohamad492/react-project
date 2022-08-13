import React, { useRef, useState } from "react";
import { useNavigate , Link, useParams} from "react-router-dom";
export const HomePage=(props)=>{
  const [formData, setFormData] = useState({
    name: "",
    errors: {},
  });

  const handleOnChange = (e) => {
     
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    
  };
  

  const { products, onDelete,onAddProduct  } = props;
    const navigate = useNavigate();
    const handleOnSubmit = (e) => {
      e.preventDefault();
      
      console.log(formData);
      const product = { ...formData, name: formData.name };

      const isValid = validate();
      if (isValid) {
        onAddProduct(product);
        navigate("/Home", { replace: true })
        ;
      }
      formData.name=""
    };
  
    const validate = () => {
      let errors = {};
      if (!formData.name.trim()) {
        errors.name = "Name is required!";
        
      }
      setFormData((prev) => ({ ...prev, errors }));
      return !Object.keys(errors).length;
    };

   const handleClick = event => {
    if (event.target.style.textDecoration) {
      event.target.style.removeProperty('text-decoration');
    } else {
      event.target.style.setProperty('text-decoration', 'line-through');
   
    }
  
    
  if (!products) {
    return (<div>
      <h3>sorry!!we could'nt find product to edit </h3>
      </div>); }

  };
  
  
    return (
        <div className="pt-5 px-5 bg-light m-3  ">
          <h3 className=" d-flex  text-uppercase text-primary d-flex justify-content-center"> {" to do list"}</h3>
          <hr />

            <div className="g-3 bg-secondary">
            { <ul style={{ listStyle: "none" }} className=" gap-4  ">
              {products.map(({ id, name}) => (
              <li
                key={id}
                className="my-2 ">
             <div className="border border-1 my-2 p-2 d-flex justify-content-between rounded  " > 
                    <Link to=""  onClick={handleClick} className="  text-decoration-none" style={{color:"darkblue"}}>
                      <div className="p-1 d-flex">
                        <h4 >{name} </h4>
                      </div>
                    </Link>
                      <div  className="">
                        <Link to={`/edit-Item/${id}`}  className="btn btn-link mx-3  border border-1 bg-body text-decoration-none" >
                        Edit Product
                        </Link>
                        <button className="btn  " onClick={() => onDelete(id)}><i className="fa fa-trash fa-3x "style={{color:"darkblue"}} aria-hidden="true"></i> </button>
                      </div> 
                </div> 
            
              </li>))}
            </ul> }
            </div>
            <form onSubmit={handleOnSubmit}>
      
          
          
            <div className="d-flex justify-content-center g-5 my-3" style={{ width: "100%" }}>
                <button type="submit" className="btn btn-primary" style={{ width: "30%" }}>
                ADD NEW TODO...
                </button>
            </div>
            <div className="mx-4">
              <input
                type="text"
                placeholder="enter you want here"
                  value={formData.name}
                  onChange={handleOnChange}
                  className="form-control p-3"
                  id="product-name"
                  name="name"
                />
                <div className="text-danger my-2" role="alert" 
                >{formData.errors.name}</div>
            </div>
            </form>
        </div>
        );
    }
    