export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";
export const UPDATE_TOTAL = "TOTAL_UPDATE";

export function addFeature(newFeature) {
    return {
      type: ADD_FEATURE,
      payload: newFeature
    }
  }

  export function removeFeature(featureId) {
    return {
      type: REMOVE_FEATURE,
      payload: featureId
    }
  }

  export function updateTotal(price) {
    return {
      type: UPDATE_TOTAL,
      payload: price
    }
  }





