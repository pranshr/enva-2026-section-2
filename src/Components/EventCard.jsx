const EventCard = () => {

    return <div className="w-96 h-[30rem] bg-slate-800 mb-8 rounded-md flex flex-col ">
        <div className="flex-1 p-6">
            <div className="flex justify-between mb-12">
                <i className="fa-solid fa-clapperboard text-5xl text-yellow-200"></i>
                <div className="text-sm text-slate-500">AUDI_001</div>
            </div>
            <div className="text-5xl font-bold my-2 text-yellow-200">
                Event
            </div>
            <div className="">
                The ultimate chance to dive into the drama, glitz, and glamour of Hollywood!
            </div>
        </div>
        <div className="
            rip text-black before:bg-gray-900 after:bg-gray-900
            bg-[repeating-linear-gradient(to_right,currentColor_0_4px,transparent_4px_8px)]
            bg-center">
        </div>
        <div className="flex justify-around items-center p-4">
            <button className="bg-yellow-300 text-slate-800 rounded-[2px] px-8 py-3 font-medium">
                Know More
            </button>
        </div>

    </div>
}

export default EventCard;
