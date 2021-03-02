import * as React from 'react';
import styled from 'styled-components';
import { FC } from 'react';
import colors from '../../colors';

const radio = 'radio';

export enum RadioSize {
  sm = 'sm',
  md = 'md',
  lg = 'lg',
}

export type LabelType = {
  disabled: boolean,
  size: 'sm' | 'md' | 'lg',
};

export type InputType = {
  size: any
  color: string
  disabled: boolean
}

export interface RadioProps {
  checked?: boolean,
  disabled?: boolean,
  color?: string,
  id?: string,
  size?: 'sm' | 'md' | 'lg',
  label?: string,
  className?: string,
  name?: string,
  children?: any,
  value?: string,
}

const DefaultRadio: FC<RadioProps> = ({children = '',
                                        disabled = false,
                                        checked = false,
                                        color = colors.SUCCESS,
                                        size = 'md',
                                        id = '',
                                        value = '',
                                        className = '',
                                        name = '',
                                      }) => {
  return (
    <RadioContainer
      key={value} className={className}>
      <InputRadio
        size={size}
        id={id}
        color={color}
        type={radio}
        name={name}
        value={value}
        disabled={disabled}
        defaultChecked={checked}
      />
      <RadioLabel   size={size} disabled={disabled} htmlFor={id}>{(children === '') ? value : children}</RadioLabel>
    </RadioContainer>
  );
};

const RadioContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-item: center;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 10px;`;

const RadioLabel = styled.label<LabelType>`
    opacity: ${p => p.disabled ? '0.5' : '1'};
    cursor: ${p => p.disabled ? 'not-allowed' : 'pointer'};
font-size:
${({ size }) => {
  switch (size) {
    case RadioSize.sm: {
      return '12px';
    }
    case RadioSize.md: {
      return '14px';
    }
    case RadioSize.lg: {
      return '18px';
    }
  }
}
};`

export const Radio = styled(DefaultRadio)`
    font-family: SBSansInterface-Regular;
    line-height: 18px;`;

const InputRadio = styled.input<InputType>`
  border-size: border-box;
  cursor: ${p => p.disabled ? 'not-allowed' : 'pointer'};
  position: relative;
  margin: 0 10px 0 0;
   ${(p) => {
  switch (p.size) {
    case RadioSize.sm:
      return `height: 16px; width: 16px;`;
    case RadioSize.md:
      return `height: 18px; width: 18px;`;
    case RadioSize.lg:
      return `height: 20px; width: 20px;`;
  };
}}
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  
  &:checked::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
   ${(p) => {
  switch (p.size) {
    case RadioSize.sm:
      return `height: 10px; width: 10px;`;
    case RadioSize.md:
      return `height: 12px; width: 12px;`;
    case RadioSize.lg:
      return `height: 14px; width: 14px;`;
  };
}}
  border-radius: 50%;
  background-color: white;
  border: 3px solid  ${p => p.color};
  opacity: ${p => p.disabled ? '0.5' : '1'};
}
&::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
   ${(p) => {
  switch (p.size) {
    case RadioSize.sm:
      return `height: 13px; width: 13px;`;
    case RadioSize.md:
      return `height: 15px; width: 15px;`;
    case RadioSize.lg:
      return `height: 17px; width: 17px;`;
  };
}}
  border-radius: 50%;
  transform: translate(-50%, -50%);
  border: 1.5px solid ${colors.BLACK200};
}
&:checked::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
   ${(p) => {
  switch (p.size) {
    case RadioSize.sm:
      return `height: 6px; width: 6px;`;
    case RadioSize.md:
      return `height: 8px; width: 8px;`;
    case RadioSize.lg:
      return `height: 10px; width: 10px;`;
  };
}}
  border-radius: 50%;
  background-color: ${p => p.color};
  opacity: ${p => p.disabled ? '0.5' : '1'};
  transform: translate(-50%, -50%);
  visibility: visible;
}`;