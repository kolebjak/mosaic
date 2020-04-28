import * as React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { Routes } from '../routes';
import HomePage from '../home/components/HomePage';
import UploadPage from '../upload/components/UploadPage';
import PreviewPage from '../preview/components/PreviewPage';
import GalleryPage from '../gallery/components/GalleryPage';
import {Menu} from "antd";

export default () => (
  <div>
    <Menu theme="dark" selectedKeys={[]} mode="horizontal">
      <Menu.Item>
        <Link to={Routes.home}>Home</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to={Routes.selectImage}>Select Image</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to={Routes.upload}>Upload</Link>
      </Menu.Item>
    </Menu>
    <div>
      <Switch>
        <Route exact={true} path={Routes.home} component={HomePage}/>
        <Route path={Routes.selectImage} component={GalleryPage}/>
        <Route path={Routes.upload} component={UploadPage}/>
        <Route path={Routes.preview} component={PreviewPage}/>
      </Switch>
    </div>
  </div>
);
