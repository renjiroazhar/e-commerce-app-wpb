import {
  REQUEST_PRODUCT_DETAIL,
  RECEIVE_PRODUCT_DETAIL,
  REQUEST_PRODUCT_DETAIL_FAILED
} from "./actions";

const defaultState = {
  productDetail: {
    aggregateLikes: 0,
    analyzedInstructions: [],
    cheap: false,
    creditsText: "",
    cuisines: [],
    dairyFree: false,
    diets: [],
    dishTypes: [],
    extendedIngredients: [],
    gaps: "",
    glutenFree: false,
    healthScore: 0,
    id: 0,
    license: "",
    image: "",
    imageType: "",
    instructions: "",
    lowFodmap: false,
    occasions: [],
    pricePerServing: 0,
    readyInMinutes: 0,
    servings: 0,
    sourceName: "",
    sourceUrl: "",
    spoonacularScore: 0,
    spoonacularSourceUrl: "",
    summary: "",
    sustainable: false,
    title: "",
    vegan: false,
    vegetarian: true,
    veryHealthy: false,
    veryPopular: false,
    weightWatcherSmartPoints: 0
  },
  loading: false
};

const productDetailsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case REQUEST_PRODUCT_DETAIL:
      return { ...state, loading: true };
    case RECEIVE_PRODUCT_DETAIL:
      return {
        ...state,
        productDetail: { ...action.payload },
        loading: false
      };

    case REQUEST_PRODUCT_DETAIL_FAILED:
      return {
        ...state,
        productDetail: null,
        loading: false
      };
    default:
      return state;
  }
};

export default productDetailsReducer;
