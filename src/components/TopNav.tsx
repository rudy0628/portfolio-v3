import React from 'react';
import i18n from 'i18next';
import Select from 'react-select';

const options = [
	{ value: 'zh_tw', label: '繁' },
	{ value: 'zh_cn', label: '简' },
	{ value: 'en', label: 'Eng' },
];

const TopNav = () => {
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
				defaultValue={options[0]}
				onChange={(e: any) => i18n.changeLanguage(e.value)}
			/>
		</div>
	);
};

export default TopNav;
