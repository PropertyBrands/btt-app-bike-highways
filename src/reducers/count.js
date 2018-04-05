const defaultState = 0;

export const count = (state = defaultState, action) => {
  switch (action.type) {
    case 'INCREASE':
      return state + action.amount;
    case 'DECREASE':
      return state - action.amount;
    default:
      return state;
  }
};