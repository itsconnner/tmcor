import { useRef, useState } from "react";
import { Link } from "react-router";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import '~/trailer.css'

function Mute({ className, scale = 1 }) {
	const size = `${ 32 * scale }px`

return (
<svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" height={size}  width={size} fill="#E1E1E1">
  <path d="M792-56 671-177q-25 16-53 27.5T560-131v-82q14-5 27.5-10t25.5-12L480-368v208L280-360H120v-240h128L56-792l56-56 736 736-56 56Zm-8-232-58-58q17-31 25.5-65t8.5-70q0-94-55-168T560-749v-82q124 28 202 125.5T840-481q0 53-14.5 102T784-288ZM650-422l-90-90v-130q47 22 73.5 66t26.5 96q0 15-2.5 29.5T650-422ZM480-592 376-696l104-104v208Zm-80 238v-94l-72-72H200v80h114l86 86Zm-36-130Z"/>
</svg>
);
}

function Unmute({ className, scale = 1 }) {
	const size = `${ 32 * scale }px`

return (
<svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" height={size}  width={size} fill="#E1E1E1">
  <path d="M560-131v-82q90-26 145-100t55-168q0-94-55-168T560-749v-82q124 28 202 125.5T840-481q0 127-78 224.5T560-131ZM120-360v-240h160l200-200v640L280-360H120Zm440 40v-322q47 22 73.5 66t26.5 96q0 51-26.5 94.5T560-320ZM400-606l-86 86H200v80h114l86 86v-252ZM300-480Z"/>
</svg>
);
}

export default function Trailer() {
	const video = useRef(null);
	const icon = useRef(null);
	const [ muted, set_muted ] = useState(1);

	function toggle_muted()
	{
		set_muted(prev => {
			video.current.muted = !prev;

			return !prev;
		});
	}

return(
<main className='relative w-screen h-screen'>
  <button onClick={toggle_muted}
          className='absolute bottom-0 right-0 p-5 pl-10 pt-10 xl:p-10 z-10'>
    <SwitchTransition mode='out-in'>
      <CSSTransition key={muted ? 'off' : 'on'}
                     timeout={200}
                     nodeRef={icon}
                     classNames='trailer'>
        <span ref={icon} className='transition-opacity duration-200'>
          { muted ? <Mute scale={ 1.75 }/> : <Unmute scale={ 1.75 }/> }
        </span>
      </CSSTransition>
    </SwitchTransition>
  </button>
  <Link className='block w-full h-full' to='/home' replace viewTransition prefetch='render'>
    <video ref={video} src='/placeholder.mp4' className='w-full h-full object-cover' autoPlay muted loop playsInline/>
  </Link>
</main>
);
}
