// import React, { useRef, useState } from "react";
import { useNavigate , Link, useParams} from "react-router-dom";
export const AboutPage=()=>{


  
      


return (

<div className="mt-5">
  <h2 className="d-flex justify-content-center mt-5 text-info"> wellcom</h2>
  {/* <img src={process.env.PUBLIC_URL+"images/img.jpg"} style={{width:"50px"}} /> */}
    <div  className="d-flex  mt-5 flex-wrap">

        < div className="card m-5 bg-light " style={{width:"18rem"}}>
        
            <img src={process.env.PUBLIC_URL+"images/B.jpg"} style={{width:"100%"}} />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                {/* <a href="#" className="btn btn-primary"></a> */}
                <Link to="/Home" className="btn btn-primary">
                Go somewhere
                </Link>
        
            </div>
        </div>

        <div className="card m-5 bg-light" style={{width:"18rem"}}>
            <img src={process.env.PUBLIC_URL+"images/p.jpg"} style={{width:"100%"}} />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to="/Home" className="btn btn-primary">
                Go somewhere
                </Link>
            </div>
        </div> 

        <div className="card m-5 bg-light" style={{width:"18rem"}}>
            <img src={process.env.PUBLIC_URL+"images/S.jpg"} style={{width:"100%"}} />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to="/Home" className="btn btn-primary">
                Go somewhere
                </Link>
            </div>
        </div>

        <div className="card m-5 bg-light" style={{width:"18rem"}}>
            <img src={process.env.PUBLIC_URL+"images/j.jpg"} style={{width:"100%"}} />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to="/Home" className="btn btn-primary">
                Go somewhere
                </Link>
            </div>


    </div>

    </div>




  </div>


  )



}