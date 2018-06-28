import * as React from 'react';
import {Route, Switch} from 'react-router-dom';
import '../../index.css';
import {Routes} from '../routes';
import Home from '../home/Home';

export default () => (
  <div>
    <Switch>
      <Route exact={true} path={Routes.home} component={Home}/>
      <Route path={Routes.selectImage} component={() => <div>Select image</div>}/>
      <Route path={Routes.upload} component={() => <div>Upload</div>}/>
    </Switch>
  </div>
);
