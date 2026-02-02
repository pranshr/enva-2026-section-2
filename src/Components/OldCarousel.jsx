import { useState } from "react";


const Carousel = () => {

    const images = [
        "https://www.topgear.com/sites/default/files/2025/12/1128_T008.jpg?w=892&h=502",
        "https://www.topgear.com/sites/default/files/2025/12/1128_T009.jpg?w=892&h=502",
        "https://www.topgear.com/sites/default/files/2025/12/1128_T010.jpg?w=892&h=502",
        "https://www.topgear.com/sites/default/files/2025/12/1202_G009.jpg?w=892&h=502",
        "https://www.topgear.com/sites/default/files/2025/12/1202_G010.jpg?w=892&h=502",
        "https://www.topgear.com/sites/default/files/2025/12/1202_G014.jpg?w=892&h=502",
        "https://www.topgear.com/sites/default/files/2025/12/1202_G015.jpg?w=892&h=502"]

    const slides = [ images.map((image) => {

        return <img src={image} />

    }) ];

    const [index, setIndex] = useState(0);

    const prev = () =>
    setIndex((index) => (index === 0 ? items.length - 1 : i - 1));

    const next = () =>
    setIndex((index) => (index === items.length - 1 ? 0 : i + 1));


    return <div className="bg-slate-900 mx-16 my-6 h-[350px] rounded-xl">
    <div className="overflow-hidden hide-scroll rounded-xl gap-6 h-[300px]">
    <div className="flex" style={{ transform: `translateX(-${index*100}%)` }}>
    {slides}
    </div>
    </div>
    <div className="flex gap-2">
    <button className="size-8 bg-white text-slate-900 rounded-full mt-2 font-bold" onClick={prev}>
    {'<'}
    </button>
    <button className="size-8 bg-white text-slate-900 rounded-full mt-2 font-bold" onClick={next}>
    {'>'}
    </button>
    </div>
    </div>
}

export default Carousel;
