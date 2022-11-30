import React from 'react';
import * as easing from 'd3-ease';
import { useSpring, animated } from '@react-spring/web';
import { Rasing } from '../components';
import { useTranslation } from 'react-i18next';

interface IProps {
	page: number;
}

const WelcomeD = ({ page }: IProps) => {
	const { t } = useTranslation();

	const welcomeSpring = useSpring({
		from: {
			marginLeft: '0%',
		},
		to: {
			marginLeft: page === 0 ? '0%' : '45%',
		},
		config: {
			easing: easing.easeCubicInOut,
		},
		delay: page === 0 ? 600 : 0,
	});

	return (
		<div className="left-[5%] top-[10vh] w-[90%] h-[80vh] absolute overflow-hidden">
			<animated.div
				style={{ ...welcomeSpring }}
				className="flex flex-col items-center justify-center h-[80vh]"
			>
				<div>
					<Rasing
						active={page === 0 || page === 1}
						height={108}
						delay={page === 0 || page === 1 ? 600 : 150}
					>
						<h1 className="xl:text-[108px] xl:leading-[108px] font-extrabold text-[84px] leading-[84px]">
							{t('welcome.嗨！')}
						</h1>
					</Rasing>
					<Rasing
						active={page === 0 || page === 1}
						height={72}
						delay={page === 0 || page === 1 ? 750 : 0}
					>
						<h2 className="xl:text-[72px] xl:leading-[72px] font-extrabold text-[54px] leading-[54px] align-bottom whitespace-nowrap">
							{t('welcome.我是')}
							<span className="highlight1">{t('welcome.葉世平')}</span>
						</h2>
					</Rasing>
				</div>
			</animated.div>
		</div>
	);
};

const WelcomeM = ({ page }: IProps) => {
	const { t } = useTranslation();
	const welcomeSpring = useSpring({
		from: {
			top: '45vh',
		},
		to: {
			top: page === 0 ? '45vh' : '25vh',
		},
		config: {
			easing: easing.easeCubicInOut,
		},
		delay: page === 0 ? 600 : 0,
	});

	return (
		<animated.div
			style={{ ...welcomeSpring }}
			className="absolute left-[50%] translate-x-[-50%] translate-y-[-50%]"
		>
			<div>
				<Rasing
					active={page === 0 || page === 1}
					height={108}
					delay={page === 0 || page === 1 ? 600 : 150}
				>
					<h1 className="font-extrabold text-[72px] leading-[72px]">
						{t('welcome.嗨！')}
					</h1>
				</Rasing>
				<Rasing
					active={page === 0 || page === 1}
					height={72}
					delay={page === 0 || page === 1 ? 750 : 0}
				>
					<h2 className="font-extrabold text-[48px] leading-[48px] align-bottom whitespace-nowrap">
						{t('welcome.我是')}
						<span className="highlight1">{t('welcome.葉世平')}</span>
					</h2>
				</Rasing>
			</div>
		</animated.div>
	);
};

export { WelcomeD, WelcomeM };
