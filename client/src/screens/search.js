import React, { useState, useEffect, useCallback } from 'react';
import './search.css';
import { useDispatch, useSelector } from 'react-redux';
import { submitDataAction } from '../actions/dataActions';
/**
 * 
 * starttime​ – will return earthquakes happened after this date YYYY-MM-dd
endtime​ – will return earthquakes happened before this date YYYY-MM-dd
minmagnitude​ – will return earthquakes with magnitude larger than the param
location​ – will return the earthquakes happened in a circle with the radius in km and centered in the given coordinates.
latitude​ – [-90,90]
longitude​ – [-180,180] maxradiuskm​ 
– radius in KM
} props 
 * @returns 
 */

const Search = (props) => {
  const [inputs, setInputs] = useState({});
  const dispatch = useDispatch();
  const submitData = () => {
    dispatch(submitDataAction(inputs));
  };
  const onInputChange = useCallback(
    ({ target }) =>
      setInputs((state) => ({
        ...state,
        [target.name]: target.value,
      })),
    [],
  );

  const reduxState = useSelector((state) => state);
  console.log(reduxState);

  return (
    <div className="search">
      <h3 className="Search__heading">Query for Earthquake Data</h3>
      <div className="query__form">
        <form className="Search__form">
          <div className="Search__formSection">
            <label for="startTime">
              Start Time:
              <input
                className="Search__input"
                name="startTime"
                id="startTime"
                onChange={onInputChange}
                value={inputs.startTime}
              />
            </label>
            <label for="endTime">
              End Time:
              <input
                className="Search__input"
                name="endTime"
                id="endTime"
                onChange={onInputChange}
                value={inputs.endTime}
              />
            </label>
            <label for="minMagnitude">
              Min. Magnitude:
              <input
                className="Search__input"
                name="minMagnitude"
                id="minMagnitude"
                onChange={onInputChange}
                value={inputs.minMagnitude}
              />
            </label>
          </div>
          <div className="Search__formSection">
            <label for="latitude">
              Latitude
              <input
                className="Search__input"
                name="latitude"
                id="latitude"
                onChange={onInputChange}
                value={inputs.latitude}
              />
            </label>
            <label for="longitude​">
              Longitude​
              <input
                className="Search__input"
                name="longitude​"
                id="longitude​"
                onChange={onInputChange}
                value={inputs.longitude}
              />
            </label>
            <label for="radius">
              Radius km
              <input
                className="Search__input"
                name="radius"
                id="radius"
                onChange={onInputChange}
                value={inputs.radius}
              />
            </label>
          </div>
        </form>
      </div>
      <div className="Search__submit">
        <button
          onClick={() => submitData()}
          className="Search__submitButton"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Search;
