import styled from 'styled-components';
import colors from '../../colors';
import { ReactElement } from 'react';
import * as React from 'react';

export interface TabListProps {
	variant?: 'link' | 'button',
	handleClick?: (e: React.FormEvent<HTMLButtonElement>) => void,
	color?: string,
	children?: ReactElement[] | ReactElement,
	className?: string,
	activeId?: string,
};

interface TabsContainerProps {
	variant?: 'link' | 'button',
	onClick?: (e: React.FormEvent<HTMLButtonElement>) => void,
	activeId?: string,
};

export const TabList = ({
	activeId = '',
	variant = 'button',
	handleClick = () => {},
	color = colors.INFO,
	children = [],
	className = '',
}: TabListProps) => {

	return (
		<TabsContainer
			variant={variant}
			className={className}
		>
			{React.Children.toArray(children).length ?
				React.Children.map(children, (child) => ({
					...child,
					props: {
						...child.props,
						color,
						handleClick,
						variant,
						className: child.props.className ? child.props.className : className,
						activeId
					}
				})
			) : null}
		</TabsContainer>
	)
};

const TabsContainer = styled.div<TabsContainerProps>`
	box-sizing: border-box;
	display: flex;
	flex-direction: row;
	justify-content: start;
	padding: ${p => p.variant === 'link' ? '8px' : '0px'};
	border-radius: 8px;
	background: ${p => p.variant === 'link' ? 'transparent' : colors.BACKGROUND};
`;
