export default function Game(){

    return (<section className='container h-screen flex items-center mx-10' >
        <div className='flex w-full gap-2' >
        <div className='w-2/5 flex flex-col justify-between'>
            <h1 className='font-[La_Machine_Company] text-6xl'>Lorem Ipsum</h1>

            {/*当 mt-auto 和 mb-auto 一起使用 时，元素会在可用空间内 垂直居中。*/}
            <p className='font-[SilkRemington-RRough] w-2/3 mt-auto mb-auto' >PThe user interface displays health, ammunition, and an objective marker, enhancing the immersive experience. The dynamic lighting and particle effects add to the realism, making this a visually striking scene that perfectly reflects the game's suspenseful tone.</p>
        </div>
        <div className='flex w-3/5 gap-8' >
            <img src="demo-art-1.png" alt="game screen shot" className='aspect-16/9 object-cover'/>
            <img src="demo-art-2.png" alt="game screen shot" className='aspect-16/9 object-cover'/>
            <img src="demo-art-3.png" alt="game screen shot" className='aspect-16/9 object-cover'/>
        </div>
        </div>
    </section>);
}