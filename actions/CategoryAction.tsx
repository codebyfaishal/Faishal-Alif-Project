export const Types = {
    GET_CATEGORY_REQUEST: 'GET_CATEGORY_REQUEST',
    GET_CATEGORY_SUCCESS: 'GET_CATEGORY_SUCCESS',
    GET_CATEGORY_FAILED: 'GET_CATEGORY_FAILED',
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
  