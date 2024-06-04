import React from "react";
import Parent from "./Parent";
import Child from "./Child";
// import Test from "./Test";
// import Child from "./Child";
// import Parent from "./Parent";

function App() {
  // const handleSubmit = (x) => {
  //   alert(x);
  // };

  let demo = false;
  // if (demo) {
  //   return <Parent />;
  // } else {
  //   return <Child />;
  // }

  return (
    <div className="App">
      {/* <Test /> */}
      {/* <Parent /> */}
      {/* <button onClick={ handleSubmit("hello this is sooraj") }>Submit</button> */}

      {demo ? <Parent /> : <Child />}
    </div>
  );
}
export default App;
