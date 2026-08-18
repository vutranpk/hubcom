'use client';

import { useScroll, useTransform, motion, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface Image {
	src: string;
	alt?: string;
}

interface ZoomParallaxProps {
	/** Array of images to be displayed in the parallax effect max 7 images */
	images: Image[];
}

export function ZoomParallax({ images }: ZoomParallaxProps) {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start start', 'end end'],
	});

    // The parallax math requires 7 slots. We repeat the provided images to fill exactly 7 slots.
    const paddedImages = Array.from({ length: 7 }, (_, i) => images[i % images.length] || { src: '/placeholder.svg' });

	// Cap the center image at exactly 4x (100vw/100vh) at 85% scroll, and hold it there.
	// This prevents the image from zooming more than 100% of the screen.
	const scaleCenter = useTransform(scrollYProgress, [0, 0.85, 1], [1, 4, 4]);
	const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
	const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
	const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
	const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

	const scales = [scaleCenter, scale5, scale6, scale5, scale6, scale8, scale9];

    // Lightbox Slider State
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

	const nextImage = (e?: React.MouseEvent) => {
		e?.stopPropagation();
		if (lightboxIndex !== null) {
			setLightboxIndex((prev) => (prev! + 1) % paddedImages.length);
		}
	};

	const prevImage = (e?: React.MouseEvent) => {
		e?.stopPropagation();
		if (lightboxIndex !== null) {
			setLightboxIndex((prev) => (prev! - 1 + paddedImages.length) % paddedImages.length);
		}
	};

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setLightboxIndex(null);
			if (e.key === 'ArrowRight') nextImage();
			if (e.key === 'ArrowLeft') prevImage();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightboxIndex]);

	return (
		<div ref={container} className="relative h-[300vh]">
			<div className="sticky top-0 h-screen overflow-hidden bg-[#05070B]">
				{paddedImages.map(({ src, alt }, index) => {
					const scale = scales[index % scales.length];

					return (
						<motion.div
							key={index}
							style={{ scale }}
							className={`absolute top-0 flex h-full w-full items-center justify-center pointer-events-none ${index === 1 ? '[&>div]:!-top-[30vh] [&>div]:!left-[5vw] [&>div]:!h-[30vh] [&>div]:!w-[35vw]' : ''} ${index === 2 ? '[&>div]:!-top-[10vh] [&>div]:!-left-[25vw] [&>div]:!h-[45vh] [&>div]:!w-[20vw]' : ''} ${index === 3 ? '[&>div]:!left-[27.5vw] [&>div]:!h-[25vh] [&>div]:!w-[25vw]' : ''} ${index === 4 ? '[&>div]:!top-[27.5vh] [&>div]:!left-[5vw] [&>div]:!h-[25vh] [&>div]:!w-[20vw]' : ''} ${index === 5 ? '[&>div]:!top-[27.5vh] [&>div]:!-left-[22.5vw] [&>div]:!h-[25vh] [&>div]:!w-[30vw]' : ''} ${index === 6 ? '[&>div]:!top-[22.5vh] [&>div]:!left-[25vw] [&>div]:!h-[15vh] [&>div]:!w-[15vw]' : ''} `}
						>
							<div 
                                className="relative h-[25vh] w-[25vw] cursor-zoom-in group rounded-2xl overflow-hidden shadow-2xl active:scale-95 border border-white/5 pointer-events-auto transition-transform"
                                onClick={() => setLightboxIndex(index)}
                            >
								<img
									src={src || '/placeholder.svg'}
									alt={alt || `Parallax image ${index + 1}`}
									className="h-full w-full object-cover"
								/>
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
							</div>
						</motion.div>
					);
				})}
			</div>

            {/* Lightbox Overlay Slider */}
            <AnimatePresence>
                {lightboxIndex !== null && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-12 backdrop-blur-xl"
                        onClick={() => setLightboxIndex(null)}
                    >
						{/* Close Button */}
                        <button 
                            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-[110] bg-white/10 hover:bg-white/20 rounded-full p-2 border border-white/10"
                            onClick={(e) => {
                                e.stopPropagation();
                                setLightboxIndex(null);
                            }}
                        >
                            <X size={24} />
                        </button>

						{/* Prev Button */}
						<button 
							className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-all z-[110] bg-white/5 hover:bg-white/10 hover:scale-110 rounded-full p-3 md:p-4 border border-white/10"
							onClick={prevImage}
						>
							<ChevronLeft size={32} />
						</button>

						{/* Next Button */}
						<button 
							className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-all z-[110] bg-white/5 hover:bg-white/10 hover:scale-110 rounded-full p-3 md:p-4 border border-white/10"
							onClick={nextImage}
						>
							<ChevronRight size={32} />
						</button>

						<AnimatePresence mode="wait">
							<motion.img 
								key={lightboxIndex}
								initial={{ opacity: 0, scale: 0.95, x: 20 }}
								animate={{ opacity: 1, scale: 1, x: 0 }}
								exit={{ opacity: 0, scale: 0.95, x: -20 }}
								transition={{ type: "spring", damping: 25, stiffness: 300 }}
								src={paddedImages[lightboxIndex].src} 
								alt="Lightbox expanded view" 
								className="max-h-full max-w-full object-contain rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] cursor-default select-none"
								onClick={(e) => e.stopPropagation()} 
							/>
						</AnimatePresence>

						{/* Counter */}
						<div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm tracking-widest font-sans">
							{lightboxIndex + 1} / {paddedImages.length}
						</div>
                    </motion.div>
                )}
            </AnimatePresence>
		</div>
	);
}
