import * as React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../colors';
import { NotariusLogo } from "../icon";

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
      color: #101c2d;
      padding: 1vw;
      margin-bottom: 1vw;
      margin-top: 1vw;
      border-radius: 12px;
      background-color: ${colors.BACKGROUND};
      text-decoration: none;

    
      &:hover, &:focus {
        color: ${colors.INFO};
      }
      
      span {
        margin-left: 0.5rem;
        font-family: SBSansInterface-Regular, serif;
      }
      &.${activeClassName} {
       span { 
        font-family: SBSansInterface-Semibold, serif;
       }
       color: ${colors.INFO};
       background-color: ${colors.WHITE};

     }
`;
const StyledContainer = styled.div`
  height: 100%;
  background-color: ${colors.BACKGROUND};
  padding: 1rem;
  position: relative;
  flex-basis: 20%;
`;

const StyledList = styled.ul`
  list-style: none;
  position: relative;
  padding: 0;
`;

const StyledListElement = styled.li`
  cursor: pointer;
`;

const StyledListItemLabel = styled.span`
    font-size: 1rem;
    white-space: nowrap;
    text-decoration: none;
`;
const StyledLogoContainer = styled.div`
  padding-left: 1vw;
  text-align: left;
`


export const SideMenu = ({ links = [] }: SideMenuProps) => {
  return (
    <StyledContainer>
        <StyledLogoContainer>
            <NotariusLogo />
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
