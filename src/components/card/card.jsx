import React from 'react';
import { Input } from '../input/index.ts';
import styles from './Card.module.scss';

const Card = ({ type = 'adressee', value, changeValue }) => {
  return (
    <>
      <div className={styles.Card}>
        <Input
          size="xl"
          type="text"
          placeholder="Введите данные карты"
          name="cardNumber"
          value={value.cardNumber}
          onChange={(e) => changeValue(e, type, 'cardNumber')}
          pattern="[0-9]{16}"
        />
        {type === 'holder' && (
          <div className={styles.CardInputRow}>
            <Input
              size="xl"
              className={styles.Input}
              type="text"
              placeholder="ММ"
              name="cardMonth"
              value={value.cardMonth}
              onChange={(e) => changeValue(e, type, 'cardMonth')}
              pattern="[0-9]{2}"
            />
            <Input
              size="xl"
              className={styles.Input}
              type="text"
              placeholder="ГГ"
              name="cardYear"
              value={value.cardYear}
              onChange={(e) => changeValue(e, type, 'cardYear')}
              pattern="[0-9]{2}"
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
          />
        </div>
      )}
    </>
  );
};

export default Card;
