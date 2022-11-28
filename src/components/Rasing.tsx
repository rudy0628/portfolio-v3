import React from 'react';
import * as easing from 'd3-ease';
import { useSpring, animated } from '@react-spring/web';

interface IProps {
	active: boolean;
	height?: number;
	delay?: number;
	className?: string;
	children: React.ReactNode;
}

const Rasing = ({ active, height, delay, className, children }: IProps) => {
	const rasingSpring = useSpring({
		from: { top: height ? height : 72 },
		to: { top: active ? 0 : height ? height : 72 },
		delay: delay ? delay : 0,
		config: {
			easing: easing.easeCubicInOut,
		},
	});

	return (
		<div className={`h-auto overflow-hidden ${className}`}>
			<animated.div className="relative" style={{ ...rasingSpring }}>
				{children}
			</animated.div>
		</div>
	);
};

export default Rasing;
