import React from 'react';

export default function Footer() {
	return (
		<footer className="mb-10 px-4 text-center text-gray-500">
			<small className="block mb-2 text-xs">
				&copy; 2024 Viktor Yadelskyi. All rights reserved.
			</small>
			<p className="text-xs">
				<span className="font-semibold">About this website:</span>build with
				React & Next.js, TypeScript, Tailwind CSS, Framer Motion, github pages
				hosting.
			</p>
		</footer>
	);
}
