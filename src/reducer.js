export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token:
    "BQC0Do7-lkjCNh4pM2ex8yQFXAK-hfG6BoQh3iZkGctpgSkSxcVGD4_WExbehZliN74nZ-dS5YpXNdUCcX3oMn8RkY3Kb7wPp_kLIucxq87CQbmhJBI0YgjN9XNvj5DfnX3ocQxO-84dXBN2HxdEMiPKjZr_QXyHt46hf2jaz6P4k_ka5Xvu8VlF38OJ0YgikFbWO2zmGR3xVT_tWW8S",
};

const reducer = (state, action) => {
  console.log(action);
  // Action -> type, [payload]
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    default:
      return state;
  }
};
export default reducer;
