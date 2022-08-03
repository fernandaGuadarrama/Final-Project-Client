import React from 'react';

export default function Cards() {
  return (<div className="card-group">
          <div className="card">
              <img src="/images/house1.jpg" className="card-img-top" alt="House1"/>
              <div className="card-body">
                <h3 className="card-title">Amazing house in Morelos</h3>
                <p className="card-text">
                    Invest in your future, buy now and save 40% of the finall price...
                </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last 4 units</small>
            </div>
          </div>
          <div className="card">
            <img src="/images/house2.jpg" className="card-img-top" alt="Palm Springs Road"/>
            <div className="card-body">
              <h3 className="card-title">incredible house in Pedregal</h3>
              <p className="card-text">Invest in your future, buy now and save 50% of the finall price...</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last 8 units</small>
            </div>
          </div>
          <div className="card">
            <img src="/images/house4.jpg" className="card-img-top" alt="Los Angeles Skyscrapers"/>
            <div className="card-body">
              <h3 className="card-title">House in closed community in Santa Fé</h3>
              <p className="card-text">
                This amiazing house is the perfect choice for families.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last 3 units</small>
            </div>
          </div>
        </div>
        );
    }