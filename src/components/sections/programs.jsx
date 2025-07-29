import { RevealOnScroll } from "../RevealOnScroll"

export const Programs = () => {
    return <section id="programs"
        className="min-h-screen flex items-center justify-center py-20"
    >
        <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-yellow-500 to-yellow-400 bg-clip-text text-transparent text-center"
                >Programs
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="p-6 rounded-xl border border-black/10 hover:-translate-y-1 hover:border-blue-700/30 hover:shadow[0_2px_8px_rgba(59,130,246,0.2)] transition ">
                        <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent text-center">A.Steering Committee Formation</h2>
                        <p className="text-black mb-4">Establish a cross-functional planning committee including representatives from:</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Directorate of innovation,Incubation & Enterprise Development", "Faculty/schools", "Student leadership (KUSA, clubs)", "Industry partners and alumni", "Communications and events office"].map((prog, key) => (
                                <span
                                    key={key}
                                    className="bg-yellow-500/10 text-yellow-700 py-1 px-3 rounded-full text-sm hover:bg-yellow-500/20
                                    hover:shadow[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {prog}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="/" className="text-yellow-400 hover:text-yellow-300 transition-colors my-4">→</a>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-black/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow[0_2px_8px_rgba(59,130,246,0.2)] transition ">

                        <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent text-center">B. Workstream Subcommittees</h2>
                        <p className="text-black mb-4">Each with clear deliverables:</p>
                        <div className="flex flex-wrap gap-2 mb-4">

                            <dl>
                                <dt className="text-black font-semibold">Fundraising and Partnerships </dt>
                                <dd className="text-black">secure sponsorships, grants, and ecosystem collaborations</dd>
                                <dt className="text-black font-semibold mt-2">Program & Activities </dt>
                                <dd className="text-black">define sessions, call for abstracts, curate speakers and panels </dd>
                                <dt className="text-black font-semibold mt-2">Logistics & Operations </dt>
                                <dd className="text-black">venue setup, branding, registration, hospitality</dd>
                                <dt className="text-black font-semibold mt-2">Communications & Publicity </dt>
                                <dd className="text-black">media engagement, design, digital promotion, outreach </dd>
                                <dt className="text-black font-semibold mt-2">Exhibition & Innovation Clinics  </dt>
                                <dd className="text-black">mobilise innovators, mentor matching, showcase design  </dd>
                            </dl>
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="#" className="text-yellow-400 hover:text-yellow-300 transition-colors my-4">→</a>
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border border-black/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow[0_2px_8px_rgba(59,130,246,0.2)] transition ">

                        <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent text-center">C.Fundraising & Sponsorship Drive</h2>
                        <p className="text-black mb-4">Develop sponsorship packages and approach:</p>
                        <div className="flex flex-wrap gap-2 mb-4">

                            <dl>

                                <dd className="text-black">- Government agencies e.g:</dd>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {["KEPSA", "NACOSTI", "KIPI", "Kenya Innovation Agency"].map((eg, key) => (
                                        <span
                                            key={key}
                                            className="bg-yellow-500/10 text-yellow-700 py-1 px-3 rounded-full text-sm hover:bg-yellow-500/20
                                    hover:shadow[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                            {eg}
                                        </span>
                                    ))}
                                </div>
                                <dd className="text-black">- Private sector and corporate CSR units </dd>

                                <dd className="text-black">- Development partners and donor organisations</dd>

                                <dd className="text-black">- Alumni and angel investors </dd>
                                <br />
                                <dt className="text-black font-semibold">Target: KES 3–5 million in cash and in-kind support.</dt>


                            </dl>
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="#" className="text-yellow-400 hover:text-yellow-300 transition-colors my-4">→</a>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-black/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow[0_2px_8px_rgba(59,130,246,0.2)] transition ">

                        <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent text-center">D.Call for Participation</h2>

                        <div className="flex flex-wrap gap-2 mb-4">

                            <dl>

                                <dd className="text-black">- Students, faculty, and external innovators invited to submit ideas or projects</dd>

                                <dd className="text-black">- Launch innovation challenge in priority thematic areas </dd>

                                <dd className="text-black">- Open registrations for attendance and exhibitions</dd>




                            </dl>
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="#" className="text-yellow-400 hover:text-yellow-300 transition-colors my-4">→</a>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-black/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow[0_2px_8px_rgba(59,130,246,0.2)] transition ">

                        <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent text-center">E. Monitoring & Evaluation Plan</h2>
                        <p className="text-black mb-4">Set up KPIs such as:</p>
                        <div className="flex flex-wrap gap-2 mb-4">

                            <dl>

                                <dd className="text-black">- Number of innovations exhibited</dd>

                                <dd className="text-black">- Number of IPs filed or supported </dd>

                                <dd className="text-black">- Partnerships or deals initiated</dd>

                                <dd className="text-black">- Attendee satisfaction and engagement metrics </dd>
                                <br />



                            </dl>
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="#" className="text-yellow-400 hover:text-yellow-300 transition-colors my-4">→</a>
                        </div>
                    </div>
                </div>
            </div>
        </RevealOnScroll>
    </section>
}