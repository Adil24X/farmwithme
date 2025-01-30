import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-green-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-green-800 mb-6">Contact Us</h1>
            <p className="text-xl text-gray-600">
              Get in touch with us for any inquiries about our services
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-green-800 mb-8">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-green-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-green-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-600">contact@agrile.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-green-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Address</h3>
                    <p className="text-gray-600">123 Farm Road, Rural County</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
  <h2 className="text-3xl font-bold text-green-800 mb-4">Always Available for Our Customers</h2>
  <p className="text-gray-600">
    We are available 24/7 to assist you with any inquiries or support you may need. Feel free to reach out to us at any time, and we'll be happy to help.
  </p>
</div>

            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-green-800 mb-8">Send Us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
