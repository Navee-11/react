//Cleaner For
// import React from "react";

// function App() {
//   const [count, setCount] = React.useState(0);

//   return (
//     <>
//       <button onClick={() => setCount(count + 1)}>Counter {count}</button>
//     </>
//   );
// }

// export default App

// Functional Form
// import React from "react";

// function App() {
//   const [count, setCount] = React.useState(0);
//   return (
//     <div>
//       <Button count={count} setCount={setCount} />
//     </div>
//   );
// }

// function Button(props) {
//   function buttonClick() {
//     props.setCount(props.count + 1);
//   }

//   return (
//     <div>
//       <button onClick={buttonClick}>Counter {props.count}</button>
//     </div>
//   );
// }

// export default App;

// Transpiled Form
import React from "react";

function App() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <Button count={count} setCount={setCount} />
    </div>
  );
}

function Button(props) {
  function buttonClick() {
    props.setCount(props.count + 1);
  }

  return React.createElement(
    "button",
    { onClick: buttonClick },
    "Counter ",
    props.count
  );
}
export default App;
