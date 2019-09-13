export const ADD_FEATURE = "ADD_FEATURE";
export const addFeature = (feature) => {
    
    
    return {      
      type: ADD_FEATURE,
      payload: feature
    }

    
  }

  export const REMOVE_FEATURE = "REMOVE_FEATURE";
  export function removeFeature(feature) {
      
    return {
      type: REMOVE_FEATURE,
      payload: feature
    }
  }

  /*export const UPDATE_TOTAL = UPDATE_TOTAL;
  export function updateTotal(price) {
    return {
      type: "UPDATE_TOTAL",
      payload: price
    }
  };*/

  





