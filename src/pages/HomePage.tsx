import HomeImg from '../assets/a-home.svg'
import aboutImage from '../assets/illustration-about-me.svg'
import photographer from '../assets/photographer.svg';
import Typewriter from "typewriter-effect";
import { FaMobile, FaMapMarked, FaEnvelope, FaInstagram, FaFacebook, FaSnapchat } from "react-icons/fa";

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
            {/* Home Page */}
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
            {/* About Page */}
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
            {/* Contact Page */}
            <div id="contact" className='bg-[#cbcc78] h-screen px-10 sm:px-20 lg:px-32'>
                <div className='pt-14 lg:pt-28'></div>
                <div className='flex items-center justify-center gap-36'>
                    <div>
                        <h1 className='font-semibold underline text-4xl mb-16'>Get in Touch</h1>
                        {/* Phone Number */}
                        <div className='flex gap-4 mb-5'>
                            <FaMobile className='h-8 w-8' />
                            <div>
                                <p className='font-bold'>Phone:</p>
                                <p>+91 9647 10 3391</p>
                            </div>
                        </div>

                        {/* Adress */}
                        <div className='flex gap-4 mb-5'>
                            <FaMapMarked className='h-8 w-8' />

                            <div>
                                <p className='font-bold'>Adress:</p>
                                <p>I will Get Your Adress Dont Worry</p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className='flex gap-4 mb-10'>
                            <FaEnvelope className='h-8 w-8' />

                            <div>
                                <p className='font-bold'>Email:</p>
                                <p>adhil10@gmail.com</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <a className='bg-[#84853e] rounded-full m-4 p-1' href="https://www.instagram.com/ii.adhil_._/"><FaInstagram className='h-8 w-8' /></a>
                            <a className='bg-[#84853e] rounded-full m-4 p-1' href="https://www.instagram.com/ii.adhil_._/"><FaFacebook className='h-8 w-8' /></a>
                            <a className='bg-[#84853e] rounded-full m-4 p-1' href="https://www.instagram.com/ii.adhil_._/"><FaSnapchat className='h-8 w-8' /></a>

                        </div>
                    </div>
                    <iframe
                        className='border-5 rounded border-[#c0c259]'
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.0431758366376!2d75.92896371448168!3d11.476809391848558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba66f26ea3e2b2d%3A0x5e4179781d18e3d1!2sKattippara%20Rd%2C%20Kerala!5e0!3m2!1sen!2sin!4v1675516628124!5m2!1sen!2sin"
                        width="600"
                        height="450"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>

            {/* Footer */}
            <div className='h-[10vh] flex justify-center lg:justify-start items-center'>
                <h1 className='flex  lg:ml-48 font-semibold'>Created With &#10084; By Edwin</h1>
            </div>
        </div>
    )
}