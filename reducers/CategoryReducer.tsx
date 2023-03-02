import { Types } from '../actions/CategoryAction';

const initialState = {
  items: [],
  loading: false,
  showError: false,


  //detail
  itemsDetail: [],
  loadingDetail: false,
  showErrorDetail: false,
};

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
        error:''
      };
    case Types.GET_CATEGORY_SUCCESS:
      return {
        ...state,
        items: action.payload.items,
        loading: false
      };
      case Types.GET_CATEGORY_FAILED:
        return {
          ...state,
          message: 'error ini dibuat dari halamn redux pokemons',
          loading: false,
          showError: true
        };

        case Types.GET_CATEGORY_DETAILS_REQUEST:
          return {
            ...state,
            loadingDetail: true,
            error:''
          };
        case Types.GET_CATEGORY_DETAILS_SUCCESS:
          return {
            ...state,
            itemsDetail: action.payload,
            loadingDetail: false
          };
          case Types.GET_CATEGORY_DETAILS_FAILED:
            return {
              ...state,
              message: 'error ini dibuat dari halamn redux pokemons 2',
              loadingDetail: false,
              showErrorDetail: true
            };
    default:
      return state;
  }
};
