import { configureStore } from "@reduxjs/toolkit";
import { songsReducer, addSong, removeSong } from "./slices/songsSlice";
import { moviesReducer, addMovie, removeMovie } from "./slices/moviesSlice";
import { reset } from "./actions";

// STORE
const store = configureStore({
  reducer: {
    songs: songsReducer,
    movies: moviesReducer,
  },
});

export { store, reset, addSong, removeSong, addMovie, removeMovie };
