import { SET_STORE_PIC } from "./actionTypes";

export const setStorePic = pic => ({
  type: SET_STORE_PIC,
  payload: {
    storePic: pic,
  }
})