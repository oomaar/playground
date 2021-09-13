import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    videos: ""
};

export const videoSlice = createSlice({
    name: "videos",
    initialState,
    reducers: {
        fetchVideos: (state, action) => {

        }
    }
});

export const { fetchVideos } = videoSlice.actions;