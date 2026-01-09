import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaPaperPlane } from 'react-icons/fa';

const ContactForm = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Replace with your actual credentials
    emailjs.sendForm('service_id', 'template_id', form.current, 'public_key')
      .then((result) => {
          setStatus('success');
          form.current.reset();
      }, (error) => {
          setStatus('error');
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <form 
      ref={form} 
      onSubmit={sendEmail} 
      // h-full ensures it stretches to match the left side, but won't exceed it if content is small enough
      className="bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl p-8 shadow-lg dark:shadow-none h-full flex flex-col gap-6"
    >
      <div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Send Message</h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          I'll get back to you as soon as possible.
        </p>
      </div>

      <div className="space-y-4 flex-1 flex flex-col">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Name</label>
            <input 
              type="text" 
              name="user_name" 
              required
              className="w-full bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Email</label>
            <input 
              type="email" 
              name="user_email" 
              required
              className="w-full bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
            />
          </div>
        </div>

        {/* 2. REDUCED min-h-[150px] to min-h-[80px] */}
        <div className="space-y-2 flex flex-col flex-grow">
          <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Message</label>
          <textarea 
            name="message" 
            required
            // CHANGED HERE: reduced min-h so it doesn't force the card to be taller than the left side
            className="w-full flex-grow bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none min-h-[80px]"
          />
        </div>
      </div>

      <button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full bg-primary hover:bg-red-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : <>Send Message <FaPaperPlane /></>}
      </button>

      {status === 'success' && (
        <p className="text-green-500 text-center text-sm font-medium animate-pulse">
          Message sent successfully!
        </p>
      )}
      {status === 'error' && (
        <p className="text-red-500 text-center text-sm font-medium">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
};

export default ContactForm;