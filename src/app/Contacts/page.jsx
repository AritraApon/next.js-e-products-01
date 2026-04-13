
// app/contacts/page.jsx
import React from 'react';

const ContactPage = () => {
    return (
        <div className="w-11/12 mx-auto text-white py-12 min-h-screen">
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-3">Get In <span className="text-blue-500">Touch</span></h1>
                <p className="text-gray-400">Have questions about a product or order? We're here to help.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 bg-slate-900 p-8 rounded-3xl border border-gray-800 shadow-2xl">

                {/* Contact Information */}
                <div className="space-y-8">
                    <div>
                        <h2 className="text-2xl font-semibold mb-6 text-blue-400">Contact Information</h2>
                        <p className="text-gray-400 mb-8">
                            Fill out the form and our team will get back to you within 24 hours.
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="bg-blue-600/10 p-4 rounded-full text-blue-500 text-2xl">📞</div>
                        <div>
                            <p className="text-sm text-gray-500 uppercase">Call Us</p>
                            <p className="font-medium">+880 1234 567890</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="bg-blue-600/10 p-4 rounded-full text-blue-500 text-2xl">📧</div>
                        <div>
                            <p className="text-sm text-gray-500 uppercase">Email Us</p>
                            <p className="font-medium">support@voltvault.com</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="bg-blue-600/10 p-4 rounded-full text-blue-500 text-2xl">📍</div>
                        <div>
                            <p className="text-sm text-gray-500 uppercase">Location</p>
                            <p className="font-medium">Dhaka, Bangladesh</p>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <form className="space-y-5 bg-slate-800 p-6 rounded-2xl border border-gray-700">
                    <div className="grid md:grid-cols-2 gap-5">
                        <div className="flex flex-col gap-2">
                            <label className="text-sm text-gray-400">Your Name</label>
                            <input type="text" placeholder="Aritro Mazumder" className="bg-slate-900 border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-blue-500 transition-all" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm text-gray-400">Email Address</label>
                            <input type="email" placeholder="example@mail.com" className="bg-slate-900 border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-blue-500 transition-all" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm text-gray-400">Subject</label>
                        <input type="text" placeholder="How can we help?" className="bg-slate-900 border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-blue-500 transition-all" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm text-gray-400">Message</label>
                        <textarea rows="4" placeholder="Write your message here..." className="bg-slate-900 border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-blue-500 transition-all resize-none"></textarea>
                    </div>

                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-all shadow-lg shadow-blue-600/20">
                        Send Message
                    </button>
                </form>

            </div>
        </div>
    );
};

export default ContactPage;