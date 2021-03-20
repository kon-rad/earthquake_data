export const submitDataAction = (inputs) => {
  return async (dispatch) => {
    dispatch({ type: 'GET_DATA_REQUEST', payload: inputs });
    const {
      startTime,
      endTime,
      minMagnitude,
      latitude,
      longitude,
      radius,
    } = inputs;

    const restApi = `${startTime}/${endTime}/${minMagnitude}/${latitude}/${longitude}/${radius}`;
    const url = `http://localhost:8080/data/${restApi}`;
    const response = await fetch(url);

    if (!response.ok) {
      const message = `An error has occurred: ${response.status}`;
      dispatch({ type: 'GET_DATA_FAILURE', payload: message });
      return;
    }

    const jsonResponse = await response.json();

    if (jsonResponse.error) {
      dispatch({
        type: 'GET_DATA_FAILURE',
        payload: jsonResponse.error,
      });
      return;
    }
    dispatch({ type: 'GET_DATA_SUCCESS', payload: jsonResponse });
  };
};
