import styled from 'styled-components';
import colors from '../../colors';
import * as React from 'react';
const { useState, useEffect } = React;

export interface SegmentControlProps {
	children?: any
	className?: string,
	color?: string,
	variant?: 'link' | 'button',
	onClick?: (arg:string) => void,
};

export const SegmentControl  = ({
	children = [],
	color = colors.INFO,
	variant = 'button',
	className = '',
	onClick = () => {},
}: SegmentControlProps) => {
	const [activeId, setActiveId] = useState('');

	const handleClick = React.useCallback((e:any) => {
		const id = e.target.id;

		if (id !== activeId) {
			setActiveId(id);
			onClick(id);
		}
	},[onClick]);

	useEffect(() => {
		let id: string = '';
	
		if (React.Children.toArray(children).length) {
			React.Children.map(children, (child, i) => {
				if (i === 0) {
					if (child.type.name === 'TabList') {
						if (child.props.children.length) {
							id = child.props.children[0].props.id;
							setActiveId(id);
						}
					}
				}
			});
		}
	}, []);

	return (
		<div className={className}>
			{React.Children.toArray(children).length ?
				React.Children.map(children, child => ({
					...child,
					props: {
						...child.props,
						color,
						handleClick,
						variant,
						className: child.props.className ? child.props.className : className,
						setActiveId,
						activeId
					}
				})
			) : null}
		</div>
	)
};
