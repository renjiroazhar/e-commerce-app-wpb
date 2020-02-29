/* eslint-disable import/prefer-default-export */
import axios from "axios";

export const REQUEST_PRODUCT_DETAIL = "REQUEST_PRODUCT_DETAIL";
export const REQUEST_PRODUCT_DETAIL_FAILED = "REQUEST_PRODUCT_DETAIL_FAILED";
export const RECEIVE_PRODUCT_DETAIL = "RECEIVE_PRODUCT_DETAIL";

export const requestProductDetail = () => ({
  type: REQUEST_PRODUCT_DETAIL
});

export const receiveProductDetail = productDetail => ({
  type: RECEIVE_PRODUCT_DETAIL,
  payload: productDetail
});

export const requestProductDetailFailed = () => ({
  type: REQUEST_PRODUCT_DETAIL_FAILED
});

export const fetchProductDetails = productId => dispatch => {
  dispatch(requestProductDetail());

  const url = `https://api.spoonacular.com/recipes/${productId}/information`;

  return axios
    .get(url, {
      params: {
        apiKey: "f2c2e8a53e4142c8bd51e59e2286b2a2"
      }
    })
    .then(res => {
      dispatch(receiveProductDetail(res.data));
    })
    .catch(() => {
      dispatch(requestProductDetailFailed());
    });
};
