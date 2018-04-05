export const activities = (state = {}, action) => {
  switch (action.type) {
  case 'RECEIVE_ACTIVITIES':
    const {
      ...activities
    } = action;

    return { ...state,
      activities: activities,
    };
  default:
    return state;
  }
};