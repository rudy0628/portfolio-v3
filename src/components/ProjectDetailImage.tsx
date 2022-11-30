import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

// import required modules
import { EffectCube, Pagination } from 'swiper';

import { useTranslation } from 'react-i18next';

interface IProps {
	detailImages: string[];
	detailImageAlt: string;
}

const ProjectDetailImage = ({ detailImages, detailImageAlt }: IProps) => {
	const { t } = useTranslation();

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

			<p className="absolute z-[100] bottom-[-40%]  md:bottom-[-28%] lg:bottom-[-18%] left-[50%] text-sm text-zinc-500 translate-x-[-50%] translate-y-[-50%] w-full text-center">
				{t('utils.左右滑動查看更多圖片')}
			</p>
		</Swiper>
	);
};

export default ProjectDetailImage;
