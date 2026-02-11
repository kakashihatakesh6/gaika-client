import axios from "axios";

// Create an Axios instance with default configuration
const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api",
    headers: {
        "Content-Type": "application/json",
    },
});

// Add a responsive interceptor for error handling
api.interceptors.response.use(
    (response) => response,
    (error) => {
        // Handle global errors here if needed
        console.error("API Error:", error.response?.data || error.message);
        return Promise.reject(error);
    }
);

export default api;
