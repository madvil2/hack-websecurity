import React from 'react';
import { Redirect } from 'react-router-dom';
import paths from './paths';
import SettingsPage from '../protected/client/settings/settings';
import Home from '../home';

export default {
  index: {
    path: paths.index,
    component: () => <Redirect to={paths.products} />,
  },
  home: {
    path: paths.products,
    component: Home,
  },
  settings: {
    path: paths.settings,
    component: SettingsPage,
  }
};
