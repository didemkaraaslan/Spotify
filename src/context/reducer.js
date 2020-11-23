export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token:
  //   "BQCa5O40fEXtwWHSw0okf6AClTbtr1RNiMIE7KtJKwQCTi4jFz8LRG66m8-HNOndXSHJ9PrBC3O4_3QsvAefO0N2uacoNyt7MhJJJzp5-XPsdDeiEGGKdda66a_ZYm0VqD_2MDz593yxdIy1vFZolc-t1DH2UKQM2KeP7AwtYeLlXh_o",
};

const reducer = (state, action) => {
  console.log(action);
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
