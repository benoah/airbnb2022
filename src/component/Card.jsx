import React from "react";

export default function Card(props) {
    console.log(props);
    let messageText 

    if (props.openSpots === 0) {
        messageText = "SOLD OUT" 
    }else if (props.location === "Online") {
        messageText = "ONLINE" 
    } 




    //else if (condition) {
        
   // }

  return (
    <div className="card">
     {messageText && <div className="card--badge">{messageText}</div>}
      <img
        src={`../images/${props.coverImg}`}
        alt="coverimage"
        className="card--image"
      />
      <div className="card--stats">
        <img src="../images/star.png" alt="star" className="card--star" />
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount}) • </span>
        <span className="gray">{props.location}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}
/*
Online
openSpots
location
*/
