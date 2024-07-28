import * as React from "react";
import Button from "./Button";

const Counter: React.FC = () => {
  const [counter, setCounter] = React.useState<number>(0);

  function incrementCounter() {
    return setCounter(counter + 1);
  }

  return (
    <React.Fragment>
      <h1>{counter}</h1>
      <Button onClick={incrementCounter}>Increment</Button>
    </React.Fragment>
  );
};

export default Counter;
