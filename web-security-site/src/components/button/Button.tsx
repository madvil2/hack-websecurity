import * as React from 'react';
import '../../fonts/fonts.css';
import styled from 'styled-components';
import colors from '../../colors';
import { LoadingOutline } from '../icon';

export enum buttonSize {
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl',
}

export enum buttonType {
  primary = 'primary',
  outlined = 'outlined',
  secondary = 'secondary',
  link = 'link',
}

export interface ButtonProps {
  block?: boolean;
  color?: string;
  textColor?: string;
  type?: 'primary' | 'outlined' | 'secondary' | 'link';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  isDisabled?: boolean;
  loading?: boolean;
  icon?: any;
  iconSize?: string;
  children?: any;
  onClick: ((event: React.FormEvent<HTMLButtonElement>) => void) | undefined;
  onKeyPress?: ((event: React.KeyboardEvent<HTMLButtonElement>) => void) | undefined;
}

export const Button: React.FC<ButtonProps> = ({
  block = false,
  color = colors.SUCCESS,
  textColor = colors.WHITE,
  type = 'primary',
  size = 'md',
  className = '',
  isDisabled = false,
  loading = false,
  icon,
  children,
  onClick = () => {},
  onKeyPress = () => {},
}) => {
  return (
    <DefaultButton
      block={block}
      color={color}
      textColor={textColor}
      type={type}
      size={size}
      className={className}
      isDisabled={isDisabled}
      disabled={isDisabled || loading}
      loading={loading ? 1 : 0}
      icon={icon}
      onClick={onClick}
      onKeyPress={onKeyPress}
    >
      {type !== buttonType.link && (icon || loading) && (
        <div className="icon">
          {loading ? <LoadingOutline /> : icon}
        </div>
      )}
      {children && <span>{children}</span>}
    </DefaultButton>
  );
};

const DefaultButton = styled.button<any>`
  position: relative;
  
  font-family: VTB, sans-serif;
  line-height: 1.5rem;
  text-align: center;
  outline: none;
  &:hover {
    cursor: pointer;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    &:hover {
      cursor: not-allowed;
    }
  }

  :empty {
    display: inline-block;
    width: 0;
    visibility: hidden;
    content: '\a0';
  }

  -webkit-box-sizing: border-box;
  box-sizing: border-box;

  ${(props) => {
    if (props.type === buttonType.link)
      return `text-decoration: none;
      background-color: transparent;
      padding: 0;
      border: 0;

      span:after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: ${props.color};
      }`;
    else
      return `
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      border-radius: 6px;
      box-shadow: 0 8px 16px -4px rgba(0, 0, 0, 0.12), 0 0 1px 0 rgba(0, 0, 0, 0.12);
      ${props.block ? `width: 100%;` : ''}`;
  }}

  ${(props) => {
    if (!props.isDisabled && !props.loading) {
      if (props.type === buttonType.link)
        return `&:hover span {
                color: #009fdf;
          -webkit-filter:brightness(80%);
          filter:brightness(80%);

          &:after {
            background-color: transparent;
          }
        }`;
      else if (props.type === buttonType.outlined)
        return `&:hover:after {
          opacity: 0.8;
        }
        
        &:active {
          color: ${colors.WHITE};
  
          .icon img {
            path { 
              fill: ${colors.WHITE};
            }
          }
  
          &:after {
            opacity: 1;
            border: 3px solid ${colors.WHITE};
            background-color: ${props.color};
          }
        }`;
    }
  }}

  ${(props) => {
    switch (props.type) {
      case buttonType.primary:
        return `background-color: ${props.color};
          color: ${props.textColor};
          
          ${
            !props.loading && !props.isDisabled
              ? `&:active {
            -webkit-filter:brightness(80%);
            filter:brightness(80%);
          }`
              : ''
          }`;
      case buttonType.secondary:
        return `background-color: ${props.color};
        color: ${props.textColor};
        
        ${
          !props.loading && !props.isDisabled
            ? `&:active {
          -webkit-filter:brightness(80%);
          filter:brightness(80%);
        }`
            : ''
        }`;
      case buttonType.outlined:
        return `background-color: ${props.color};
        color: ${props.color};
        
        &:after {
          content: '';
          position: absolute;
          left: 0px;
          right: 0px;
          top: 0px;
          bottom: 0px;
          background-color: ${colors.WHITE};
          border-radius: 21px;
          transition: opacity .2s linear;
        }`;
      case buttonType.link:
        return `color: ${props.color};`;
      default:
        return `background-color: ${props.color};
          color: ${props.textColor};
          ${
            !props.loading && !props.isDisabled
              ? `&:active {
            -webkit-filter:brightness(80%);
            filter:brightness(80%);
          }`
              : ''
          }`;
    }
  }}

  ${(props) => {
    switch (props.size) {
      case buttonSize.sm:
        return `gap: 3px;
          font-size: 0.65rem;
          height: 42px;
          @media screen and (min-width: 20rem) {
            font-size: calc(0.65rem + 0.2 * ((100vw - 20rem) / 60));
          }
          @media screen and (min-width: 80rem) {
            font-size: 1rem;
          }
          ${props.type !== buttonType.link ? `border: 2px solid ${props.color}; padding: 0rem 1rem;` : ''};`;
      case buttonSize.md:
        return `gap: 6px;
          font-size: 1rem;
          @media screen and (min-width: 20rem) {
            font-size: calc(1rem + 0.3 * ((100vw - 20rem) / 60));
          }
          @media screen and (min-width: 80rem) {
            font-size: 1.375rem;
          }
          ${props.type !== buttonType.link ? `border: 3px solid ${props.color}; padding: 0.4rem 2rem;` : ''}`;
      case buttonSize.lg:
        return `gap: 6px;
          font-size: 1.3rem;
          @media screen and (min-width: 20rem) {
            font-size: calc(1.3rem + 0.3 * ((100vw - 20rem) / 60));
          }
          @media screen and (min-width: 80rem) {
            font-size: 1.6rem;
          }
          ${props.type !== buttonType.link ? `border: 3px solid ${props.color}; padding: 0.5rem 2.5rem;` : ''}`;
      case buttonSize.xl:
        return `gap: 6px;
          font-size: 1.3rem;
          @media screen and (min-width: 20rem) {
            font-size: calc(1.3rem + 0.5 * ((100vw - 20rem) / 60));
          }
          @media screen and (min-width: 80rem) {
            font-size: 1.8rem;
          }
          ${props.type !== buttonType.link ? `border: 4px solid ${props.color}; padding: .5rem 3.5rem;` : ''}`;
      default:
        return `gap: 6px;
          font-size: 1rem;
          @media screen and (min-width: 20rem) {
            font-size: calc(1rem + 0.3 * ((100vw - 20rem) / 60));
          }
          @media screen and (min-width: 80rem) {
            font-size: 1.375rem;
          }
          ${props.type !== buttonType.link ? `border: 3px solid ${props.color}; padding: .4rem 2rem;` : ''}`;
    }
  }}

  .icon {
    position: relative;
    z-index: 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;

    ${(props) => {
      return props.iconSize !== undefined
        ? `width: ${props.iconSize}; height: ${props.iconSize};`
        : `width: 1em; height: 1em;`;
    }}

    img {
      width: 100%;
      height: 100%;
    }
  }

  span {
    position: relative;
    z-index: 1;
  }
`;
