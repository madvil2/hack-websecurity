import React from "react";
import styles from "./SettingsBlock.module.scss";
import { Switch } from "../switch";

const SettingsBlock = () => {
  const rules = [
    {
      title: "Настройка чего-то",
      description: "Описание настройки",
      isActive: false,
      id: 1,
    },
    {
      title: "Еще какая-то настройка",
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
          <div className={styles.title}>
            <h3>{rule.title}</h3>
            <div className={styles.description}>
              <span>{rule.description}</span>
            </div>
          </div>
          <Switch
            color="#1e4cd2"
            id={rule.id}
            isCheckedDefault={rule.isActive}
            onChange={(value) => handleChange(rule.id, value)}
            size="lg"
          />
        </div>
      ))}
    </div>
  );
};

export default SettingsBlock;
