import React from 'react';
import * as easing from 'd3-ease';
import { useSpring, animated } from '@react-spring/web';
import { Rasing } from '../components';
import { useTranslation } from 'react-i18next';

interface IProps {
	page: number;
}

const pageCode = 1;

const i18nAbout = (t: any) => {
	return [
		{
			key: 0,
			item: (
				<h4 className="text-white text-[24px] leading-[48px] relative font-extrabold whitespace-nowrap">
					{t('about.來自於台北，台灣')}
				</h4>
			),
		},
		{
			key: 1,
			item: (
				<div className="text-white text-[24px] leading-[48px] font-extrabold whitespace-nowrap">
					<h4 className="inline relative">{t('about.畢業於')}</h4>
					<h4 className="highlight3 relative">{t('about.國立高雄科技大學')}</h4>
				</div>
			),
		},
		{
			key: 2,
			item: (
				<div className="text-white text-[24px] leading-[48px] font-extrabold whitespace-nowrap">
					<h4 className="inline relative">{t('about.主修')}</h4>
					<h4 className="highlight3 relative">{t('about.資訊管理')}</h4>
				</div>
			),
		},
		{
			key: 3,
			item: (
				<div className="text-white text-[24px] leading-[48px] font-extrabold whitespace-nowrap">
					<h4 className="inline relative">{t('about.一年半的')}</h4>
					<h4 className="highlight3 relative">{t('about.網頁開發')}</h4>
					<h4 className="inline relative">{t('about.經驗')}</h4>
				</div>
			),
		},
	];
};

const AboutD = ({ page }: IProps) => {
	const { t } = useTranslation();
	const about = i18nAbout(t);

	const backgroundSpring = useSpring({
		from: {
			width: '0%',
		},
		to: {
			width: page === pageCode ? '50%' : '0%',
		},
		delay: page === pageCode ? 600 : 450,
		config: {
			easing: easing.easeCubicInOut,
		},
	});

	return (
		<animated.div style={{ ...backgroundSpring }}>
			<div className="h-[80vh] bg-[#567995] flex flex-col justify-center px-[5%] z-[-2]">
				<Rasing
					active={page === pageCode}
					delay={page === pageCode ? 750 : 300}
				>
					<h2 className="text-[24px] font-semibold leading-[60px] whitespace-nowrap">
						{t('about.關於我')}
					</h2>
				</Rasing>
				{about.map((aboutElement: any, index) => (
					<Rasing
						active={page === pageCode}
						height={72}
						delay={page === pageCode ? 1200 + index * 100 : 0 + index * 100}
						key={aboutElement.key}
					>
						{aboutElement.item}
					</Rasing>
				))}
			</div>
		</animated.div>
	);
};

const AboutM = ({ page }: IProps) => {
	const { t } = useTranslation();
	const about = i18nAbout(t);

	const backgroundSpring = useSpring({
		from: {
			height: '0vh',
		},
		to: {
			height: page === pageCode ? '60vh' : '0vh',
		},
		delay: page === pageCode ? 600 : 450,
		config: {
			easing: easing.easeCubicInOut,
		},
	});

	return (
		<animated.div
			style={{ ...backgroundSpring }}
			className="fixed bottom-0 w-[90%] h-[80vh] bg-[#567995] z-[-2] flex flex-col items-center"
		>
			<Rasing
				active={page === pageCode}
				delay={page === pageCode ? 750 : 300}
				className="mt-5"
			>
				<h2 className="text-[24px] font-semibold leading-[60px] whitespace-nowrap">
					{t('about.關於我')}
				</h2>
			</Rasing>
			{about.map((aboutElement: any, index) => (
				<Rasing
					active={page === pageCode}
					height={72}
					delay={page === pageCode ? 1200 + index * 100 : 0 + index * 100}
					key={aboutElement.key}
				>
					{aboutElement.item}
				</Rasing>
			))}
		</animated.div>
	);
};

export { AboutD, AboutM };
