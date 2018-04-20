import React from "react";
import { Grid } from "material-ui";
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";

const style = { Paper: { padding: 20, marginTop: 10, marginBotton: 10 } };

export default props => (
  <Grid container>
    <Grid item xs>
      <LeftPane style={style.Paper} />
    </Grid>
    <Grid item xs>
      <RightPane style={style.Paper} />
    </Grid>
  </Grid>
);
