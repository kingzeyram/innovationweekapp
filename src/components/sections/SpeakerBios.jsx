import { RevealOnScroll } from "../RevealOnScroll";
import wakindiki from "../../assets/prof.jpg";
import onywera from "../../assets/onywera.png";

export const SpeakerBios = () => {

    return (
        <section id="speakerbios" className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <a href="#home"><h2 className="gradient-pulse-text text-4xl font-bold mb-8 bg-gradient-to-r from-yellow-500 to-yellow-400 bg-clip-text text-transparent text-center">Speakers</h2></a>
                    <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent text-center">Remarks from the Vice Chancellor, Prof. Isaiah I.C. Wakindiki, PhD, Pr.Sci.Nat.</h3>



                    <div className="rounded-xl p-8 border-white/10 border hover:translate-y-1 transition-all bg-white/80 text-black">
                        <img
                            src={wakindiki}
                            alt="Prof. Wakindiki"
                            className="float-left w-48 h-auto mr-6 mb-4 rounded-lg shadow-md"
                        />
                        <p className="mb-4">
                            KCA University stands at a pivotal moment in the evolution of higher education in Africa where knowledge must not only be created but also transformed into solutions that respond to our continent’s challenges and aspirations. The 4th Innovation Week and Industry Summit embodies our strategic commitment to knowledge commercialization, sustainable development, and inclusive enterprise.
                        </p>
                        <p className="mb-4">
                            Through this summit, we affirm our role as a convener of ideas and a catalyst for innovation ecosystems that connect academia, industry, government, and society. The theme, “Innovate, Commercialize, Sustain: Building Kenya’s Future Today,” challenges all of us researchers, students, and partners to pursue innovations that are not only impactful but scalable, sustainable, and transformative.
                        </p>
                        <p>
                            Let this be a platform where ideas transcend theory, partnerships flourish, and our collective imagination defines the future we want to see in Kenya and across the continent.
                        </p>
                    </div>

                    <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent text-center">Remarks from the DVC, Research, Innovation and Outreach, Prof. Vincent Onywera, PhD</h3>
                    <div className="rounded-xl p-8 border-white/10 border hover:translate-y-1 transition-all bg-white/80 text-black">
                        <img
                            src={onywera}
                            alt="Prof. Wakindiki"
                            className="float-left w-48 h-auto mr-6 mb-4 rounded-lg shadow-md"
                        />
                        <p className="mb-4">
                            The Division of Research, Innovation and Outreach is pleased to spearhead the planning and execution of the 4th Innovation Week and Industry Summit. This event is more than a showcase, it is a strategic operational tool for translating research into impact.

                        </p>
                        <p className="mb-4">
                            Our focus this year is on strengthening pathways for commercialization, enhancing industry - university collaboration, and building the innovation capabilities of our faculty and students. From curated pitch sessions and IP clinics to investor forums and sustainability challenges, the summit is structured to deliver tangible outcomes. We invite all stakeholders within and beyond the university to actively engage with this initiative.
                        </p>

                    </div>
                    <div className="flex justify-center space-x-4">
                        <a href="https://research.kcau.ac.ke/" className="bg-blue-800 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] ">
                            More...
                        </a>
                        <a href="https://research.kcau.ac.ke/about-us/" className=" border border-yellow-500/50 text-yellow-700 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-yellow-700/10">
                            About us
                        </a>
                    </div>
                    <div className="text-align-left z-10 pt-10 pb-5 px-2">
                        <h2 className=" text-3xl font-bold mb-2 bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent text-center">Proposed Dates & venue</h2>
                        <ul className="list-disc list-inside text-black text-base leading-relaxed max-w-1l mx-auto">
                            <li>Dates: October 28–30, 2025</li>
                            <li>Venue: KCA University Main Campus, Ruaraka </li>

                        </ul>
                    </div>


                </div>



            </RevealOnScroll>
        </section>
    );
}