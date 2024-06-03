import * as React from 'react';
const { useState, useCallback, useEffect } = React;
import '../../fonts/fonts.css';
import styled from 'styled-components'
import colors from '../../colors';
import { FC, ReactElement } from 'react';

export interface CheckboxGroupProps {
	name?: string,
	onChange?: (args:string[]) => void,
	size?: 'sm' | 'md' | 'lg',
	color?: string,
	className?: string,
	isInline?: boolean,
	disabled?: boolean,
	isCheckedDefault?: boolean,
	children?: ReactElement[] | ReactElement,
};

export const CheckboxGroup: FC<CheckboxGroupProps> = ({
	name = '',
	size = 'md',
	className = '',
	color = colors.SUCCESS,
	isInline = false,
	disabled = false,
	isCheckedDefault = false,
	onChange = () => {},
	children = [],
}) => {
	const [checkedValues, setCheckedValues] = useState<string[]>([]);
	useEffect(() => {
		const checkedItemsList: string[] = [];

		React.Children.forEach(children, (child) => {
			if (isCheckedDefault || child.props.isCheckedDefault) {
				checkedItemsList.push(child.props.value);
			}
		});
		setCheckedValues(checkedItemsList);
	}, []);

	const handleCheckedValues = useCallback((value:string) => {
		let indexToDelete:number = -1;
	
		for (let i = 0; i < checkedValues.length; i++) {
			if (checkedValues[i] === value) {
				indexToDelete = i;
			}
		};
		if (indexToDelete < 0) {
			checkedValues.push(value);
		} else {
			checkedValues.splice(indexToDelete, 1);
		}
		setCheckedValues(checkedValues);
		onChange(checkedValues);
	}, [checkedValues, onChange]);

	return (
		<CheckboxGroupContainer
			isInline={isInline}
			className={className}
			disabled={disabled}
			isCheckedDefault={isCheckedDefault}
			onChange={(e:any) => handleCheckedValues(e.target.value)}
		>
			<>
				{React.Children.toArray(children).length ? React.Children.map(children, child => {
					return ({ ...child, props: {
						...child.props,
						color,
						name,
						size,
						className: child.props.className ? child.props.className : className,
						isCheckedDefault: child.props.isCheckedDefault ? child.props.isCheckedDefault : isCheckedDefault,
						disabled: child.props.disabled ? child.props.disabled : disabled} });
					}) : null}
			</>
		</CheckboxGroupContainer>
	)
};

const CheckboxGroupContainer = styled.div<CheckboxGroupProps>
`
	display: flex;
	flex-direction: ${p => p.isInline ? 'row' : 'column'};
	justify-content: flex-start;
	align-items: flex-start;
	padding: 8px;
`;
