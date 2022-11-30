import React from 'react';

const InitialLoading = () => {
	return (
		<div className="w-[100vw] h-[100vh] fixed top-0 left-0 flex justify-center items-center">
			<div className="flex flex-col gap-4">
				<h1 className="text-5xl font-extrabold tracking-wide">Rudy Yeh</h1>
				<p className="text-2xl font-extrabold">Portfolio</p>
			</div>
		</div>
	);
};

export default InitialLoading;
