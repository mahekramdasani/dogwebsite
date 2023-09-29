import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {useNavigate} from 'react-router-dom'
const MyCard = ({ dog }) => {
  let navigate = useNavigate()
  return (
    <Card style={{ width: "20rem" }} className="m-4" key={dog.id}>
      <Card.Img src={dog.img} width="250px" height="250px"/>
      <Card.Body>
        <Card.Title>{dog.name}</Card.Title>
        <Card.Text className="p-card">
        {dog.temperament}
        </Card.Text>
        <Button variant="primary" onClick={()=>{
          navigate(`/breeds/${dog.name}`)
          // window.location.reload();
        }}>Read More</Button>
      </Card.Body>
    </Card>
  );
};

export default MyCard;
