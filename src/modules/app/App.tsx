import * as React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import '../../index.css';
import { Routes } from '../routes';
import HomePage from '../home/components/HomePage';
import UploadPage from '../upload/components/UploadPage';
import PreviewPage from '../preview/components/PreviewPage';

export default () => (
  <div>
    <div>
      <Link to={Routes.selectImage}>Select Image</Link><br />
      <Link to={Routes.upload}>Upload</Link><br />
      <Link to={Routes.preview}>Preview</Link>
    </div>
    <Switch>
      <Route exact={true} path={Routes.home} component={HomePage}/>
      <Route path={Routes.selectImage} component={() => <div>Select image</div>}/>
      <Route path={Routes.upload} component={UploadPage}/>
      <Route path={Routes.preview} component={PreviewPage}/>
    </Switch>
  </div>
);
