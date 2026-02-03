const CarouselSlide = (props) => {

    const { image } = props;
    const holesCount = 16;

    return <div className="snap-center shrink-0 aspect-screens border-y border-[#d4af37]">
        <div className="bg-neutral-900/30 flex flex-col justify-around items-center h-full py-3 lg:py-2">

            <div className="w-full flex justify-around mb-1">
            {Array(holesCount).fill(holesCount).map(() => {return <div className="bg-[#d4af37] rounded-xs w-[3%] mb-[0.3rem] lg:mb-0 aspect-22/32"></div>})}
            </div>

            <img src={image} className="h-[82%] w-[95%] rounded-md object-cover border-2 border-[#d4af37]" />

            <div className="w-full flex justify-around mt-1">
            {Array(holesCount).fill(holesCount).map(() => {return <div className="bg-[#d4af37] rounded-xs w-[3%]  mt-[0.3rem] lg:mt-0 aspect-22/32"></div>})}

            </div>
        </div>
    </div>
}

export default CarouselSlide;
