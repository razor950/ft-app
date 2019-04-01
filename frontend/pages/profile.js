/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import PropTypes from 'prop-types';
import { getCurrentUser } from '../src/utils/api';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';
import 'isomorphic-fetch';

const styles = theme => ({
  root: {
    display: 'flex',
    textAlign: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  card: {
    display: 'inline-block',
    position: 'center',
  },
});

class Profile extends React.Component {
 
  static async getInitialProps () {
    // // eslint-disable-next-line no-undef
    // const res = await fetch(`http://localhost:5000/api/users/me`, {
    //   method: 'GET',
    //   credentials: 'include',
    //   headers: {
    //     'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNTUxODg0OTkxLCJleHAiOjE1NTI0ODk3OTF9.wkf_73nnXxSGNpKfk7jgaVpmAY5eFTXWhIK2fe_I1QFKx8PKTErSq_7ccu5dUcvrQxXynCQPZuXDC0R3ELJb7w'
    //   }
    // });
    
    const json = await getCurrentUser();
    console.log(json);
    return { user : json }
  }


  
  render() {
    const { classes } = this.props;

    const {
      username,
      name,
      email
    } = this.props.user;  
   
   return (
      <div className={classes.root}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              User Profile
            </Typography>
            <Typography component="p">
              Username: {username} 
            </Typography>
            <Typography component="p">
              Name: {name}
            </Typography>
            <Typography component="p">
              Email: {email}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Edit
          </Button>
        </CardActions>
      </Card>
      </div>
    );
  }
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Profile);
