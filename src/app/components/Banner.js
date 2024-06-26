'use client';
import Image from 'next/image';
import React from 'react';
import ReactDOM from 'react-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
export default function Banner({ className }) {
	return (
		<>
			<Carousel
				showArrows={true}
				infiniteLoop={true}
				autoPlay={true}
				showStatus={false}
				className={`rounded-2xl ${className}`}
			>
				<div>
					<Image
						src="/assets/baner.png"
						width={0}
						height={0}
						sizes="100vw"
						className="w-100 h-[10em] lg:h-[60vh] object-fill rounded"
					/>
				</div>
				<div>
					<Image
						src="/assets/baner.png"
						width={0}
						height={0}
						sizes="100vw"
						className="w-100 h-[10em] lg:h-[60vh] object-contain rounded"
					/>
				</div>
			</Carousel>
		</>
	);
}
