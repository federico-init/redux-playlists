import { configureStore, createSlice } from "@reduxjs/toolkit";

// SLICE
const songsSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    // ACTION CREATOR
    addSong(state, action) {
      state.push(action.payload);
    },
    // ACTION CREATOR
    removeSong(state, action) {},
  },
});

// STORE
const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
  },
});

export { store };
export const { addSong } = songsSlice.actions;
