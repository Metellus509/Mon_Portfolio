import React, { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon, EnvelopeIcon, UserIcon, PhoneIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';

export default function ContactModal({ isOpen, closeModal }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch('http://localhost:5000/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Server error:", data);
      alert(data.message || "Erreur serveur");
      return;
    }

    alert('Votre message a été envoyé avec succès !');

    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });

    setTimeout(() => closeModal(), 500);

  } catch (error) {
    console.error("Network error:", error);
    alert("Erreur réseau");
  }
};


  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        {/* Overlay avec animation de fade */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            {/* Panel du modal avec animation de slide et scale */}
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-500"
              enterFrom="opacity-0 scale-95 translate-y-10"
              enterTo="opacity-100 scale-100 translate-y-0"
              leave="ease-in duration-300"
              leaveFrom="opacity-100 scale-100 translate-y-0"
              leaveTo="opacity-0 scale-95 translate-y-10"
            >
              <Dialog.Panel className="w-full max-w-6xl transform overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-cyan-500/30 shadow-2xl shadow-cyan-500/20 transition-all">
                {/* Header du modal */}
                <div className="relative bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-b border-cyan-500/30 px-8 py-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <Dialog.Title className="text-3xl font-bold text-white flex items-center gap-3">
                        <EnvelopeIcon className="h-8 w-8 text-cyan-400" />
                        <span>Get In Touch</span>
                      </Dialog.Title>
                      <p className="mt-2 text-gray-400">
                        Let's discuss your project and how I can help bring your ideas to life
                      </p>
                    </div>
                    <button
                      onClick={closeModal}
                      className="rounded-lg p-2 text-gray-400 hover:bg-white/10 hover:text-white transition-all duration-300 group"
                    >
                      <XMarkIcon className="h-6 w-6 group-hover:rotate-90 transition-transform duration-300" />
                    </button>
                  </div>
                </div>

                {/* Corps du modal */}
                <div className="grid lg:grid-cols-2 gap-8 p-8">
                  {/* Colonne gauche - Informations */}
                  <div className="space-y-8">
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-white">Contact Information</h3>
                      <p className="text-gray-300 leading-relaxed">
                        Fill out the form and I'll get back to you within 24 hours. 
                        I'm excited to hear about your project!
                      </p>
                    </div>

                    {/* Cards d'information */}
                    <div className="space-y-4">
                      {/* Email */}
                      <div className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-5 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
                        <div className="flex items-start gap-4">
                          <div className="bg-cyan-500/10 p-3 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                            <EnvelopeIcon className="h-6 w-6 text-cyan-400" />
                          </div>
                          <div>
                            <h4 className="text-white font-semibold mb-1">Email</h4>
                            <a href="mailto:metellusjunior56@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
                             metellusjunior56@gmail.com
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-5 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
                        <div className="flex items-start gap-4">
                          <div className="bg-blue-500/10 p-3 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                            <PhoneIcon className="h-6 w-6 text-blue-400" />
                          </div>
                          <div>
                            <h4 className="text-white font-semibold mb-1">Phone</h4>
                            <a href="tel:+1234567890" className="text-gray-400 hover:text-blue-400 transition-colors">
                              +509 48722757 via whatsapp
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* Location */}
                      <div className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-5 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
                        <div className="flex items-start gap-4">
                          <div className="bg-purple-500/10 p-3 rounded-lg group-hover:bg-purple-500/20 transition-colors">
                            <svg className="h-6 w-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-white font-semibold mb-1">Location</h4>
                            <p className="text-gray-400">
                              Port-au-Prince, Haiti
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Réseaux sociaux */}
                    <div className="space-y-4">
                      <h4 className="text-white font-semibold">Follow Me</h4>
                      <div className="flex gap-3">
                        <a href="https://github.com/Metellus509" className="bg-gray-800 p-3 rounded-lg hover:bg-cyan-500 transition-all duration-300 hover:scale-110 group">
                          <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/junior-wilfrid-metellus-639352288/" className="bg-gray-800 p-3 rounded-lg hover:bg-blue-500 transition-all duration-300 hover:scale-110 group">
                          <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Colonne droite - Formulaire */}
                  <div>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name Input */}
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-white font-medium flex items-center gap-2">
                          <UserIcon className="h-4 w-4 text-cyan-400" />
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none transition-all duration-300"
                          placeholder="John Doe"
                        />
                      </div>

                      {/* Email & Phone */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-white font-medium flex items-center gap-2">
                            <EnvelopeIcon className="h-4 w-4 text-cyan-400" />
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none transition-all duration-300"
                            placeholder="john@example.com"
                          />
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-white font-medium flex items-center gap-2">
                            <PhoneIcon className="h-4 w-4 text-cyan-400" />
                            Phone
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none transition-all duration-300"
                            placeholder="+1 (234) 567-890"
                          />
                        </div>
                      </div>

                      {/* Subject */}
                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-white font-medium">
                          Subject
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none transition-all duration-300"
                          placeholder="Project Inquiry"
                        />
                      </div>

                      {/* Message */}
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-white font-medium">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows="6"
                          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none transition-all duration-300 resize-none"
                          placeholder="Tell me about your project..."
                        />
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group"
                      >
                        <span>Send Message</span>
                        <PaperAirplaneIcon className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                      </button>
                    </form>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
