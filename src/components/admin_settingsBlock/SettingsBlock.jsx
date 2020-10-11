import React from "react";
import styles from "./SettingsBlock.module.scss";
import { Switch } from "../switch";

const SettingsBlock = () => {
  const rules = [
    {
      title: "Блокировка экрана при бездействии",
      description: "Описание настройки",
      isActive: true,
      id: 1,
    },
    {
      title: "Виртуальная клавиатура для ввода банковских данных",
      description: "Если оно вообще нужно",
      isActive: true,
      id: 2,
    },
    {
      title: "И еще одна",
      description: "Но можно и убрать",
      isActive: false,
      id: 3,
    },
  ];

  const handleChange = (id, value) => {
    console.log(id, value.target.value); // change toggle
  };
  return (
    <div className={styles.block}>
      {rules.map((rule) => (
        <div className={styles.rule}>
          <div>
            <h3 className={styles.title}>{rule.title}</h3>
            <div className={styles.description}>
              <span>{rule.description}</span>
            </div>
          </div>
          <Switch
            color="#1e4cd2"
            id={rule.id}
            isCheckedDefault={rule.isActive}
            onChange={(value) => handleChange(rule.id, value)}
            size="md"
          />
        </div>
      ))}
    </div>
  );
};

export default SettingsBlock;
