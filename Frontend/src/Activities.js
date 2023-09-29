import React, { useContext, useState } from "react";
import Carousel from "./components/Carousel";
import { activitycarousel,activities } from "./data/data";
const Activities = () => {
  const [carouselActivity,setCarouselActivity] = useState(activitycarousel[0])
  const handleClick = (id) => {
    // console.log(obj)
    const get_id = activitycarousel.filter((value) => {
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
        {activities.map((act) => {
          return <div className="card col-lg-6 m-auto mt-3" style={{ width: "20rem" }} key={act['id']}>
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
