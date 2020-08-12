import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import image1 from "./images/image (1).jpg";
import image2 from "./images/image (2).jpg";
import image3 from "./images/image (3).jpg";

//adding props
const Person = ({ img, name, job, children}) => {
  // using template litrals
  //const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return (
    <article className="person">
   { /* <img src={url}></img> */}
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </article>
  );
};
  
// now to create a component
const PersonList = () => {
  return (
    <section className="person-list">
      <Person img="34" name="SirCal" job="Web developer"><img src={image1}></img></Person>
      <Person img="56" name="Dziedzorm" job="Creative Director"><img src={image2} ></img></Person>
      <Person img="31" name="PMK" job="UX Designer"><img src={image3} ></img>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </Person>
    </section>
  );
}



ReactDom.render(<PersonList></PersonList>, document.getElementById("root"));

