import React, { useState } from "react";
import Hand from "../src/data/images/hand.png";
import { trainingdata } from "./data/data";
import { FaRegHandPointRight } from "react-icons/fa";
const Training = () => {
  const [video, setVideo] = useState(trainingdata[0].videoId);
  function handleClick(i) {
    const new_item = trainingdata.filter((value) => {
      if (value.videoId == i) {
        return true;
      }
      return false;
    });
    console.log(new_item[0]);
    setVideo(new_item[0].videoId);
  }
  return (
    <>
      <header>
        <h1>Dog Training and Behavior</h1>
      </header>
      <div className="row">
        <div className="container col-lg-7 p-5 train">
          {trainingdata.map((value) => {
            return (
              <div className="container">
                <p>
                  <h1>
                    <FaRegHandPointRight className="icon" />
                    <a
                      href="#"
                      onClick={() => {
                        handleClick(value.videoId);
                      }}
                    >
                      {value.title}
                    </a>
                  </h1>
                </p>
                <p className="training-p">{value.description}</p>
                <ol>
                  {value.steps.map((step) => {
                    return <li>{step}</li>;
                  })}
                </ol>
              </div>
            );
          })}
        </div>
        <div className="col-lg-5 p-5">
          <iframe
            width="500"
            height="315"
            src={`https://www.youtube.com/embed/${video}?controls=1&autoplay=1&mute=1`}
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Training;
