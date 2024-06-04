import React from "react";

export default function Test() {
  let x = 10;
  let text = "goodbuy";
  if (x > 10) {
    text = "hello";
  }
  return (
    <div className="App">
      {text}
      <h1> {x <= 10 ? "hello" : "hyy"}</h1>
    </div>
  );
}
