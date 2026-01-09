import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser'; 
import { FaPaperPlane, FaUser, FaEnvelope, FaCommentAlt } from 'react-icons/fa';

const ContactForm = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    const SERVICE_ID = "service_vu26om3";
    const TEMPLATE_ID = "template_819gg0p";
    const PUBLIC_KEY = "H5V5H-xKpIdoe8iJF";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          setLoading(false);
          alert("Message sent successfully! I will get back to you soon.");
          form.current.reset(); 
      }, (error) => {
          setLoading(false);
          console.log(error.text);
          alert("Failed to send message. Please try again later.");
      });
  };

  return (
    <div className="w-full">
      {/* Section Header */}
      <div className="text-left mb-3" data-aos="fade-up">
        <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
          Get in <span className="text-primary">Touch</span>
        </h3>
        <div className="w-16 h-1 bg-primary rounded-full mt-2"></div>
      </div>

      {/* Form Card */}
      <div className="bg-white dark:bg-white/5 backdrop-blur-sm shadow-xl p-8 rounded-2xl border border-gray-100 dark:border-white/10" data-aos="zoom-in">
        
        <form ref={form} onSubmit={sendEmail} className="space-y-5">
          
          {/* Name Input */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
              <FaUser />
            </div>
            <input 
              type="text" 
              name="user_name" 
              required
              placeholder="Your Name" 
              className="w-full pl-10 pr-4 py-3.5 bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400"
            />
          </div>

          {/* Email Input */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
              <FaEnvelope />
            </div>
            <input 
              type="email" 
              name="user_email" 
              required
              placeholder="Your Email" 
              className="w-full pl-10 pr-4 py-3.5 bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400"
            />
          </div>

          {/* Message Input */}
          <div className="relative group">
            <div className="absolute top-5 left-3 text-gray-400 group-focus-within:text-primary transition-colors">
              <FaCommentAlt />
            </div>
            <textarea 
              name="message" 
              required
              rows="3" 
              placeholder="Your Message" 
              className="w-full pl-10 pr-4 py-3.5 bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400 resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            disabled={loading}
            className="w-full py-3.5 bg-gradient-to-r from-primary to-red-700 hover:from-red-700 hover:to-primary text-white font-bold rounded-lg shadow-lg hover:shadow-primary/50 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? 'Sending...' : (
              <>
                Send Message <FaPaperPlane />
              </>
            )}
          </button>

        </form>
      </div>
    </div>
  );
};

export default ContactForm;