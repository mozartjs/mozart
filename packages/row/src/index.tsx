import * as React from "react";
import * as ReactDOM from "react-dom";

import "normalize.css";

import { Hello } from "@mozart/row/src/components/Hello";

ReactDOM.render(
  <Hello compiler="TypeScript" framework="React" />,
  document.getElementById("example")
);