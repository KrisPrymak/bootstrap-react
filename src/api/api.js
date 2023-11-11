import axios from "axios";

export const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  withCredentials: false,
});

export const postsAPI = {
  async getPosts() {
      const response = await instance.get('/posts')
      return response;
  },
};

export const commentsAPI = {
  async getComments() {
      const response = await instance.get('/comments')
      return response;
  },
};
