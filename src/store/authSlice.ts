import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "./store";
import { fetchCount } from "../api/counterAPI";
import { User, USERS } from "../data/users";

export interface AuthState {
  token: string;
  isLoggedIn: boolean;
  userProfile?: User;
}

const initialState: AuthState = {
  token: "",
  isLoggedIn: false,
  userProfile: undefined,
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const incrementAsync = createAsyncThunk(
  "auth/fetchCount",
  async (amount: number) => {
    const response = await fetchCount(amount);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    reduxLogin: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      state.isLoggedIn = true;
      state.userProfile = USERS[action.payload.length % 4];
    },
    reduxLogout: (state) => {
      state.token = "";
      state.isLoggedIn = false;
    },
    reduxEditProfile: (state, action: PayloadAction<User | undefined>) => {
      state.userProfile = action.payload;
    },
  },
});

export const { reduxLogin, reduxLogout, reduxEditProfile } = authSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCount = (state: RootState) => state.counter.value;
export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
export const selectToken = (state: RootState) => state.auth.token;
export const selectUserProfile = (state: RootState) => state.auth.userProfile;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
export const incrementIfOdd =
  (amount: number): AppThunk =>
  (dispatch, getState) => {
    const currentValue = selectCount(getState());
    if (currentValue % 2 === 1) {
      //   dispatch(incrementByAmount(amount));
    }
  };

export default authSlice.reducer;
