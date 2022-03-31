import * as types from "./actionType";
import axios from "axios";

const getConsumables = (consumables) => ({
  type: types.GET_CONSUMABLES,
  payload: consumables,
});

const consumableDeleted = () => ({
  type: types.DELETE_CONSUMABLE,
});

export const loadConsumables = () => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API}`)
      .then((resp) => {
        console.log("resp", resp);
        dispatch(getConsumables(resp.data));
      })
      .catch((error) => console.log(error));
  };
};

export const deleteConsumable = (id) => {
  return function (dispatch) {
    axios
      .delete(`${process.env.REACT_APP_API}/${id}`)
      .then((resp) => {
        console.log("resp", resp);
        dispatch(consumableDeleted());
        dispatch(loadConsumables());
      })
      .catch((error) => console.log(error));
  };
};
