import { useEffect, useRef } from "react";
import useAnimationFrame from "~/hooks/useAnimationFrame";


export default function Hero() {
    const cur = useRef({ x: 0, y: 0 });
    const bg : any = useRef(null);

    useAnimationFrame(() => {
        const x = cur.current.x * 0.5;
        const y = cur.current.y * 0.5;

        bg.current.style.transform = `translate3d(${x}px, ${y}px, 0px)`;
    });

    function sync_cur_pos(e: MouseEvent) {
        cur.current.x = -(e.clientX / window.innerWidth - 0.5) * 270;
        cur.current.y = -(e.clientY / window.innerHeight - 0.5) * 270;
    }

    useEffect(() => {
        window.addEventListener('mousemove', sync_cur_pos);

        return () => window.removeEventListener('mousemove', sync_cur_pos);
    }, []);

    return (
    <section className='relative h-screen w-screen'>
        <div className='absolute left-0 top-0 h-screen w-screen overflow-hidden'>
            <video ref={bg} src="hero.mp4"
                   className='min-h-[calc(100%+220px)] min-w-[calc(100%+520px)]
                              absolute -top-[110px] -left-[260px] object-cover'
                   autoPlay muted loop playsInline/>
        </div>
        {/* <div className='sticky h-lvh w-full overflow-clip'>
            <video ref={bg} src="https://redbarrelsgames.com/wp-content/uploads/2024/05/outlast_maison_test_V03_2.5k.mp4"
                   className='absolute object-cover
                              h-[calc(100%+560px)] w-[calc(100%+540px)]
                              -top-[110px]' width={2560} height={1440} muted loop playsInline disableRemotePlayback />
        </div> */}

    </section>);
}
