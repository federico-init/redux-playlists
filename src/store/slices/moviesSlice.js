import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

const moviesSlice = createSlice({
  name: "movie",
  initialState: [],
  reducers: {
    addMovie(state, action) {
      state.push(action.payload);
    },
    removeMovie(state, action) {
      const updatedMovies = state.filter((movie) => {
        return action.payload !== movie;
      });
      return updatedMovies;
    },
  },
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      return [];
    });
  },
});

export const { addMovie, removeMovie } = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;
