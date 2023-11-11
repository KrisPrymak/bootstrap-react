import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://hacker-news.firebaseio.com/v0/",
  withCredentials: false,
});

export const fetchComments = createAsyncThunk(
  "news/fetchComments",
  async function (listId, { rejectWithValue }) {
    try {
      let commentsList = [];
      if (listId) {
        for (let i = 0; i < listId.length; i++) {
          const response = await instance.get(
            `/item/${listId[i]}.json?print=pretty`
          );
          const commentItem = {
            by: response.data.by,
            id: response.data.id,
            kids: response.data.kids,
            parent: response.data.parent,
            text: response.data.text,
            time: response.data.time,
            type: response.data.type,
          };
          if (commentItem.kids) {
            let subComms = [];
            for (let i = 0; i < commentItem.kids.length; i++) {
              const response = await instance.get(
                `/item/${commentItem.kids[i]}.json?print=pretty`
              );
              const subCommnetItem = {
                by: response.data.by,
                id: response.data.id,
                kids: response.data.kids,
                parent: response.data.parent,
                text: response.data.text,
                time: response.data.time,
                type: response.data.type,
              };
              subComms.push(subCommnetItem);
            }
            commentItem.kids = subComms;
          }
          commentsList.push(commentItem);
        }
      }
      return commentsList;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchNews = createAsyncThunk(
  "news/fetchNews",
  async function (_, { rejectWithValue }) {
    try {
      let newsData = [];
      const response = await instance.get("/newstories.json?print=pretty");
      const idList = response.data
        .sort((a, b) => {
          return a.time < b.time ? -1 : 1;
        })
        .slice(0, 100);
      for (let i = 0; i < idList.length; i++) {
        const itemResponse = await instance.get(
          `/item/${idList[i]}.json?print=pretty`
        );
        const newItem = {
          by: itemResponse.data.by,
          descendants: itemResponse.data.descendants,
          id: itemResponse.data.id,
          score: itemResponse.data.score,
          kids: itemResponse.data.kids,
          time: itemResponse.data.time,
          title: itemResponse.data.title,
          type: itemResponse.data.type,
          url: itemResponse.data.url,
        };
        newsData.push(newItem);
      }
      return newsData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const newsSlice = createSlice({
  name: "news",
  initialState: {
    commentsList: null,
    list: [],
    status: null,
    error: null,
  },
  reducers: {
    updateCommentList: (state, action) => {
      state.commentsList = null;
    },
  },
  extraReducers: {
    [fetchNews.pending]: (state) => {
      state.status = "pending";
      state.error = null;
    },
    [fetchComments.pending]: (state) => {
      state.status = "pending";
      state.error = null;
    },


    [fetchNews.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.list = action.payload;
      state.commentsList = null;
    },
    [fetchComments.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.commentsList = action.payload;
    },


    [fetchNews.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
    [fetchComments.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export const { updateCommentList } = newsSlice.actions;

export default newsSlice.reducer;
