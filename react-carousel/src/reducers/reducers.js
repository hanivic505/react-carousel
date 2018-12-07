import { initialState } from "../state";

export default function mainReducer(state = initialState(), action) {
  switch (action.type) {
    case "MOVE_TO_SLIDE":
      state.activeSlide = action.action;
      return { ...state };
    case "IMAGES_IS_LOADED":
      state.images = action.action;
      return { ...state };
    default:
      return state;
  }
}
