import * as React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../colors';
import logo from '../../assets/VTB_logo.svg';

export interface SideMenuProps {
  links: any[],
}

const DefaultNavLink = ({ route, className }: any) => {
  const match = useRouteMatch(route);
  const { label = '', path, icon = null, iconActive = null } = route;
  return (
    <>
      <NavLink
        className={className}
        exact
        to={path}
        isActive={() => !!match}
      >
        {match ? iconActive : icon}
        <StyledListItemLabel>{label}</StyledListItemLabel>
      </NavLink>
    </>);
}

const activeClassName = 'active'
const StyledNavLink = styled(DefaultNavLink)
  .attrs({ activeClassName })
  `
      display: flex;
      align-items: center;
      padding: 1vw 0;
      margin-right: 1vw;
      background-color: ${colors.BACKGROUND};
      text-decoration: none;
      color: #0af;
      margin-bottom: 2px;

    
      &:hover, &:focus {
        color: ${colors.INFO};
      }
      
      span {
        font-family: VTB, serif;
      }
      &.${activeClassName} {
       span { 
        font-family: VTB, serif;
       }
       color: ${colors.INFO};
       border-bottom: 2px solid #0a2896;
       margin-bottom: 0;
     }
`;
const StyledContainer = styled.div`
  background-color: ${colors.BACKGROUND};
  padding: 1rem;
  position: relative;
  flex-basis: 20%;
  display: flex;
  height: 90px;
  max-height: 90px;
`;

const StyledList = styled.ul`
  list-style: none;
  position: relative;
  padding: 0;
  display: flex;
  margin: 0 20px;
`;

const StyledListElement = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const StyledListItemLabel = styled.span`
    font-size: 1rem;
    white-space: nowrap;
    text-decoration: none;
`;
const StyledLogoContainer = styled.div`
  padding-left: 1vw;
  text-align: left;
  display: flex;
  align-items: center;
  margin-right: 2vw;
`


export const SideMenu = ({ links = [] }: SideMenuProps) => {
  return (
    <StyledContainer>
        <StyledLogoContainer>
            <img src={logo} />
        </StyledLogoContainer>
        <StyledList>
        {links.map((item) => {
          return (
            <StyledListElement key={item.path}>
              <StyledNavLink key={item.path} route={item}/>
            </StyledListElement>)
        })}
      </StyledList>
    </StyledContainer>
  );
}
