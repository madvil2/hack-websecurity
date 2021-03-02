import React from 'react';
import { Redirect } from 'react-router-dom';
import paths from './paths';
import SettingsPage from '../protected/client/settings/settings';
import Home from '../home';
import Transaction from '../protected/client/transaction/transaction';

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
  },
  transaction: {
    path: paths.transaction,
    component: Transaction,
  },
  // checkFace: {
  //   path: paths.checkFace,
  //   component: () => <div style={{ display: 'none' }}><P5Wrapper sketch={checkFace} /></div>
  // }
};
