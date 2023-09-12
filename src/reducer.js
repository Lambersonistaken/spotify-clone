export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token:
    "BQCxty6ZPijOPq0M-uMXG45SMJ-3nHeGnxIRBnUM071hMmhYcqbdOtuD0eY31W4mdOUihDlvAeRf939khPJo1hxnknE9zebM5r3GTFuuZzQcFExx7cH15PPbLj3yK3qkFcy6WJUEPc90atWwZnD5Ke16hFjbWjSGgKB0s2t8F8sF0fPN4pihZBZV__Co7Im-4ZBKya4h-RA6ESx1d8Wd",
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
