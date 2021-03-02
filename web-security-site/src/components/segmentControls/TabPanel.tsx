import styled from 'styled-components';
import * as React from 'react';

export interface TabPanelProps {
	id: string,
	children?: any,
	className?: string,
	activeId?: string,
};

interface TabPanelItemProps {
	active?: boolean,
}

export const TabPanel = ({
	id = '',
	activeId,
	children = null,
	className = '',
}: TabPanelProps) => {
	return (
		<TabPanelItem
			className={className}
			active={id === activeId}
		>
			{children}
		</TabPanelItem>
	)
};

const TabPanelItem = styled.div<TabPanelItemProps>`
	display: ${p => p.active ? 'block' : 'none'};
	padding: 8px;
`;
