import * as React from 'react';
import '../../fonts/fonts.css';
import styled from 'styled-components';
import colors from '../../colors';
import { Input } from '../input';
import { controlSize } from '../../sizes';
import { controlVariant } from '../../variants';
import debounce from '../../utils/debounce';
import callOnce from '../../utils/callOnce';
import { useOutsideAlerter } from '../../utils/useOutsideAlerter';

const { useState, useEffect, useRef, useCallback } = React;

interface AutocompleteOption {
  key: string | number;
  value: string;
}

export interface AutocompleteProps {
  name: string;
  label: string;
  debounceTimeout: number;
  ariaLabel: string;
  ariaDescribedby: string;
  className: string;
  placeholder: string;
  searchURL: string;
  searchParam: string;
  value: string;
  onBlur: ((event: React.FormEvent<HTMLElement>) => void) | undefined;
  onFocus: ((event: React.FormEvent<HTMLElement>) => void) | undefined;
  onSelect: ((event: React.FormEvent<HTMLElement>, item: AutocompleteOption) => void) | undefined;
  onChange: ((event: React.FormEvent<HTMLElement>) => void) | undefined;
  size: 'sm' | 'md' | 'lg' | 'xl';
  variant: 'outline' | 'flushed';
  isDisabled: boolean;
  isInvalid: boolean;
  isRequired: boolean;
  options: AutocompleteOption[];
}

const DefaultAutocomplete = ({
  name = '',
  label = '',
  ariaLabel = '',
  ariaDescribedby = '',
  value = '',
  debounceTimeout = 500,
  searchURL = '',
  searchParam = '',
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
  onChange = () => {
    /**/
  },
  size = 'md',
  variant = 'outline',
  isDisabled = false,
  isInvalid = false,
  isRequired = false,
  options = [],
}: AutocompleteProps) => {
  const getSelectedItem = () => {
    const arr = options.filter((option) => option.value === value);
    if (arr.length === 1) {
      return arr[0].key;
    } else {
      return null;
    }
  };

  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [currentOptions, setCurrentOptions] = useState(options);
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
  }, [focusedItem]);

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

  const getSearchData = async (val: string) => {
    if (searchURL && searchParam) {
      const url = new URL(searchURL);
      url.searchParams.set(searchParam, val);
      const res = await fetch(url.toString());
      return await res.json();
    } else {
      return [];
    }
  };

  useOutsideAlerter(inputRef, () => setIsOptionsOpen(false));

  const handleChange = debounce(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    let newOptions: AutocompleteOption[] = [];
    if (val === '' && !searchURL) {
      newOptions = options;
      setFocusedItem({ key: null, value: '' });
    } else if (searchURL) {
      newOptions = await getSearchData(val);
    } else {
      newOptions = options.filter((option) => option.value.indexOf(val) >= 0);
    }
    setCurrentOptions(newOptions);
    onChange(e);
  }, debounceTimeout);

  const handleFocus = useCallback(
    callOnce(() => {
      if (searchParam && searchURL) {
        getSearchData('').then((res) => {
          setCurrentOptions(res);
        });
      }
    }),
    [searchParam, searchURL],
  );

  return (
    <AutocompleteContainer>
      {label && <AutocompleteLabel>{label}</AutocompleteLabel>}
      <Input
        propRef={inputRef}
        name={name}
        tabIndex={0}
        ariaLabel={ariaLabel}
        ariaDescribedby={ariaDescribedby}
        value={selectedItem.value}
        placeholder={placeholder}
        className={className}
        onBlur={onBlur}
        onFocus={(e) => {
          handleFocus();
          onFocus(e);
          setIsOptionsOpen(true);
        }}
        onChange={(e) => {
          e.persist();
          handleChange(e);
        }}
        isDisabled={isDisabled}
        isInvalid={isInvalid}
        isRequired={isRequired}
        isFocused={isOptionsOpen}
        variant={variant}
        size={size}
      />
      {currentOptions && currentOptions.length > 0 && isOptionsOpen && (
        <AutocompleteOptionsContainer size={size} >
          {currentOptions.map((item: AutocompleteOption, index) => (
            <AutocompleteOptionsElement
              tabIndex={0}
              id={`${item.key}`}
              onFocus={() => {
                setFocusedItem(item);
              }}
              onClick={(e) => {
                onSelect(e, item);
                setSelectedItem(item);
                setIsOptionsOpen(false);
              }}
              selected={item.key === selectedItem.key}
              key={item.key}
            >
              {item.value}
            </AutocompleteOptionsElement>
          ))}
        </AutocompleteOptionsContainer>
      )}
      {currentOptions && currentOptions.length === 0 && isOptionsOpen && (
        <AutocompleteEmptyOptions size={size}>
          <AutocompleteLabel>Нет данных</AutocompleteLabel>
        </AutocompleteEmptyOptions>
      )}
    </AutocompleteContainer>
  );
};

const AutocompleteContainer = styled.div`
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
  size,
  tabIndex,
  id,
  ...props
}: {
  className?: string;
  onClick?: ((event: React.FormEvent<HTMLElement>) => void) | undefined;
  onFocus?: ((event: React.FormEvent<HTMLElement>) => void) | undefined;
  children: any;
  id?: string;
  tabIndex?: number;
  size?: string;
  props?: any;
}) => (
  <div {...props} id={id} onFocus={onFocus} tabIndex={tabIndex} onClick={onClick} className={className}>
    {children}
  </div>
);

const AutocompleteOptionsElement = styled(EmptyDiv)`
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

const AutocompleteEmptyOptions = styled(EmptyDiv)`
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

const AutocompleteOptionsContainer = styled(EmptyDiv)`
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

const AutocompleteLabel = styled.label`
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

export const Autocomplete = styled(DefaultAutocomplete)`
  outline: none;
  padding: 16px 22px 16px 16px;
  background: url(../../assets/ic-list-down.svg) no-repeat scroll;
  background-position: right;
  &:focus {
    background: url(../../assets/ic-list-up.svg) no-repeat scroll;
    background-position: right;
  }

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
  &:focus {
    border: 2px solid ${colors.SUCCESS};
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
        border-color: ${colors.SUCCESS};
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
    background-color: ${colors.BACKGROUND};
    color: ${colors.BLACK};
  }
`;
