import { Link } from "react-router-dom"

export function NotFound() {
    return (
        <div className="bg-gray-50 h-screen w-screen flex flex-col items-center justify-center overflow-hidden">
            <h1 className="font-extrabold text-gray-500 text-[15rem] lg:text-[40rem] opacity-20 mb-5">404</h1>
            <div className="absolute">
                <div>
                    <p className="text-5xl text-black font-semibold">Page Not Found</p>
                    <div className="flex items-center justify-center">
                        <Link className="bg-green-600 rounded px-5 mt-5 py-2 text-white" to="/">Home</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}