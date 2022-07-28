import React from "react";
import "../App.css";
import HomeViews from "./HomeViews";

function HomePage() {
  return (
    <div>
        <HomeViews/>
        <div class="card-group">
          <div class="card">
              <img src="/images/house1.jpg" class="card-img-top" alt="House1"/>
              <div class="card-body">
                <h5 class="card-title">Amazing house in Morelos</h5>
                <p class="card-text">
                    Invest in your future, buy now and save 40% of the finall price...
                </p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Last 4 units</small>
            </div>
          </div>
          <div class="card">
            <img src="/images/house2.jpg" class="card-img-top" alt="Palm Springs Road"/>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Invest in your future, buy now and save 50% of the finall price...</p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Last 10 units</small>
            </div>
          </div>
          <div class="card">
            <img src="/images/house4.jpg" class="card-img-top" alt="Los Angeles Skyscrapers"/>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to show
                that equal height action.
              </p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
    </div>
   );
}

export default HomePage;
