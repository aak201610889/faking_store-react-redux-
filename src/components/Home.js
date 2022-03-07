import React from "react";

function Home() {
  return (
    <div>
      <div className="card bg-dark text-white border-0">
        <img className="card-img" src="/asset/model.jpg" alt="Card image" height='650px' />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <h5 className="card-title display-3 fw-bolder mb-0">Card title</h5>
          <p className="card-text lead fs-2">
            CHECK OUT ALL THE TRENDS
          </p>
        
        </div>
      </div>
    </div>
  );
}

export default Home;
