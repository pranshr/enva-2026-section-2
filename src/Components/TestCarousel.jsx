// import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";



const TestCarousel = () => {


    const createImgDiv = (image) => {
        return <div className="snap-center shrink-0 w-[80%] px-2">
            <img src={image} className="w-full" />
        </div>
    };

    const scrollCarousel = () => {
        let elementWidth = scrollRef.current.scrollWidth / slides.length;
        let index = Math.floor(scrollRef.current.scrollLeft / elementWidth);
        console.log(index);

        if (index === 0) { scrollRef.current.scrollLeft = elementWidth * (images.length + 1); }
        if (index === images.length + 1) {scrollRef.current.scrollLeft = elementWidth; }
    }


    const images = [
        "https://www.topgear.com/sites/default/files/2025/12/1128_T008.jpg?w=892&h=502",
        "https://www.topgear.com/sites/default/files/2025/12/1128_T009.jpg?w=892&h=502",
        "https://www.topgear.com/sites/default/files/2025/12/1128_T010.jpg?w=892&h=502",
        "https://www.topgear.com/sites/default/files/2025/12/1202_G009.jpg?w=892&h=502",
        "https://www.topgear.com/sites/default/files/2025/12/1202_G010.jpg?w=892&h=502",
        "https://www.topgear.com/sites/default/files/2025/12/1202_G014.jpg?w=892&h=502",
        "https://www.topgear.com/sites/default/files/2025/12/1202_G015.jpg?w=892&h=502"
    ]

    const slides = [createImgDiv(images[images.length - 1]),
                    ...images.map(createImgDiv),
                    createImgDiv(images[0])
                    ];


    // const [ curr, setCurr ] = useState(0);
    const scrollRef = useRef(null);

    const prev = () => {
        scrollRef.current.scrollBy({
            left: -scrollRef.current.clientWidth,
            behavior: "smooth",
        });
    };
    const next = () => {
        scrollRef.current.scrollBy({
            left: scrollRef.current.clientWidth,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        scrollRef.current.scrollLeft  = scrollRef.current.clientWidth;
        console.log(scrollRef.current.scrollWidth)
    });

    return <div className="">
        <div className="overflow-y-hidden overflow-x-auto w-[60rem] h-90 snap-mandatory snap-x hide-scroll scroll-pl-[10%] scroll-pr-[10%] flex"
             ref={scrollRef}
             onScroll={scrollCarousel}
        >
            {slides}
        </div>
        <div>
            <button className="size-10 bg-white text-slate-900 mx-2 my-4" onClick={next}>   {"+"}   </button>
            <button className="size-10 bg-white text-slate-900 mx-2 my-4" onClick={prev}>   {"-"}   </button>
        </div>
    </div>

}

export default TestCarousel;
