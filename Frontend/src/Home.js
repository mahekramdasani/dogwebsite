import React, { useEffect, useState } from "react";
import image from "../src/data/images/image.png";
import {HiArrowCircleRight} from 'react-icons/hi'
import axios from "axios";
import MyCard from "./components/Card";
const Home = () => {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    // Make a GET request to your backend API to fetch dogs
    axios
      .get("http://localhost:5000/dogs")
      .then((response) => {
        console.log(response.data)
        var res = []
        for(let i = 0;i<4;i++){
          res[i] = response.data[i]
        }
        console.log(res)
        setDogs(res);
      })
      .catch((error) => {
        console.error("Error fetching dogs:", error);
      });
  }, []);

  return (
    <>
      <header>
        <h1>Home</h1>
      </header>
      <div className="container-fluid">
        <img src={image} className="w-100" />
      </div>
      <div className="container-fluid">
        <div>
          <div className="row m-2">
          <h1 className="col-lg-8 h1">Dog Breeds</h1>
          <a className="col-lg-4 btn" href='/breeds'>See More <HiArrowCircleRight className="icon"/></a>
          </div>
          <div className="row w-100">
            {dogs.map((dog) => {
              return (
                <MyCard dog={dog}/>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
