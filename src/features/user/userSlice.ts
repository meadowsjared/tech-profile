import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  entities: [],
  loading: false,
  email: "meadowsjared@gmail.com",
  githubLink: "https://github.com/meadowsjared",
  linkedInLink: "https://www.linkedin.com/in/jared-meadows/",
} as any;

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
