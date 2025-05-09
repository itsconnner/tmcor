
import { useEffect, useRef } from "react";
import useAnimationFrame from "~/hooks/useAnimationFrame";

export default function Hero() {
    /*mouse position*/
    const cursor = useRef({ x: 0, y: 0 });
    // offset
    const offset = useRef({ x: 0, y: 0 });
    const video : any = useRef(null);
    const mask : any = useRef(null);
    const container : any = useRef(null);

    useAnimationFrame(() => {
        offset.current.x += (cursor.current.x - offset.current.x) * 0.1;
        offset.current.y += (cursor.current.y - offset.current.y) * 0.1;

        const x = offset.current.x;
        const y = offset.current.y;

        video.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    });

    function sync_cur_pos(e: PointerEvent)
    {
	if (e.pointerType != "mouse")
		return;

        const pos = container.current.getBoundingClientRect();

        if (e.clientY > pos.bottom)
            return;

        const x = -(e.clientX / window.innerWidth - 0.5);
        const y = -(e.clientY / window.innerHeight - 0.5);

        cursor.current.x = Math.min(220, x * 220);
        cursor.current.y = Math.min(110, y * 110);
    }

    function fade_video()
    {
        const pos = mask.current.getBoundingClientRect();
        const center = window.innerHeight;

        const off = center - pos.bottom;
        const height = center + pos.height;

        const y = Math.max(Math.min(off / height, 1), 0);

        mask.current.style.setProperty('--scroll-opacity', y * 2);
    }

    function relocate_video()
    {
        cursor.current.x = 0;
        cursor.current.y = 0;
    }

    useEffect(() => {
        window.addEventListener('pointermove', sync_cur_pos);
        window.addEventListener('scroll', fade_video);
        window.addEventListener('resize', relocate_video);

        return () => {
            window.removeEventListener('pointermove', sync_cur_pos);
            window.removeEventListener('scroll', fade_video);
            window.removeEventListener('resize', relocate_video);
        }
    }, []);

return (
  <section className='h-screen w-screen touch-pan-y'>

    <div ref={container} className='h-full w-full bg-black overflow-hidden'>

      <div ref={mask} style={{ '--scroll-opacity': 0 }}
           className='absolute bottom-0 h-full w-full z-1 bg-black
                      opacity-(--scroll-opacity) duration-300 ease-linear'/>
      <div className='relative h-[calc(100%+220px)]
                      w-[calc(100%+520px)] bg-black'>
        <video ref={video} src="header.mp4"
               className='absolute w-full h-full
                          -top-[110px] -left-[260px] object-cover'
               autoPlay muted loop playsInline/>
      </div>

    </div>
  </section>
);
}
