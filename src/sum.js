import React from 'react';

/* Write a function that receives two parameters, `a` and `b` and returns the sum of them within an `h2` tag. */

export function Sum(props) {
  let c = props.numeri.a + props.numeri.b;
  return <h2>The result is {c}</h2>;
}

