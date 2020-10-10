import React from "react";
import cx from "classnames";
import styles from "./home.module.scss";

const Home = (userInfo) => {
  const summ = (arr) => {
    let sum = 0;
    arr.forEach(el => sum = sum + el.balance);
    return sum;
  };
  return (
    <div className={styles.container}>
      {userInfo && <div className={styles.info_container}>
        <div className={styles.money_container}>
          <div className={styles.money}>
            <p className={styles.money_header}>Собственные средства</p>
            <p
              className={styles.money_count}>{`${userInfo.cards ? summ(userInfo.cards.filter(card => card.type !== 'credit')) : 0} ₽`}</p>
          </div>
          <div className={styles.money}>
            <p className={styles.money_header}>Всего</p>
            <p className={styles.money_count}>{`${userInfo.cards ? summ(userInfo.cards) : 0} ₽`}</p>
          </div>
        </div>
        <div className={styles.card_container}>
          {userInfo && userInfo.cards && userInfo.cards.map((card) => (
            <div
              key={card.id}
              className={cx({
                [styles.card]: true,
                [styles.credit_card]: card.type === "credit",
                [styles.debit_card]: card.type === "debit",
              })}
            >
              <p className={styles.money_header}>
                {card.type === "credit" ? "Кредитная карта" : "Дебетовая карта"}
              </p>
              <p className={styles.money_header}>{`*${card.number.toString().slice(-4)}`}</p>
              <p className={styles.money_count}>{`${card.balance} ₽`}</p>
            </div>
          ))}
        </div>
      </div>
      }
    </div>
  );
};

export default Home;
