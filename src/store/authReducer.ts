// action - state management
import { InitialLoginContextProps } from 'types';

import { LOGIN, LOGOUT } from './actions';

// ==============================|| ACCOUNT REDUCER ||============================== //

const initialState: InitialLoginContextProps = {
  isLoggedIn: false,
  isInitialized: false,
  user: null,
};

interface AccountReducerActionProps {
  type: string;
  payload?: InitialLoginContextProps;
}

// eslint-disable-next-line
const accountReducer = (
  state: InitialLoginContextProps,
  action: AccountReducerActionProps,
) => {
  state = state ?? initialState;
  switch (action.type) {
    case LOGIN: {
      const { user } = action.payload!;
      return {
        ...state,
        isLoggedIn: true,
        isInitialized: true,
        user,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        isInitialized: true,
        isLoggedIn: false,
        user: null,
      };
    }
    default: {
      return { ...state };
    }
  }
};

export default accountReducer;
