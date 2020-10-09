import React, { useState, useEffect, useCallback } from 'react';
import '../../fonts/fonts.css';
import styled from 'styled-components';
import colors from '../../colors';
import { controlSize } from '../../sizes';
import { controlVariant } from '../../variants';

export interface InputProps {
  name?: string;
  label?: string;
  ariaLabel?: string;
  ariaDescribedby?: string;
  className?: string;
  placeholder?: string;
  value?: string;
  onChange?: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
  onBlur?: ((event: React.FormEvent<HTMLInputElement>) => void) | undefined;
  onFocus?: ((event: React.FormEvent<HTMLInputElement>) => void) | undefined;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  type?: 'text' | 'number';
  variant?: 'outline' | 'flushed';
  isDisabled?: boolean;
  propRef?: any;
  tabIndex?: number;
  isReadOnly?: boolean;
  isInvalid?: boolean;
  isFocused?: boolean;
  isRequired?: boolean;
  pattern?: string;
}

const DefaultInput = ({
  name = '',
  label = '',
  ariaLabel = '',
  ariaDescribedby = '',
  value = '',
  placeholder = 'Заполните поле',
  className = '',
  onChange = () => {
    /**/
  },
  onBlur,
  propRef = null,
  onFocus,
  size = 'md',
  type = 'text',
  variant = 'outline',
  isDisabled = false,
  isReadOnly = false,
  isInvalid = false,
  isFocused = false,
  isRequired = false,
  pattern = '',
}: InputProps) => {
  return (
    <InputContainer>
      {label && <InputLabel>{label}</InputLabel>}
      <input
        ref={propRef}
        tabIndex={0}
        spellCheck
        name={name}
        className={className}
        type={type}
        placeholder={placeholder}
        value={value}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={(e) => onChange(e)}
        disabled={isDisabled}
        aria-label={ariaLabel}
        aria-describedby={ariaDescribedby}
        readOnly={isReadOnly}
        aria-invalid={isInvalid}
        required={isRequired}
        pattern={pattern}
      />
    </InputContainer>
  );
};

const InputContainer = styled.div`
  display: flex;
  width: -webkit-fill-available;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const InputLabel = styled.label`
  color: ${colors.BLACK400};
  margin: 8px 0 8px 0;
  text-transform: uppercase;
  font-family: SBSansInterface-Semibold;
  font-size: 0.575rem;

  @media screen and (min-width: 20rem) {
    font-size: calc(0.575rem + 0.5 * ((100vw - 20rem) / 60));
  }

  @media screen and (min-width: 80rem) {
    font-size: 1.075rem;
  }
`;

export const Input = styled(DefaultInput)`
  color: ${colors.BLACK};
  outline: none;
  padding: 1rem;
  box-sizing: border-box;
  transition: border-color 0.6s linear;
  font-family: SBSansInterface-Regular;
  &::placeholder {
    color: ${colors.BLACK200};
    font-family: SBSansInterface-Regular;
  }

  font-size: 0.875rem;

  @media screen and (min-width: 20rem) {
    font-size: calc(0.875rem + 0.5 * ((100vw - 20rem) / 60));
  }

  @media screen and (min-width: 80rem) {
    font-size: 1.375rem;
  }

  width: ${({ size }) => {
    switch (size) {
      case controlSize.sm: {
        return '25%';
      }
      case controlSize.md: {
        return '33%';
      }
      case controlSize.lg: {
        return '50%';
      }
      case controlSize.xl: {
        return '100%';
      }
    }
  }};

  ${({ isReadOnly }) =>
    isReadOnly &&
    `
      &:hover {
        cursor: default;
      }
    `}

  border-radius: 6px;
  border: 2px solid ${colors.BLACK100};
  &:focus {
    border: 2px solid #00a0e3;
  }
  ${({ variant }) =>
    variant === controlVariant.flushed
      ? `
       border-width: 0 0 2px 0;
       border-color: ${colors.BLACK100};
       border-radius: 0px;
       padding-left: 0;
       &:focus {
        border-width: 0 0 2px 0;
        border-color: #00a0e3;
       }
       &:invalid {
        border-width: 0 0 2px 0;
        border-color: ${colors.ERROR};
       }
       `
      : `
          &:invalid {
            border: 2px solid ${colors.ERROR};
          }
   `}
  &:disabled {
    border-radius: 6px;
    background-color: ${({ isReadOnly }) =>
      !isReadOnly && `${colors.BACKGROUND}`};
    color: ${colors.BLACK};
  }
  ${({ isFocused, isDisabled }) =>
    !isDisabled &&
    isFocused &&
    `
      border-color: #00a0e3 !important;
    `}
`;
