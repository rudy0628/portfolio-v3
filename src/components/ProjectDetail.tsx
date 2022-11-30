import React from 'react';
import * as easing from 'd3-ease';
import { animated, useSpring } from '@react-spring/web';
import { ArrowLeft, GitHub, Globe } from 'react-feather';
import { ProjectDetailImage } from './';
import { IProject } from '../type';
import { useTranslation } from 'react-i18next';
import Rasing from './Rasing';

interface IProps {
	watchingProjectOpened: boolean;
	watchingProject: IProject | undefined;
	projectWindowZIndex: number;
	toggleWatchProject: (project: IProject | undefined) => void;
}

const ProjectDetailD = ({
	watchingProjectOpened,
	watchingProject,
	projectWindowZIndex,
	toggleWatchProject,
}: IProps) => {
	const { t } = useTranslation();

	const projectDetailSpring = useSpring({
		from: {
			opacity: 0,
		},
		to: {
			opacity: watchingProject ? 1 : -1,
		},
	});

	return (
		<animated.div
			className="absolute top-0 left-0 h-[80vh] overflow-hidden w-full font-extrabold flex bg-white"
			style={{ ...projectDetailSpring, zIndex: projectWindowZIndex }}
		>
			{/* back button */}
			<ArrowLeft
				className="z-[100] absolute top-[24px] left-[24px] scale-[1.5]"
				onClick={() => toggleWatchProject(undefined)}
			/>
			{/* Detail */}
			<div className="flex w-full">
				{/* text */}
				<div className="flex-1 flex justify-center items-center w-full">
					<div className="p-6">
						<Rasing
							active={watchingProjectOpened}
							delay={watchingProjectOpened ? 150 : 600}
							className="mb-4"
						>
							<h3 className="font-extrabold text-zinc-700">
								{t(`projectDetail.${watchingProject?.category}`)}
							</h3>
						</Rasing>
						<Rasing
							active={watchingProjectOpened}
							delay={watchingProjectOpened ? 300 : 450}
							className="mb-2"
						>
							<h1 className="highlight1 font-extrabold text-3xl">
								{t(`projectDetail.${watchingProject?.title}`)}
							</h1>
						</Rasing>
						<Rasing
							active={watchingProjectOpened}
							delay={watchingProjectOpened ? 300 : 450}
							className="mb-4"
						>
							<p>{t(`projectDetail.${watchingProject?.description}`)}</p>
						</Rasing>
						<Rasing
							active={watchingProjectOpened}
							delay={watchingProjectOpened ? 300 : 450}
							className="mb-4"
						>
							<div className="flex gap-4 justify-start">
								<a href={watchingProject?.github} target="_blank">
									<GitHub />
								</a>
								<a href={watchingProject?.site} target="_blank">
									<Globe />
								</a>
							</div>
						</Rasing>
						<Rasing
							active={watchingProjectOpened}
							delay={watchingProjectOpened ? 600 : 150}
						>
							<div className="flex gap-3">
								{watchingProject?.tools.map((tool: string, i) => (
									<span
										key={i}
										className={`${tool} border-2 px-2 py-1 rounded-full border-zinc-700 text-xs font-extrabold tracking-wider`}
									>
										{tool}
									</span>
								))}
							</div>
						</Rasing>
					</div>
				</div>
				{/* image */}
				<div className="flex-1 flex items-center relative">
					<ProjectDetailImage
						detailImages={watchingProject?.detailImages!}
						detailImageAlt={watchingProject?.title!}
					/>
				</div>
			</div>
		</animated.div>
	);
};

const ProjectDetailM = ({
	watchingProjectOpened,
	watchingProject,
	projectWindowZIndex,
	toggleWatchProject,
}: IProps) => {
	const { t } = useTranslation();

	const projectDetailSpring = useSpring({
		from: {
			opacity: 0,
		},
		to: {
			opacity: watchingProject ? 1 : -1,
		},
	});

	return (
		<animated.div
			className="absolute top-0 left-0 h-[90vh] overflow-hidden w-full font-extrabold flex bg-white"
			style={{ ...projectDetailSpring, zIndex: projectWindowZIndex }}
		>
			{/* back button */}
			<ArrowLeft
				className="z-[100] absolute top-[12px] left-0 scale-[1.2]"
				onClick={() => toggleWatchProject(undefined)}
			/>
			{/* Detail */}
			<div className="w-full flex flex-col gap-8">
				{/* text */}
				<div className="flex justify-center items-center w-full">
					<div className="mt-[4rem]">
						<Rasing
							active={watchingProjectOpened}
							delay={watchingProjectOpened ? 150 : 600}
							className="mb-4"
						>
							<h3 className="font-extrabold text-zinc-700">
								{t(`projectDetail.${watchingProject?.category}`)}
							</h3>
						</Rasing>
						<Rasing
							active={watchingProjectOpened}
							delay={watchingProjectOpened ? 300 : 450}
							className="mb-2"
						>
							<h1 className="highlight1 font-extrabold text-3xl">
								{t(`projectDetail.${watchingProject?.title}`)}
							</h1>
						</Rasing>
						<Rasing
							active={watchingProjectOpened}
							delay={watchingProjectOpened ? 300 : 450}
							className="mb-4"
						>
							<p>{t(`projectDetail.${watchingProject?.description}`)}</p>
						</Rasing>
						<Rasing
							active={watchingProjectOpened}
							delay={watchingProjectOpened ? 300 : 450}
							className="mb-4"
						>
							<div className="flex gap-4 justify-start">
								<a href={watchingProject?.github} target="_blank">
									<GitHub />
								</a>
								<a href={watchingProject?.site} target="_blank">
									<Globe />
								</a>
							</div>
						</Rasing>
						<Rasing
							active={watchingProjectOpened}
							delay={watchingProjectOpened ? 600 : 150}
						>
							<div className="flex gap-3">
								{watchingProject?.tools.map((tool: string, i) => (
									<span
										key={i}
										className={`${tool} border-2 px-2 py-1 rounded-full border-zinc-700 text-xs font-extrabold tracking-wider`}
									>
										{tool}
									</span>
								))}
							</div>
						</Rasing>
					</div>
				</div>
				{/* image */}
				<div className="relative flex justify-center">
					<ProjectDetailImage
						detailImages={watchingProject?.detailImages!}
						detailImageAlt={watchingProject?.title!}
					/>
				</div>
			</div>
		</animated.div>
	);
};

export { ProjectDetailD, ProjectDetailM };
