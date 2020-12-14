import React from "react";
import "../styles.css";

import ClassCounter from "./RangeCounterA";
import FunctionalCounter from "./RangeCounterB";

export const App = () => {
  return (
    <div className="App">
      <ClassCounter min={0} max={0} />
      <FunctionalCounter min={0} max={4} />
    </div>
  );
};
