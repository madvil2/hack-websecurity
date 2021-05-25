import * as React from 'react';
import '../../fonts/fonts.css';
import styled from 'styled-components';
import colors from '../../colors';
import { controlSize } from '../../sizes';
import { controlVariant } from '../../variants';
import { useOutsideAlerter } from '../../utils/useOutsideAlerter';
import {ArrowDown, ArrowUp} from "../icon";
const { useState, useEffect, useRef } = React;

interface SelectOption {
  key: string | number;
  value: string;
}

export interface SelectProps {
  name?: string;
  label?: string;
  ariaLabel?: string;
  ariaDescribedby?: string;
  className?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onBlur?: ((event: React.FormEvent<HTMLElement>) => void) | undefined;
  onFocus?: ((event: React.FormEvent<HTMLElement>) => void) | undefined;
  onSelect?: ((event: React.FormEvent<HTMLElement>, item: SelectOption) => void) | undefined;
  onChange?: ((event: React.FormEvent<HTMLElement>) => void) | undefined;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'outline' | 'flushed';
  tabIndex?: number;
  isDisabled?: boolean;
  isInvalid?: boolean;
  isRequired?: boolean;
  isFocused?: boolean;
  children?: any;
  options?: SelectOption[];
}

const DefaultSelect = ({
  name = '',
  label = '',
  ariaLabel = '',
  ariaDescribedby = '',
  value = '',
  placeholder = 'Выберите значение',
  className = '',
  onBlur = () => {
    /**/
  },
  onFocus = () => {
    /**/
  },
  onSelect = () => {
    /**/
  },
  size = 'md',
  variant = 'outline',
  isDisabled = false,
  isInvalid = false,
  isRequired = false,
  options = [],
}: SelectProps) => {
  const getSelectedItem = () => {
    const arr = options.filter((option) => option.value === value);
    if (arr.length === 1) {
      return arr[0].key;
    } else {
      return null;
    }
  };

  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({
    key: getSelectedItem(),
    value,
  });
  const [focusedItem, setFocusedItem] = useState(selectedItem);

  const handleKeys = (event: KeyboardEvent) => {
    const keyCode = event.code;
    if (keyCode === 'Enter' || keyCode === 'Space') {
      if (focusedItem.key) {
        setSelectedItem(focusedItem);
        setIsOptionsOpen(false);
      }
    }
    if (keyCode === 'Escape') {
      setIsOptionsOpen(false);
    }
    setFocusedItem({ key: null, value: '' });
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeys);
    return () => {
      window.removeEventListener('keydown', handleKeys);
    };
  }, [focusedItem, handleKeys]);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current !== null) {
      if (isOptionsOpen) {
        inputRef.current.focus();
      } else {
        inputRef.current.blur();
      }
    }
  }, [isOptionsOpen]);

  useOutsideAlerter(inputRef, () => setIsOptionsOpen(false));

  return (
    <SelectContainer>
      {label && <SelectLabel>{label}</SelectLabel>}
      <SelectInput
        isFocused={isOptionsOpen}
        defaultValue={selectedItem.value}
        ref={inputRef}
        tabIndex={1}
        className={className}
        onBlur={onBlur}
        onFocus={(e: any) => {
          if (!isDisabled) {
            onFocus(e);
            setIsOptionsOpen(true);
          }
        }}
        isInvalid={isInvalid}
        isDisabled={isDisabled}
      >
        <span>{selectedItem.value ? selectedItem.value : placeholder}</span>
      </SelectInput>
      {options && options.length > 0 && isOptionsOpen && (
        <SelectOptionsContainer size={size}>
          {options.map((item: SelectOption, index) => (
            <SelectOptionsElement
              id={`${item.key}`}
              onFocus={() => {
                setFocusedItem(item);
              }}
              tabIndex={index + 2}
              onClick={(e) => {
                onSelect(e, item);
                setSelectedItem(item);
                setIsOptionsOpen(false);
              }}
              selected={item.key === selectedItem.key}
              key={item.key}
            >
              {item.value}
            </SelectOptionsElement>
          ))}
        </SelectOptionsContainer>
      )}
      {options && options.length === 0 && isOptionsOpen && (
        <SelectEmptyOptions size={size}>
          <SelectLabel>Нет данных</SelectLabel>
        </SelectEmptyOptions>
      )}
    </SelectContainer>
  );
};

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  user-select: none;
`;

const EmptyDiv = ({
  className,
  children,
  onClick,
  onFocus,
  tabIndex,
  size,
  id,
  ...props
}: {
  className?: string;
  onClick?: ((event: React.FormEvent<HTMLElement>) => void) | undefined;
  onFocus?: ((event: React.FormEvent<HTMLElement>) => void) | undefined;
  children: any;
  tabIndex?: number;
  id?: string;
  size?: string;
  props?: any;
}) => (
  <div {...props} id={id} onFocus={onFocus} tabIndex={tabIndex} onClick={onClick} className={className}>
    {children}
  </div>
);

const SelectOptionsElement = styled(EmptyDiv)`
  display: flex;
  width: 100%;
  z-index: 1;
  justify-content: flex-start;
  align-items: center;
  padding: 0.5rem 1rem;
  box-sizing: border-box;
  color: ${colors.BLACK};
  font-family: SBSansInterface-Regular;
  font-size: 0.475rem;

  @media screen and (min-width: 20rem) {
    font-size: calc(0.475rem + 0.5 * ((100vw - 20rem) / 60));
  }

  @media screen and (min-width: 80rem) {
    font-size: 1rem;
  }
  &:hover {
    background-color: ${colors.BACKGROUND};
  }
  &:active {
    background-color: ${colors.BACKGROUND};
    outline: none;
  }
  &:focus {
    background-color: ${colors.BACKGROUND};
    outline: none;
  }
  background-color: ${({ selected }: { selected: boolean }) => (selected ? `${colors.BACKGROUND}` : `${colors.WHITE}`)};
`;

const SelectEmptyOptions = styled(EmptyDiv)`
  display: flex;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  box-sizing: border-box;
  background-color: ${colors.WHITE};
  justify-content: center;
  align-items: center;
  padding: 1rem;
  z-index: 1;
  border-radius: 8px;
  box-shadow: 0 8px 16px -4px rgba(0, 0, 0, 0.12), 0 0 1px 0 rgba(0, 0, 0, 0.12);

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
`;

const SelectOptionsContainer = styled(EmptyDiv)`
  display: flex;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${colors.WHITE};
  padding: 1rem 0;
  overflow: scroll;
  border-radius: 8px;
  box-shadow: 0 8px 16px -4px rgba(0, 0, 0, 0.12), 0 0 1px 0 rgba(0, 0, 0, 0.12);
  z-index: 2;
  max-height: 10rem;
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
`;

const SelectLabel = styled.label`
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

export const Select = styled(DefaultSelect)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  outline: none;
  width: ${({size}) => {
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
    default: {
      return '75%'
    }
  }
}};
  box-sizing: border-box;
  padding: 16px 22px 16px 16px;
  //background: url(../../assets/ic-list-down.svg) no-repeat scroll right;

  -webkit-transition: border-color 0.6s linear;
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

  border-radius: 6px;
  border: 2px solid ${colors.BLACK100};

  ${({variant}) =>
    variant === controlVariant.flushed
        ? `
         border-width: 0 0 2px 0;
         border-color: ${colors.BLACK100};
         border-radius: 0px;
         padding-left: 0;

        `
        : `
        border-width: 2px;
        `}

  ${({isDisabled}) =>
    isDisabled &&
    `
  border-radius: 6px;
  background-color: ${colors.BACKGROUND};
  color: ${colors.BLACK};
  `}
`;

const SelectInputComponent = React.forwardRef(
  (
    { isFocused, defaultValue, tabIndex, className, onBlur, onFocus, isDisabled, children, isInvalid }: SelectProps,
    ref: any,
  ) => (
    <div
      data-focused={isFocused}
      defaultValue={defaultValue}
      ref={ref}
      tabIndex={tabIndex}
      className={className}
      onBlur={onBlur}
      onFocus={onFocus}
      aria-disabled={isDisabled}
    >
      {children}
      {isFocused ? <ArrowUp color={colors.SUCCESS} /> : <ArrowDown />}
    </div>
  ),
);

const SelectInput = styled(SelectInputComponent)`
  ${({ isInvalid, defaultValue, isDisabled }) =>
    isInvalid && !defaultValue && !isDisabled &&
    `
    border-color: ${colors.ERROR};
  `}
  ${({ isDisabled, isFocused }) =>
    !isDisabled &&
    isFocused &&
    `
    background: url(../../assets/ic-list-up.svg) no-repeat scroll;
    background-position: right;
    border-color: ${colors.SUCCESS};
  `}
`;
