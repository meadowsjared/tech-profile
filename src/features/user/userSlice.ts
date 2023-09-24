import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
  name: string;
  title: string;
  email: string;
  githubLink: string;
  linkedInLink: string;
}

const initialState: UserState = {
  name: "Jared Meadows",
  title: "Senior Software Developer | Frontend",
  email: "meadowsjared@gmail.com",
  githubLink: "https://github.com/meadowsjared",
  linkedInLink: "https://www.linkedin.com/in/jared-meadows/",
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
