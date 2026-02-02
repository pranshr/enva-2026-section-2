// import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";



const TestCarousel = () => {

    const createImgDiv = (image) => {

        let i = images.findIndex((element) => element === image);

        return <div className="snap-center shrink-0 w-[80%]" key={i}>
            <div className="bg-black flex flex-col justify-around items-center h-full py-2">

                <div className="w-full flex justify-around ">
                {Array(12).fill(12).map(() => {return <div className="bg-slate-900 rounded-md w-6 h-8"></div>})}
                </div>

                <img src={image} className="h-90 rounded-md" />

                <div className="w-full flex justify-around ">
                {Array(12).fill(12).map(() => {return <div className="bg-slate-900 rounded-md w-6 h-8"></div>})}

                </div>
            </div>
        </div>
    };



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



    const scrollCarousel = () => {
        let elementWidth = scrollRef.current.scrollWidth / slides.length;
        let index = Math.round(scrollRef.current.scrollLeft / elementWidth);
        console.log(index);

        if (index === 1) { scrollRef.current.scrollLeft = elementWidth * (images.length + 1); }
        if (index === images.length + 2) {scrollRef.current.scrollLeft = elementWidth * 2; }
    }

    useEffect(() => {
        scrollRef.current.scrollLeft  = scrollRef.current.scrollWidth / slides.length * 2
    }, []);

    return <div className="">

        <div className="overflow-y-hidden overflow-x-auto w-[55rem] h-[31rem] snap-mandatory snap-x hide-scroll scroll-pl-[10%] scroll-pr-[10%] flex"
        ref={scrollRef}
        onScrollEnd={scrollCarousel}
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
