import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto text-center">
                <div className="mb-4 flex justify-center space-x-6">
                    <a
                        href="https://www.facebook.com/KCAUniversityOfficial/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-500 transition-colors duration-200"
                    >
                        <FaFacebookF size={20} />
                    </a>
                    <a
                        href="https://x.com/kcauniversity"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 transition-colors duration-200"
                    >
                        <FaXTwitter size={20} />
                    </a>
                    <a
                        href="https://www.linkedin.com/school/kca-university/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-200 transition-colors duration-200"
                    >
                        <FaLinkedinIn size={20} />
                    </a>
                    <a
                        href="https://www.instagram.com/kca_university/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-pink-400 transition-colors duration-200"
                    >
                        <FaInstagram size={20} />
                    </a>
                </div>
                <p>
                    &copy; {new Date().getFullYear()} Innovation Week and Industry Summit. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
