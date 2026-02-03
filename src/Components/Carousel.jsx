import { useRef, useEffect, useState } from "react";
import CarouselSlide from "./CarouselSlide";

const Carousel = () => {
    const autoSlideTimer = 2500;
    const pauseAutoSlideTimer = 5500;


    let images = [];
    for (let i=1; i <=15; i++) {
        images[i-1] = `/About/image${i}.jpg`
    }

    const scrollRef = useRef(null);
    const intervalRef = useRef(null);
    const resumeTimeoutRef = useRef(null);
    const scrollTimeout = useRef(null);
    const lastScrollLeft = useRef(0);
    const [slideWidth, setSlideWidth] = useState(0);


    const slides = [
        <CarouselSlide key="clone-start-2" image={images[images.length - 2]} />,
        <CarouselSlide key="clone-start-1" image={images[images.length - 1]} />,
        ...images.map((img, i) => <CarouselSlide key={i} image={img} />),
        <CarouselSlide key="clone-end-1" image={images[0]} />,
        <CarouselSlide key="clone-end-2" image={images[1]} />,
        <CarouselSlide key="clone-end-3" image={images[2]} />,
    ];


    useEffect(() => {
        const updateWidth = () => {
            if (scrollRef.current) {
                const firstSlide = scrollRef.current.children[0];
                setSlideWidth(firstSlide.offsetWidth);
            }
        };
        updateWidth();
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    // Auto-scroll
    const startAutoScroll = () => {
        if (intervalRef.current) return;
        intervalRef.current = setInterval(() => next(true), autoSlideTimer);
    };

    const stopAutoScroll = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
    };

    const pauseAutoScroll = () => {
        stopAutoScroll();
        clearTimeout(resumeTimeoutRef.current);
        resumeTimeoutRef.current = setTimeout(startAutoScroll, pauseAutoSlideTimer);
    };


    const scrollOne = (direction = "next") => {
        if (!scrollRef.current || !slideWidth) return;
        const container = scrollRef.current;
        const delta = direction === "next" ? slideWidth : -slideWidth;
        const target = container.scrollLeft + delta;

        container.scrollTo({ left: target, behavior: "smooth" });

        const firstRealIndex = 2;
        const lastRealIndex = images.length + 1;

        const checkScroll = () => {
            const index = container.scrollLeft / slideWidth;
            // If scroll finished, check for wrap
            if (Math.abs(container.scrollLeft - target) < 1) {
                container.style.scrollBehavior = "auto";
                if (direction === "next" && index >= lastRealIndex + 0.5) {
                    container.scrollLeft = firstRealIndex * slideWidth;
                } else if (direction === "prev" && index <= firstRealIndex - 0.5) {
                    container.scrollLeft = lastRealIndex * slideWidth;
                }
                container.style.scrollBehavior = "smooth";
            } else {
                requestAnimationFrame(checkScroll);
            }
        };
        requestAnimationFrame(checkScroll);
    };

    const next = (auto = false) => {
        scrollOne("next");
        if (!auto) pauseAutoScroll();
    };

        const prev = () => {
            scrollOne("prev");
            pauseAutoScroll();
        };


        const handleScroll = () => {
            if (!scrollRef.current || !slideWidth) return;
            const container = scrollRef.current;

            clearTimeout(scrollTimeout.current);
            scrollTimeout.current = setTimeout(() => {
                const index = container.scrollLeft / slideWidth;
                const firstRealIndex = 2;
                const lastRealIndex = images.length + 1;

                const goingForward = container.scrollLeft > lastScrollLeft.current;
                lastScrollLeft.current = container.scrollLeft;

                container.style.scrollBehavior = "auto";

                if (goingForward && index >= lastRealIndex + 0.5) {
                    container.scrollLeft = firstRealIndex * slideWidth;
                } else if (!goingForward && index <= firstRealIndex - 0.5) {
                    container.scrollLeft = lastRealIndex * slideWidth;
                }

                container.style.scrollBehavior = "smooth";
            }, 20);
        };


        useEffect(() => {
            if (scrollRef.current && slideWidth) {
                scrollRef.current.scrollLeft = 2 * slideWidth; // start at first real slide
                startAutoScroll();
            }
            return stopAutoScroll;
        }, [slideWidth]);

        return <div className="relative w-full">
            <div
            ref={scrollRef}
            className="h-80 md:h-96  flex overflow-x-auto scroll-smooth snap-x snap-mandatory hide-scroll mask-x-from-85% mask-x-to-95%"
            style={{scrollbarWidth: "none"}}
            onScroll={handleScroll}
            onMouseEnter={stopAutoScroll}
            onMouseLeave={startAutoScroll}
            >
                {slides}
            </div>

            <div className="flex justify-center gap-4 pt-4 font-bold text-lg">
                <button
                className="size-8 leading-none bg-[#d4af37] text-[#010101] rounded-sm hover:bg-transparent hover:border-2 hover:border-[#d4af37] hover:text-[#d4af37] active:bg-transparent active:border-2 active:border-[#d4af37] active:text-[#d4af37]"
                onClick={prev}
                >
                    <i className="fa-solid fa-angle-left"></i>
                </button>
                <button
                className="size-8 leading-none bg-[#d4af37] text-[#010101] rounded-sm hover:bg-transparent hover:border-2 hover:border-[#d4af37] hover:text-[#d4af37] active:bg-transparent active:border-2 active:border-[#d4af37] active:text-[#d4af37]"
                onClick={next}
                >
                    <i className="fa-solid fa-angle-right"></i>
                </button>
            </div>
        </div>

};

export default Carousel;
