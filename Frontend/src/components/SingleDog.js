import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import {IoPawSharp} from 'react-icons/io5'
const SingleDog = () => {
  const [dogs, setDogs] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:5000/dogs")
      .then((response) => {
        setDogs(response.data);
      })
      .catch((error) => {
        console.error("Error fetching dogs:", error);
      });
  }, []);
  var { name } = useParams();
  name = decodeURIComponent(name)
  console.log(name);
  const singledog = dogs.filter((dog) => {
    console.log(dog.name);
    if (dog.name == name) {
      return true;
    }
    return false;
  });
  return (
    <>
      <header>
        <h1>Dog Information</h1>
      </header>
      <div className="container row">
        {singledog.map((dog) => {
          return (
            <div className="row container m-5">
              <div className="col-lg-4">
                <img
                  src={dog.img}
                  height="400px"
                  width="400px"
                  className="rounded"
                />
              </div>
              <div className="col-lg-8 p-3">
                <h2 className="h2">{dog.name}</h2>
                <h2 className="h2"><IoPawSharp className="icon-paw"/></h2>
                <p>
                  <span style={{ fontWeight: "bold" }}>Weight:</span>
                  {dog.weight.imperial}
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>Height:</span>
                  {dog.height.imperial}
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>Lifespan:</span>
                  {dog.life_span}
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>Bred for:</span>
                  {dog.bred_for}
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>Breed Group:</span>
                  {dog.breed_group}
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>Temperament:</span>
                  {dog.temperament}
                </p>
                <h2><IoPawSharp className="icon-paw"/></h2>
                <button onClick={()=>{
                    navigate(-1)
                }
                } className="btn">Back</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SingleDog;
