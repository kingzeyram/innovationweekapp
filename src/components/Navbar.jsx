import { useEffect } from "react"
import logo from "../assets/logo.jpeg";
export const Navbar = ({ menuOpen, setMenuOpen }) => {

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : ""
    }, [menuOpen]);
    return <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-blue/10 shadow-lg">
        <div className="max-w-5xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
                <a href="#home" className="flex items-center space-x-2 group">
                    <img src={logo} alt="Logo" className="h-16 w-auto" />
                    <span className="font-mono text-xl font-bold text-yellow-500 group-hover:text-blue-700 transition-colors">
                        Innovation <span className="text-blue-700 group-hover:text-yellow-500">Summit</span>
                    </span>
                </a>


                {/* mobile menu */}
                <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden text-black   " onClick={() => setMenuOpen((prev) => !prev)}>
                    &#9776;
                </div>
                {/* desktop menu */}
                <div className="hidden md:flex items-center space-x-8 ">
                    <a href="#home" className="text-black hover:text-yellow-500 transition-colors "
                    >Home</a>

                    <a href="#highlight" className="text-black hover:text-blue-700 transition-colors "
                    >Highlight</a>

                    <a href="#programs" className="text-black hover:text-yellow-500 transition-colors "
                    >Programs</a>

                    <a href="#speakerbios" className="text-black hover:text-blue-700 transition-colors "
                    >Speakers</a>
                </div>

            </div>

        </div>
    </nav>
}