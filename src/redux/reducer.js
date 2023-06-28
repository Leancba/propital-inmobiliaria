import {
  GET_CITYS,
  SELECTED_CITY,
  FILTER_BY_TYPE,
  FILTER_BY_PRICE,
  FILTER_BY_SURFACE,
} from "./actionTypes";

const initialState = {
  citys: [],
  selectedCity: null,
  selectedCityCopy: [],
  selectedCityByFilters: [],
  price: null,
  surface: null,
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CITYS:
      return {
        ...state,
        citys: action.payload,
      };

    case SELECTED_CITY:
      return {
        ...state,
        selectedCity: action.payload,
        selectedCityCopy: action.payload,
        selectedCityByFilters: action.payload,
      };

    case FILTER_BY_TYPE:
      const selectedType = action.payload;

      const filteredType = state.selectedCityCopy.oportunidades.filter(
        (opportunity) => opportunity.tipo === selectedType
      );

      if (state.price) {
        const [minPrice, maxPrice] = state.price;

        const filteredTypeAndPrice = filteredType.filter(
          (opportunity) =>
            opportunity.price >= minPrice && opportunity.price <= maxPrice
        );

        return {
          ...state,
          selectedCity: {
            ...state.selectedCity,
            oportunidades: filteredTypeAndPrice,
          },
          selectedCityByFilters: {
            ...state.selectedCity,
            oportunidades: filteredType,
          },
        };
      }

      if (state.surface) {
        const [minM2, maxM2] = state.surface;

        const filteredTypeAndSurface = filteredType.filter(
          (opportunity) =>
            opportunity.superficie >= minM2 && opportunity.superficie <= maxM2
        );

        return {
          ...state,
          selectedCity: {
            ...state.selectedCity,
            oportunidades: filteredTypeAndSurface,
          },
          selectedCityByFilters: {
            ...state.selectedCity,
            oportunidades: filteredType,
          },
        };
      }


      return {
        ...state,
        selectedCity: { ...state.selectedCity, oportunidades: filteredType },
        selectedCityByFilters: {
          ...state.selectedCity,
          oportunidades: filteredType,
        },
      };

    case FILTER_BY_PRICE:
      const [minPrice, maxPrice] = action.payload;

      if (state.selectedCityByFilters) {
        const filteredPrice = state.selectedCityByFilters.oportunidades.filter(
          (opportunity) =>
            opportunity.price >= minPrice && opportunity.price <= maxPrice
        );

        return {
          ...state,
          selectedCity: { ...state.selectedCity, oportunidades: filteredPrice },
          price: action.payload,
        };
      } else {
        const filteredPrice = state.selectedCityCopy.oportunidades.filter(
          (opportunity) =>
            opportunity.price >= minPrice && opportunity.price <= maxPrice
        );

        return {
          ...state,
          selectedCity: { ...state.selectedCity, oportunidades: filteredPrice },
        };
      }

    case FILTER_BY_SURFACE:
      const [minM2, maxM2] = action.payload;
      console.log(minM2, maxM2)
      if (state.selectedCityByFilters) {

        const filteredSurface =
          state.selectedCityByFilters.oportunidades.filter(
            (opportunity) =>
              opportunity.superficie >= minM2 && opportunity.superficie <= maxM2
          );

        return {
          ...state,
          filteredSurface,
          selectedCity: {
            ...state.selectedCity,
            oportunidades: filteredSurface,
          },
          surface: action.payload,
        };
      } else {

        console.log(filteredSurface)
        const filteredSurface = state.selectedCityCopy.oportunidades.filter(
          
          (opportunity) =>
            opportunity.superficie >= minM2 && opportunity.superficie <= maxM2
        );

        console.log(filteredSurface)
        return {
          ...state,
          selectedCity: {
            ...state.selectedCity,
            oportunidades: filteredSurface,
          },
        };
      }

    default:
      return state;
  }
}
