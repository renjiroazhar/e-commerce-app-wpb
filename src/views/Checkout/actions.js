/* eslint-disable import/prefer-default-export */
import axios from "axios";

export const getCart = state => state.items;

export const CREATE_ORDER = "CREATE_ORDER";
export const CREATE_ORDER_FAILED = "CREATE_ORDER_FAILED";
export const DONE_LOADING = "DONE_LOADING";

export const createOrder = () => ({
  type: CREATE_ORDER
});

export const createOrderFailed = () => ({
  type: CREATE_ORDER_FAILED
});

export const doneLoading = () => ({
  type: DONE_LOADING
});

export const createOrderRequest = orderData => dispatch => {
  dispatch(createOrder());

  const url = "https://api.spoonacular.com/recipes";

  return axios
    .get(url, {
      params: {
        apiKey: "f2c2e8a53e4142c8bd51e59e2286b2a2"
      }
    })
    .then(res => {
      dispatch(createOrderFailed(res.data));
    })
    .catch(() => {
      dispatch(doneLoading());
    });
};
