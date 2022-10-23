import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";


const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzM2MwZTVjYTI5NTM0ZGY5NTIyM2JiNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NjI2MDU5OSwiZXhwIjoxNjY2MzQ2OTk5fQ.COcRtils7GegM66WREL6XiAOIuow_Xb3a98ACyXUn7g'

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});