import React from 'react';
import '../style/nav.css';

function Navbar(){

  
    return(
  
    
            

<header>

  <nav className="navbar navbar-expand-lg navbar-light fixed-top scrolling-navbar p-4">
    <div className="container">
      <a className="navbar-brand" href="#" >
        <strong>Victorya</strong>
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-7"
        aria-controls="navbarSupportedContent-7" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent-7">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Menu
              <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">package</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contact Us</a>
          </li>
        </ul>
        
      </div>
    </div>        
  </nav>
 
  <div className="view" style={{  backgroundImage: "url(" + "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" + ")",}}>
  
    <div className="mask rgba-gradient d-flex justify-content-center align-items-center">
 
      <div className="container">
     
        <div className="row">
        
          <div className="col-md-6 white-text text-center text-md-left mt-xl-5 mb-5 wow fadeInLeft" data-wow-delay="0.3s">
            <h1 className="h1-responsive font-weight-bold mt-sm-5">Good food choices are Good Investment</h1>
        
            <h6 className="mb-4">there are a powerful need for symbolism and that means the architechture must have something that appeals to the human part.</h6>
            <a className="btn btn-rounded" style={{'backgroundColor' : '#f98169'}}>Order Now</a>
            <a className="btn btn-outline-white btn-rounded">Watch our story</a>
            <a className="btn" style={{'backgroundColor' : '#f98169' , 'borderRadius' : '70px'}}>Play</a>
          </div>
        
          {/* <div className="col-md-6 col-xl-5 mt-xl-5 wow fadeInRight" data-wow-delay="0.3s">
            <img src="https://mdbootstrap.com/img/Mockups/Transparent/Small/admin-new.png" alt="" className="img-fluid" />
          </div> */}
  
        </div>
     
      </div>
   
    </div>
  
  </div>


</header>

      

    );
}


export default Navbar;