import React, { Component, Fragment } from "react";
import { TextField, Select, Button } from "material-ui";
import { MenuItem } from "material-ui/Menu";
import { FormControl } from "material-ui/Form";
import { InputLabel } from "material-ui/Input";
import { withStyles } from "material-ui/styles";

const styles = theme => ({
  Form: {
    width: 500
  }
});

export default withStyles(styles)(
  class extends Component {
    MtExercise = { title: "", description: "", muscles: "" };
    state = this.props.exercise || this.MtExercise;

    handleChange = name => ({ target: { value } }) =>
      this.setState({ [name]: value });

    handleSubmit = () => {
      // TODO: validation
      const exercise = this.state;
      this.props.onSubmit({
        ...exercise,
        id: exercise.id || exercise.title.toLocaleLowerCase().replace(/ /g, "-")
      });
      this.props.finish();
      this.setState(this.MtExercise);
    };
    render = () => {
      const { muscles: categories, classes } = this.props;
      const { title, muscles, description } = this.state;
      return (
        <Fragment>
          <TextField
            required
            label="Title"
            value={title}
            onChange={this.handleChange("title")}
            margin="normal"
            className={classes.Form}
          />
          <br />
          <FormControl className={classes.Form}>
            <InputLabel>Muscles</InputLabel>
            <Select value={muscles} onChange={this.handleChange("muscles")}>
              {categories.map(muscle => (
                <MenuItem key={muscle} value={muscle}>
                  {muscle}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <br />
          <TextField
            required
            label="Description"
            value={description}
            onChange={this.handleChange("description")}
            multiline
            rows="4"
            margin="normal"
            className={classes.Form}
          />
          <br />
          <Button onClick={this.handleSubmit} color="primary" variant="raised">
            Submit
          </Button>
        </Fragment>
      );
    };
  }
);
