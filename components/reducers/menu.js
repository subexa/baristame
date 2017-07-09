export default menu = (state = [], action ) => {
  switch(action.type) {
    case 'RECEIVE_MENU':
      return action.menu
  }
  return state;
}