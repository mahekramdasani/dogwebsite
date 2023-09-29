import React from "react";
import Hand from "../src/data/images/hand.png";
import { resdata } from "./data/data.js";
const Resources = () => {
  return (
    <>
      <header>
        <h1>Dog Resources</h1>
      </header>
      <div class="container-fluid text-center">
        {resdata.map((res) => {
          return (
            <div>
              <h2>
                <a href={res.href} target="blank_">
                  <img src={Hand} width="30px" height="30px" />
                  {res.resource}
                </a>
              </h2>
              <p>{res.info}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Resources;
