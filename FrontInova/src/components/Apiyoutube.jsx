import React, { useState, useEffect } from "react";
import axios from "axios";

/*API YOUTUBE : AIzaSyC8z1NzkDDIgcYtVDJQc8tRZJMyLBNcxZ4*/

const API_KEY = "AIzaSyC8z1NzkDDIgcYtVDJQc8tRZJMyLBNcxZ4";
const CHANNEL_ID = "UCjkG2mVe8k7elZhzly1mgew";
const URL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet&type=video&maxResults=10`;

const AppYT = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(URL);
        setVideos(response.data.items);
      } catch (error) {
        console.error("Error al obtener los videos", error);
      }
    };
    fetchVideos();
  }, []);

  return (
    <div>
      <h1>Videos de YouTube</h1>
      <ul>
        {videos.map((video) => (
          <li key={video.id.videoId}>
            <h3>{video.snippet.title}</h3>
            <img
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppYT;
