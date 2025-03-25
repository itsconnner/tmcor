export default function Intro(){

    return (
        <section className='container mx-auto mt-15'>
        <div className='flex items-center h-screen w-auto gap-x-10 lg:gap-x-40'>

            <div className='relative  w-1/2 max-w-[600px] rotate-[-10deg]'>
            <div className='overflow-hidden'>
                <img src="cover.png" alt="game cover art" className='w-full h-auto aspect-3/4 object-cover'/>
            </div>

            <div className='z-2 absolute bottom-0 right-0 lg:-right-39 rotate-[10deg] w-[300px]'>
                <img src="stamp.png" alt="stamp art" className='w-1/2 lg:w-full'/>
            </div>
            </div>

            <div className='flex-col w-1/2 text-center'>
                <h2 className='font-[La_Machine_Company] text-6xl  mb-15'>About The Game</h2>
                <p className='font-[SilkRemington-RRough] w-2/3 mx-auto'>It is March 8th, 1925. To celebrate the birthday of Robin, The Family, is having a party at OOOOO. The party seems endless ...until a shot rings out, and XXX is found dead.It is March 8th, 1925. To celebrate the birthday of Robin, The Family, is having a party at OOOOO. The party seems endless ...until a shot rings out, and XXX is found dead.
</p>
            </div>
        </div>
    </section>);
}