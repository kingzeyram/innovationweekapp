import { RevealOnScroll } from "../RevealOnScroll";


export const Highlight = () => {

    return <section id="highlight" className="min-h-screen flex items-center justify-center relative"
    >
        <RevealOnScroll>
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent text-center">Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 px-5">
                <div className="p-6 rounded-xl border-black/10 border hover:-translate-y-1 transition-all">
                    <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent text-center">Key Activities</h2>
                    <ul className="list-disc list-inside text-black space-y-2">
                        <li>Innovation exhibitions and pitch competitions.</li>
                        <li>Keynote addresses and panel discussions featuring industry leaders and policy makers</li>
                        <li>Startup and IP Clinics.</li>
                        <li>Sustainability Innovation Challenge.</li>
                        <li>Research to Commercialisation training workshops</li>
                        <li>Investor-Innovator matchmaking forum</li>
                        <li>sSpecial tracks: Women in Innovation, Green Tech, EduTech, AgriTech, Health Innovation</li>
                    </ul>
                </div>
                <div className="p-6 rounded-xl border-black/10 border hover:-translate-y-1 transition-all">
                    <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent text-center">Expected outcomes</h2>
                    <ul className="list-disc list-inside text-black space-y-2">
                        <li>Increased number of innovations moving toward commercialisation or startup formation .</li>
                        <li>Enhanced awareness of sustainability principles among student innovators</li>
                        <li>Strengthened university-industry linkages </li>
                        <li>Capacity building for students, faculty, and innovators </li>
                        <li>Strategic partnerships and funding commitments for promising ventures </li>
                        <li>Contribution to the national innovation and entrepreneurship agenda</li>

                    </ul>
                </div>
            </div>




        </RevealOnScroll>
    </section>;
};