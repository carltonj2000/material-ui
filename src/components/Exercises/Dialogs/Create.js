import React, { Component, Fragment } from "react";
import Button from "material-ui/Button";
import AddIcon from "@material-ui/icons/Add";
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "material-ui/Dialog";

export default class extends Component {
  state = { isOpen: false };
  toggleModal = () => this.setState(state => ({ isOpen: !state.isOpen }));
  render = () => (
    <Fragment>
      <Button variant="fab" aria-label="add" onClick={this.toggleModal}>
        <AddIcon />
      </Button>
      <Dialog
        open={this.state.isOpen}
        onClose={this.toggleModal}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Create Exercise</DialogTitle>
        <DialogContent>
          <DialogContentText>Fill out the form below.</DialogContentText>
          <form />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.toggleModal} color="primary" variant="raised">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}
