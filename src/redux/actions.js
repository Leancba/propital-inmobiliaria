import {
  GET_CITYS,
  SELECTED_CITY,
  FILTER_BY_TYPE,
  FILTER_BY_PRICE,
  FILTER_BY_SURFACE,
  FILTER_BY_DELIVERED,
  APPLY_FILTERS,
  CLEAR_FILTER,
} from "./actionTypes";

import axios from "axios";

export const getCitys = () => {
  return async (dispatch) => {
    try {
      const result = await axios.get(
        "https://run.mocky.io/v3/78bc040e-d35c-46f0-9eb8-cc0f31c31f4f"
      );

      return dispatch({
        type: GET_CITYS,
        payload: result.data,
      });
    } catch (error) {
      console.log("Error en solicitar ciudades", error);
      throw new Error("Login error");
    }
  };
};

export const selectedCity = (payload) => {
  return {
    type: SELECTED_CITY,
    payload,
  };
};

export const filterByType = (payload) => {
  return {
    type: FILTER_BY_TYPE,
    payload,
  };
};

export const filterByPrice = (payload) => {
  return {
    type: FILTER_BY_PRICE,
    payload,
  };
};

export const filterBySurface = (payload) => {
  return {
    type: FILTER_BY_SURFACE,
    payload,
  };
};

export const filterByDelivered = (payload) => {
  return {
    type: FILTER_BY_DELIVERED,
    payload,
  };
};

export const ApplyFilters = () => {
  return {
    type: APPLY_FILTERS,
  };
};

export const ClearFilter = () => {
  return {
    type: CLEAR_FILTER,
  };
};
