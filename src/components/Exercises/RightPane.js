import React from "react";
import { Paper } from "material-ui";

export default props => (
  <Paper style={{ ...props.style, marginLeft: 5 }}>
    <p>Right Pane</p>
  </Paper>
);
