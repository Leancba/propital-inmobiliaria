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

const initialState = {
  citys: [],
  selectedCity: null,
  selectedCityCopy: [],
  type: null,
  price: null,
  delivered: null,
  surface: null,
  flag: false,
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CITYS:
      return {
        ...state,
        flag: false,
        citys: action.payload,
        selectedCity: action.payload[0],
        selectedCityCopy: action.payload[0],
      };

    case SELECTED_CITY:
      return {
        ...state,
        selectedCity: action.payload,
        selectedCityCopy: action.payload,
      };

    case FILTER_BY_TYPE:
      return {
        ...state,
        type: action.payload,
      };

    case FILTER_BY_PRICE:
      return {
        ...state,
        price: action.payload,
      };

    case FILTER_BY_DELIVERED:
      return {
        ...state,
        delivered: action.payload,
      };

    case FILTER_BY_SURFACE:
      return {
        ...state,
        surface: action.payload,
      };

    case APPLY_FILTERS:
      let filteredOpportunities = state.selectedCityCopy.oportunidades;

      if (state.type) {
        filteredOpportunities = filteredOpportunities.filter(
          (opportunity) => opportunity.tipo === state.type
        );
      }

      if (state.price && state.price.length === 2) {
        filteredOpportunities = filteredOpportunities.filter(
          (opportunity) =>
            opportunity.price >= state.price[0] &&
            opportunity.price <= state.price[1]
        );
      }

      if (state.surface && state.surface.length === 2) {
        filteredOpportunities = filteredOpportunities.filter(
          (opportunity) =>
            opportunity.superficie >= state.surface[0] &&
            opportunity.superficie <= state.surface[1]
        );
      }

      if (state.delivered) {
        filteredOpportunities = filteredOpportunities.filter(
          (opportunity) => opportunity.entrega[0] === state.delivered
        );
      }

      let flag = false;

      if (filteredOpportunities.length === 0) {
        flag = true;
      }

      return {
        ...state,
        selectedCity: {
          ...state.selectedCity,
          oportunidades: filteredOpportunities,
        },
        flag: flag,
      };

    case CLEAR_FILTER:
      return {
        ...state,
      };

    default:
      return state;
  }
}
