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
          name="cardNumber"
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
        {type === 'holder' && (
          <div className={styles.CardInputRow}>
            <Input
              size="xl"
              type="text"
              placeholder="ММ"
              name="cardMonth"
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
              size="xl"
              type="text"
              placeholder="ГГ"
              name="cardYear"
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
          </div>
        )}
      </div>
      {type === 'holder' && (
        <div className={styles.SecureCard}>
          <Input
            size="xl"
            type="password"
            placeholder="CVV"
            name="cardCVV"
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
        </div>
      )}
    </>
  );
};

export default Card;
