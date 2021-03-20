export const submitDataAction = (inputs) => {
  return async (dispatch) => {
    dispatch({ type: 'GET_DATA_REQUEST', payload: inputs });
    const response = await fetch('http://localhost:8080/data');

    if (!response.ok) {
      const message = `An error has occurred: ${response.status}`;
      dispatch({ type: 'GET_DATA_FAILURE', payload: message });
      return;
    }

    const jsonResponse = await response.json();
    console.log('jsonResponse', jsonResponse);
    dispatch({ type: 'GET_DATA_SUCCESS', payload: jsonResponse });
  };
};
