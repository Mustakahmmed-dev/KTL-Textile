"use client";

import { useState } from "react";
import {
    Mail,
    MapPin,
    Phone,
    SendHorizonal,
} from "lucide-react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        inquiry: "",
        address: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formData);

        alert("Your inquiry has been submitted!");

        setFormData({
            name: "",
            email: "",
            phone: "",
            inquiry: "",
            address: "",
            message: "",
        });
    };

    return (
        <main className="w-full overflow-hidden">

            {/* Contact page hero */}
            <section className="relative h-[45vh] md:h-[55vh] flex items-center justify-center text-center">

                {/* Background */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop')",
                    }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/65" />

                {/* Content */}
                <div className="relative z-10 px-6">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-5">
                        Contact Us
                    </h1>

                    <p className="max-w-2xl mx-auto text-lg text-gray-200 leading-relaxed">
                        Connect with KTL Textile in Yangon for wholesale clothing inquiries nationwide across Myanmar.
                    </p>
                </div>
            </section>

            {/* Contact section */}
            <section className="py-24 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">

                    {/* Left Contact Info */}
                    <div>

                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Get In Touch
                        </h2>

                        <p className="text-gray-600 leading-relaxed mb-10">
                            Have questions about our textile manufacturing, wholesale
                            products, or custom clothing solutions? Send us your inquiry
                            and our team will respond as soon as possible.
                        </p>

                        <div className="space-y-8">

                            {/* Phone */}
                            <div className="flex gap-5 items-start">
                                <div className="w-14 h-14 rounded-full bg-purple-600 text-white flex items-center justify-center shadow-lg">
                                    <Phone size={22} />
                                </div>

                                <div>
                                    <h3 className="font-semibold text-xl mb-1">
                                        Phone Number
                                    </h3>

                                    <p className="text-gray-600">
                                        +95 9 515 8308
                                    </p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex gap-5 items-start">
                                <div className="w-14 h-14 rounded-full bg-purple-600 text-white flex items-center justify-center shadow-lg">
                                    <Mail size={22} />
                                </div>

                                <div>
                                    <h3 className="font-semibold text-xl mb-1">
                                        Email Address
                                    </h3>

                                    <p className="text-gray-600">
                                        info@ktltextile.com
                                    </p>
                                </div>
                            </div>

                            {/* Address */}
                            <div className="flex gap-5 items-start">
                                <div className="w-14 h-14 rounded-full bg-purple-600 text-white flex items-center justify-center shadow-lg">
                                    <MapPin size={22} />
                                </div>

                                <div>
                                    <h3 className="font-semibold text-xl mb-1">
                                        Office Address
                                    </h3>

                                    <p className="text-gray-600">
                                        အမှတ်(15) 127လမ်း၊ မင်္ဂလာတောင်ညွှန့်၊ ရန်ကုန်မြို့။, Yangon, Myanmar, 11211 <br />
                                        Open from 8:00 AM to 5:00 PM except friday
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Form */}
                    <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10">

                        <form
                            onSubmit={handleSubmit}
                            className="space-y-6"
                        >

                            {/* Name */}
                            <div>
                                <label className="block mb-2 font-medium text-gray-700">
                                    Your Name *
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your name"
                                    className="w-full border border-gray-300 rounded-xl px-5 py-3 outline-none focus:border-purple-600"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block mb-2 font-medium text-gray-700">
                                    Email Address (Optional)
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                    className="w-full border border-gray-300 rounded-xl px-5 py-3 outline-none focus:border-purple-600"
                                />
                            </div>

                            {/* Phone */}
                            <div>
                                <label className="block mb-2 font-medium text-gray-700">
                                    Phone Number *
                                </label>

                                <input
                                    type="tel"
                                    name="phone"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Enter your phone number"
                                    className="w-full border border-gray-300 rounded-xl px-5 py-3 outline-none focus:border-purple-600"
                                />
                            </div>

                            {/* Inquiry */}
                            <div>
                                <label className="block mb-2 font-medium text-gray-700">
                                    Inquiry Type *
                                </label>

                                <select
                                    name="inquiry"
                                    required
                                    value={formData.inquiry}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-xl px-5 py-3 outline-none focus:border-purple-600"
                                >
                                    <option value="">Select Inquiry</option>
                                    <option>T-Shirts</option>
                                    <option>Hoodies</option>
                                    <option>Uniforms</option>
                                    <option>Cotton Fabrics</option>
                                    <option>Custom Apparel</option>
                                    <option>Wholesale Orders</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            {/* Address */}
                            <div>
                                <label className="block mb-2 font-medium text-gray-700">
                                    Your Address
                                </label>

                                <input
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    placeholder="Enter your address"
                                    className="w-full border border-gray-300 rounded-xl px-5 py-3 outline-none focus:border-purple-600"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block mb-2 font-medium text-gray-700">
                                    Write a Message *
                                </label>

                                <textarea
                                    name="message"
                                    required
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Write your message..."
                                    className="w-full border border-gray-300 rounded-xl px-5 py-3 outline-none resize-none focus:border-purple-600"
                                />
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="w-full bg-purple-600 cursor-pointer hover:bg-purple-700 transition text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-3 shadow-lg"
                            >
                                Send Inquiry
                                <SendHorizonal size={20} />
                            </button>

                        </form>
                    </div>
                </div>
            </section>

            {/* Google map*/}
            <section className="w-full">

                <div className="w-full h-[500px]">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1067.375947434515!2d96.1698315235506!3d16.789111328406793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1ed002327fbb3%3A0xa903ae5d4ee4b3d0!2sKTL%20textile!5e1!3m2!1sen!2sbd!4v1778208524621!5m2!1sen!2sbd" width="100%"
                        height="100%"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="border-0"
                    ></iframe>

                </div>
            </section>
        </main>
    );
}