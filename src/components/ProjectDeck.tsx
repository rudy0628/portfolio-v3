import React, { useState, useEffect } from 'react';
import * as easing from 'd3-ease';
import {
	useSprings,
	animated,
	to as interpolate,
	useSpring,
} from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import { cards } from '../utils/card';
import { IProject } from '../type';

interface IProps {
	show: boolean;
	watchingProject: IProject | undefined;
	toggleWatchProject: (project: IProject | undefined) => void;
	page: number;
}

const pageCode = 3;

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = (i: number) => ({
	x: 0,
	y: i * -4,
	scale: 1,
	rot: -10 + Math.random() * 20,
	delay: i * 100,
});
const from = (_i: number) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });

// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r: number, s: number) =>
	`perspective(1500px) rotateX(30deg) rotateY(${
		r / 10
	}deg) rotateZ(${r}deg) scale(${s})`;

const ProjectDeckD = ({
	show,
	watchingProject,
	toggleWatchProject,
	page,
}: IProps) => {
	// The set flags all the cards that are flicked out
	const [gone] = useState(() => new Set());

	// Create a bunch of springs using the helpers above
	const [props, api] = useSprings(cards.length, i => ({
		...to(i),
		from: from(i),
	}));

	useEffect(() => {
		// if page is change, bring the gone cards back
		if (page !== pageCode) {
			gone.clear();
			api.start(i => to(i));
		}
	}, [page]);

	// Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
	const bind = useDrag(
		({
			args: [index],
			down,
			movement: [mx],
			direction: [xDir],
			velocity,
		}: any) => {
			// If you flick hard enough it should trigger the card to fly out
			const trigger = velocity[0] > 0.2;

			// Direction should either point left or right
			const dir = xDir < 0 ? -1 : 1;

			// If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
			if (!down && trigger) gone.add(index);

			api.start(i => {
				// We're only interested in changing spring-data for the current spring
				if (index !== i) return;
				const isGone = gone.has(index);

				// When a card is gone it flys out left or right, otherwise goes back to zero
				const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0;

				// How much the card tilts, flicking it harder makes it rotate faster
				const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0);

				// Active cards lift up a bit
				const scale = down ? 1.1 : 1;

				return {
					x,
					rot,
					scale,
					delay: undefined,
					config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
				};
			});
			if (!down && gone.size === cards.length)
				setTimeout(() => {
					gone.clear();
					api.start(i => to(i));
				}, 600);
		}
	);

	// Create deck spring
	const deckSpring = useSpring({
		from: {
			scale: 0,
			opacity: 0,
		},
		to: {
			scale: show ? 1 : 0,
			opacity: show ? 1 : 0,
		},
		delay: show ? 1200 : 0,
		config: {
			easing: easing.easeCubicInOut,
		},
	});

	// Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
	return (
		<animated.div
			className="flex h-full justify-center items-center bg-white w-full relative"
			style={{ ...deckSpring }}
		>
			{props.map(({ x, y, rot, scale }, i) => {
				// Create card spring
				const cardSpring = useSpring({
					from: {
						transform: 'scale(1)',
					},
					to: {
						transform: watchingProject === cards[i] ? 'scale(10)' : 'scale(1)',
					},
					config: {
						easing: easing.easeCubicInOut,
					},
				});

				return (
					<animated.div
						className="deck"
						key={i}
						style={{ x, y, ...cardSpring }}
					>
						{/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
						<animated.div
							{...bind(i)}
							style={{
								transform: interpolate([rot, scale], trans),
								overflow: 'hidden',
							}}
							onDoubleClick={() => toggleWatchProject(cards[i])}
						>
							<div
								className="h-[80%] cardImage"
								style={{ backgroundImage: `url(${cards[i].image})` }}
							/>
							<div className="p-4">
								<p className="text-sm text-zinc-700 mb-2">
									{cards[i].category}
								</p>
								<p>{cards[i].title}</p>
							</div>
						</animated.div>
					</animated.div>
				);
			})}
		</animated.div>
	);
};

const ProjectDeckM = ({
	show,
	watchingProject,
	toggleWatchProject,
	page,
}: IProps) => {
	// The set flags all the cards that are flicked out
	const [gone] = useState(() => new Set());

	// Create a bunch of springs using the helpers above
	const [props, api] = useSprings(cards.length, i => ({
		...to(i),
		from: from(i),
	}));

	useEffect(() => {
		// if page is change, bring the gone cards back
		if (page !== pageCode) {
			gone.clear();
			api.start(i => to(i));
		}
	}, [page]);

	// Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
	const bind = useDrag(
		({
			args: [index],
			down,
			movement: [mx],
			direction: [xDir],
			velocity,
		}: any) => {
			// If you flick hard enough it should trigger the card to fly out
			const trigger = velocity[0] > 0.2;

			// Direction should either point left or right
			const dir = xDir < 0 ? -1 : 1;

			// If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
			if (!down && trigger) gone.add(index);

			api.start(i => {
				// We're only interested in changing spring-data for the current spring
				if (index !== i) return;
				const isGone = gone.has(index);

				// When a card is gone it flys out left or right, otherwise goes back to zero
				const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0;

				// How much the card tilts, flicking it harder makes it rotate faster
				const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0);

				// Active cards lift up a bit
				const scale = down ? 1.1 : 1;

				return {
					x,
					rot,
					scale,
					delay: undefined,
					config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
				};
			});
			if (!down && gone.size === cards.length)
				setTimeout(() => {
					gone.clear();
					api.start(i => to(i));
				}, 600);
		}
	);

	// Create deck spring
	const deckSpring = useSpring({
		from: {
			scale: 0,
			opacity: 0,
		},
		to: {
			scale: show ? 1 : 0,
			opacity: show ? 1 : 0,
		},
		delay: show ? 1200 : 0,
		config: {
			easing: easing.easeCubicInOut,
		},
	});

	// Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
	return (
		<animated.div
			className="h-full bg-white w-full relative pt-5"
			style={{ ...deckSpring }}
		>
			{props.map(({ x, y, rot, scale }, i) => {
				// Create card spring
				const cardSpring = useSpring({
					from: {
						transform: 'scale(1)',
					},
					to: {
						transform: watchingProject === cards[i] ? 'scale(10)' : 'scale(1)',
					},
					config: {
						easing: easing.easeCubicInOut,
					},
				});

				return (
					<animated.div
						className="deck-mobile"
						key={i}
						style={{ x, y, ...cardSpring }}
					>
						{/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
						<animated.div
							{...bind(i)}
							style={{
								transform: interpolate([rot, scale], trans),
								overflow: 'hidden',
							}}
							onDoubleClick={() => toggleWatchProject(cards[i])}
						>
							<div
								className="h-[80%] cardImage"
								style={{ backgroundImage: `url(${cards[i].image})` }}
							/>
							<div className="p-4">
								<p className="text-sm text-zinc-700 mb-2">
									{cards[i].category}
								</p>
								<p>{cards[i].title}</p>
							</div>
						</animated.div>
					</animated.div>
				);
			})}
		</animated.div>
	);
};

export { ProjectDeckD, ProjectDeckM };
