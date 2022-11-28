import React, { useEffect, useState } from 'react';
import * as easing from 'd3-ease';
import { useSpring, animated } from '@react-spring/web';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

// import required modules
import { EffectCube, Pagination } from 'swiper';

interface IProps {
	watchingProjectOpened: boolean;
	detailImages: string[];
	detailImageAlt: string;
}

const ProjectDetailImage = ({
	watchingProjectOpened,
	detailImages,
	detailImageAlt,
}: IProps) => {
	const [showAlertText, setShowAlertText] = useState<boolean>(true);
	const alertTextSpring = useSpring({
		from: {
			transform: 'translate(-50%, -50%) rotate(-10deg)',
		},
		to: {
			transform: 'translate(-50%, -50%) rotate(10deg)',
		},
		loop: { reverse: true },
		config: {
			easing: easing.easeCubicInOut,
			duration: 500,
		},
	});

	useEffect(() => {
		const showAlertTimeout = setTimeout(() => {
			setShowAlertText(false);
		}, 2500);

		return () => clearTimeout(showAlertTimeout);
	}, []);

	return (
		<Swiper
			effect={'cube'}
			grabCursor={true}
			cubeEffect={{
				shadow: true,
				slideShadows: true,
				shadowOffset: 20,
				shadowScale: 0.94,
			}}
			pagination={true}
			modules={[EffectCube, Pagination]}
			className="mySwiper"
		>
			{detailImages.map((image: string, i) => (
				<SwiperSlide key={i}>
					<img src={image} alt={`${detailImageAlt}${i + 1}`} />
				</SwiperSlide>
			))}
			{showAlertText && detailImages.length > 1 && (
				<animated.p
					className="absolute z-[100] top-[50%] left-[50%] text-sm text-zinc-500"
					style={{ ...alertTextSpring }}
				>
					左右滑動查看更多圖片
				</animated.p>
			)}
		</Swiper>
	);
};

export default ProjectDetailImage;
