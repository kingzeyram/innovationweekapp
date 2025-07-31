import { RevealOnScroll } from "../RevealOnScroll";

export const Conclusion = () => {

    return (
        <section id="conclusion" className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <a href="#home"><h2 className="gradient-pulse-text text-4xl font-bold mb-8 bg-gradient-to-r from-yellow-500 to-yellow-400 bg-clip-text text-transparent text-center">Conclusion</h2></a>


                    <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent text-center">Afterward</h3>
                    <div className="rounded-xl p-8 border-white/10 border hover:translate-y-1 transition-all bg-white/80 text-black">

                        <p className="mb-4">
                            The 4th KCA University Innovation Week and Industry Summit aims to amplify the university’s role in shaping a knowledge-based, innovation-driven, and sustainable economy. With the right partnerships, resource mobilisation, and stakeholder engagement, the event will be a defining platform for commercialising homegrown solutions and building Kenya’s future today.

                        </p>


                    </div>




                </div>



            </RevealOnScroll>
        </section>
    );
}