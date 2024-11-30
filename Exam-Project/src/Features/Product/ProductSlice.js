

const initialState = {
  products: [],
  loading: false,
  error: null
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload
      };
    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case ADD_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true
      };
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: [...state.products, action.payload]
      };
    case ADD_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case UPDATE_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true
      };
    case UPDATE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: state.products.map(product =>
          product.id === action.payload.id ? action.payload : product
        )
      };
    case UPDATE_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case DELETE_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true
      };
    case DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: state.products.filter(product => product.id !== action.payload)
      };
    case DELETE_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default productsReducer.reducer;