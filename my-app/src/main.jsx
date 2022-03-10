import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const root = document.querySelector("#root");
function showInfo(props) {
  return <p>Hello{props.title}</p>;
}
const ShowInfo = (props) => {
  return <p>Hello{props.title}</p>;
};
ReactDOM.render(
  <div>
    <div>{showInfo({ title: "Quang" })}</div>
    <ShowInfo title="Quang" />
    <App />
  </div>,
  root
);
