export default function (state = [], action) {
  switch (action.type) {
  case 'PRODUCTS_LOADED':
    return action.data;
  default:
    return state;
  }
}
