const defaultState = {
  loading: false,
  items: {},
};

export const activities = (state = defaultState, action) => {
  switch (action.type) {
    case 'REQUEST_ACTIVITIES': {
      return {
        ...state,
        loading: true,
      }
    }
    case 'RECEIVE_ACTIVITIES':
      return {
        items: {
          ...action.activities
        },
        loading: false,
      };
    default:
      return state;
    }
};