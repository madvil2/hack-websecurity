import styled from 'styled-components';
import colors from '../../colors';
import * as React from 'react';

interface TabProps {
	id: string,
	active?: boolean,
	variant?: 'link' | 'button',
	color?: string,
	handleClick?: (e: React.FormEvent<HTMLButtonElement>) => void,
	activeId?: string,
	children?: string,
	className?: string,
};

export const Tab = ({
	id = '',
	color = '',
	handleClick = () => {},
	variant = 'button',
	activeId = '',
	children = '',
	className = '',
}: TabProps) => {
	return (
		<TabItem
			id={id}
			active={id === activeId}
			color={color}
			onClick={(e:React.FormEvent<HTMLButtonElement>) => handleClick(e)}
			variant={variant}
			className={className}
		>
			{children ? children : id}
		</TabItem>
	)
};

const TabItem = styled.button<TabProps>`
	cursor: pointer;
	border: none;
	${p => p.variant === 'link' ? `
			background: transparent;
			float: left;
			outline: none;
			color: ${p.active ? p.color : colors.BLACK400};
			border-bottom: 2px solid  ${p.active ? p.color : colors.WHITE};
			padding: 0;
			margin-right: 28px;
			padding-bottom: 7px;
			` : `
			margin: 3px;
			padding: 5px 8px;
			outline: none;
			flex: 1 1 auto;
			height: 42px;
			box-sizing: border-box;
			background: ${p.active ? colors.WHITE : colors.BACKGROUND};
			border-radius: 8px;
			${p.active ? `box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.05);` : ``};
			opacity: ${p.active ? '1' : '0.3'};
			&:hover {
				${p.active ? `box-shadow: 0 4px 8px -2px rgba(0, 0, 0, 0.16), 0 0 1px 0 rgba(0, 0, 0, 0.12)` : null};
			}
		`
	}
`;
