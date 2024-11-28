import { configureStore, createSlice } from "@reduxjs/toolkit";

// SONGS SLICE
const songsSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    // ACTION CREATOR
    addSong(state, action) {
      state.push(action.payload);
    },
    // ACTION CREATOR
    removeSong(state, action) {
      const updatedSongs = state.filter((song) => {
        return action.payload !== song;
      });
      return updatedSongs;
    },
  },
  // this adds a 'listener' for the specified action type that belongs to a different slice
  extraReducers(builder) {
    builder.addCase("movie/reset", (state, action) => {
      return [];
    });
  },
});

// MOVIES SLICE
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
    reset(state, action) {
      return [];
    },
  },
});

// STORE
const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
    movies: moviesSlice.reducer,
  },
});

export { store };
export const { addSong, removeSong } = songsSlice.actions;
export const { addMovie, removeMovie, reset } = moviesSlice.actions;
