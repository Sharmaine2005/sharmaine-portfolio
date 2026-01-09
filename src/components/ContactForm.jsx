import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaPaperPlane } from 'react-icons/fa';

const ContactForm = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Sending...');
    // Simulate send
    setTimeout(() => {
        setStatus('Message Sent!');
        e.target.reset();
    }, 2000);
  };

  return (
    // CONTAINER: White & Shadow (Day) vs Glass & Border (Night)
    <div className="w-full bg-white dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 p-8 rounded-2xl shadow-2xl dark:shadow-none relative overflow-hidden group transition-colors duration-300">
      
      {/* Decorative Red Glow (Subtle in Day, Bright in Night) */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 dark:bg-primary/20 rounded-full blur-3xl pointer-events-none group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition duration-500"></div>

      <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Send a Message</h3>

      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
        
        {/* Floating Label Input Style */}
        <div className="relative">
          <input type="text" name="user_name" required placeholder=" " 
            className="peer w-full p-4 bg-transparent border border-gray-300 dark:border-gray-600 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-gray-900 dark:text-gray-100 z-10 relative" 
          />
          <label className="absolute left-4 top-4 text-gray-500 dark:text-gray-400 transition-all peer-focus:-top-3 peer-focus:left-2 peer-focus:text-xs peer-focus:bg-white dark:peer-focus:bg-[#0a0a0a] peer-focus:px-1 peer-focus:text-primary peer-not-placeholder-shown:-top-3 peer-not-placeholder-shown:left-2 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:bg-white dark:peer-not-placeholder-shown:bg-[#0a0a0a] peer-not-placeholder-shown:px-1 cursor-text pointer-events-none">
            Your Name
          </label>
        </div>
        
        <div className="relative">
          <input type="email" name="user_email" required placeholder=" " 
            className="peer w-full p-4 bg-transparent border border-gray-300 dark:border-gray-600 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-gray-900 dark:text-gray-100" 
          />
          <label className="absolute left-4 top-4 text-gray-500 dark:text-gray-400 transition-all peer-focus:-top-3 peer-focus:left-2 peer-focus:text-xs peer-focus:bg-white dark:peer-focus:bg-[#0a0a0a] peer-focus:px-1 peer-focus:text-primary peer-not-placeholder-shown:-top-3 peer-not-placeholder-shown:left-2 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:bg-white dark:peer-not-placeholder-shown:bg-[#0a0a0a] peer-not-placeholder-shown:px-1 cursor-text pointer-events-none">
            Your Email
          </label>
        </div>
        
        <div className="relative">
          <textarea name="message" rows="4" required placeholder=" " 
            className="peer w-full p-4 bg-transparent border border-gray-300 dark:border-gray-600 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-gray-900 dark:text-gray-100 resize-none" 
          />
          <label className="absolute left-4 top-4 text-gray-500 dark:text-gray-400 transition-all peer-focus:-top-3 peer-focus:left-2 peer-focus:text-xs peer-focus:bg-white dark:peer-focus:bg-[#0a0a0a] peer-focus:px-1 peer-focus:text-primary peer-not-placeholder-shown:-top-3 peer-not-placeholder-shown:left-2 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:bg-white dark:peer-not-placeholder-shown:bg-[#0a0a0a] peer-not-placeholder-shown:px-1 cursor-text pointer-events-none">
            Your Message
          </label>
        </div>
        
        <button type="submit" className="w-full py-4 bg-gradient-to-r from-primary to-red-700 text-white font-bold rounded-lg hover:shadow-[0_0_20px_rgba(255,0,0,0.4)] transform hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
          SEND MESSAGE <FaPaperPlane />
        </button>

        {status && <p className="text-center text-sm font-bold text-green-500 animate-pulse">{status}</p>}
      </form>
    </div>
  );
};

export default ContactForm;