import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { zh_tw } from '../utils/lang';
import { ChevronsDown } from 'react-feather';
import * as easing from 'd3-ease';
import { useTranslation } from 'react-i18next';

interface IProps {
	page: number;
}

const ScrollIndicatorD = ({ page }: IProps) => {
	const { t } = useTranslation();
	const colorSprings = useSpring({
		from: { color: 'black', width: '90%', opacity: 1 },
		to: {
			color: 'black',
			width: page === 0 ? '90%' : '10%',
			opacity: zh_tw.pageTitles[page + 1] === undefined ? 0 : 1,
		},
		config: { easing: easing.easeCubicInOut, duration: 1000 },
	});

	const locateSprings = useSpring({
		from: { bottom: 36 },
		to: { bottom: 52 },
		loop: { reverse: true },
		config: {
			easing: easing.easeCubicInOut,
			duration: 1000,
		},
	});

	return (
		<animated.div
			style={{ ...colorSprings, ...locateSprings }}
			className="absolute z-[500] text-center font-semibold"
		>
			<p className="flex flex-col items-center">
				{t(`scrollIndex.${zh_tw.pageTitles[page + 1]}`)}
				<ChevronsDown />
			</p>
		</animated.div>
	);
};

const ScrollIndicatorM = ({ page }: IProps) => {
	const { t } = useTranslation();
	const colorSprings = useSpring({
		from: { color: 'black', opacity: 1 },
		to: {
			color: 'black',
			opacity: zh_tw.pageTitles[page + 1] === undefined ? 0 : 1,
		},
		config: { easing: easing.easeCubicInOut, duration: 1000 },
	});

	const locateSprings = useSpring({
		from: { bottom: 36 },
		to: { bottom: 52 },
		loop: { reverse: true },
		config: {
			easing: easing.easeCubicInOut,
			duration: 1000,
		},
	});

	return (
		<animated.div
			style={{ ...colorSprings, ...locateSprings }}
			className="absolute left-0 z-[500] text-center font-semibold w-full"
		>
			<p className="flex flex-col items-center">
				{t(`scrollIndex.${zh_tw.pageTitles[page + 1]}`)}
				<ChevronsDown />
			</p>
		</animated.div>
	);
};

export { ScrollIndicatorD, ScrollIndicatorM };
