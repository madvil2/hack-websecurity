import * as React from "react";
import "../../fonts/fonts.css";
import styled from "styled-components";
import colors from "../../colors";
const { useState, useEffect } = React;

enum switchSize {
  sm = "sm",
  md = "md",
  lg = "lg",
  ss = "ss",
}

interface LabelProps {
  disabled: boolean;
  isCheckedDefault: boolean;
}

interface InputProps {
  color?: string;
}

export interface SwitchProps {
  id: string;
  name?: string;
  children?: any;
  value?: string;
  className?: string;
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
  size?: "sm" | "md" | "lg";
  color?: string;
  disabled?: boolean;
  isCheckedDefault?: boolean;
}

interface LabelContainerProps {
  size?: "sm" | "md" | "lg" | "ss";
}

export const Switch = ({
  id = "switch",
  value = "",
  onChange = () => {},
  size = "md",
  className = "",
  color = colors.SUCCESS,
  disabled = false,
  isCheckedDefault = false,
  children = null,
}: SwitchProps) => {
  const [isChecked, setIsChecked] = useState(isCheckedDefault);

  useEffect(() => {
    setIsChecked(isCheckedDefault);
  }, [isCheckedDefault]);

  return (
    <SwitchContainer className={className}>
      <InputContainer
        type="checkbox"
        id={id}
        value={value}
        disabled={disabled}
        checked={isChecked}
        onChange={(e) => {
          onChange(e);
          setIsChecked(!isChecked);
        }}
        color={color}
      />
      <Label
        htmlFor={id}
        disabled={disabled}
        isCheckedDefault={isCheckedDefault}
      />
      <LabelContainer size={size}>{children}</LabelContainer>
    </SwitchContainer>
  );
};

const SwitchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 32px;
  min-width: 32px;
  padding: 7px 0 7px 0;
  box-sizing: border-box;
`;

const Label = styled.label<LabelProps>`
  display: block;
  cursor: ${(p) => (p.disabled ? "not-allowed" : "pointer")};
  text-indent: 40px;
  min-width: 32px;
  height: 18px;
  background: ${colors.BLACK200};
  display: block;
  border-radius: 9px;
  position: relative;
  background-color: #dbe1ee;
  &::active::after {
    width: 18px;
  }
  &::after {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    width: 14px;
    height: 14px;
    background: ${colors.WHITE};
    border-radius: 14px;
    transition: 0.3s;
  }
`;

const InputContainer = styled.input<InputProps>`
  height: 0;
  width: 0;
  visibility: hidden;
  &:checked + ${Label} {
    background: ${(p) => p.color};
  }
  &:checked + ${Label}::after {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }
  &:disabled + ${Label} {
    opacity: 0.33;
  }
`;

const LabelContainer = styled.span<LabelContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 8px;
  padding-bottom: ${(p) => (p.size === "lg" ? "4px" : "0")};
  font-size: ${(p) => {
    switch (p.size) {
      case switchSize.sm:
        return "0.75rem";
      case switchSize.md:
        return "0.875rem";
      case switchSize.lg:
        return "1.375rem";
      case switchSize.ss:
        return "2.75rem";
      default:
        return "0.875rem";
    }
  }};
`;
