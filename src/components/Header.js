
import axios from "axios";
import { useState } from "react";

function Header(props) {
  
  const [email, setEmail] = useState(0);
  const addPerson = () => {
  axios.get(
    `https://webtechlecture.appspot.com/cloudstore/add?owner=wwi18scb_testuser@elaspix.de&jsonstring={"email":{"email":${email}}&token=dPn1_eYrezCTpqyL82NJSUeucHA_`
  ).then((res) => {
     console.log("Success")
     props.setEmail(email);
     console.log(email)
  } ); 
};
  


  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark ">
  <div className="container-fluid">
    <a className="navbar-brand">Name Firma</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="">Link</a>
        </li>
      </ul>
      <form className="d-flex">
        <input onChange={(e) => setEmail(e.target.value)} className="form-control me-2" type="search" placeholder="Anmelden" aria-label="Search" />
        <button onClick={addPerson} className="btn btn-outline-light" type="submit">Login</button>
      </form>
    </div>
  </div>
</nav>
  );
}

export default Header;
