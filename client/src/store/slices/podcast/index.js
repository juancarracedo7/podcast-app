import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const podcastSlice = createSlice({
  name: "podcast",
  initialState: {
    podcast: [],
    filteredPodcast: [],
    loading: false,
    error: null,
    details: null,
    lastRequestDate: null, 
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
    getPodcastDetails: (state) => {
      state.details = null;
    },
    getPodcastDetailsSuccess: (state, action) => {
      state.details = action.payload;
    },
    getPodcastDetailsFail: (state, action) => {
      state.error = action.payload;
    },
   
    updateLastRequestDate: (state) => {
      state.lastRequestDate = new Date().toISOString();
    },
  },
});

export const {
  podcastRequest,
  podcastSuccess,
  podcastFail,
  filterPodcast,
  getPodcastDetails,
  getPodcastDetailsSuccess,
  getPodcastDetailsFail,
  updateLastRequestDate,
} = podcastSlice.actions;

export const getPodcast = () => async (dispatch, getState) => {
  try {
    const { podcast: { lastRequestDate } } = getState();
    const currentDate = new Date();
    const cachedData = localStorage.getItem("podcastData");

    if (cachedData && lastRequestDate) {
      const lastRequestDateObj = new Date(lastRequestDate);
      const oneDayMilliseconds = 24 * 60 * 60 * 1000;

      if (currentDate - lastRequestDateObj < oneDayMilliseconds) {
        
        dispatch(podcastSuccess(JSON.parse(cachedData)));
        return;
      }
    }

    dispatch(podcastRequest());
    const { data } = await axios.get("http://localhost:3001/podcast");
    dispatch(podcastSuccess(data));
    dispatch(cachePodcastData()); 
    dispatch(updateLastRequestDate()); 
  } catch (error) {
    dispatch(podcastFail(error.message));
  }
};

export const fetchPodcastDetails = (trackId) => async (dispatch) => {
  try {
    dispatch(getPodcastDetails());
    const { data } = await axios.get(`http://localhost:3001/details/${trackId}`);
    dispatch(getPodcastDetailsSuccess(data));
  } catch (error) {
    dispatch(getPodcastDetailsFail("Error fetching podcast details"));
  }
};

export const cachePodcastData = () => (dispatch, getState) => {
  const { podcast: { podcast } } = getState();

  try {
    localStorage.setItem("podcastData", JSON.stringify(podcast));
  } catch (error) {
    console.error("Error saving podcast data to localStorage:", error);
  }
};

export default podcastSlice.reducer;
