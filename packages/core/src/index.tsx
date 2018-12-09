import * as React from "react";
import * as ReactDOM from "react-dom";

import "normalize.css";

import { Row } from "@mozart/row/src/components/Row";

ReactDOM.render(
  <Row message="Hello from the Row Component" />,
  document.getElementById("example")
);