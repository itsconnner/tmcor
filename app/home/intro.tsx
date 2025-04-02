
export default function Intro()
{
    return (
        <section className='container mx-auto xl:h-screen min-h-screen w-full'>

            <div className='h-full flex flex-col
                            xl:flex-row justify-center items-center gap-y-10
                            md:gap-y-20 gap-x-20'>

                <div className='relative w-1/2 xl:w-full flex justify-center
                                mt-20 mb-10 xl:my-0 pointer-events-none select-none'>

                    <div className='absolute bottom-0 -right-2/7
                                    xl:right-0 w-3/5 xl:w-1/3 z-1'>
                        <img src='stamp.png' alt='stamp art'/>
                    </div>

                    <div className='rotate-[-10deg]'>
                        <img src='cover.jpg' alt='game cover art' className='aspect-3/4 object-cover'/>
                    </div>

                </div>

                <div className='w-full text-center'>
                    <h2 className='font-[La_Machine_Company] text-3xl md:text-6xl mb-5 md:mb-10 xl:mb-15'>About The Game</h2>
                    <p className='font-[SilkRemington-RRough] w-6/7
                                    xl:w-3/4 mx-auto text-xl
                                    xl:text-2xl leading-8 xl:leading-10'>
                        It is August 1923. To celebrate the birthday of the famous star Robin, The Family has decided to host a grand party at XXX, where all invited guests can indulge in a night of endless revelry. Among the invitees is the renowned New York detective, Clocky.

                        However, what was meant to be a night of joy comes to an abrupt end with the sound of a gunshot. The star of the banquet—Robin—is found dead in her room.
                    </p>
                </div>

            </div>
        </section>);
}
