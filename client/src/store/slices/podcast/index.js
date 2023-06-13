import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const podcastSlice = createSlice({
    name: "podcast",
    initialState: {
        podcast: [],
        loading: false,
        error: null,
    },
    reducers: {
        podcastRequest: (state) => {
            state.loading = true;
        }
        ,
        podcastSuccess: (state, action) => {
            state.podcast = action.payload;
            state.loading = false;
        }
        ,
        podcastFail: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        }
    }
});

export const { podcastRequest, podcastSuccess, podcastFail } = podcastSlice.actions;

export const getPodcast = () => async (dispatch) => {
    try {
        dispatch(podcastRequest());
        const { data } = await axios.get("http://localhost:3001/podcast");
        console.log("data",data);
        dispatch(podcastSuccess(data));
    } catch (error) {
        dispatch(podcastFail(error.message));
    }
}

export default podcastSlice.reducer;