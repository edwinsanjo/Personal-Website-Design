import img from '../assets/A.svg'
import imgTwo from '../assets/A(1).svg'
import Typewriter from "typewriter-effect";

let typewriterFunc = (typewriter: any) => {
    for (let i = 0; i < 6; i++) {
        typewriter
            .typeString(" Photographer")
            .pauseFor(2000)
            .deleteAll()
            .typeString(" Gamer")
            .pauseFor(2000)
            .deleteAll()
            .typeString(" Video Editor")
            .pauseFor(2000)
            .deleteAll()
            .typeString(" Kozhi")
            .pauseFor(2000)
            .deleteAll()
            // Does't makes sense right
            .start()
    }
}

export function HomePage() {
    return (
        <div className='bg-[#8CC6E5] font-semibold w-full text-white'>
            <div className='flex flex-col h-screen items-center justify-center'>
                <img src={imgTwo} alt="Adhils image" className='h-screen w-screen transform' />
                <div className='absolute'>
                    <p className='text-3xl'>Hello <span className='wave'>👋</span></p>
                    <p className='text-5xl '>I'm <span className='hover:text-[#7cafca]'>Adhil K</span></p>
                    <p className='text-3xl flex gap-2'>I'm a <Typewriter onInit={(typewriter) => typewriterFunc(typewriter)} /></p>
                    <div className='flex mt-5 overflow-hidden justify-center'>
                        <a href="#about" className='font-lg px-5 py-2 border bg-[#8cc6e5] hover:bg-[#9ccee9]'>See More ↓</a>
                    </div>
                </div>
            </div>
            <div id='about' className='bg-[#78cc7b] h-screen'>

            </div>
        </div>
    )
}