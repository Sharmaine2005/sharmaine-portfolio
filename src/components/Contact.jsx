import React from 'react';
import ContactForm from './ContactForm'; // Ensure this matches your file path
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaFileAlt } from 'react-icons/fa';

const Contact = () => {
  
  // Contact Information Array
  const contactInfo = [
    { 
      icon: <FaEnvelope />, 
      title: "Email Me", 
      content: "valenzuela.shp@gmail.com", 
      link: "mailto:valenzuela.shp@gmail.com" 
    },
    { 
      icon: <FaLinkedin />, 
      title: "LinkedIn", 
      content: "View Professional Profile", 
      link: "https://linkedin.com" // Add your actual LinkedIn URL
    },
    { 
      icon: <FaGithub />, 
      title: "GitHub", 
      content: "Check My Repositories", 
      link: "https://github.com" // Add your actual GitHub URL
    },
    { 
      icon: <FaMapMarkerAlt />, 
      title: "Location", 
      content: "Bacoor City, Cavite", 
      link: "#" 
    },
    { 
      icon: <FaFileAlt />, 
      title: "Resume", 
      content: "Download My CV", 
      link: "/resume.pdf" // Ensure you have a resume file in your public folder
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-black overflow-hidden" id="contact">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* GRID LAYOUT: 
            items-start: Ensures both columns start at the very top line.
        */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* --- LEFT SIDE: Text & Cards --- */}
          <div className="space-y-10" data-aos="fade-right">
            
            {/* Header Text */}
            <div className="space-y-3">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Let's Work <span className="text-primary">Together.</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Have a project in mind? I'm currently open to new opportunities.
              </p>
            </div>

            {/* Contact Cards Container */}
            {/* CHANGED: space-y-6 increases the gap between cards to match the Form's height */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <a 
                  key={index} 
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 p-5 bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-xl shadow-sm hover:shadow-lg hover:border-primary/50 transition-all duration-300 group cursor-pointer"
                >
                  {/* Icon Box */}
                  <div className="w-12 h-12 bg-red-50 dark:bg-red-500/10 rounded-full flex items-center justify-center text-primary text-xl group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  
                  {/* Text Content */}
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-900 dark:text-white font-semibold group-hover:text-primary transition-colors">
                      {item.content}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* --- RIGHT SIDE: Contact Form --- */}
          {/* This calls the taller component we created in Step 1 */}
          <div className="w-full">
             <ContactForm />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;