import React, { useState, useEffect } from 'react';
import {
	Rasing,
	ProjectDeckD,
	ProjectDeckM,
	ProjectDetailD,
	ProjectDetailM,
} from '../components';
import { IProject } from '../type';
import { useTranslation } from 'react-i18next';

interface IProps {
	page: number;
}

const pageCode = 3;

const ProjectsD = ({ page }: IProps) => {
	const { t } = useTranslation();

	const [watchingProject, setWatchProject] = useState<IProject | undefined>(
		undefined
	);
	const [watchingProjectOpened, setWatchingProjectOpened] =
		useState<boolean>(false);
	const [projectWindowZIndex, setProjectWindowZIndex] = useState<number>(-1);

	const toggleWatchProject = (project: IProject | undefined) => {
		if (project) {
			setWatchProject(project);
			setWatchingProjectOpened(true);
			setProjectWindowZIndex(50);
		} else {
			setWatchProject(undefined);
			setWatchingProjectOpened(false);
			setProjectWindowZIndex(-1);
		}
	};

	useEffect(() => {
		// if scroll page is not project page, hide the project detail
		if (page !== pageCode) {
			setWatchProject(undefined);
			setWatchingProjectOpened(false);
			setProjectWindowZIndex(-1);
		}
	}, [page]);

	return (
		<div
			className={`absolute top-[10vh] left-[5%] h-[80vh] overflow-hidden w-[80%] font-extrabold flex ${
				page === pageCode && 'z-[10]'
			}`}
		>
			{/* description */}
			<div className="flex-1 flex justify-center items-center">
				<div className="p-6">
					<Rasing
						active={page === pageCode}
						delay={page === pageCode ? 600 : 450}
						className="mb-4"
					>
						<h1 className="highlight1 text-3xl font-extrabold">
							{t('projects.開發作品')}
						</h1>
					</Rasing>
					<Rasing
						active={page === pageCode}
						delay={page === pageCode ? 750 : 300}
						className="mb-2"
					>
						<p>{t('projects.以下是我最近開發的幾個專案')}</p>
						<p>{t('projects.點擊兩下後可以查看更詳細的內容')}</p>
					</Rasing>
					<Rasing
						active={page === pageCode}
						delay={page === pageCode ? 900 : 150}
					>
						<p className="text-zinc-600">
							{t('projects.想看更多？歡迎查看我的')}{' '}
							<a
								href="https://github.com/rudy0628"
								className="text-[#90caf9]"
								target="_blank"
							>
								GitHub
							</a>{' '}
							{t('projects.帳號')}
						</p>
					</Rasing>
				</div>
			</div>
			{/* project deck */}
			<div className="flex-1">
				<ProjectDeckD
					show={page === pageCode}
					watchingProject={watchingProject}
					toggleWatchProject={toggleWatchProject}
					page={page}
				/>
			</div>
			{/* project card detail */}
			{watchingProject ? (
				<ProjectDetailD
					watchingProjectOpened={watchingProjectOpened}
					watchingProject={watchingProject}
					projectWindowZIndex={projectWindowZIndex}
					toggleWatchProject={toggleWatchProject}
				/>
			) : (
				<div />
			)}
		</div>
	);
};

const ProjectsM = ({ page }: IProps) => {
	const { t } = useTranslation();
	const [watchingProject, setWatchProject] = useState<IProject | undefined>(
		undefined
	);
	const [watchingProjectOpened, setWatchingProjectOpened] =
		useState<boolean>(false);
	const [projectWindowZIndex, setProjectWindowZIndex] = useState<number>(-1);

	const toggleWatchProject = (project: IProject | undefined) => {
		if (project) {
			setWatchProject(project);
			setWatchingProjectOpened(true);
			setProjectWindowZIndex(50);
		} else {
			setWatchProject(undefined);
			setWatchingProjectOpened(false);
			setProjectWindowZIndex(-1);
		}
	};

	useEffect(() => {
		// if scroll page is not project page, hide the project detail
		if (page !== pageCode) {
			setWatchProject(undefined);
			setWatchingProjectOpened(false);
			setProjectWindowZIndex(-1);
		}
	}, [page]);

	return (
		<div
			className={`absolute top-[10vh] h-[85vh] overflow-hidden w-[90%] font-extrabold ${
				page === pageCode && 'z-[10]'
			}`}
		>
			{/* description */}
			<div className="w-auto h-auto flex flex-col items-center">
				<Rasing
					active={page === pageCode}
					delay={page === pageCode ? 600 : 450}
					className="mb-4"
				>
					<h1 className="highlight1 text-3xl font-extrabold">
						{t('projects.開發作品')}
					</h1>
				</Rasing>
				<Rasing
					active={page === pageCode}
					delay={page === pageCode ? 750 : 300}
					className="mb-2"
				>
					<p>{t('projects.以下是我最近開發的幾個專案')}</p>
					<p>{t('projects.點擊兩下後可以查看更詳細的內容')}</p>
				</Rasing>
				<Rasing
					active={page === pageCode}
					delay={page === pageCode ? 900 : 150}
				>
					<p className="text-zinc-600">
						{t('projects.想看更多？歡迎查看我的')}{' '}
						<a
							href="https://github.com/rudy0628"
							className="text-[#90caf9]"
							target="_blank"
						>
							GitHub
						</a>{' '}
						{t('projects.帳號')}
					</p>
				</Rasing>
			</div>
			{/* project deck */}
			<ProjectDeckM
				show={page === pageCode}
				watchingProject={watchingProject}
				toggleWatchProject={toggleWatchProject}
				page={page}
			/>
			{/* project card detail */}
			{watchingProject ? (
				<ProjectDetailM
					watchingProjectOpened={watchingProjectOpened}
					watchingProject={watchingProject}
					projectWindowZIndex={projectWindowZIndex}
					toggleWatchProject={toggleWatchProject}
				/>
			) : (
				<div />
			)}
		</div>
	);
};

export { ProjectsD, ProjectsM };
