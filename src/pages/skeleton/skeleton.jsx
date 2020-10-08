import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { SideMenu } from '../../components/sideMenu';
import routes from './routes';
import history from '../../history';
import styled from 'styled-components';
import {HomeOutline, ListOutline, SettingsOutline} from '../../components/icon';
import colors from '../../colors';

const StyledMainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const StyledContentContainer = styled.div`
display: flex;
flex: 1;
flex-basis: 80%;
height: 100%;
padding-top: 1vw;
padding-right: 1vw;
padding-bottom: 1vw;
border-radius: 1rem;
background-color: ${colors.BACKGROUND};
`;

const links = () => {
  const role = localStorage.getItem('role');
  return [
    {
      label: role === 'client' ? 'Мои заявки' : 'Мои задачи',
      path: '/statuses',
      key: '/statuses',
      icon: <HomeOutline/>,
      iconActive: <HomeOutline color={colors.INFO}/>
    },
    {
      label: 'Каталог услуг',
      path: '/services',
      key: '/services',
      icon: <ListOutline/>,
      iconActive: <ListOutline color={colors.INFO}/>
    },
    {
      label: 'Настройки',
      path: '/settings',
      key: '/settings',
      icon: <SettingsOutline/>,
      iconActive: <SettingsOutline color={colors.INFO}/>
    },
  ];
}

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
