export const decrease = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "decrease",
      payload: amount,
    });
  };
};

export const increase = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "increase",
      payload: amount,
    });
  };
};
