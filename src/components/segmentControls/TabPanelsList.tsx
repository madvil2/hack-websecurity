import { ReactElement } from 'react';
import * as React from 'react';

export interface TabPanelsListProps {
	children?: ReactElement[] | ReactElement,
	className?: string,
	activeId?: string,
}

export const TabPanelsList = ({
	children = [],
	className = '',
	activeId,
}: TabPanelsListProps) => {
	return (
		<div className={className}>
			{React.Children.toArray(children).length ? React.Children.map(children, (child) => ({
				...child,
				props: {
					...child.props,
					className: child.props.className ? child.props.className : className,
					activeId
				}
			})) : null}
		</div>
	)
};
