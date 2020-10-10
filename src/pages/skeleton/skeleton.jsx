import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { SideMenu } from '../../components/sideMenu';
import routes from './routes';
import history from '../../history';
import styled from 'styled-components';
import colors from '../../colors';
import checkFace from '../../components/checkFace/checkFace';
import P5Wrapper from 'react-p5-wrapper';
import styles from './skeleton.module.scss';
import cx from 'classnames';
import Footer from '../../components/footer';
import Widget from '../../components/widget';
import toAPI from '../../services/toAPI.js';
import Modal from '../../components/modal';
import { Input } from '../../components/input';

const StyledMainContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
`;
const StyledContentContainer = styled.div`
  display: flex;
  flex: 1;
  flex-basis: 80%;
  // height: 100%;
  padding: 1vw 1vw 0;
  border-radius: 1rem;
  background-color: ${colors.BACKGROUND};
`;
const StyledScrollContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  overflow: scroll;
`;

const links = () => {
  return [
    {
      label: 'Мои продукты',
      path: '/products',
      key: '/products',
    },
    {
      label: 'Переводы',
      path: '/transaction',
      key: '/transaction',
    },
    {
      label: 'Настройки',
      path: '/settings',
      key: '/settings',
    },
  ];
};

const Skeleton = () => {
  const [countPerson, setCountPerson] = useState(1);
  const [checkFaceW, setCheckFaceW] = useState(true);
  const [userInfo, setUserInfo] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const fetchData = async (fingerprint) => {
    const data = await toAPI.getUserInfo(fingerprint);
    if (data && data !== 403) {
      setUserInfo(data);
    } if (data && data === 403) {
      setIsOpen(true);
    }
  };
  useEffect(() => {
      fetchData(window.PX.settings.fingerprint);
  }, [window.PX.settings.fingerprint]);

  const [code, setCode] = useState('');
  useEffect(() => console.log(countPerson), [countPerson]);
  const sendCode = async () => {
    const data = await toAPI.sendCode(code);
    if (data) {
      setIsOpen(false);
      setUserInfo(data);
    }
  };
  return (
    <BrowserRouter history={history}>
      <Modal
        visible={isOpen}
        title="Внимание!"
        onOk={sendCode}
         onCancel={() => {}}
      >
        <p className={styles.text_modal}>
          Похоже кто-то пытается выдать себя за вас, введите код безопасности чтобы мы убедились что все хорошо!
        </p>
        <div style={{ marginBottom: '32px' }}>
          <Input
            value={code}
            onChange={setCode}
            placeholder="Введите код безопасности"
            size='xl'
            type='password'
          />
        </div>
      </Modal>
      <div className={cx({ [styles.blur_container]: countPerson !== 1 })}>
      <StyledMainContainer>
        <div style={{ display: 'none' }}>
          {checkFaceW && <P5Wrapper sketch={(p) => checkFace(p, setCountPerson)} /> }
        </div>
        <SideMenu links={links()} />
        <StyledScrollContainer>
          <StyledContentContainer>
            <Switch>
              {Object.values(routes).map((route) => (
                <Route
                  key={route.path}
                  exact
                  path={route.path}
                  component={() => route.component(userInfo)}
                />
              ))}
            </Switch>
            <Widget type={'success'} checkFace={checkFaceW} setCheckFace={setCheckFaceW} />
          </StyledContentContainer>
          <Footer />
        </StyledScrollContainer>
      </StyledMainContainer>
      </div>
    </BrowserRouter>
  );
};

export default Skeleton;
