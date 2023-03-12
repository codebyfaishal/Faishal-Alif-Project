export const Types = {
    GET_CATEGORY_REQUEST: 'GET_CATEGORY_REQUEST',
    GET_CATEGORY_SUCCESS: 'GET_CATEGORY_SUCCESS',
    GET_CATEGORY_FAILED: 'GET_CATEGORY_FAILED',

    GET_BANNERS_REQUEST: 'GET_BANNERS_REQUEST',
    GET_BANNERS_SUCCESS: 'GET_BANNERS_SUCCESS',
    GET_BANNERS_FAILED: 'GET_BANNERS_FAILED',

    GET_HIGHLIGHTS_REQUEST: 'GET_HIGHLIGHTS_REQUEST',
    GET_HIGHLIGHTS_SUCCESS: 'GET_HIGHLIGHTS_SUCCESS',
    GET_HIGHLIGHTS_FAILED: 'GET_HIGHLIGHTS_FAILED',

    GET_HEADERS_REQUEST: 'GET_HEADERS_REQUEST',
    GET_HEADERS_SUCCESS: 'GET_HEADERS_SUCCESS',
    GET_HEADERS_FAILED: 'GET_HEADERS_FAILED',

    GET_RECOMMENDATIONS_REQUEST: 'GET_RECOMMENDATIONS_REQUEST',
    GET_RECOMMENDATIONS_SUCCESS: 'GET_RECOMMENDATIONS_SUCCESS',
    GET_RECOMMENDATIONS_FAILED: 'GET_RECOMMENDATIONS_FAILED',


    GET_CATEGORY_DETAILS_REQUEST: 'GET_CATEGORY_DETAILS_REQUEST',
    GET_CATEGORY_DETAILS_SUCCESS: 'GET_CATEGORY_DETAILS_SUCCESS',
    GET_CATEGORY_DETAILS_FAILED: 'GET_CATEGORY_DETAILS_FAILED',
  };
  
  export const getCategoryRequest = () => ({
    type: Types.GET_CATEGORY_REQUEST
  });
  
  export const getCategorySuccess = items => ({
    type: Types.GET_CATEGORY_SUCCESS,
    payload: { items }
  });

  export const getCategoryFailed = items => ({
    type: Types.GET_CATEGORY_FAILED,
    
  });

  export const getBannersRequest = () => ({
    type: Types.GET_BANNERS_REQUEST
  });
  
  export const getBannersSuccess = banners => ({
    type: Types.GET_BANNERS_SUCCESS,
    payload: { banners }
  });

  export const getBannersFailed = banners => ({
    type: Types.GET_BANNERS_FAILED,
    
  });

  export const getHighlightsRequest = () => ({
    type: Types.GET_HIGHLIGHTS_REQUEST
  });
  
  export const getHighlightsSuccess = highlights => ({
    type: Types.GET_HIGHLIGHTS_SUCCESS,
    payload: { highlights }
  });

  export const getHighlightsFailed = highlights => ({
    type: Types.GET_HIGHLIGHTS_FAILED,
    
  });

  export const getHeadersRequest = () => ({
    type: Types.GET_HEADERS_REQUEST
  });
  
  export const getHeadersSuccess = headers => ({
    type: Types.GET_HEADERS_SUCCESS,
    payload: { headers }
  });

  export const getHeadersFailed = Headers => ({
    type: Types.GET_HEADERS_FAILED,
    
  });

  export const getRecommendationsRequest = () => ({
    type: Types.GET_RECOMMENDATIONS_REQUEST
  });
  
  export const getRecommendationsSuccess = recommendations => ({
    type: Types.GET_RECOMMENDATIONS_SUCCESS,
    payload: { recommendations }
  });

  export const getRecommendationsFailed = recommendations => ({
    type: Types.GET_RECOMMENDATIONS_FAILED,
    
  });

  export const getCategoryDetailsRequest = (selectedCategory) => ({
    type: Types.GET_CATEGORY_DETAILS_REQUEST,
    selectedCategory,
  });
  
  export const getCategoryDetailsSuccess = itemsDetail => ({
    type: Types.GET_CATEGORY_DETAILS_SUCCESS,
    payload: { itemsDetail }
  });

  export const getCategoryDetailsFailed = itemsDetail => ({
    type: Types.GET_CATEGORY_DETAILS_FAILED,
    
  });
  