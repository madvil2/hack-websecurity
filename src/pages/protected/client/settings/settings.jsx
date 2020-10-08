import React from 'react';
import HeaderDefault from '../../../../components/content/_parts/header';
import Body from '../../../../components/content/_parts/body';
import Content from '../../../../components/content';
import styles from './settings.module.scss';
import { Switch } from '../../../../components/switch';
import { Input } from '../../../../components/input';
import { Button } from '../../../../components/button';

const SettingsPage = () => {
  return (
    <Content>
      <HeaderDefault header="Настройки" />
      <Body>
        <div className={styles.container}>
          <p className={styles.header}>Персональные</p>
          <div className={styles.line}>
            <p className={styles.label}>Уведомления по смс</p>
              <Switch isCheckedDefault color='#5AB0FF' />
          </div>
          <div className={styles.line}>
            <p className={styles.label}>Ведомство по умолчанию</p>
            <div className={styles.setContainer}>
              <Input size='xl'   variant="flushed" value='Москва, Нагатинская, 35 к2'/>
            </div>
            <div className={styles.setContainer}/>
            <div className={styles.btnContainer}>
              <Button
                size='sm'
                color={'#F2F3F6'}
                textColor={'#000'}
              >
                Изменить
              </Button>
            </div>
          </div>
          <p className={styles.header}>Безопасность</p>
          <div className={styles.line}>
            <p className={styles.label}>Номер телефона</p>
            <div className={styles.setContainer}>
              <Input size='xl'   variant="flushed" value='89198337223'/>
            </div>
            <div className={styles.setContainer}>
              <Input size='xl'   variant="flushed" placeholder='Код из СМС'/>
            </div>
            <div className={styles.btnContainer}>
              <Button
                size='sm'
                color={'#F2F3F6'}
                textColor={'#000'}
              >
                Изменить
              </Button>
            </div>
          </div>
          <div className={styles.line}>
            <p className={styles.label}>Банковская карта</p>
            <div className={styles.setContainer}>
              <Input size='xl'   variant="flushed" value='*7223'/>
            </div>
            <div className={styles.setContainer} />
            <div className={styles.btnContainer}>
              <Button
                size='sm'
                color={'#F2F3F6'}
                textColor={'#000'}
              >
                Изменить
              </Button>
            </div>
          </div>
          <div className={styles.line}>
            <p className={styles.label}>Смена пароля</p>
            <div className={styles.setContainer}>
              <Input size='xl'   variant="flushed" placeholder='Старый пароль' type='password' />
            </div>
            <div className={styles.setContainer}>
              <Input size='xl'   variant="flushed" placeholder='Новый пароль' type='password' />
            </div>
            <div className={styles.btnContainer}>
              <Button
                size='sm'
                color={'#F2F3F6'}
                textColor={'#000'}
              >
                Изменить
              </Button>
            </div>
          </div>
        </div>
      </Body>
    </Content>
  );
};

export default SettingsPage;
