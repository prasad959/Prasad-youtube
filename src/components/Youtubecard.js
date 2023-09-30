import React, { useEffect, useState } from "react";
import axios from "axios";
import "./youtubeCard.css";

const Youtubecard = () => {
    const [data1, setData1] = useState([]);

    const feactdata = async () => {
      try {
        const res = await axios.get(
          "https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UC_x5XG1OV2P6uZZ5FSM9Ttw&maxResults=25&key=AIzaSyD4Gj0Efocix8lNQZwy670jNLpz8nJ8lOU"
        );
        console.log(res.data.items);
        setData1(res.data.items);
      } catch (err) {
        console.log(err);
      }
    };
    useEffect(() => {
      feactdata();
    }, []);
    return (
      <div className="videos">
        
        {data1.map((video, index) => {
          return (
            <div key={index}>
              <img
                className="image"
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.description}
              />
              <div className="header ">{video.snippet.title}</div>
            </div>
          );
        })}
      </div>
    );
  };

export default Youtubecard