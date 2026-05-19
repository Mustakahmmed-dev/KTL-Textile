export default function ClientTestimony() {
    return (
        <section className=" py-20 px-6 ">
            <div className="max-w-7xl mx-auto text-center">

                <span className="uppercase tracking-wider text-blue-600">
                    Trusted Partnerships
                </span>

                <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-12">
                    Our Corporates Customers
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <img className="h-24 " src="https://cdn.dribbble.com/userupload/37216476/file/original-41d0f850747139d400b9f0b82d487f37.png?resize=752x&vertical=center" alt="Fashion Hub" />
                    <img className="h-24 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC0uDnlljDTeZKUX392MHc_4i0-175G7jJ1w&s" alt="" />
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
    )
}