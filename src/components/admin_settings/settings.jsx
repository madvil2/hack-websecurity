import React from 'react';
import styles from './settings.module.scss';
import {
  TabList,
  SegmentControl,
  Tab,
  TabPanelsList,
  TabPanel,
} from '../segmentControls';
import SettingsBlock from '../admin_settingsBlock/SettingsBlock.jsx';
import Monitoring from '../admin_monitoring/monitoring.jsx';
import CheckIp from '../../ip/ip.jsx';

const Settings = () => {
  return (
    <div className={styles.settings}>
      <div className={styles.body}>
        <SegmentControl color="#0091FF" onClick={() => {}} variant="button">
          <TabList>
            <Tab id="item1">Настройки компонента</Tab>
            <Tab id="item2">Мониторинг активностей</Tab>
            <Tab id="item3">И еще</Tab>
          </TabList>
          <hr className={styles.line} />
          <TabPanelsList>
            <TabPanel id="item1">
              <h2 className={styles.title}>Настройки виджета</h2>
              <SettingsBlock />
            </TabPanel>
            <TabPanel id="item2">
              <Monitoring />
            </TabPanel>
            <TabPanel id="item3">
              <CheckIp />
            </TabPanel>
          </TabPanelsList>
        </SegmentControl>
      </div>
    </div>
  );
};

export default Settings;
