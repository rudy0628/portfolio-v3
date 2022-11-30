import React from 'react';
import * as easing from 'd3-ease';
import { useSpring, animated } from '@react-spring/web';
import { Rasing } from '../components';
import { Check } from 'react-feather';
import { zh_tw } from '../utils/lang';
import { useTranslation } from 'react-i18next';

interface IProps {
	page: number;
}

const pageCode = 2;

const SkillsD = ({ page }: IProps) => {
	const { t } = useTranslation();

	const mainBgSpring = useSpring({
		from: {
			r: '0%',
		},
		to: {
			r: page === pageCode ? '100%' : '0%',
		},
		delay: page === pageCode ? 600 : 1050,
		config: {
			easing: easing.easeCubicInOut,
		},
	});

	const secondBgSpring = useSpring({
		from: {
			r: 0,
		},
		to: {
			r: page === pageCode ? window.innerWidth / 2 : 0,
		},
		delay: page === pageCode ? 750 : 900,
		config: {
			easing: easing.easeCubicInOut,
		},
	});

	return (
		<div
			className={`absolute top-[10vh] left-[5%] h-[80vh] w-[90%] ${
				page === pageCode && 'z-[10]'
			}`}
		>
			{/* background */}
			<svg className="float-left top-[10vh] left-[5%] h-[80vh] w-full">
				<animated.circle cx="50%" cy="50%" r={mainBgSpring.r} fill="#b1dafb" />
				<animated.circle
					cx="100%"
					cy="50%"
					r={secondBgSpring.r}
					fill="#f2e5d7"
				/>
			</svg>
			{/* content */}
			<div className="absolute w-full h-[100%] flex">
				{/* left */}
				<div className="flex-1 py-8 px-6">
					<Rasing
						active={page === pageCode}
						delay={page === pageCode ? 900 : 750}
						className="mb-4"
					>
						<h1 className="highlight2 text-4xl font-extrabold">
							{t('skills.專長與技能')}
						</h1>
					</Rasing>
					<Rasing
						active={page === pageCode}
						height={120}
						delay={page === pageCode ? 1050 : 600}
						className="mb-6"
					>
						<p className="font-semibold">
							{t('skills.以下是我目前參與過的專案所涵蓋的領域：')}
						</p>
					</Rasing>
					{zh_tw.fields.map((field: string, index: number) => (
						<Rasing
							active={page === pageCode}
							height={120}
							delay={page === pageCode ? 1200 + index * 100 : 600 + index * 100}
							className="mb-4"
							key={index}
						>
							<p className="font-semibold flex items-center gap-3">
								<Check size={16} />
								{t(`skills.${field}`)}
							</p>
						</Rasing>
					))}
				</div>
				{/* right */}
				<div className="flex-1 py-8 pl-6 pr-[8%] grid grid-cols-2 grid-rows-2">
					{/* frontend */}
					<div className="flex flex-col items-center">
						<Rasing
							active={page === pageCode}
							height={36}
							delay={page === pageCode ? 1050 : 450}
							className="mb-4"
						>
							<h5 className="text-lg font-extrabold">{t('skills.前端技能')}</h5>
						</Rasing>
						{zh_tw.skills.frontend.map((skill: string, index: number) => (
							<Rasing
								key={index}
								active={page === pageCode}
								delay={
									page === pageCode ? 1050 + index * 100 : 450 + index * 100
								}
								className="mb-2"
							>
								<p className="font-extrabold text-[#494540] tracking-wide">
									{skill}
								</p>
							</Rasing>
						))}
					</div>
					{/* backend */}
					<div className="flex flex-col items-center">
						<Rasing
							active={page === pageCode}
							height={36}
							delay={page === pageCode ? 1200 : 300}
							className="mb-4"
						>
							<h5 className="text-lg font-extrabold">{t('skills.後端技能')}</h5>
						</Rasing>
						{zh_tw.skills.backend.map((skill: string, index: number) => (
							<Rasing
								key={index}
								active={page === pageCode}
								delay={
									page === pageCode ? 1200 + index * 100 : 300 + index * 100
								}
								className="mb-2"
							>
								<p className="font-extrabold text-[#494540] tracking-wide">
									{skill}
								</p>
							</Rasing>
						))}
					</div>
					{/* other tools */}
					<div className="col-span-full flex flex-col items-center">
						<Rasing
							active={page === pageCode}
							height={36}
							delay={page === pageCode ? 1350 : 150}
							className="mb-4"
						>
							<h5 className="text-lg font-extrabold">{t('skills.實用工具')}</h5>
						</Rasing>
						{zh_tw.skills.tools.map((skill: string, index: number) => (
							<Rasing
								key={index}
								active={page === pageCode}
								delay={
									page === pageCode ? 1350 + index * 100 : 150 + index * 100
								}
								className="mb-2"
							>
								<p className="font-extrabold text-[#494540] tracking-wide">
									{skill}
								</p>
							</Rasing>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

const SkillsM = ({ page }: IProps) => {
	const { t } = useTranslation();

	const mainBgSpring = useSpring({
		from: {
			r: '0%',
		},
		to: {
			r: page === pageCode ? '100%' : '0%',
		},
		delay: page === pageCode ? 600 : 1050,
		config: {
			easing: easing.easeCubicInOut,
		},
	});

	const secondBgSpring = useSpring({
		from: {
			r: 0,
		},
		to: {
			r: page === pageCode ? window.innerHeight / 1.8 : 0,
		},
		delay: page === pageCode ? 750 : 900,
		config: {
			easing: easing.easeCubicInOut,
		},
	});

	const skillsSpring = useSpring({
		from: {
			opacity: 0,
		},
		to: {
			opacity: page === pageCode ? 1 : 0,
		},
	});

	return (
		<div
			className={`absolute top-[10vh] left-[5%] h-[80vh] w-[90%] ${
				page === pageCode && 'z-[10]'
			}`}
		>
			{/* background */}
			<svg className="float-left top-[10vh] left-[5%] h-[80vh] w-full">
				<animated.circle cx="50%" cy="50%" r={mainBgSpring.r} fill="#b1dafb" />
				<animated.circle
					cx="50%"
					cy="100%"
					r={secondBgSpring.r}
					fill="#f2e5d7"
				/>
			</svg>
			{/* content */}
			<div className="absolute w-full h-[100%]">
				{/* top */}
				<div className="flex-1 py-8 px-6 h-[40%] text-center">
					<Rasing
						active={page === pageCode}
						delay={page === pageCode ? 900 : 750}
						className="mb-4"
					>
						<h1 className="highlight2 text-3xl font-extrabold">
							{t('skills.專長與技能')}
						</h1>
					</Rasing>
					<Rasing
						active={page === pageCode}
						height={120}
						delay={page === pageCode ? 1050 : 600}
						className="mb-6"
					>
						<p className="font-semibold">
							{t('skills.以下是我目前擁有的專長與技術：')}
						</p>
					</Rasing>
				</div>
				{/* down */}
				<animated.div
					className="flex-1 px-4 pt-[4rem] flex gap-10 xs:justify-center justify-start overflow-x-scroll whitespace-nowrap"
					style={{ ...skillsSpring }}
				>
					{/* frontend */}
					<div className="flex flex-col items-center">
						<Rasing
							active={page === pageCode}
							height={36}
							delay={page === pageCode ? 1050 : 450}
							className="mb-4"
						>
							<h5 className="text-lg font-extrabold">{t('skills.前端技能')}</h5>
						</Rasing>
						{zh_tw.skills.frontend.map((skill: string, index: number) => (
							<Rasing
								key={index}
								active={page === pageCode}
								delay={
									page === pageCode ? 1050 + index * 100 : 450 + index * 100
								}
								className="mb-2"
							>
								<p className="font-extrabold text-[#494540] tracking-wide">
									{skill}
								</p>
							</Rasing>
						))}
					</div>
					{/* backend */}
					<div className="flex flex-col items-center">
						<Rasing
							active={page === pageCode}
							height={36}
							delay={page === pageCode ? 1200 : 300}
							className="mb-4"
						>
							<h5 className="text-lg font-extrabold">{t('skills.後端技能')}</h5>
						</Rasing>
						{zh_tw.skills.backend.map((skill: string, index: number) => (
							<Rasing
								key={index}
								active={page === pageCode}
								delay={
									page === pageCode ? 1200 + index * 100 : 300 + index * 100
								}
								className="mb-2"
							>
								<p className="font-extrabold text-[#494540] tracking-wide">
									{skill}
								</p>
							</Rasing>
						))}
					</div>
					{/* other tools */}
					<div className="col-span-full flex flex-col items-center">
						<Rasing
							active={page === pageCode}
							height={36}
							delay={page === pageCode ? 1350 : 150}
							className="mb-4"
						>
							<h5 className="text-lg font-extrabold">{t('skills.實用工具')}</h5>
						</Rasing>
						{zh_tw.skills.tools.map((skill: string, index: number) => (
							<Rasing
								key={index}
								active={page === pageCode}
								delay={
									page === pageCode ? 1350 + index * 100 : 150 + index * 100
								}
								className="mb-2"
							>
								<p className="font-extrabold text-[#494540] tracking-wide">
									{skill}
								</p>
							</Rasing>
						))}
					</div>
				</animated.div>
			</div>
		</div>
	);
};

export { SkillsD, SkillsM };
