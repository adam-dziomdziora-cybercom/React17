export const TYPES = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
};

const countReducer = (state = 0, action) => {
  console.log('jestem w store!');
  switch (action.type) {
    case TYPES.INCREMENT:
      return state + 1;
    case TYPES.DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

export default countReducer;
