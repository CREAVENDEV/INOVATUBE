import React, { useState, useEffect } from "react";
import axios from "axios";

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



































