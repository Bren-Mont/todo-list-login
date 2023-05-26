import { createSlice, configureStore } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    token: localStorage.getItem("token"),
    email: localStorage.getItem("email"),
    todos:[]
  },
  reducers: {
    signIn: (state, action) => {
      state.token = action.payload;
    },
    signOut: (state) => {
      state.token = "";
      state.email = "";
      localStorage.setItem("token", '');
      localStorage.setItem("email", '');
    },
    setEmailStore: (state, action) => {
      state.email = action.payload;
    },
    setTodos:(state,action)=>{
      state.todos=action.payload;
    },
    
    // TODO: agregar setTodo
  },
});

export const { signIn, signOut, setEmailStore,setTodos } = userSlice.actions;

export const store = configureStore({
  reducer: userSlice.reducer,
});
