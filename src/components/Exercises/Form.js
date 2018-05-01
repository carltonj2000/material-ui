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

class Form extends Component {
  static getMtExercise = () => ({ title: "", description: "", muscles: "" });
  state = Form.getMtExercise();
  static getDerivedStateFromProps = ({ exercise }) =>
    exercise || Form.getMtExercise();

  handleChange = name => ({ target: { value } }) =>
    this.setState({ [name]: value });

  handleSubmit = () => {
    // TODO: validation
    const exercise = this.state;
    this.props.onSubmit({
      id: exercise.title.toLocaleLowerCase().replace(/ /g, "-"),
      ...exercise
    });
    this.setState(Form.getMtExercise());
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
          {this.props.exercise ? "Change" : "Create"}
        </Button>
      </Fragment>
    );
  };
}

export default withStyles(styles)(Form);
