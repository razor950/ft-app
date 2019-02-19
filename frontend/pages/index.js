/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { withStyles } from '@material-ui/core/styles';
import MapContainer from '../component/Map';
import Profile from '../pages/profile';
import AppBarComponent from '../component/AppBar';

const styles = theme => ({
  root: {
    display: 'flex',
    textAlign: 'center',
  },
  fullList: {
    width: 'auto',
  }
});

class Index extends React.Component {
  render() {
    const { classes } = this.props;

    return (
        <div className={classes.root}>
          <MapContainer />
        </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Index);