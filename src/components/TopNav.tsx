import React from 'react';

const TopNav = () => {
	return (
		<div className="flex lg:w-[90%] w-[100%] items-center justify-between h-[5vh] z-[5000] p-0">
			<h5
				className="text-xl font-extrabold m-0 cursor-pointer"
				onClick={() => window.scrollTo(0, 0)}
			>
				Rudy Yeh
			</h5>
			<div className="flex gap-8 items-center">
				<p className="font-semibold text-lg cursor-pointer">繁</p>
				<p
					className="font-semibold text-lg cursor-pointer"
					onClick={() => alert('Sorry, English version will be there soon!')}
				>
					Eng
				</p>
			</div>
		</div>
	);
};

export default TopNav;
