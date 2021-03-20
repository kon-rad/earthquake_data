import React, { useState, useCallback } from 'react';
import './queryForm.css';
import { useDispatch, useSelector } from 'react-redux';
import { submitDataAction } from '../actions/dataActions';
import {
  isValidDate,
  isPositiveNumber,
  isValidLongitude,
  isValidLatitude,
} from '../utilities/validateInput';

const defaultInputs = {
  startTime: '',
  endTime: '',
  minMagnitude: '',
  latitude: '',
  longitude: '',
  radius: '',
};

const isValid = (name, value) => {
  switch (name) {
    case 'startTime':
    case 'endTime':
      return isValidDate(value);
    case 'minMagnitude':
    case 'radius':
      return isPositiveNumber(value);
    case 'longitude':
      return isValidLongitude(value);
    case 'latitude':
      return isValidLatitude(value);
    default:
      return false;
  }
};
const QueryForm = (props) => {
  const [inputs, setInputs] = useState({ ...defaultInputs });
  const [errors, setErrors] = useState([]);
  const requestError = useSelector(
    (state) => state.earthquakeData.__errorMessage,
  );
  const dispatch = useDispatch();
  const submitData = () => {
    const foundErrors = [];
    Object.keys(inputs).forEach((name) => {
      if (!isValid(name, inputs[name]) || !inputs[name]) {
        foundErrors.push(name);
      }
    });
    if (foundErrors.length === 0) {
      dispatch(submitDataAction(inputs));
    }
    setErrors((errors) => [...foundErrors]);
  };
  const onInputChange = useCallback(({ target }) => {
    setInputs((state) => ({
      ...state,
      [target.name]: target.value,
    }));
  }, []);
  const saveQuery = () => {
    setInputs({
      startTime: '2000-01-01',
      endTime: '2020-01-02',
      minMagnitude: '1',
      latitude: '37',
      longitude: '100',
      radius: '200',
    });
  };

  const renderErrors = () => {
    if (!errors.length && !requestError) {
      return null;
    }
    return (
      <div className="QueryForm__errors">
        {errors.map((err) => (
          <div key={err} className="QueryForm__errorsItem">
            Invalid input for: {err}
          </div>
        ))}
        {requestError && (
          <div className="QueryForm__errorsItem">{requestError}</div>
        )}
      </div>
    );
  };
  return (
    <div>
      <div className="query__form">
        <form className="QueryForm__form">
          {renderErrors()}
          <div className="QueryForm__formSection">
            <label htmlFor="startTime">
              Start Time (YYYY-MM-DD):
              <input
                className="QueryForm__input"
                name="startTime"
                id="startTime"
                placeholder="YYYY-MM-DD"
                onChange={onInputChange}
                value={inputs.startTime}
              />
            </label>
            <label htmlFor="endTime">
              End Time (YYYY-MM-DD):
              <input
                className="QueryForm__input"
                name="endTime"
                placeholder="YYYY-MM-DD"
                id="endTime"
                onChange={onInputChange}
                value={inputs.endTime}
              />
            </label>
            <label htmlFor="minMagnitude">
              Min. Magnitude:
              <input
                className="QueryForm__input"
                name="minMagnitude"
                id="minMagnitude"
                onChange={onInputChange}
                value={inputs.minMagnitude}
              />
            </label>
          </div>
          <div className="QueryForm__formSection">
            <label htmlFor="latitude">
              Latitude
              <input
                className="QueryForm__input"
                name="latitude"
                id="latitude"
                onChange={onInputChange}
                value={inputs.latitude}
              />
            </label>
            <label htmlFor="longitude">
              Longitude
              <input
                className="QueryForm__input"
                name="longitude"
                id="longitude"
                onChange={onInputChange}
                value={inputs.longitude}
              />
            </label>
            <label htmlFor="radius">
              Radius km
              <input
                className="QueryForm__input"
                name="radius"
                id="radius"
                onChange={onInputChange}
                value={inputs.radius}
              />
            </label>
          </div>
        </form>
      </div>
      <div className="QueryForm__submit">
        <button
          onClick={() => submitData()}
          className="QueryForm__submitButton"
        >
          Search
        </button>
        <button
          onClick={() => saveQuery()}
          className="QueryForm__prefill"
        >
          Pre Fill Example
        </button>
      </div>
    </div>
  );
};

export default QueryForm;
