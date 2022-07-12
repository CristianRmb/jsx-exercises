import React from 'react';
/* Write a function that receives a `name` argument and returns a `h1` tag with the `name` variable appended to the `"Hello, "` string. */
function App(props) {
  const header = <h1>Hello , {props.nome}</h1>;
  return header;
}

export default App;
