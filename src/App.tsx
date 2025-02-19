import React from 'react';
import { Phone, Wifi, Globe, Mail, MapPin, Network, Clock, Zap } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col items-center text-center space-y-6">
          <div className="bg-white p-6 rounded-2xl flex items-center justify-center mb-4 hover:scale-105 transition-transform duration-300">
  <img src="/logo.svg" className="w-72 h-auto md:w-96 md:h-auto" />
</div>


            <h1 className="text-5xl font-bold tracking-tight">Koottanad Cable Vision</h1>
            <p className="text-xl text-red-100/90">A Division of Pattambi Cable Vision</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href="tel:9349927703" className="group bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-medium hover:bg-white/20 transition-all duration-300 flex items-center gap-3">
                <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Contact Us
              </a>
              <a href="mailto:koottanadcablevison@gmail.com" className="group bg-blue-600/90 text-white px-8 py-4 rounded-xl font-medium hover:bg-blue-600 transition-all duration-300 flex items-center gap-3">
                <Mail className="w-5 h-5 group-hover:-rotate-12 transition-transform" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-20">
        {/* Services Banner */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">High Speed Internet and Telephone FTTH Connection</h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">Experience lightning-fast connectivity with our state-of-the-art fiber optic network.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                name: 'BSNL', 
                icon: <Network className="w-8 h-8" />, 
                color: 'blue',
                speed: '200 Mbps'
              },
              { 
                name: 'RAIL Wire', 
                icon: <Wifi className="w-8 h-8" />, 
                color: 'red',
                speed: '300 Mbps'
              },
              { 
                name: 'D Wan', 
                icon: <Globe className="w-8 h-8" />, 
                color: 'blue',
                speed: '150 Mbps'
              },
              { 
                name: 'IDEA', 
                icon: <Network className="w-8 h-8" />, 
                color: 'red',
                speed: '250 Mbps'
              }
            ].map((service, index) => (
              <div 
                key={index} 
                className={`group relative overflow-hidden rounded-2xl p-8 text-center transition-all duration-300 hover:scale-[1.02] ${
                  service.color === 'blue' 
                    ? 'bg-blue-50/50 hover:bg-blue-50 text-blue-600' 
                    : 'bg-red-50/50 hover:bg-red-50 text-red-600'
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="bg-white p-4 rounded-xl w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.name}</h3>
                  <div className="text-sm font-medium opacity-80">Up to</div>
                  <div className="text-2xl font-bold mt-1">{service.speed}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Map and Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-[400px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15666.124617874707!2d76.17501367167523!3d10.804744539508611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7dd8779d2b10d%3A0x4c8db5a5d6fca8b6!2sKoottanad%2C%20Kerala!5e0!3m2!1sen!2sin!4v1709881547946!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Koottanad Cable Vision Location"
            ></iframe>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-10 text-white shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-2xl font-bold mb-10">Contact Information</h2>
            <div className="space-y-8">
              <div className="group flex items-start space-x-5">
                <MapPin className="w-6 h-6 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <h3 className="font-semibold mb-2">Address</h3>
                  <p className="text-blue-100">Kottilil Building, Pattambi Road, Koottanad, Palakkad-679533</p>
                </div>
              </div>
              <div className="group flex items-start space-x-5">
                <Mail className="w-6 h-6 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <a href="mailto:koottanadcablevison@gmail.com" className="text-blue-100 hover:text-white transition-colors">
                    koottanadcablevison@gmail.com
                  </a>
                </div>
              </div>
              <div className="group flex items-start space-x-5">
                <Phone className="w-6 h-6 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <a href="tel:9349927703" className="text-blue-100 hover:text-white transition-colors">
                    +91 93499 27703
                  </a>
                </div>
              </div>
              <div className="group flex items-start space-x-5">
                <Clock className="w-6 h-6 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <h3 className="font-semibold mb-2">Business Hours</h3>
                  <p className="text-blue-100">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                  <p className="text-blue-100">Sunday: 10:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-10">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-3">Koottanad Cable Vision</h2>
            <p className="text-gray-400">Connecting homes with high-speed internet and quality cable services</p>
            <p className="text-gray-500 mt-4">© 2025 Koottanad Cable Vision. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;