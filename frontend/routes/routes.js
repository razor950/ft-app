import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MapContainer from '../component/Map';

export const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={MapContainer} />
      {/* <Route path="/Favorites" component={FavsContainer} />
      <Route path="/Friends" component={FriendsContainer} />
      <Route path="/Profile" component={ProfilePage} /> */}
    </div>
  </Router>
);

export default Routes;