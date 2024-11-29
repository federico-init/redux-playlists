import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

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
    builder.addCase(reset, (state, action) => {
      return [];
    });
  },
});

export const { addSong, removeSong } = songsSlice.actions;
export const songsReducer = songsSlice.reducer;
