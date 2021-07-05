import React from 'react'

function Pricing() {
  
    return (
        <div>
            <div className="container py-3">

  <main>
    <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
      <div className="col">
        <div className="card mb-4 rounded-3 border-light px-5 pt-5 pb-0">
        <img src={process.env.PUBLIC_URL + '/Spielplatz2.jpg'} className="card-img-top" alt="Logo"/>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">$200</h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>10 users included</li>
              <li>2 GB of storage</li>
              <li>Email support</li>
              <li>Help center access</li>
            </ul>
            <button type="button" className="w-100 btn btn-lg btn-outline-dark">Dark</button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card mb-4 rounded-3 shadow-lg border-light px-5 pt-5 pb-0">
        <img src={process.env.PUBLIC_URL + '/Spielplatz2.jpg'} className="card-img-top" alt="Logo"/>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">$400</h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>10 users included</li>
              <li>2 GB of storage</li>
              <li>Email support</li>
              <li>Help center access</li>
            </ul>
            <button type="button" className="w-100 btn btn-lg btn-outline-dark">Dark</button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card mb-4 rounded-3 border-light px-5 pt-5 pb-0">
        <img src={process.env.PUBLIC_URL + '/Spielplatz2.jpg'} className="card-img-top" alt="Logo"/>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">$600</h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>10 users included</li>
              <li>2 GB of storage</li>
              <li>Email support</li>
              <li>Help center access</li>
            </ul>
            <button type="button" className="w-100 btn btn-lg btn-outline-dark">Dark</button>
          </div>
        </div>
      </div>
    </div>

   
  </main>

</div>
        </div>
    )
}

export default Pricing
