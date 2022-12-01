import React, { useState, useEffect } from 'react';
import i18n from 'i18next';
import {
	TopNav,
	SocialLinks,
	ScrollIndicatorD,
	ScrollIndicatorM,
} from './components';
import {
	WelcomeD,
	WelcomeM,
	AboutD,
	AboutM,
	SkillsD,
	SkillsM,
	ProjectsD,
	ProjectsM,
	ContactD,
	ContactM,
} from './pages';

function App() {
	const [mobile, setMobile] = useState<boolean>(false);
	const [page, setPage] = useState<number>(0);

	const locateSection = (scrollY: number) => {
		const pageBreakPoints = [0, 1, 1200, 2400, 3600, 4800];

		for (let i = 0; i < pageBreakPoints.length; i++) {
			if (scrollY >= pageBreakPoints[i] && scrollY < pageBreakPoints[i + 1]) {
				setPage(i);
				return;
			}
		}
	};

	useEffect(() => {
		if (window.innerWidth <= window.innerHeight) {
			setMobile(true);
		}

		// scroll listener
		window.addEventListener('scroll', () => {
			locateSection(window.scrollY);
		});

		// locate the section of begin
		locateSection(window.scrollY);

		// According user location to decide the website language
		navigator.geolocation.getCurrentPosition(position => {
			fetch(
				`https://maps.googleapis.com/maps/api/geocode/json?latlng=${
					position.coords.latitude
				},${position.coords.longitude}&key=${
					import.meta.env.VITE_GOOGLE_MAPS_API
				}`,
				{
					method: 'GET',
				}
			)
				.then(response => {
					return response.json();
				})
				.then(data => {
					const resultsLen = data.results.length;
					const countryCode =
						data.results[
							resultsLen - 1
						].address_components[0].short_name.toLowerCase();
					i18n.changeLanguage(countryCode);
				});
		});
	}, []);

	if (mobile) {
		return (
			<div className="py-[32px] px-[5%] h-full w-full fixed">
				<TopNav />
				<ScrollIndicatorM page={page} />
				<WelcomeM page={page} />
				<AboutM page={page} />
				<SkillsM page={page} />
				<ProjectsM page={page} />
				<ContactM page={page} />
			</div>
		);
	} else {
		return (
			<div className="py-[32px] px-[5%] h-full w-full fixed">
				<TopNav />
				<SocialLinks />
				<ScrollIndicatorD page={page} />
				<WelcomeD page={page} />
				<AboutD page={page} />
				<SkillsD page={page} />
				<ProjectsD page={page} />
				<ContactD page={page} />
			</div>
		);
	}
}

export default App;
