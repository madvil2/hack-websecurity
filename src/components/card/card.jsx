import React from 'react';
import { Input } from '../input/index.ts';
import styles from './Card.module.scss';
import cx from 'classnames';

const Card = ({ type = 'adressee', value, changeValue }) => {
  return (
    <>
<div className={cx(styles.Card, styles.debit_card)}>
        <Input
          size="xl"
          type="text"
          placeholder="Введите данные карты"
          name="cardNumberTrue"
          value={value.cardNumber}
          onChange={(e) => changeValue(e, type, 'cardNumber')}
          virtualKeyBoard
          onKeyDown={(e) => changeValue(e, type, 'cardNumber')}
          pattern="[0-9]{16}"
          inputMaskPattern={{
            "default": {
              mask: '1111 1111 1111 1111',
              regex: /^[0-9]+$/
            }
          }}
        />
        <Input
          type="text"
          placeholder="Введите данные карты"
          name="cardNumber"
          value={value.cardNumberHoney}
          onChange={(e) => changeValue(e, type, 'cardNumberHoney')}
          pattern="[0-9]{16}"
          className={styles.Honeypot}
        />
        {type === 'holder' && (
          <div className={styles.CardInputRow}>
            <Input
              size="xl"
              type="text"
              placeholder="ММ"
              name="cardMonthTrue"
              value={value.cardMonth}
              onChange={(e) => changeValue(e, type, 'cardMonth')}
              pattern="[0-9]{2}"
              virtualKeyBoard
              onKeyDown={(e) => changeValue(e, type, 'cardMonth')}
              inputMaskPattern={{
                "default": {
                  mask: '11',
                  regex: /^[0-9]+$/
                }
              }}
            />
            <Input
              placeholder="ММ"
              name="cardMonth"
              value={value.cardMonthHoney}
              onChange={(e) => changeValue(e, type, 'cardMonthHoney')}
              pattern="[0-9]{2}"
              onKeyDown={(e) => changeValue(e, type, 'cardMonthHoney')}
              className={styles.Honeypot}
            />
            <Input
              size="xl"
              type="text"
              placeholder="ГГ"
              name="cardYearTrue"
              value={value.cardYear}
              onChange={(e) => changeValue(e, type, 'cardYear')}
              pattern="[0-9]{2}"
              virtualKeyBoard
              onKeyDown={(e) => changeValue(e, type, 'cardYear')}
              inputMaskPattern={{
                "default": {
                  mask: '11',
                  regex: /^[0-9]+$/
                }
              }}
            />
            <Input
              placeholder="ГГ"
              name="cardYear"
              value={value.cardYearHoney}
              onChange={(e) => changeValue(e, type, 'cardYearHoney')}
              pattern="[0-9]{2}"
              className={styles.Honeypot}
            />
          </div>
        )}
      </div>
      {type === 'holder' && (
        <div className={styles.SecureCard}>
          <Input
            size="xl"
            type="password"
            placeholder="CVV"
            name="cardCVVTrue"
            value={value.cardCVV}
            onChange={(e) => changeValue(e, type, 'cardCVV')}
            pattern="[0-9]{3}"
            voiceRecognition
            // virtualKeyBoard
            // onKeyDown={(e) => changeValue(e, type, 'cardCVV')}
            // inputMaskPattern={{
            //   "default": {
            //     mask: '111',
            //     regex: /^[0-9]+$/
            //   }
            // }}
          />
          <Input
            type="password"
            placeholder="CVV"
            name="cardCVV"
            value={value.cardCVVHoney}
            onChange={(e) => changeValue(e, type, 'cardCVVHoney')}
            pattern="[0-9]{3}"
            className={styles.Honeypot}
            />
        </div>
      )}
    </>
  );
};

export default Card;
