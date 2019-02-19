/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import CardComponent from '../component/Cards';
import Link from 'next/link';

const styles = theme => ({
  root: {
    display: 'flex',
    textAlign: 'center',
  },
  card: {
    display: 'inline-block',
    position: 'center',
  },
});

class Profile extends React.Component {
  render() {
    const { classes } = this.props;

    return (
        <div className={classes.root}>
          <CardComponent />
        </div>
    );
  }
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Profile);
