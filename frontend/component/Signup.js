import React from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from 'react-redux';
import actions from '../redux/actions';
import initialize from '../src/utils/initialize';
import { 
  NAME_MIN_LENGTH, NAME_MAX_LENGTH, 
  USERNAME_MIN_LENGTH, USERNAME_MAX_LENGTH,
  EMAIL_MAX_LENGTH,
  PASSWORD_MIN_LENGTH, PASSWORD_MAX_LENGTH
} from '../src/utils/constants';

class SignUpDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            name: '',
            username: '',
            email: '',
            password: ''
        };
    }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  
  handleInputChange = (event, validationFun) => {
      const target = event.target;
      const inputName = target.name;        
      const inputValue = target.value;

      this.setState({
          [inputName] : {
              value: inputValue,
              ...validationFun(inputValue)
          }
      });
  };


  static getInitialProps(ctx) {
    initialize(ctx);
  }

  handleSubmit = (event) => {
      event.preventDefault();
  
      this.props.registered ({ 
                name: this.state.name.value, 
                email: this.state.email.value,
                username: this.state.username.value,
                password: this.state.password.value },
                'register'
          );
  };


  render() {
    return (
      <div>
        <Button onClick={this.handleClickOpen} color="primary">
              Signup
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Sign-Up</DialogTitle>
          <DialogContent>
            <Input
              autoFocus
              size="large"
              name="name"
              autoComplete="off"
              placeholder="Your full name"
              value={this.state.name.value} 
              onChange={(event) => this.handleInputChange(event, this.validateName)}
              fullWidth
            />
            <Input                                
              size="large"
              name="username" 
              autoComplete="off"
              placeholder="A unique username"
              value={this.state.username.value} 
              onChange={(event) => this.handleInputChange(event, this.validateUsername)}
              fullWidth
            />
            <Input
              size="large"
              name="password" 
              type="password"
              autoComplete="off"
              placeholder="A password with at least 5 characters" 
              value={this.state.password.value} 
              onChange={(event) => this.handleInputChange(event, this.validatePassword)} 
              fullWidth
            />
            <Input
              size="large"
              name="email" 
              type="email" 
              autoComplete="off"
              placeholder="Your email"
              value={this.state.email.value} 
              onChange={(event) => this.handleInputChange(event, this.validateEmail)}
              fullWidth
            />

          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleSubmit} color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }

  validateName = (name) => {
      if(name.length < NAME_MIN_LENGTH) {
          return {
              validateStatus: 'error',
              errorMsg: `Name is too short (Minimum ${NAME_MIN_LENGTH} characters needed.)`
          }
      } else if (name.length > NAME_MAX_LENGTH) {
          return {
              validationStatus: 'error',
              errorMsg: `Name is too long (Maximum ${NAME_MAX_LENGTH} characters allowed.)`
          }
      } else {
          return {
              validateStatus: 'success',
              errorMsg: null,
            };            
      }
  }

  validateEmail = (email) => {
      if(!email) {
          return {
              validateStatus: 'error',
              errorMsg: 'Email may not be empty'                
          }
      }

      const EMAIL_REGEX = RegExp('[^@ ]+@[^@ ]+\\.[^@ ]+');
      if(!EMAIL_REGEX.test(email)) {
          return {
              validateStatus: 'error',
              errorMsg: 'Email not valid'
          }
      }

      if(email.length > EMAIL_MAX_LENGTH) {
          return {
              validateStatus: 'error',
              errorMsg: `Email is too long (Maximum ${EMAIL_MAX_LENGTH} characters allowed)`
          }
      }

      return {
          validateStatus: null,
          errorMsg: null
      }
  }

  validateUsername = (username) => {
      if(username.length < USERNAME_MIN_LENGTH) {
          return {
              validateStatus: 'error',
              errorMsg: `Username is too short (Minimum ${USERNAME_MIN_LENGTH} characters needed.)`
          }
      } else if (username.length > USERNAME_MAX_LENGTH) {
          return {
              validationStatus: 'error',
              errorMsg: `Username is too long (Maximum ${USERNAME_MAX_LENGTH} characters allowed.)`
          }
      } else {
          return {
              validateStatus: null,
              errorMsg: null
          }
      }
  }

  validatePassword = (password) => {
    if(password.length < PASSWORD_MIN_LENGTH) {
        return {
            validateStatus: 'error',
            errorMsg: `Password is too short (Minimum ${PASSWORD_MIN_LENGTH} characters needed.)`
        }
    } else if (password.length > PASSWORD_MAX_LENGTH) {
        return {
            validationStatus: 'error',
            errorMsg: `Password is too long (Maximum ${PASSWORD_MAX_LENGTH} characters allowed.)`
        }
    } else {
        return {
            validateStatus: 'success',
            errorMsg: null,
        };            
    }
}
}

export default connect(
    state => state,
    actions
  )(SignUpDialog);