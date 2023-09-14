import React, { useContext, useState } from "react";
import agility from "./agility.jpeg";
import brain from "./brain.jpg";
import diy from "./diy.jpg";
import indoor from "./indoor.jpg";
import outdoor from "./outdoor.jpg";
import social from "./social.jpg";
import trick from "./trick.png";

import agility1 from './agility1.jpg'
import agility2 from './agility2.webp'
import agility3 from './agility3.jpg'

import brain1 from './brain1.jpg'
import brain2 from './brain2.jpg'
import brain3 from './brain3.webp'

import diy1 from './diy1.jpg'
import diy2 from './diy2.jpeg'
import diy3 from './diy3.jpg'

import indoor1 from './indoor1.jpg'
import indoor2 from './indoor2.jpg'
import indoor3 from './indoor3.jpg'

import outdoor1 from './outdoor1.jpg'
import outdoor2 from './outdoor2.jpg'
import outdoor3 from './outdoor3.png'

import social1 from './social1.jpeg'
import social2 from './social2.jpeg'
import social3 from './social3.jpg'

import trick1 from './trick1.webp'
import trick2 from './trick2.avif'
import trick3 from './trick3.jpg'

import Carousel from "./components/Carousel";




const Activities = () => {
  // console.log(obj[0])
  const obj = [
    {name:"Outdoor Activities",id:0,imgs:[outdoor1,outdoor2,outdoor3]},
    {name:"Indoor Activities",id:1,imgs:[indoor1,indoor2,indoor3]},
    {name:"Social Activities",id:2,imgs:[social1,social2,social3]},
    {name:"Brain Activities",id:3,imgs:[brain1,brain2,brain3]},
    {name:"Agility Activities",id:4,imgs:[agility1,agility2,agility3]},
    {name:"DIY Activities",id:5,imgs:[diy1,diy2,diy3]},
    {name:"Trick Activities",id:6,imgs:[trick1,trick2,trick3]}
]
  const [carouselActivity,setCarouselActivity] = useState(obj[0])
  const activities1 = [
    {
      name: "Outdoor Activities",
      description: "Engage in outdoor adventures with your dog",
      img: outdoor,
      id: 0,
    },
    {
      name: "Indoor Activities",
      description:
        "Enjoy indoor fun on rainy days or when staying cozy at home",
      img: indoor,
      id: 1,
    },
    {
      name: "Social Activities",
      description: "Connect with other dog owners and socialize your pup",
      img: social,
      id: 2,
    },
  ];
  const activities2 = [
    {
      name: "Brain Activities",
      description: "Challenge your dog's intelligence with these brain games",
      img: brain,
      id: 3,
    },
    {
      name: "Agility Activities",
      description:
        "Engage in agility training for physical and mental exercise",
      img: agility,
      id: 4,
    },
    {
      name: "DIY Dog Toys",
      description: "Get creative and make your own dog toys",
      img: diy,
      id: 5,
    },
    {
      name: "Trick Activities",
      description: "Teach your dog fun and impressive tricks",
      img: trick,
      id: 6,
    },
  ];

  const handleClick = (id) => {
    // console.log(obj)
    const get_id = obj.filter((value) => {
      if(value["id"] == id) {
        return true;
      }
      return false;
    });
    // console.log(get_id)
    setCarouselActivity(get_id[0])
  };
  return (
    <>
      <header>
        <h1>Dog Activities</h1>
      </header>
      <Carousel act = {carouselActivity}/>
      <div className="row mb-3 mt-3">
        {activities1.map((act) => {
          return <div className="card col-lg-4 m-auto" style={{ width: "18rem" }} key={act['id']}>
            <img
              className="card-img-top"
              src={act["img"]}
              alt="Card image cap"
              width="250px"
              height="250px"
            />
            <div className="card-body">
              <h5 className="card-title">{act["name"]}</h5>
              <p className="card-text p-card">{act["description"]}</p>
              <a
                href="#"
                className="btn"
                onClick={() => {
                  handleClick(act["id"]);
                }}
              >
                {act['name']}
              </a>
            </div>
          </div>;
        })}
      </div>
      <div className="row mb-3">
        {activities2.map((act) => {
          return <div className="card col-lg-3 m-auto" style={{ width: "18rem" }} key={act['id']}>
            <img
              className="card-img-top"
              src={act["img"]}
              alt="Card image cap"
              width="250px"
              height="250px"
            />
            <div className="card-body">
              <h5 className="card-title">{act["name"]}</h5>
              <p className="card-text p-card">{act["description"]}</p>
              <a
                href="#"
                className="btn"
                onClick={() => {
                  handleClick(act["id"]);
                }}
              >
                {act['name']}
              </a>
            </div>
          </div>;
        })}
      </div>
    </>
  );
};

export default Activities;
