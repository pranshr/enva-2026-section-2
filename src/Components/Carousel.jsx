import { useRef } from "react";
import { useEffect } from "react";
import CarouselSlide from "./CarouselSlide";


const Carousel = () => {

    const createImgDiv = (image) => {
        return <CarouselSlide image={image} />
    };


    const autoSlideTimer = 2500
    const pauseAutoSlideTimer = 5500

    const images = [
        "https://www.topgear.com/sites/default/files/2025/12/1128_T008.jpg?w=892&h=502",
        "https://www.topgear.com/sites/default/files/2025/12/1128_T009.jpg?w=892&h=502",
        "https://www.topgear.com/sites/default/files/2025/12/1128_T010.jpg?w=892&h=502",
        "https://www.topgear.com/sites/default/files/2025/12/1202_G009.jpg?w=892&h=502",
        "https://www.topgear.com/sites/default/files/2025/12/1202_G010.jpg?w=892&h=502",
        "https://www.topgear.com/sites/default/files/2025/12/1202_G014.jpg?w=892&h=502",
        "https://www.topgear.com/sites/default/files/2025/12/1202_G015.jpg?w=892&h=502"
    ]

    const slides = [createImgDiv(images[images.length - 2]), createImgDiv(images[images.length - 1]),
    ...images.map(createImgDiv),
    createImgDiv(images[0]), createImgDiv(images[1])
    ];

    const scrollRef = useRef(null);
    const intervalRef = useRef(null);
    const resumeTimeoutRef = useRef(null);

    const prev = () => {
        scrollRef.current.scrollBy({
            left: -scrollRef.current.scrollWidth / slides.length,
            behavior: "smooth",
        });
    };

    const prevButton = () => {
        pauseAutoScroll();
        prev();
    }

    const next = () => {
        scrollRef.current.scrollBy({
            left: scrollRef.current.clientWidth / slides.length,
            behavior: "smooth",
        });
    };

    const nextButton = () => {
        pauseAutoScroll();
        next();
    }

    const scrollCarousel = () => {
        let elementWidth = scrollRef.current.scrollWidth / slides.length;
        let index = Math.round(scrollRef.current.scrollLeft / elementWidth);

        if (index === 1) { scrollRef.current.scrollLeft = elementWidth * (images.length + 1); }
        if (index === images.length + 2) {scrollRef.current.scrollLeft = elementWidth * 2; }
    }

    const startAutoScroll = () => {
        if (intervalRef.current) return; // prevent duplicates
        intervalRef.current = setInterval(next, autoSlideTimer);
    };

    const stopAutoScroll = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
    };

    const pauseAutoScroll = () => {
        stopAutoScroll();

        if (resumeTimeoutRef.current) {clearTimeout(resumeTimeoutRef.current)};

        resumeTimeoutRef.current = setTimeout(() => {
            startAutoScroll();
        }, pauseAutoSlideTimer);
    };



    useEffect(() => {
        scrollRef.current.scrollLeft  = scrollRef.current.scrollWidth / slides.length * 2
    }, []);

    useEffect(() => {
        startAutoScroll();
        return stopAutoScroll;
    }, [])



    return <div className="">

        <div className="h-53 md:h-80 overflow-y-hidden overflow-x-auto snap-mandatory snap-x hide-scroll scroll-pl-[10%] scroll-pr-[10%] flex
        mask-x-from-85% mask-x-to-95%"
        ref={scrollRef}
        onScrollEnd={scrollCarousel}
        onMouseEnter={stopAutoScroll}
        onMouseLeave={startAutoScroll}
        >
            {slides}
        </div>

        <div className="flex justify-center gap-4 pt-4 font-bold text-lg">
            <button className="size-8 leading-none bg-[#d4af37] text-[#010101] rounded-sm xl:hover:bg-transparent xl:hover:border-2 xl:hover:border-[#d4af37] xl:hover:text-[#d4af37] hover:cursor-pointer active:bg-transparent active:border-2 active:border-[#d4af37] active:text-[#d4af37]" onClick={prevButton}>
                <i className="fa-solid fa-angle-left"></i>
            </button>
            <button className="size-8 leading-none bg-[#d4af37] text-[#010101] rounded-sm xl:hover:bg-transparent xl:hover:border-2 xl:hover:border-[#d4af37] xl:hover:text-[#d4af37] hover:cursor-pointer active:bg-transparent active:border-2 active:border-[#d4af37] active:text-[#d4af37]" onClick={nextButton}>
                <i className="fa-solid fa-angle-right"></i>
            </button>
        </div>

    </div>

}

export default Carousel;
