export default function(state = 1, action) {
  switch(action.type){
  case 'PRODUCTS_LOADING':
    return action.page;
  default:
    return state;
  }
}
