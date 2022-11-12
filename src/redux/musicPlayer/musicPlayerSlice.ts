import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  showPlayer: boolean;
  songDetail: {
    title: string;
  };
};

const initialState: InitialState = {
  showPlayer: false,
  songDetail: {
    title: "",
  },
};

const musicPlayerSlice = createSlice({
  name: "music",
  initialState,
  reducers: {
    showMusicPlayer: (state) => {
      state.showPlayer = true;
    },
    closeMusicPlayer: (state) => {
      state.showPlayer = false;
    },
  },
});

export default musicPlayerSlice.reducer;
export const { showMusicPlayer, closeMusicPlayer } = musicPlayerSlice.actions;
