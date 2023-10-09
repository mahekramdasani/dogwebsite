import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { healthdata } from "./data/data.js";
const Health = () => {
  return (
    <>
      <header>
        <h1>Dog Health and Care</h1>
      </header>
      <Tabs defaultActiveKey="Feeding Your Dog" id="health-tabs">
        {healthdata.map((data) => {
          return (
            <Tab eventKey={data.heading} title={data.heading}>
              <div className="container ">
                <p>{data.paragraph}</p>
                <ul>
                  {data.listItems.map((item) => {
                    return <li>{item}</li>;
                  })}
                </ul>
              </div>
            </Tab>
          );
        })}
      </Tabs>

    </>
  );
};

export default Health;
