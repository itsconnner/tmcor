export default function Video(){

    return (<section className=' h-screen w-full flex items-center'>
        <div className='w-full flex'>
            <img src="demo-art-4.png" alt="Pre-order art" className='aspect-22/9 object-cover w-2/3' />

            <div className='mx-auto mt-auto mb-auto aspect-1/1'>
                <svg width="140" height="141" viewBox="0 0 140 141" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-[60px] sm:w-[140px]'>
                    <circle cx="70" cy="70.5" r="68.5" transform="rotate(45 70 70.5)" stroke="white" stroke-width="3"
                            stroke-dasharray="100 11"/>
                    <circle cx="70.5" cy="70.0001" r="46" stroke="white" stroke-width="3" stroke-dasharray="100 11"/>
                    <path
                        d="M72.0711 54.3042L93.0577 73.2032C93.2526 73.3788 93.4073 73.5873 93.5128 73.8167C93.6184 74.0461 93.6727 74.292 93.6727 74.5403C93.6727 74.7887 93.6184 75.0345 93.5128 75.264C93.4073 75.4934 93.2526 75.7018 93.0577 75.8774C92.8627 76.053 92.6312 76.1923 92.3764 76.2873C92.1217 76.3824 91.8486 76.4313 91.5729 76.4313C91.2971 76.4313 91.0241 76.3824 90.7693 76.2873C90.5145 76.1923 90.2831 76.053 90.0881 75.8774L70.5863 58.3132L51.0846 75.8774C50.6908 76.2321 50.1567 76.4313 49.5998 76.4313C49.0429 76.4313 48.5088 76.2321 48.115 75.8774C47.7212 75.5228 47.5 75.0418 47.5 74.5403C47.5 74.0388 47.7212 73.5578 48.115 73.2032L69.1015 54.3042C69.2965 54.1285 69.5279 53.9891 69.7827 53.894C70.0375 53.7989 70.3105 53.75 70.5863 53.75C70.8621 53.75 71.1352 53.7989 71.39 53.894C71.6448 53.9891 71.8762 54.1285 72.0711 54.3042Z"
                        fill="white"/>
                </svg>
            </div>
        </div>
    </section>);
}