import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser'; // Import EmailJS
import { FaPaperPlane, FaUser, FaEnvelope, FaCommentAlt } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    // REPLACE THESE WITH YOUR ACTUAL ID'S FROM STEP 1
    const SERVICE_ID = "service_vu26om3";
    const TEMPLATE_ID = "template_819gg0p";
    const PUBLIC_KEY = "H5V5H-xKpIdoe8iJF";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          setLoading(false);
          alert("Message sent successfully! I will get back to you soon.");
          form.current.reset(); // Clear the form
      }, (error) => {
          setLoading(false);
          console.log(error.text);
          alert("Failed to send message. Please try again later.");
      });
  };

  return (
    <section id="contact" className="py-20 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-16" data-aos="fade-up">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          Get in <span className="text-primary">Touch</span>
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
      </div>

      <div className="bg-white dark:bg-white/5 backdrop-blur-sm shadow-xl p-8 rounded-2xl border border-gray-100 dark:border-white/10" data-aos="zoom-in">
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          
          {/* Name Input */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
              <FaUser />
            </div>
            <input 
              type="text" 
              name="user_name" // Must match {{user_name}} in EmailJS template
              required
              placeholder="Your Name" 
              className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400"
            />
          </div>

          {/* Email Input */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
              <FaEnvelope />
            </div>
            <input 
              type="email" 
              name="user_email" // Must match {{user_email}} in EmailJS template
              required
              placeholder="Your Email" 
              className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400"
            />
          </div>

          {/* Message Input */}
          <div className="relative group">
            <div className="absolute top-3 left-3 text-gray-400 group-focus-within:text-primary transition-colors">
              <FaCommentAlt />
            </div>
            <textarea 
              name="message" // Must match {{message}} in EmailJS template
              required
              rows="5"
              placeholder="Your Message" 
              className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400 resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            disabled={loading}
            className="w-full py-4 bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary text-white font-bold rounded-lg shadow-lg hover:shadow-primary/50 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? 'Sending...' : (
              <>
                Send Message <FaPaperPlane />
              </>
            )}
          </button>

        </form>
      </div>
    </section>
  );
};

export default Contact;