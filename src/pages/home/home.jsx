import React from "react";
import cx from "classnames";
import styles from "./home.module.scss";

const Home = ({ cards }) => {
  // const cards = [
  //   {
  //     id: 0,
  //     number: "*8909",
  //     money: 12343,
  //     type: "debit",
  //   },
  //   {
  //     id: 1,
  //     number: "*8509",
  //     money: 123,
  //     type: "debit",
  //   },
  //   {
  //     id: 2,
  //     number: "*8505",
  //     money: 16543,
  //     type: "credit",
  //   },
  // ];
  return (
    <div className={styles.container}>
      <div className={styles.info_container}>
        <div className={styles.money_container}>
          <div className={styles.money}>
            <p className={styles.money_header}>Собственные средства</p>
            <p className={styles.money_count}>45678 ₽</p>
          </div>
          <div className={styles.money}>
            <p className={styles.money_header}>Всего</p>
            <p className={styles.money_count}>45678 ₽</p>
          </div>
        </div>
        <div className={styles.card_container}>
          {cards && cards.map((card) => (
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
              <p className={styles.money_header}>{`*${card.number.slice(-4)}`}</p>
              <p className={styles.money_count}>{`${card.balance} ₽`}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
