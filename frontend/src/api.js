import axios from "axios";

export default axios.create({
  baseURL: "https://smarthire-job-portal-mini-ats.onrender.com",
  headers: { "Content-Type": "application/json" }
});
