const defaultState = {
  loading: false,
  profile: undefined,
};

export const athlete = (state = defaultState, action) => {
  switch (action.type) {
    case 'REQUEST_ATHLETE': {
      return {
        ...state,
        loading: true,
      }
    }
    case 'RECEIVE_ATHLETE':
      const { athlete } = action;
      return { ...state,
        profile: athlete,
        loading: false,
      };
    default:
      return state;
  }
};