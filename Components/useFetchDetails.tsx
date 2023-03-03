import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Types, actions, getCategoryDetailsRequest, getCategoryDetailsSuccess, getCategoryDetailsFailed } from "../actions/CategoryAction";
import getCategoryDetails from "../sagas/CategorySagas"





  

export const useFetchDetails = (selectedCategory) => {
    // console.log('selectedCategory:', selectedCategory); // add this line
    // const dispatch = useDispatch();
    // const itemsDetail = useSelector(state => state.pokemons.details);
    // const loadingDetail = useSelector(state => state.pokemons.loadingDetails);
    // const errorDetail = useSelector(state => state.pokemons.errorDetails);
    const dispatch = useDispatch();
    const itemsDetail = useSelector(getCategoryDetailsSuccess);
    const loadingDetail = useSelector(getCategoryDetailsRequest);
    const errorDetail = useSelector(getCategoryDetailsFailed);
  
    // useEffect(() => {
    //   if (selectedCategory) {
    //     dispatch(getPokemonsDetailsRequest(selectedCategory));
    //   }
    // }, [dispatch, selectedCategory]);

    useEffect(() => {
        if (selectedCategory) {
            // console.log("selectedCategory di custom hook", selectedCategory)
          dispatch(getCategoryDetailsRequest(selectedCategory));
        }
      }, [dispatch, selectedCategory]);
  
    return { itemsDetail, loadingDetail, errorDetail };
  };

  export default useFetchDetails;