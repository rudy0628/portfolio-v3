import React, { useState, useEffect } from 'react';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import Select from 'react-select';

const options = [
	{ value: 'tw', label: '繁' },
	{ value: 'cn', label: '简' },
	{ value: 'en', label: 'Eng' },
	{ value: 'kr', label: '한국어' },
	{ value: 'jp', label: '日本語' },
];

const TopNav = () => {
	const { i18n } = useTranslation();
	const [defaultLanguage, setDefaultLanguage] = useState(options[0]);

	useEffect(() => {
		const language: any = options.find(
			option => option.value === i18n.language
		);
		setDefaultLanguage(language);
	}, []);

	return (
		<div className="flex lg:w-[90%] w-[100%] items-center justify-between h-[5vh] z-[5000] p-0">
			<h5
				className="text-xl font-extrabold m-0 cursor-pointer"
				onClick={() => window.scrollTo(0, 0)}
			>
				Rudy Yeh
			</h5>
			<Select
				options={options}
				defaultValue={defaultLanguage}
				onChange={(e: any) => i18n.changeLanguage(e.value)}
				className="z-[500]"
			/>
		</div>
	);
};

export default TopNav;
