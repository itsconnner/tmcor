
import { useState } from 'react';
import heroFilter from '~/home/Filter';
// import { useScramble } from "use-scramble";


export default function Header() {
    const [open, set_open] = useState(0);

    return (
        <header className={ heroFilter('fixed w-full touch-pan-y pt-4 px-6 z-39',
            'text-2xl font-medium **:uppercase',
            open && 'touch-none') }>

            <div className={ heroFilter('absolute xl:hidden left-0 top-0 h-screen w-screen',
                'transition-color duration-400',
                open && 'touch-none bg-[#020409]/80 h-full') }
            />

            <div className='relative flex justify-between'>

                <div className='w-2/4 sm:w-[300px]'>
                    <img src="logo.png" alt="logo"/>
                </div>

                <div className='*:items-center *:h-full'>

                    <div className='hidden xl:flex gap-16 mt-4 mr-10'>
                        <button>• about</button>
                        <button>• [ EN ] /CN</button>
                        <button>• pre-order now</button>
                    </div>

                    <div onClick={() => set_open((prevState) => !prevState)} className='xl:hidden flex mt-1'>
                        <span className='mr-3 pt-2'>menu</span>
                        <div className='*:relative *:h-1 *:w-8 *:bg-[#E1E1E1]
                        *:rounded-3xl *:transition-all *:duration-200'>
                            <div className={ heroFilter('top-0', open && 'rotate-45 top-[10px]') }/>
                            <div className={ heroFilter('top-0 my-[6px]',
                                open && 'rotate-45 opacity-0') }/>
                            <div className={ open ? '-rotate-45 -top-[10px]' : 'top-0' }/>
                        </div>
                    </div>

                </div>

                <ul className={ heroFilter('absolute xl:hidden left-0 top-full',
                    'w-full h-screen mt-15',
                    '*:w-full *:py-5 text-3xl',
                    '*:flex *:flex-col *:justify-between',
                    '*:transition-all *:duration-200',
                    open ? '*:opacity-100 *:translate-y-0' : '*:opacity-0 *:-translate-y-10') }>

                    <li>
                        <button>• about</button>
                    </li>

                    <li className='delay-100'>
                        <button>• [ EN ] /CN</button>
                    </li>

                    <li className='delay-200'>
                        <button>• pre-order now</button>
                    </li>

                </ul>
            </div>
        </header>);
}
