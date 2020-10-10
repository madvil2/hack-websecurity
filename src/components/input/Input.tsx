import React, {useState } from 'react';
import '../../fonts/fonts.css';
import styled from 'styled-components';
import colors from '../../colors';
import { controlSize } from '../../sizes';
import { controlVariant } from '../../variants';
import { Keyboard as KeyboardIc } from '../icon'
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
// @ts-ignore
import inputMask from 'simple-keyboard-input-mask';
// @ts-ignore
import ReactVoiceInput from '../../modules/react-voice-input';

export interface InputProps {
  name?: string;
  label?: string;
  ariaLabel?: string;
  ariaDescribedby?: string;
  className?: string;
  placeholder?: string;
  value?: string;
  onChange?: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
  onKeyDown?: ((event:string) => void) | undefined;
  onBlur?: ((event: React.FormEvent<HTMLInputElement>) => void) | undefined;
  onFocus?: ((event: React.FormEvent<HTMLInputElement>) => void) | undefined;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  type?: 'text' | 'number';
  variant?: 'outline' | 'flushed';
  isDisabled?: boolean;
  virtualKeyBoard?: boolean;
  propRef?: any;
  tabIndex?: number;
  isReadOnly?: boolean;
  isInvalid?: boolean;
  isFocused?: boolean;
  isRequired?: boolean;
  pattern?: string;
  inputMaskPattern?: object;
  voiceRecognition?: boolean;
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
  onKeyDown = () => {
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
  virtualKeyBoard = false,
  inputMaskPattern = {},
  voiceRecognition = false,
}: InputProps) => {
  const [openKeyboard, setOpenKeyboard] = useState(false);
  return (
    <InputContainer>
      {label && <InputLabel>{label}</InputLabel>}
      <InputIcCon>
        {voiceRecognition
            ? <>
              <ReactVoiceInput
                  // @ts-ignore
                  onResult={(res) => onChange(res)}
                  containerClassName="rvi_container"
                  // onEnd={onEnd}
              >
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
                  // @ts-ignore
                  onChange={(e) => onChange(e.target.value)}
                  disabled={isDisabled}
                  aria-label={ariaLabel}
                  aria-describedby={ariaDescribedby}
                  readOnly={isReadOnly}
                  aria-invalid={isInvalid}
                  required={isRequired}
                  pattern={pattern}
              />
              </ReactVoiceInput>
            </>
            : <input
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
                // @ts-ignore
                onChange={(e) => onChange(e.target.value)}
                disabled={isDisabled}
                aria-label={ariaLabel}
                aria-describedby={ariaDescribedby}
                readOnly={isReadOnly}
                aria-invalid={isInvalid}
                required={isRequired}
                pattern={pattern}
            />
        }
        {virtualKeyBoard && <div onClick={() => setOpenKeyboard(!openKeyboard)}><KeyboardIc /></div> }
        {virtualKeyBoard && openKeyboard && <KeyboardContainer>
          <Keyboard
            // @ts-ignore
              onChange={(e) => onKeyDown(e)}
              inputMask={inputMaskPattern}
              modules={[inputMask]}
        />
        </KeyboardContainer>
        }
      </InputIcCon>
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
const InputIcCon = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  box-sizing: border-box;
  transition: border-color 0.6s linear;
  width: 100%;
  border-radius: 6px;
  border: 2px solid ${colors.BLACK100};
  &:focus {
    border: 2px solid #00a0e3;
  }
  background-color: ${colors.WHITE};
`;

export const KeyboardContainer = styled.div`
  position: absolute;
  width: 600px;
  z-index: 5;
  bottom: 32px;
  left: 0;
  right: 0;
  margin: 0 auto;
`;

export const Input = styled(DefaultInput)`
  color: ${colors.BLACK};
  outline: none;
  font-family: VTB;
  border: none;
  background-color: transparent;
  &::placeholder {
    color: ${colors.BLACK200};
    font-family: VTB;
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

  // border-radius: 6px;
  // border: 2px solid ${colors.BLACK100};
  // &:focus {
  //   border: 2px solid #00a0e3;
  // }
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
       // &:invalid {
       //  border-width: 0 0 2px 0;
       //  border-color: ${colors.ERROR};
       // }
       `
      : `
          // &:invalid {
          //   border: 2px solid ${colors.ERROR};
          // }
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
