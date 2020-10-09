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
  const [inputsValue, setInputsValue] = React.useState({
    holder: {
      cardNumber: '',
      cardMonth: '',
      cardYear: '',
      cardCVV: '',
    },
    adressee: {
      cardNumber: '',
    },
  });

  const changeValue = (e, type, inputName) => {
    if (/[0-9]/i.test(e.target.value) || e.target.value === '') {
      let newValue = {
        ...inputsValue,
        [type]: {
          ...inputsValue[type],
          [inputName]: e.target.value,
        },
      };
      setInputsValue(newValue);
    }
  };

  return (
    <Content>
      <HeaderDefault header="Переводы и платежи" />
      <Body>
        <SegmentControl className={styles.TabBlock}>
          <TabList>
            <Tab id="item1">Перевести</Tab>
            <Tab id="item2">Оплатить</Tab>
          </TabList>
          <TabPanelsList>
            <TabPanel id="item1">
              <div className={styles.paymentsBlock}>
                <h2 className={styles.title}>Данные карты отправителя</h2>
                <div className={styles.cardBlock}>
                  <Card
                    value={inputsValue.holder}
                    changeValue={changeValue}
                    type="holder"
                  />
                </div>
                <h2 className={styles.title}>Данные карты получателя</h2>
                <div className={styles.cardBlock}>
                  <Card
                    value={inputsValue.adressee}
                    changeValue={changeValue}
                    type="adressee"
                  />
                </div>
                <Button size="md" color="#00a0e3">
                  Перевести
                </Button>
              </div>
            </TabPanel>
            <TabPanel id="item2">
              <div className={styles.paymentsBlock}>
                <h2 className={styles.title}>Данные карты получателя</h2>
                <div className={styles.cardBlock}>
                  <Card
                    value={inputsValue.adressee}
                    changeValue={changeValue}
                    type="adressee"
                  />
                </div>
                <Button size="md" color="#00a0e3">
                  Перевести
                </Button>
              </div>
            </TabPanel>
          </TabPanelsList>
        </SegmentControl>
      </Body>
    </Content>
  );
};

export default Transaction;
