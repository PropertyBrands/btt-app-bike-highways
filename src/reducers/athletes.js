export const athletes = (state = {}, action) => {
  switch (action.type) {
    case 'SET_ATHLETE':
      const { athlete } = action;

      return { ...state,
        athlete: athlete,
      };
    default:
      return state;
  }
};