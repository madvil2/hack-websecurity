import * as React from 'react';
const { useState, useEffect } = React;
import '../../fonts/fonts.css';
import styled from 'styled-components'
import colors from '../../colors';

export enum checkboxSize {
	sm = 'sm',
	md = 'md',
	lg = 'lg',
};

export interface CheckboxProps {
	id?: string,
	name?: string,
	value: string,
	className?: string,
	onChange?: (event: React.FormEvent<HTMLInputElement>) => void,
	size?: 'sm' | 'md' | 'lg',
	color?: string,
	disabled?: boolean,
	isCheckedDefault?: boolean,
	children?: any,
};

interface CheckmarkProps {
	isChecked: boolean,
	size: 'sm' | 'md' | 'lg',
	disabled: boolean,
	color: string,
};

interface SvgProps {
	size: 'sm' | 'md' | 'lg',
};

interface CheckboxContainerProps {
	disabled: boolean,
	isCheckedDefault: boolean,
};

interface LabelProps {
	size:  'sm' | 'md' | 'lg',
	className?: string,
}

export const Checkbox = ({
	id = '',
	name = '',
	value = '',
	onChange = () => {},
	size = 'md',
	className = '',
	color = colors.SUCCESS,
	disabled = false,
	isCheckedDefault = false,
	children = null,
}: CheckboxProps) => {
	const [isChecked, setIsChecked] = useState(isCheckedDefault);

	useEffect(() => {
		setIsChecked(isCheckedDefault);
	}, [isCheckedDefault]);

	return (
		<CheckboxContainer
			key={value}
			className={className}
			disabled={disabled}
			isCheckedDefault={isCheckedDefault}
		>
			<InputContainer
				id={id}
				name={name}
				type='checkbox'
				value={value}
				checked={isChecked}
				onChange={(e) => {onChange(e); setIsChecked(!isChecked)}}
				disabled={disabled}
			/>
			<CheckboxMark
				size={size}
				isChecked={isChecked}
				color={color}
				disabled={disabled}
			>
				{isChecked && <CheckboxSvg size={size} />}
			</CheckboxMark>
			{children &&
				<CheckboxLabel size={size}>
					{children}
				</CheckboxLabel>}
		</CheckboxContainer>
	);
};

const InputContainer = styled.input`
	position: absolute;
	opacity: 0;
	height: 0;
	width: 0;
`;

const CheckboxContainer = styled.label<CheckboxContainerProps>`
	display: inline-flex;
	align-items: center;
	cursor: ${p => p.disabled ? 'not-allowed' : 'pointer'};
	user-select: none;
	min-height: 32px;
	padding: 7px;
`;

const CheckboxMark = styled.span<CheckmarkProps>`
	${p => {
		switch(p.size) {
			case checkboxSize.sm:
				return (
					`width: 14px;
					height: 14px;`
				);
			case checkboxSize.md:
				return (
					`width: 18px;
					height: 18px;`
				);
			case checkboxSize.lg:
				return (
					`width: 24px;
					height: 24px;`
				);
			default:
				return (
					`width: 18px;
					height: 18px;`
				);
		}}
	};
	color: ${colors.WHITE};
	border: 1px solid ${p => p.isChecked ? p.color : colors.BLACK400};
	background-color: ${p => p.isChecked ? p.color : p.disabled ? colors.BLACK400 : ''};
	opacity: ${p => p.disabled ? '0.33' : '1'};
	border-radius: 0.15em;
	box-sizing: border-box;
`;

const CheckboxLabel = styled.span<LabelProps>`
	display: flex;
	align-items: center;
	padding-left: 8px;
	font-family: SBSansInterface-Semibold;
	font-size: ${
		p => {
			switch (p.size) {
			case checkboxSize.sm:
				return '0.75rem';
			case checkboxSize.md:
				return '0.875rem';
			case checkboxSize.lg:
				return '1.375rem';
			default:
				return '0.875rem';
			}
		}
	};
`;

const CheckboxSvg = ({size}: SvgProps) => {
	let transform:string;
	let width:string;

	switch(size) {
		case checkboxSize.sm:
			transform = "translate(-8.5, -8.5)";
			width = "14";
			break;
		case checkboxSize.md:
			transform = "translate(-8, -8)";
			width = "18";
			break;
		case checkboxSize.lg:
			transform = "translate(-8, -8)";
			width = "25";
			break;
		default:
			transform = "translate(-8, -8)";
			width = "18";
	}

	return (
		<svg width={width} height={width} viewBox="0 0 18 18">
			<g fill="none" fillRule="evenodd">
				<g transform={transform}>
					<path stroke="#FFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M11.6 16.437L14.375 19.292 20.894 13"/>
				</g>
			</g>
		</svg>
	)
};
