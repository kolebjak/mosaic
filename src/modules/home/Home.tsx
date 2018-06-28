import * as React from 'react';
import { Link } from 'react-router-dom';
import { Routes } from '../routes';

export default () => (
  <div>
    <Link to={Routes.selectImage}>Select Image</Link><br />
    <Link to={Routes.upload}>Upload</Link>
  </div>
);
