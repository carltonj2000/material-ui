import React, { Component, Fragment } from "react";
import Button from "material-ui/Button";
import AddIcon from "@material-ui/icons/Add";
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "material-ui/Dialog";
import TextField from "material-ui/TextField";
import Select from "material-ui/Select";
import { MenuItem } from "material-ui/Menu";
import { FormControl } from "material-ui/Form";
import { InputLabel } from "material-ui/Input";
import { withStyles } from "material-ui/styles";

const styles = theme => ({
  Form: {
    width: 500
  }
});

class Create extends Component {
  MtExercise = {
    title: "",
    description: "",
    muscles: ""
  };

  state = {
    isOpen: true,
    exercise: this.MtExercise
  };

  handleChange = name => ({ target }) => {
    this.setState(state => ({
      exercise: { ...state.exercise, [name]: target.value }
    }));
  };

  toggleModal = () => this.setState(state => ({ isOpen: !state.isOpen }));

  handleSubmit = () => {
    // TODO: validation
    const { exercise } = this.state;
    this.props.onCreate({
      ...exercise,
      id: exercise.title.toLocaleLowerCase().replace(/ /g, "-")
    });
    this.setState({ isOpen: false, exercise: this.MtExercise });
  };

  render = () => {
    const { muscles, classes } = this.props;
    const {
      isOpen,
      exercise: { title, description, muscles: emuscles }
    } = this.state;
    return (
      <Fragment>
        <Button variant="fab" aria-label="add" onClick={this.toggleModal}>
          <AddIcon />
        </Button>
        <Dialog
          open={isOpen}
          onClose={this.toggleModal}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Create Exercise</DialogTitle>
          <DialogContent>
            <DialogContentText>Fill out the form below.</DialogContentText>
            <form>
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
                <Select
                  value={emuscles}
                  onChange={this.handleChange("muscles")}
                >
                  {muscles.map(muscle => (
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
            </form>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={this.handleSubmit}
              color="primary"
              variant="raised"
            >
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  };
}

export default withStyles(styles)(Create);
