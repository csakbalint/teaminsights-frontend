// third-party
import { combineReducers } from 'redux';

import menuReducer from './slices/menu';
// project imports
import snackbarReducer from './slices/snackbar';

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
  snackbar: snackbarReducer,
  menu: menuReducer,
});

export default reducer;
