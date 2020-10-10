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
    // if (/[0-9]/i.test(e) || e === '') {
    let newValue = {
      ...inputsValue,
      [type]: {
        ...inputsValue[type],
        [inputName]: e,
      },
    };
    setInputsValue(newValue);
    // }
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.info_container}>
      <SegmentControl className={styles.TabBlock}>
        <TabList>
          <Tab id="item1">Перевести</Tab>
          <Tab id="item2">Оплатить</Tab>
        </TabList>
        <TabPanelsList>
          <TabPanel id="item1">
            <form
              onSubmit={(e) => onSubmit(e)}
              className={styles.paymentsBlock}
            >
              <div className={styles.cardsContainer}>
                <div className={styles.flexColumn}>
                  <p className={styles.title}>Данные карты отправителя</p>
                  <div className={styles.cardBlock}>
                    <Card
                      value={inputsValue.holder}
                      changeValue={changeValue}
                      type="holder"
                    />
                  </div>
                </div>
                <div className={styles.flexColumn}>
                  <p className={styles.title}>Данные карты получателя</p>
                  <div className={styles.cardBlock}>
                    <Card
                      value={inputsValue.adressee}
                      changeValue={changeValue}
                      type="adressee"
                    />
                  </div>
                </div>
              </div>
              <Button onSubmit={(e) => onSubmit(e)} size="md" color="#fff" textColor="#0a2896">
                Перевести
              </Button>
            </form>
          </TabPanel>
          <TabPanel id="item2">
            <form
              onSubmit={(e) => onSubmit(e)}
              className={styles.paymentsBlock}
            >
              <div className={styles.cardsContainer}>
                <div className={styles.flexColumn}>
                  <p className={styles.title}>Данные карты отправителя</p>
                  <div className={styles.cardBlock}>
                    <Card
                      value={inputsValue.adressee}
                      changeValue={changeValue}
                      type="adressee"
                    />
                  </div>
                </div>
              </div>
              <Button onSubmit={(e) => onSubmit(e)} size="md" color="#fff" textColor="#0a2896">
                Перевести
              </Button>
            </form>
          </TabPanel>
        </TabPanelsList>
      </SegmentControl>
    </div>
  );
};

export default Transaction;
