export default function Intro(){

    return (
        <section className='container mx-auto mt-15'>
        <div className='flex justify-center items-center h-screen w-auto gap-x-10 lg:gap-x-30'>

            <div className='relative  w-1/2 rotate-[-10deg]'>
            <div className='overflow-hidden'>
                <img src="cover.png" alt="game cover art" className='w-full h-auto aspect-3/4 object-cover' />
            </div>

            <div className='z-2 absolute bottom-0 right-0 lg:-right-39' >
                <img src="stamp.png" alt="stamp art" className='w-1/2 lg:w-full' />
            </div>
            </div>

            <div className='flex-col w-1/2 text-center'>
                <h2 className='font-[La_Machine_Company] text-6xl text-center'>About The Game</h2>
                <p className='font-[SilkRemington-RRough] '>It is March 8th, 1925. To celebrate the birthday of Robin, The Family, is having a party at OOOOO. The party seems endless ...until a shot rings out, and XXX is found dead.
                    Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                    Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                    Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            </div>
        </div>
    </section>);
}