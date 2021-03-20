const earthquakeData = (state = {}, action) => {
  switch (action.type) {
    case 'GET_DATA_REQUEST': {
      return {
        ...state,
        __fetch: true,
        __success: false,
        __error: false,
        __errorMessage: false,
      };
    }
    case 'GET_DATA_SUCCESS': {
      return {
        ...state,
        overview: {
          median: action.payload.median,
          maxMag: action.payload.maxMag,
          minMag: action.payload.minMag,
          numberOfEarthquakes: action.payload.numberOfEarthquakes,
        },
        earthquakes: action.payload.first100,
        __fetch: false,
        __success: true,
        __error: false,
        __errorMessage: false,
      };
    }
    case 'GET_DATA_FAILURE': {
      return {
        ...state,
        __fetch: false,
        __error: true,
        __errorMessage: action.payload,
      };
    }
    default:
      return state;
  }
};

export default earthquakeData;
