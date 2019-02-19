import React from 'react';
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SignUpDialog from './Signup';
import login from '../src/utils/Api';


export default class LoginDialog extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <IconButton color="inherit" onClick={this.handleClickOpen}>
          <AccountCircleIcon />
        </IconButton>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          onLogin={this.onLogin}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Login</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="usernameOrEmail"
              label="Username or Email"
              type="username"
              fullWidth
            />
            <TextField
              margin="dense"
              id="password"
              label="Password"
              type="password"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleSubmit} color="primary">
              Login
            </Button>
            <SignUpDialog />
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}