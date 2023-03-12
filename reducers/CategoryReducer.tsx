import { Types } from '../actions/CategoryAction';

const initialState = {
  items: [],
  loading: false,
  showError: false,

  banners: [],
  loadingBanners: false,
  showErrorBanners: false,

  highlights: [],
  loadingHighlights: false,
  showErrorHighlights: false,

  headers: [],
  loadingHeaders: false,
  showErrorHeaders: false,

  recommendations: [],
  loadingRecommendations: false,
  showErrorRecommendations: false,


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

        // BANNERS
        case Types.GET_BANNERS_REQUEST:
          return {
            ...state,
            loadingBanners: true,
            error:''
          };
        case Types.GET_BANNERS_SUCCESS:
          return {
            ...state,
            banners: action.payload.banners,
            loadingBanners: false
          };
          case Types.GET_BANNERS_FAILED:
            return {
              ...state,
              message: 'error ini dibuat dari halamn redux pokemons',
              loadingBanners: false,
              showErrorBanners: true
            };

            //HIghlights
        case Types.GET_HIGHLIGHTS_REQUEST:
          return {
            ...state,
            loadingHighlights: true,
            error:''
          };
        case Types.GET_HIGHLIGHTS_SUCCESS:
          return {
            ...state,
            highlights: action.payload.highlights,
            loadingHighlights: false
          };
          case Types.GET_HIGHLIGHTS_FAILED:
            return {
              ...state,
              message: 'error ini dibuat dari halamn redux pokemons',
              loadingHighlights: false,
              showErrorHighlights: true
            };

                    //HEADERS
        case Types.GET_HEADERS_REQUEST:
          return {
            ...state,
            loadingHeaders: true,
            error:''
          };
        case Types.GET_HEADERS_SUCCESS:
          return {
            ...state,
            headers: action.payload.headers,
            loadingHeaders: false
          };
          case Types.GET_HEADERS_FAILED:
            return {
              ...state,
              message: 'error ini dibuat dari halamn redux pokemons',
              loadingHeaders: false,
              showErrorHeaders: true
            };

                     //RECOMMENDATIONS
        case Types.GET_RECOMMENDATIONS_REQUEST:
          return {
            ...state,
            loadingRecommendations: true,
            error:''
          };
        case Types.GET_RECOMMENDATIONS_SUCCESS:
          return {
            ...state,
            recommendations: action.payload.recommendations,
            loadingRecommendations: false
          };
          case Types.GET_RECOMMENDATIONS_FAILED:
            return {
              ...state,
              message: 'error ini dibuat dari halamn redux pokemons',
              loadingRecommendations: false,
              showErrorRecommendations: true
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
