import React from 'react';
import * as easing from 'd3-ease';
import { useSpring, animated } from '@react-spring/web';
import { Rasing, SocialLinks } from '../components';
import { ArrowRight } from 'react-feather';

const pageCode = 4;

interface IProps {
	page: number;
}

const ContactD = ({ page }: IProps) => {
	const contactSpring = useSpring({
		from: {
			width: '0%',
		},
		to: {
			width: page === pageCode ? '80%' : '0%',
		},
		delay: pageCode === page ? 0 : 750,
	});

	const imageSpring = useSpring({
		from: {
			scale: 0,
			opacity: 0,
		},
		to: {
			scale: page === pageCode ? 1 : 0,
			opacity: page === pageCode ? 1 : 0,
		},
		delay: pageCode === page ? 450 : 300,
		config: {
			easing: easing.easeCubicInOut,
		},
	});

	return (
		<animated.div
			className="absolute top-[10vh] h-[80vh] overflow-hidden font-extrabold flex justify-center items-center"
			style={{ ...contactSpring }}
		>
			<div className="flex gap-8">
				{/* image */}
				<animated.div
					style={{ ...imageSpring, width: '210px', height: '210px' }}
				>
					<img
						src="https://res.cloudinary.com/dz50afcaa/image/upload/v1669608622/rudy-portfolio-v3/image/rudy_nogiqt.jpg"
						alt="rudy"
						className="h-full w-[100%] rounded-full object-cover"
					/>
				</animated.div>
				{/* contact content */}
				<div>
					<Rasing
						active={page === pageCode}
						delay={page === pageCode ? 600 : 150}
						className="mb-8"
					>
						<h1 className="highlight1 text-3xl font-extrabold">聯絡方式</h1>
					</Rasing>
					<Rasing
						active={page === pageCode}
						delay={page === pageCode ? 750 : 0}
						className="mb-4"
					>
						<p className="">
							您可以{' '}
							<a href="mailto:s3352250zz@gmail.com" className="text-[#90caf9]">
								寫信
							</a>{' '}
							給我
						</p>
					</Rasing>
					<Rasing
						active={page === pageCode}
						delay={page === pageCode ? 750 : 0}
						className="mb-4"
					>
						<p className="text-sm text-zinc-600">或是</p>
					</Rasing>
					<Rasing
						active={page === pageCode}
						delay={page === pageCode ? 750 : 0}
						className="mb-4"
					>
						<p className="flex gap-2 items-center">
							點擊右方的社群媒體列 <ArrowRight size={16} />
						</p>
					</Rasing>
					<Rasing
						active={page === pageCode}
						delay={page === pageCode ? 750 : 0}
						className="mb-4"
					>
						<p className="highlight2">感謝您參觀我的個人頁面！</p>
					</Rasing>
				</div>
			</div>
		</animated.div>
	);
};

const ContactM = ({ page }: IProps) => {
	const contactSpring = useSpring({
		from: {
			width: '0%',
		},
		to: {
			width: page === pageCode ? '90%' : '0%',
		},
		delay: pageCode === page ? 0 : 750,
	});

	const imageSpring = useSpring({
		from: {
			scale: 0,
			opacity: 0,
		},
		to: {
			scale: page === pageCode ? 1 : 0,
			opacity: page === pageCode ? 1 : 0,
		},
		delay: pageCode === page ? 450 : 300,
		config: {
			easing: easing.easeCubicInOut,
		},
	});

	return (
		<animated.div
			className="absolute top-[10vh] h-[80vh] overflow-hidden font-extrabold flex justify-center items-center"
			style={{ ...contactSpring }}
		>
			<div className="flex flex-col gap-8 text-center">
				{/* image */}
				<animated.div
					style={{ ...imageSpring, width: '210px', height: '210px' }}
				>
					<img
						src="https://res.cloudinary.com/dz50afcaa/image/upload/v1669608622/rudy-portfolio-v3/image/rudy_nogiqt.jpg"
						alt="rudy"
						className="h-full w-[100%] rounded-full object-cover"
					/>
				</animated.div>
				{/* contact content */}
				<div>
					<Rasing
						active={page === pageCode}
						delay={page === pageCode ? 600 : 150}
						className="mb-8"
					>
						<h1 className="highlight1 text-3xl font-extrabold">聯絡方式</h1>
					</Rasing>
					<Rasing
						active={page === pageCode}
						delay={page === pageCode ? 750 : 0}
						className="mb-4"
					>
						<p className="">
							您可以{' '}
							<a href="mailto:s3352250zz@gmail.com" className="text-[#90caf9]">
								寫信
							</a>{' '}
							給我
						</p>
					</Rasing>
					<Rasing
						active={page === pageCode}
						delay={page === pageCode ? 750 : 0}
						className="mb-4"
					>
						<p className="text-sm text-zinc-600">或是</p>
					</Rasing>
					<Rasing
						active={page === pageCode}
						delay={page === pageCode ? 750 : 0}
						className="mb-4"
					>
						<SocialLinks className="flex justify-center items-center gap-4" />
					</Rasing>
					<Rasing
						active={page === pageCode}
						delay={page === pageCode ? 750 : 0}
						className="mb-4"
					>
						<p className="highlight2">感謝您參觀我的個人頁面！</p>
					</Rasing>
				</div>
			</div>
		</animated.div>
	);
};

export { ContactD, ContactM };
