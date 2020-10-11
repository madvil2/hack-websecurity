import React from 'react';
import styles from './SettingsBlock.module.scss';
import { Switch } from 'antd';
import TextField from '@material-ui/core/TextField';
import { Button } from '../button/index.ts';
import cx from 'classnames';

const SettingsBlock = () => {
  const [rules, setRules] = React.useState([
    {
      id: 1,
      control: 'input',
      name: 'hash_build',
      title: 'Hash build',
      description: 'Сверка hash build с тем, что на сервере',
      value: '',
    },
    {
      id: 2,
      control: 'switch',
      name: 'non_active_blocking',
      title: 'Блокировка экрана при бездействии',
      description: '',
      value: false,
    },
    {
      id: 3,
      control: 'switch',
      name: 'virtual_keyboard',
      title: 'Виртуальная клавиатура для password инпутов',
      description: '',
      value: false,
    },
    {
      id: 4,
      control: 'switch',
      name: 'face_id_recognition',
      title: 'Блокировка экрана, если распознали больше 1 лица',
      description: '',
      value: false,
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

  const sendData = () => {
    let req = {};
    rules.map((item) => {
      req[item.name] = item.value;
      return item;
    });
    console.log(req);
    fetch('http://79.174.13.148/api/v1/settings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req),
    });
  };

  const handlerChange = (e, id) => {
    setRules(
      rules.map((item, index) => {
        if (id === index) {
          item.value = item.control === 'switch' ? !item.value : e.target.value;
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
          {rule.control === 'switch' ? (
            <Switch
              className={cx(styles.SwitchStyle, {
                [styles.SwitchStyleChecked]: rule.value,
              })}
              onChange={(e) => handlerChange(e, index)}
              checked={rule.value}
              name={rule.name}
            />
          ) : (
            <TextField
              id="outlined-basic"
              label="Hash"
              variant="outlined"
              size="md"
              name="hash_build"
              onChange={(e) => handlerChange(e, index)}
              value={rule.value}
            />
          )}
        </div>
      ))}
      <div className={styles.actionRow}>
        <Button onClick={sendData} className={styles.Button}>
          Сохранить настройки
        </Button>
      </div>
    </div>
  );
};

export default SettingsBlock;
