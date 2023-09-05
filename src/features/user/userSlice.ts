import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  name: string;
  email: string;
  githubLink: string;
  linkedInLink: string;
}

const initialState: UserState = {
  name: "Jared Meadows",
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
