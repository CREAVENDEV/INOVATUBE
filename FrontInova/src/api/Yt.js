const axios = require("axios");

const API_KEY = "AIzaSyC8z1NzkDDIgcYtVDJQc8tRZJMyLBNcxZ4";
const CHANNEL_ID = "UCjkG2mVe8k7elZhzly1mgew";
const URL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet&
type=video&maxResults=10`;



const getVideos = async () => {
  try {
    const response = await axios.get(URL);
    const videos = response.data.items;

    console.log("Lista de videos:");
    videos.forEach((video) => {
      console.log(`Título: ${video.snippet.title}`);
      console.log(`URL: https://www.youtube.com/watch?v=${video.id.videoId}`);
      console.log("--------------------------------");
    });
  } catch (error) {
    console.error("Error al obtener los videos:", error.message);
  }
};

// Llamar a la función
getVideos();
