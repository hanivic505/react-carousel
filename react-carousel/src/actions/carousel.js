export const moveToSlideAction = slide => dispatch => {
  dispatch({ type: "MOVE_TO_SLIDE", action: slide });
};

export const imagesIsLoaded = images => dispatch => {
  dispatch({ type: "IMAGES_IS_LOADED", action: images });
};
