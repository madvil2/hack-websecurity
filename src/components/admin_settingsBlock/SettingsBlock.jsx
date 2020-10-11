import React from 'react';
import styles from './SettingsBlock.module.scss';
import { Switch } from 'antd';
import cx from 'classnames';

const SettingsBlock = () => {
  const [rules, setRules] = React.useState([
    {
      title: 'Hash build',
      description: 'Сверка hash build с тем, что на сервере',
      isActive: false,
      id: 1,
    },
  ]);

  React.useEffect(() => {
    if (rules[0].isActive) {
      getHash();
    }
  }, [rules]);

  const getHash = () => {
    fetch('http://79.174.13.148/api/v1/settings')
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const handlerChange = (id) => {
    setRules(
      rules.map((item) => {
        if (item.id === id) {
          item.isActive = !item.isActive;
        }
        return item;
      })
    ); // change toggle
  };

  return (
    <div className={styles.block}>
      {rules.map((rule, index) => (
        <div key={index} className={styles.rule}>
          <div>
            <h3 className={styles.title}>{rule.title}</h3>
            <div className={styles.description}>
              <span>{rule.description}</span>
            </div>
          </div>
          <Switch
            className={cx(styles.SwitchStyle, {
              [styles.SwitchStyleChecked]: rule.isActive,
            })}
            id={rule.id}
            onChange={() => handlerChange(rule.id)}
            checked={rule.isActive}
          />
        </div>
      ))}
    </div>
  );
};

export default SettingsBlock;
