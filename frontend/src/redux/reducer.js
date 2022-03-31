import * as types from "./actionType";

const initialState = {
  consumables: [],
  consumable: {},
  loading: true,
};

const consumablesReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CONSUMABLES:
      return {
        ...state,
        consumables: action.payload,
        loading: false,
      };
    case types.DELETE_CONSUMABLE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default consumablesReducers;
