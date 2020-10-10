import React, { useState } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { SideMenu } from '../../components/sideMenu';
import routes from './routes';
import history from '../../history';
import styled from 'styled-components';
import colors from '../../colors';
import checkFace from '../../components/checkFace/checkFace';
import P5Wrapper from 'react-p5-wrapper';
import styles from './skeleton.module.scss';
import cx from 'classnames';
import Footer from '../../components/footer'

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
  return (
    <BrowserRouter history={history}>
      <div className={cx({[styles.blur_container]: countPerson !== 1})} />
      <StyledMainContainer>
        <div style={{ display: 'none' }}>
          {/*<P5Wrapper sketch={(p) => checkFace(p, setCountPerson)} />*/}
        </div>
        <SideMenu links={links()}  />
        <StyledScrollContainer>
          <StyledContentContainer>
            <Switch>
              {Object.values(routes).map((route) => (
                <Route
                  key={route.path}
                  exact
                  path={route.path}
                  component={route.component}
                />
              ))}
            </Switch>
          </StyledContentContainer>
          <Footer />
        </StyledScrollContainer>
      </StyledMainContainer>
    </BrowserRouter>
  );
}

export default Skeleton;
