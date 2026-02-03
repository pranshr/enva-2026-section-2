import "./EventCard.css"


const EventCard = (props) => {


    const { name, description, location } = props;


    return <div className="relative table-cell xl:hover:-translate-y-3 duration-300 ease-in-out group">

        <div className="absolute -inset-[0.1rem] rounded-xl blur-sm xl:group-hover:scale-101"
            style={{backgroundImage: 'linear-gradient(180deg,#d4af37 9%, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0) 78%)'}} />

            <div className="w-[20rem] bg-radial from-black via-zinc-900 via-65% to-zinc-800 mb-8 md:mb-0 rounded-xl flex flex-col font-[Poppins] relative">

                <div className=" border-3 border-b-0 border-[#d4af37] rounded-t-xl">

                    <div className="flex flex-col items-center p-4 pb-6">
                        <i className="fa-solid fa-clapperboard text-[3.75rem] text-[#d4af37] m-4"></i>
                        <div className="text-xs font-bold m-1 text-[#d4af37]">
                            EXCLUSIVE INVITATION
                        </div>
                        <div className="text-4xl font-semibold mb-1">
                            {name}
                        </div>
                        <div className="text-md lg:text-[0.85rem] text-center text-gray-500 mb-10 mx-4">
                            {description}
                        </div>

                        <div className="text-center bg-gradient-to-t from-[#2f2f2f] via-[#1d1d1d] to-[#1d1d1d] py-4 px-12 rounded-lg border-b-3 border-[#d4af37]">
                            <div className="text-xs font-[300] text-red-400">
                                LOCATION
                            </div>
                            <div className="text-2xl font-medium">
                                {location}
                            </div>
                        </div>

                    </div>
                </div>

                <div className="
                    rip text-[#d4af37]
                    before:bg-[#010101] before:
                    after:bg-[#010101]
                    bg-[repeating-linear-gradient(to_right,currentColor_0_4px,transparent_4px_8px)]
                    bg-center">
                </div>

                <div className="flex justify-center gap-5 px-4 pt-5 pb-6 text-lg font-semibold border-4 border-t-0 border-[#d4af37] rounded-b-sm">
                    <button className="border-3 border-[#d4af37] rounded-sm py-2 w-30 text-[#d4af37] xl:hover:border-o xl:hover:bg-[#d4af37] xl:hover:text-[#242424] active:border-o active:bg-[#d4af37] active:text-[#242424] hover:cursor-pointer">
                        INFO
                    </button>
                    <button className="bg-[#d4af37] rounded-sm py-2 w-30 text-slate-800 xl:hover:bg-transparent xl:hover:text-[#d4af37] xl:hover:border-3 xl:hover:border-[#d4af37] active:bg-transparent active:text-[#d4af37] active:border-3 active:border-[#d4af37] hover:cursor-pointer">
                        REGISTER
                    </button>
                </div>

            </div>



    </div>
}

export default EventCard;
