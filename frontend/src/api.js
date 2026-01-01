import axios from "axios";

export default axios.create({
  baseURL: "https://YOUR_RENDER_URL.onrender.com",
  headers: { "Content-Type": "application/json" }
});
