const initState = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: [],
};

//This reducer will firs pull in the initial set defined above. Next it will change the initial state based on the action passed to it. Actions may be found in the switch statement
const gameReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        popular: action.payload.popular,
        newGames: action.payload.newGames,
        upcoming: action.payload.upcoming,
      };
    default:
      return { ...state };
  }
};

export default gameReducer;
