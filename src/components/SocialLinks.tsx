import React from 'react';
import { Instagram, Facebook, GitHub, Globe } from 'react-feather';
import LineIcon from './LineIcon';

interface IProps {
	className?: string;
}

const SocialLinks = ({ className }: IProps) => {
	return (
		<div
			className={
				className && className.length > 0
					? className
					: 'absolute z-[550] top-[50%] -translate-x-[50%] -translate-y-[50%] left-[90%] flex flex-col gap-6'
			}
		>
			<a
				href="https://www.instagram.com/ya.0628/"
				target="_blank"
				rel="noreferrer"
				className="block"
			>
				<Instagram />
			</a>
			<a
				href="https://www.facebook.com/s3352250/"
				target="_blank"
				rel="noreferrer"
				className="block"
			>
				<Facebook />
			</a>
			<a
				href="https://github.com/rudy0628"
				target="_blank"
				rel="noreferrer"
				className="block"
			>
				<GitHub />
			</a>
			<a
				href="https://blog.rudyyeh.dev"
				target="_blank"
				rel="noreferrer"
				className="block"
			>
				<Globe />
			</a>
			<a
				href="https://line.me/ti/p/ZO_picyri2"
				target="_blank"
				rel="noreferrer"
				className="block"
			>
				<LineIcon color="black" size={24} />
			</a>
		</div>
	);
};

export default SocialLinks;
