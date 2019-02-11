const initialState = {
    open: false,
    openBookTableDialogBox:false,
    openRestaurantQuickView:false,
  };
  const reducer = (state = initialState, action) => {
    const newState = {
      ...state
    };
    if(action.type === 'HANDLE_SIDE_NAV'){
        newState.open = !state.open
    }
    if(action.type === 'HANDLE_BOOK_TABLE'){
      newState.openBookTableDialogBox = !state.openBookTableDialogBox
    }
    if(action.type === 'HANDLE_RESTAURANT_QUICK_VIEW'){
      newState.openRestaurantQuickView = !state.openRestaurantQuickView
    }
    return newState
  
    // switch (action.type) {
    //   case "AGE_UP":
    //     return {
    //       ...state,
    //       age: state.age + action.value,
    //       history: state.history.concat({
    //         age: state.age + action.value
    //       })
    //     };
  
    //   case "AGE_DOWN":
    //     return {
    //       ...state,
    //       age: state.age - action.value,
    //       history: state.history.concat({
    //         age: state.age - action.value
    //       })
    //     };
    //   default: return newState;
    // }
  }
  
  export default reducer;