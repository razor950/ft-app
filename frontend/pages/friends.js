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
//import IMG from '../static/gmapsicon.png';
import Link from 'next/link';

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

function Friends(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Friends
          </Typography>
          <Typography component="p">
            FRIENDS HERE!
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

Friends.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Friends);
