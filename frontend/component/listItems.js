import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MapIcon from '@material-ui/icons/Map';
import ProfileIcon from '@material-ui/icons/Face';
import FriendIcon from '@material-ui/icons/Person';
import Link from 'next/link';

export const mainListItems = (
  <div>
       <List>
        <Link href="/"> 
          <ListItem button>
            <ListItemIcon>
              <MapIcon />
            </ListItemIcon>
            <ListItemText primary="Map" />
          </ListItem>
        </Link> 
        <Link href="/favorites">
          <ListItem button>
            <ListItemIcon>
              <FavoriteIcon />
            </ListItemIcon>
            <ListItemText primary="Favorites" />
          </ListItem>
        </Link>
          <Link href="/friends">
          <ListItem button>
            <ListItemIcon>
              <FriendIcon />
            </ListItemIcon>
            <ListItemText primary="Friends" />
          </ListItem>
          </Link>
          <Link href="/profile">
          <ListItem button>
            <ListItemIcon>
              <ProfileIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
         </Link>
       </List>
  </div>
);

export default mainListItems;