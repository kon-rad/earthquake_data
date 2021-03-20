const data = (state = {}, action) => {
  switch (action.type) {
    case 'GET_DATA_REQUEST': {
      return {
        ...state,
        __fetch: true,
        payload: action.payload,
      };
    }
    case 'GET_DATA_SUCCESS': {
      return {
        ...state,
        __fetch: false,
        __success: true,
      };
    }
    default:
      return state;
  }
};

export default data;
