import React from 'react';
import { useSelector } from 'react-redux';
import './resultsOverview.css';

const ResultsOverview = (props) => {
  const overview = useSelector(
    (state) => state.earthquakeData.overview,
  );
  if (!overview) {
    return null;
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="ResultsOverview">
            <h3 className="ResultsOverview__title">Overview:</h3>
            <div className="ResultsOverview__innerContainer">
              <div className="ResultsOverview__item">
                <span className="ResultsOverview__itemTitle">
                  Median Magnitude:
                </span>{' '}
                {overview.median.mag}, {overview.median.place},{' '}
                {overview.median.time}
              </div>
              <div className="ResultsOverview__item">
                <span className="ResultsOverview__itemTitle">
                  Max Magnitude:
                </span>{' '}
                {overview.maxMag.mag}, {overview.maxMag.place},{' '}
                {overview.maxMag.time}
              </div>
              <div className="ResultsOverview__item">
                <span className="ResultsOverview__itemTitle">
                  Min Magnitude:
                </span>{' '}
                {overview.minMag.mag}, {overview.minMag.place},{' '}
                {overview.minMag.time}
              </div>
              <div className="ResultsOverview__item">
                <span className="ResultsOverview__itemTitle">
                  Number of Earthquakes:
                </span>{' '}
                {overview.numberOfEarthquakes}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsOverview;
