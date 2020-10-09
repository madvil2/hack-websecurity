import React from 'react';
import {
  SegmentControl,
  TabList,
  Tab,
  TabPanel,
  TabPanelsList,
} from '../../../../components/segmentControls/index.ts';
import { Button } from '../../../../components/button/index.ts';
import Card from '../../../../components/card';
import HeaderDefault from '../../../../components/content/_parts/header';
import Body from '../../../../components/content/_parts/body';
import Content from '../../../../components/content';
import styles from './Transaction.module.scss';

const Transaction = () => {
  return (
    <Content>
      <HeaderDefault header="Переводы и платежи" />
      <Body>
        {/* <SegmentControl>
          <TabList>
            <Tab id="item1">Item 1</Tab>
            <Tab id="item2">Item 2</Tab>
            <Tab id="item3">Item 3</Tab>
          </TabList>
          ,
          <TabPanelsList>
            <TabPanel id="item1">Text 1</TabPanel>
            <TabPanel id="item2">Text 2</TabPanel>
            <TabPanel id="item3">Text 3</TabPanel>
          </TabPanelsList>
        </SegmentControl> */}
        <div className={styles.paymentsBlock}>
          <h2 className={styles.title}>Данные карты</h2>
          <div className={styles.cardBlock}>
            <Card type="holder" />
          </div>
          <Button size="md" color="#00a0e3">
            Перевести
          </Button>
        </div>
      </Body>
    </Content>
  );
};

export default Transaction;
