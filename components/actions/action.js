const requestMenu = () => {
  return {
    type: "REQUEST_MENU"
  };
}

export default function fetchMenu() {
  return dispatch => {
    dispatch(requestMenu());
    return fetch('http://localhost:4000/coffees')
    .then(response => response.json())
    .then(json => dispatch(receiveMenu(json)))
  }
}

const receiveMenu = (menu) => {
  return {
    type: "RECEIVE_MENU",
    menu
  }
}