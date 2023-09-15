export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token:
    "BQBL6UnejdDnNYtdtlno2mExmOXTAvWs-wzZ6OUSU5N6Ni7iC8VPsOwfYE_2E_-BCSqhFUB0dm7DvR_cs_52QVW_4_XcBpw6yvkLjp8YVKQcs96G0pNq55MmJoOXkemedYAysfQ-_ACgylabCEJoPeEKw-rPhn2At6SducEET_H3jaebJxhBLJzSbJxRDotowS1RD0lcV0vDmbMPr4KR",
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
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};
export default reducer;
