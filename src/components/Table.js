
import React, { useState } from "react";
import axios from "axios";

function Table(props) {
    const [anzahl, setAnzahl] = useState(0);
    const [anzahl1, setAnzahl1] = useState(0);
    const [anzahl2, setAnzahl2] = useState(0);

    const addShopping = () => {
        axios.get(
          `https://webtechlecture.appspot.com/cloudstore/add?owner=wwi18scb_testuser@elaspix.de&jsonstring={"amount":{"anzahl":${anzahl},"anzahl1":${anzahl1},"anzahl2":${anzahl2}}&token=dPn1_eYrezCTpqyL82NJSUeucHA_`
        ).then((res) => {
           console.log("Success")
        } ); 
      };
      

    return (
        <div className="container mt-5 mb-5">
            <table className="table">
  <thead>
    <tr>
      <th scope="col">Geräte-Name</th>
      <th scope="col">Preis</th>
      <th scope="col">Anzahl</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Bagger</th>
      <td>50€</td>
      <td>
      <input placeholder="0" type="number" id="quantity" name="quantity" min="0" max="100" onChange={(e) => setAnzahl(parseInt(e.target.value))}/>
      </td>
      
    </tr>
    <tr>
      <th scope="row">Schaukel</th>
      <td>60€</td>
      <td><input placeholder="0" type="number" id="quantity" name="quantity" min="0" max="100" onChange={(e) => setAnzahl1(parseInt(e.target.value))}/></td>
      
    </tr>
    <tr>
      <th scope="row">Rutsche</th>
      <td>30€</td>
      <td><input placeholder="0" type="number" id="quantity" name="quantity" min="0" max="100" onChange={(e) => setAnzahl2(parseInt(e.target.value))}/></td>
    </tr>
    <tr>
      <th scope="row">Total</th>
      <td>{50*anzahl + 60*anzahl1 + 30*anzahl2}</td>
      <td>{anzahl+anzahl1+anzahl2}</td>
    </tr>
  </tbody>
</table>
<div className="text-center">
<button type="button" className="btn btn-outline-dark mt-4" onClick={addShopping}>Bezahlen</button>
</div>

        </div>
    )
}

export default Table
