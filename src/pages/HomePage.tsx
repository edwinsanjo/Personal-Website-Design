import HomeImg from '../assets/a-home.svg'
import aboutImage from '../assets/illustration-about-me.svg'
import photographer from '../assets/photographer.svg';
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
        <div className='bg-[#8cc6e5] w-full text-white'>
            <div className='flex flex-col h-screen items-center justify-center'>
                <img src={HomeImg} alt="Adhils image" className='h-screen w-screen transform' />
                <div className='absolute'>
                    <p className='text-3xl font-semibold'>Hello <span className='wave'>👋</span></p>
                    <p className='text-5xl font-bold'>I'm <span className='hover:text-[#7cafca]'>Adhil K</span></p>
                    <p className='text-3xl font-semibold flex gap-2'>I'm a <Typewriter onInit={(typewriter) => typewriterFunc(typewriter)} /></p>
                    <div className='flex mt-5 overflow-hidden justify-center'>
                        <a href="#about" className='font-lg px-5 py-2 border bg-[#8cc6e5] hover:bg-[#9ccee9]'>See More ↓</a>
                    </div>
                </div>
            </div>
            <div id='about' className='bg-[#6ec570] h-screen px-10 sm:px-20 lg:px-32'>
                <div className='pt-20 lg:pt-32'></div>
                <div className='absolute lg:flex lg:gap-24'>
                    <div className="">
                        <h1 className='font-semibold underline text-4xl mb-10'>About Me</h1>
                        <p className=''>What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using</p>
                    </div>
                    <img src={photographer} alt="Image on About page" className='hidden lg:inline-block lg:h-[45%] lg:w-[45%] sm:opacity-100' />
                </div>
            </div>
            <div id="contact" className='bg-[#cc7878] h-screen px-10 sm:px-20 lg:px-32'>
                <div className='pt-20 lg:pt-32'></div>
                <h1 className='font-semibold underline text-4xl mb-10'>Contact Me</h1>
            </div>
        </div>
    )
}