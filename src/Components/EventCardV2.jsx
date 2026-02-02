const EventCardV2 = () => {

    return <div className="w-80 h-[25.5rem]  bg-[#0a0a0a] mb-8 rounded-md flex flex-col ">
        <div className="p-6 flex-1 flex flex-col justify-between border-3 border-b-0 border-[#d4af37]">
            <div className="flex justify-between mb-2">
                <p className=" text-[0.7rem] tracking-[3px] uppercase text-[#d4af37] font-bold">
                    Blockbuster
                </p>
                <i className="fa-solid fa-clapperboard text-5xl text-[#d4af37]"></i>
            </div>
            <div>
                <h3 className="b-3 font-['Limelight'] text-[2.1rem]">
                    Treasure Hunt
                </h3>
                <p className="text-[0.95rem] leading-relaxed text-[#bbb]">
                    Decode cryptic clues, chase hidden locations, and race against time in this cinematic hunt.
                </p>
            </div>
        </div>

        <div className="
        rip text-slate-900
        before:bg-gray-900
        after:bg-gray-900
        bg-[repeating-linear-gradient(to_right,currentColor_0_4px,transparent_4px_8px)]
        bg-center">
        </div>
        <div className=" flex justify-center p-6 pt-4 gap-6 border-3 border-t-0 border-[#d4af37]">
        <button className="border border-[#d4af37] bg-transparent
        px-4 py-2 text-[0.75rem] font-bold uppercase tracking-wider
        text-[#d4af37] transition
        hover:bg-[#d4af37] hover:text-black w-30">
                <div>Know</div>
                <div>More</div>
            </button>
            <button className="bg-[#d4af37] px-4 py-2
            text-[0.75rem] font-bold uppercase tracking-wider
            text-black transition
            hover:shadow-[0_0_15px_rgba(212,175,55,0.6)] w-30">
                <div>Register</div>
            </button>
        </div>
    </div>
}

export default EventCardV2;

/*
<div class="event-card">
    <p class="category">Blockbuster</p>
    <h3 class="event-title">Treasure Hunt</h3>
    <p class="event-desc">
        Decode cryptic clues, chase hidden locations,
        and race against time in this cinematic hunt.
    </p>
    <div class="buttons">
        <button class="btn-outline">Know More</button>
        <button class="btn-gold">Register</button>
    </div>
</div>*/
