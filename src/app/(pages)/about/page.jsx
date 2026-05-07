export const metadata = {
    title: "About KTL Textile Company | Yangon",
    description: "KTL Textile is a leading company in Yangon supplying across the every state and division in Myanmar and in neighboring countries."
}

import Image from "next/image";

export default function AboutPage() {
    return (
        <main className="w-full overflow-hidden">

            {/* Hero Section*/}
            <section className="relative w-full h-[55vh] md:h-[70vh]">
                <Image
                    src="https://images.unsplash.com/photo-1741176505800-caaa3a52631a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="KTL Textile Factory"
                    fill
                    priority
                    className="object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/55" />

                {/* Text */}
                <div className="absolute inset-0 flex items-center justify-center text-center px-6">
                    <div className="text-white">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">
                            About KTL Textile
                        </h1>

                        {/* <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200">
              Premium wholesale textile manufacturer delivering quality clothing
              products across Myanmar and international markets.
            </p> */}
                    </div>
                </div>
            </section>

            {/*Company details */}
            <section className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Left Image */}
                    <div className="relative w-full h-[400px] md:rounded-3xl overflow-hidden shadow-xl">
                        <Image
                            src="https://images.unsplash.com/photo-1741176506261-73218298e4d8?q=80&w=870&auto=format&fit=crop"
                            alt="Company"
                            fill
                            className="object-cover hover:scale-105 transition duration-700"
                        />
                    </div>

                    {/* Right Content */}
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-6 text-gray-900 leading-tight">
                            About Company
                        </h2>

                        <p className="text-gray-600 leading-relaxed mb-5">
                            KTL Textile is a trusted clothing and textile manufacturing
                            company specializing in wholesale apparel production for local and
                            international businesses.
                        </p>

                        <p className="text-gray-600 leading-relaxed mb-8">
                            With years of experience in the textile industry, we provide
                            premium-quality fabrics, modern production techniques, and
                            reliable bulk delivery services for clients across various
                            divisions of Myanmar and overseas markets.
                        </p>

                        <button className="bg-purple-600 px-5 py-3 text-white">
                            Message us to learn more
                        </button>
                    </div>
                </div>
            </section>

            {/* Why Choose us */}
            <section className="relative py-24 px-6 overflow-hidden">

                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1600&auto=format&fit=crop')",
                    }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/75" />

                {/* Content */}
                <div className="relative max-w-7xl mx-auto z-10">

                    {/* Heading */}
                    <div className="text-center mb-16 text-white">
                        <h2 className="text-4xl md:text-6xl font-bold mb-5">
                            Why Choose Us
                        </h2>

                        <p className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed">
                            We deliver premium textile manufacturing services with modern
                            production systems, skilled craftsmanship, and reliable wholesale
                            distribution across Myanmar and international markets.
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="grid md:grid-cols-3 gap-10">

                        {[
                            {
                                title: "Premium Quality",
                                desc: "We maintain high-end fabric quality and export-level finishing standards.",
                                icon: "🧵",
                            },
                            {
                                title: "Bulk Production",
                                desc: "Efficient manufacturing process capable of handling large-scale orders.",
                                icon: "🏭",
                            },
                            {
                                title: "Global Distribution",
                                desc: "Supplying textile products across Myanmar and international markets.",
                                icon: "🌍",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="group relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 text-center overflow-hidden hover:-translate-y-3 hover:bg-white/15 transition-all duration-500 shadow-2xl"
                            >

                                {/* Glow Effect */}
                                <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl group-hover:scale-150 transition duration-700" />

                                {/* Animated Icon */}
                                <div className="relative z-10 w-24 h-24 mx-auto mb-8 rounded-full bg-blue-600 flex items-center justify-center text-5xl shadow-lg transform group-hover:rotate-[20deg] group-hover:scale-110 transition duration-500">

                                    <div className="group-hover:animate-bounce">
                                        {item.icon}
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="relative z-10 text-2xl font-bold text-white mb-5">
                                    {item.title}
                                </h3>

                                {/* Description */}
                                <p className="relative z-10 text-gray-300 leading-relaxed">
                                    {item.desc}
                                </p>

                                {/* Bottom Hover Line */}
                                <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-500 group-hover:w-full transition-all duration-500" />

                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/*Factory Environment */}
            <section className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Content */}
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-6 text-gray-900">
                            Our Factory Environment
                        </h2>

                        <p className="text-gray-600 leading-relaxed mb-5">
                            Our production facilities are designed with modern machinery,
                            skilled workers, and quality control systems to ensure every
                            product meets international standards.
                        </p>

                        <p className="text-gray-600 leading-relaxed">
                            We prioritize clean environments, efficient workflows, and ethical
                            manufacturing practices throughout our operations.
                        </p>
                    </div>

                    {/* Image */}
                    <div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-xl">
                        <Image
                            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop"
                            alt="Factory"
                            fill
                            className="object-cover hover:scale-105 transition duration-700"
                        />
                    </div>
                    <div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-xl">
                        <Image
                            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop"
                            alt="Factory"
                            fill
                            className="object-cover hover:scale-105 transition duration-700"
                        />
                    </div>
                    <div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-xl">
                        <Image
                            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop"
                            alt="Factory"
                            fill
                            className="object-cover hover:scale-105 transition duration-700"
                        />
                    </div>
                </div>
            </section>

            {/* ================= CORPORATES ================= */}
            <section className="bg-blue-600 py-20 px-6 text-white">
                <div className="max-w-7xl mx-auto text-center">

                    <span className="uppercase tracking-wider text-blue-100">
                        Trusted Partnerships
                    </span>

                    <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-12">
                        Corporates Joined With Us
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

                        {["Fashion Hub", "Urban Wear", "Textile Pro", "Global Apparel"].map(
                            (brand, index) => (
                                <div
                                    key={index}
                                    className="bg-white/10 backdrop-blur-md rounded-2xl py-8 text-lg font-semibold hover:bg-white/20 transition"
                                >
                                    {brand}
                                </div>
                            )
                        )}
                    </div>
                </div>
            </section>

        </main>
    );
}