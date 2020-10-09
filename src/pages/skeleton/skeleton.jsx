import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { SideMenu } from '../../components/sideMenu';
import routes from './routes';
import history from '../../history';
import styled from 'styled-components';
import colors from '../../colors';

const StyledMainContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
`;
const StyledContentContainer = styled.div`
display: flex;
flex: 1;
flex-basis: 80%;
height: 100%;
padding: 1vw;
border-radius: 1rem;
background-color: ${colors.BACKGROUND};
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
      path: '/pays',
      key: '/pays',
    },
    {
      label: 'Настройки',
      path: '/settings',
      key: '/settings',
    },
  ];
};

const Skeleton = () => (
  <BrowserRouter history={history}>
      <StyledMainContainer>
        <SideMenu links={links()}  />
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
      </StyledMainContainer>
  </BrowserRouter>
);

export default Skeleton;
