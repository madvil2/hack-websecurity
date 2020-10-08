import React from 'react';
import paths from './paths';
import SettingsPage from '../protected/client/settings/settings';

export default {
  index: {
    path: paths.index,
    component: () => (<h1>Home</h1>),
  },
  settings: {
    path: paths.settings,
    component: SettingsPage,
  }
};
