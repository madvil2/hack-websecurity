import React from 'react';
import { Input } from '../input/index.ts';
import styles from './Card.module.scss';

const Card = ({ type = 'owner' }) => {
  return (
    <>
      <div className={styles.Card}>
        <Input
          size="xl"
          type="text"
          placeholder="Введите данные карты"
          name="card_number"
        />
        {type === 'holder' && (
          <div className={styles.CardInputRow}>
            <Input
              size="xl"
              className={styles.Input}
              type="text"
              placeholder="ММ"
              name="month"
            />
            <Input
              size="xl"
              className={styles.Input}
              type="text"
              placeholder="ГГ"
              name="year"
            />
          </div>
        )}
      </div>
      {type === 'holder' && (
        <div className={styles.SecureCard}>
          <Input size="xl" type="text" placeholder="CVV" name="cvv_number" />
        </div>
      )}
    </>
  );
};

export default Card;
