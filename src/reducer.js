export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token:
    "BQD-JK_eJk793fAd2yRYx2o5FKVe9YwuubICTx6bIBYTZtVwulRHDqWjHMVdCFsFWUr9OPgUfCXMYchLun_WzVtNPQJvzrFuUVTq0XCGo9EA_Vmo4AXfnPJlz0Ov8gB4pf88WjWeFnqKxOxYAre3GjV9KYweu_Wgn5VLVgVTaz_sOeM1g77NnI3RoPjYkHGmKr4Gkvzm4qRhruOYQxZY",
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

    default:
      return state;
  }
};
export default reducer;
