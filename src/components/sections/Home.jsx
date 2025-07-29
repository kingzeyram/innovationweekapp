import { RevealOnScroll } from "../RevealOnScroll";
import logo from "../../assets/logo.jpeg";


export const Home = () => {

    return <section id="home" className="min-h-screen flex items-center justify-center relative"
    >
        <RevealOnScroll>
            <div className="text-center z-10 pt-20 pb-1  px-4 ">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent leading-right ">
                    4th Innovation Week and Industry Summit – 2025
                </h1>
                <img src={logo} alt=""
                    className="w-60 h-auto mx-auto rounded-lg shadow-lg" />
                <h1 className="text-3xl md:text-5xl font-bold mt-10 mb-18 bg-gradient-to-r from-blue-800 to-blue-900 bg-clip-text text-transparent leading-right ">
                    Innovate, Elevate, Impact
                </h1>
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent text-center">Introduction and Rationale</h2>

                <div className="max-h-[400px] overflow-y-auto p-4 ">
                    <p className="text-black text-base leading-relaxed" >
                        The 4th Innovation Week and Industry Summit at KCA University is a flagship annual event that celebrates creativity, research excellence, enterprise, and collaboration between academia, industry, government, and the community. This year’s theme, “Innovate, Elevate, Impact,” reflects the urgent need to transform promising ideas and research outputs into viable commercial and social ventures that contribute to sustainable development.
                    </p>
                    <p className="text-black text-base leading-relaxed" >
                        Kenya faces a dual imperative: to harness the intellectual capital within universities for economic transformation and to do so in a way that ensures environmental, social, and economic sustainability. As part of its strategic commitment to becoming an entrepreneurial university, KCA University recognises innovation and commercialisation as central pillars for driving national impact. The university operates two incubation and innovation hubs, which provide co-working space, mentorship, technical support, and access to networks for student-led startups and early-stage ventures.
                    </p>
                    <p className="text-black text-base leading-relaxed" >
                        KCA University also partners with a broad array of public and private sector actors to strengthen its innovation ecosystem. A notable example is its collaboration with the Kenya National Innovation Agency (KeNIA), through which KCA University, alongside 11 other universities, was sponsored to develop institutional Commercialisation Masterplans. These plans place emphasis not only on the development of innovations but also on mechanisms for scaling and commercialising them for real-world impact.
                    </p>
                    <p className="text-black text-base leading-relaxed" >
                        The Innovation Week and Industry Summit is one such mechanism. It provides a high-level platform for showcasing university-generated innovations, while connecting them with potential funders, policy makers, industry leaders, and development partners. The event aims to stimulate dialogue, catalyse partnerships, and foster entrepreneurial thinking among researchers, students, and innovators.
                    </p>
                    <p className="text-black text-base leading-relaxed" >
                        In line with Kenya Vision 2030, the African Union Agenda 2063, and the UN Sustainable Development Goals (SDGs), this year’s summit will spotlight innovations that address pressing societal challenges while catalysing enterprise development and job creation—particularly among youth and women. By doing so, KCA University continues to position itself as a key contributor to Kenya’s innovation and knowledge economy.
                    </p>


                </div>
                <div className="flex justify-center space-x-4">
                    <a href="#programs" className="bg-blue-800 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] ">
                        Event information
                    </a>
                    <a href="#speakerbios" className=" border border-blue-500/50 text-blue-700 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-700/10">
                        Speaker Bios
                    </a>
                </div>
                <div className="text-align-left z-10 pt-10 pb-5  px-2">
                    <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent text-center">Objectives</h2>

                    <ul className="list-disc list-inside text-black text-base leading-relaxed max-w-1l mx-auto">
                        <li>To showcase research outputs, student projects, and innovative ideas with commercial potential.</li>
                        <li>To provide a platform for dialogue between academia, industry, government, and development partners on innovation and sustainability.</li>
                        <li>To build capacity among innovators and startups on intellectual property, funding, scaling, and market access.</li>
                        <li>To connect student innovators and researchers with investors, mentors, and enterprise development support.</li>
                        <li>To enhance the university’s visibility as a hub for research-driven innovation and sustainable entrepreneurship.</li>

                    </ul>



                </div>


            </div>





        </RevealOnScroll>
    </section>;
};