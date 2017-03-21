const reddit = (state = {
  hotList: []
}, action) => {
  switch (action.type) {
    case 'SET_HOT_LIST':
      return {
        ...state,
        hotList: action.data
      };
    default:
      return state;
  }
};

export default reddit;
