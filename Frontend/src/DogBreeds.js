import React, { useState, useEffect } from "react";
import axios from "axios";
import MyCard from "./components/Card";
import { FaSearch, FaSortAlphaDown, FaSortAlphaDownAlt } from "react-icons/fa";
const DogBreeds = () => {
  const [dogs, setDogs] = useState([]);
  const [name, setName] = useState("");
  const [sort, setSort] = useState("descending");
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
  const changeName = (e) => {
    setName(e.target.value);
  };
  const handleClick = (e) => {
    const searchValue = document.querySelector('input[name="searchDog"]').value;
    axios
      .get(`http://localhost:5000/search?searchDog=${searchValue}&sort=${sort}`)
      .then((response) => {
        setDogs(response.data);
      })
      .catch((error) => {
        console.error("Error finding dogs:", error);
      });
  };
  const handleSort=()=>{
    const searchValue = document.querySelector('input[name="searchDog"]').value;
    if(sort=="ascending"){
      setSort("descending")
    }
    else{
      setSort("ascending")
    }
    axios
      .get(`http://localhost:5000/sort?sort=${sort}&searchDog=${searchValue}`)
      .then((response) => {
        setDogs(response.data);
      })
      .catch((error) => {
        console.error("Error finding dogs:", error);
      });
  }
  return (
    <>
      <header>
        <h1>Dog Breeds</h1>
      </header>
      <p className="search">
        <input
          type="text"
          name="searchDog"
          onChange={handleClick}
          placeholder="Search"
        />
        <button onClick={handleSort} className="btn btn-link">
          <h5>
          {sort == "descending" ? (
            <FaSortAlphaDownAlt className="icon" />
          ) : (
            <FaSortAlphaDown className="icon" />
          )}
          </h5>
        </button>
      </p>
      <div className="container-fluid row w-100">
        {dogs.map((dog) => {
          return <MyCard dog={dog} />;
        })}
      </div>
    </>
  );
};

export default DogBreeds;
