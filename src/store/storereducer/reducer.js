import { SET_STORE_PIC } from "./actionTypes"

const initialState = {
  storePic: ''
}

const storeData = (state = initialState, action) => {
  switch (action.type) {
    case SET_STORE_PIC: {
      return {storePic: action.payload.storePic}
    }
    default: {
      return state
    }
  }
};

export default storeData;
