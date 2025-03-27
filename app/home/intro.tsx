/* SPDX-License-Identifier: GPL-3.0-or-later */
/*
 * Copyright 2025 Yeyang Wang <autumnlikegirl@gmail.com>
 */

export default function Intro()
{
return (
<section className='container mx-auto md:h-screen min-h-screen w-full'>
  <div className='h-full flex flex-col xl:flex-row justify-center items-center gap-y-10 md:gap-y-20 gap-x-40'>
    <div className='relative w-4/7 md:w-1/2 xl:w-5/7 mt-10 md:mt-0 pointer-events-none select-none'>
      <div className='absolute bottom-0 -right-14 md:-right-24 xl:-right-39 w-1/2 z-1'>
        <img src='stamp.png' alt='stamp art'/>
      </div>
      <div className='rotate-[-10deg]'>
        <img src='cover.png' alt='game cover art' className='aspect-3/4 object-cover'/>
      </div>
    </div>
    <div className='w-full text-center'>
      <h2 className='font-[La_Machine_Company] text-3xl md:text-6xl mb-5 md:mb-10 xl:mb-15'>About The Game</h2>
      <p className='font-[SilkRemington-RRough] w-6/7 xl:w-3/4 mx-auto text-xl xl:text-2xl leading-8 xl:leading-10'>It is March 8th, 1925. To celebrate the birthday of Robin, The Family, is having a party at OOOOO. The party seems endless ...until a shot rings out, and XXX is found dead.It is March 8th, 1925. To celebrate the birthday of Robin, The Family, is having a party at OOOOO. The party seems endless ...until a shot rings out, and XXX is found dead.</p>
    </div>
  </div>
</section>);
}
