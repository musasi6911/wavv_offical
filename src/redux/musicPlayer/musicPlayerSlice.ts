import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  showPlayer: boolean;
  songDetail: {
    title: string;
    composer: string;
    pic: string;
  };
};

const initialState: InitialState = {
  showPlayer: false,
  songDetail: {
    title: "Past Fantasy",
    composer: "@Kalem Alvarez",
    pic: "",
  },
};

const musicPlayerSlice = createSlice({
  name: "music",
  initialState,
  reducers: {
    showMusicPlayer: (state: InitialState) => {
      state.showPlayer = true;
    },
    closeMusicPlayer: (state) => {
      state.showPlayer = false;
    },
    selectMusic: (state, action) => {
      state.songDetail = action.payload;
    },
  },
});

export default musicPlayerSlice.reducer;
export const { showMusicPlayer, closeMusicPlayer, selectMusic } =
  musicPlayerSlice.actions;
