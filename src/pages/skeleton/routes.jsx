import React from 'react';
import paths from './paths';
import SettingsPage from '../protected/client/settings/settings';
import Transaction from '../protected/client/transaction/transaction';

export default {
  index: {
    path: paths.index,
    component: () => <h1>Home</h1>,
  },
  settings: {
    path: paths.settings,
    component: SettingsPage,
  },
  transaction: {
    path: paths.transaction,
    component: Transaction,
  },
};
