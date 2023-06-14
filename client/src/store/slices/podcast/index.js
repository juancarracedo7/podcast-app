import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const podcastSlice = createSlice({
  name: "podcast",
  initialState: {
    podcast: [],
    filteredPodcast: [],
    loading: false,
    error: null,
  },
  reducers: {
    podcastRequest: (state) => {
      state.loading = true;
    },
    podcastSuccess: (state, action) => {
      state.podcast = action.payload;
      state.filteredPodcast = action.payload;
      state.loading = false;
    },
    podcastFail: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    filterPodcast: (state, action) => {
      const search = action.payload.toLowerCase();
      state.filteredPodcast = state.podcast.filter((item) => {
        const podcastName = item.name.toLowerCase();
        const podcastTitle = item.title.toLowerCase();
        return podcastName.includes(search) || podcastTitle.includes(search);
      });
    },
  },
});

export const {
  podcastRequest,
  podcastSuccess,
  podcastFail,
  filterPodcast,
} = podcastSlice.actions;

export const getPodcast = () => async (dispatch) => {
  try {
    dispatch(podcastRequest());
    const { data } = await axios.get("http://localhost:3001/podcast");
    dispatch(podcastSuccess(data));
  } catch (error) {
    dispatch(podcastFail(error.message));
  }
};

export default podcastSlice.reducer;
