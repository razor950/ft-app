import React from 'react';
import { connect } from 'react-redux';
import actions from '../redux/actions';
import initialize from '../src/utils/initialize';
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


class LoginDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      usernameOrEmail: '',
      password: ''
    };
  }

  static getInitialProps(ctx) {
    initialize(ctx);
}

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.authenticate(
      { usernameOrEmail: this.state.usernameOrEmail, password: this.state.password},
      'login'
    );
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
              value={this.state.usernameOrEmail}
              onChange={e => this.setState({ usernameOrEmail: e.target.value })}
              fullWidth
            />
            <TextField
              margin="dense"
              id="password"
              label="Password"
              type="password"
              value={this.state.password}
              onChange={e => this.setState({ password: e.target.value })}
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

export default connect(
  state => state,
  actions
)(LoginDialog);