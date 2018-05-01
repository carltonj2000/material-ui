import React, { Component, Fragment } from "react";
import Button from "material-ui/Button";
import AddIcon from "@material-ui/icons/Add";
import Dialog, {
  DialogContent,
  DialogContentText,
  DialogTitle
} from "material-ui/Dialog";

import Form from "./Form";

class Create extends Component {
  state = { isOpen: false };
  toggleModal = () => this.setState(state => ({ isOpen: !state.isOpen }));
  handleFormSubmit = exercise => {
    this.props.onCreate(exercise);
    this.toggleModal();
  };

  render = () => {
    const { muscles } = this.props;
    const { isOpen } = this.state;
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
            <Form muscles={muscles} onSubmit={this.handleFormSubmit} />
          </DialogContent>
        </Dialog>
      </Fragment>
    );
  };
}

export default Create;
