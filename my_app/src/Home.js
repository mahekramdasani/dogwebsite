import React,{ useEffect, useState } from "react";
import image from'./image.png'
import axios from 'axios';

const Home = () => {

  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    // Make a GET request to your backend API to fetch dogs
    axios.get('http://localhost:5000/dogs')
      .then((response) => {
        setDogs(response.data);
      })
      .catch((error) => {
        console.error('Error fetching dogs:', error);
      });
  }, []);

  return (
    <>
      <header>
        <h1>Home</h1>
      </header>
      <div className="container-fluid">
        <img src={image} className="w-100 opacity-75"/>
      </div>
      <div className="container">

    <div>
      <h2>Dog List</h2>
      <ul>
        {dogs.map((dog) => {
          return <li key={dog._id}>
            <p>Name: {dog.name}</p>
          </li>
        })}
      </ul>
    </div>

      </div>
    </>
  );
};

export default Home;
