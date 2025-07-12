"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-background cyber-grid data-stream">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="font-chakraPetch text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-12 glow-text glitch holographic-text" data-text="&gt; GET IN TOUCH_">
            &gt; GET IN TOUCH_
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="font-mono text-2xl text-accent mb-6 glow-text-subtle">
                {`// Let's Work Together`}
              </h3>
              <p className="text-text mb-8 leading-relaxed">
                I&apos;m always interested in new opportunities and exciting projects. Whether you need 
                modern e-commerce solutions, automation systems, or responsive web applications, 
                I&apos;d love to hear from you and discuss how we can bring your ideas to life.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    value: "beatriz.knabbenp@gmail.com",
                    href: "mailto:beatriz.knabbenp@gmail.com",
                    isLink: true,
                  },
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "+55 (48) 99849-3265",
                    href: "tel:+5548998493265",
                    isLink: true,
                  },
                  {
                    icon: MapPin,
                    label: "Location",
                    value: "Brazil",
                    href: "#",
                    isLink: false,
                  },
                ].map((contact, index) => {
                  const Component = contact.isLink ? motion.a : motion.div;
                  const props = contact.isLink ? { href: contact.href } : {};
                  
                  return (
                    <Component
                      key={contact.label}
                      {...props}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      className={`cyber-clip-enhanced flex items-center space-x-4 p-4 bg-surface transition-all duration-300 group relative ${contact.isLink ? 'hover:bg-primary hover:text-background cursor-pointer' : ''}`}
                      style={{
                        clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
                      }}
                    >
                    {/* Fake borders for cut corners */}
                    <div 
                      className="absolute top-0 right-0 w-2 h-2 bg-border group-hover:bg-background"
                      style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}
                    />
                    <div 
                      className="absolute bottom-0 left-0 w-2 h-2 bg-border group-hover:bg-background"
                      style={{ clipPath: 'polygon(0 0, 0 100%, 100% 100%)' }}
                    />
                    <div 
                      className="cyber-clip-enhanced p-2 bg-background group-hover:bg-background transition-all duration-300 relative"
                      style={{
                        clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))'
                      }}
                    >
                      {/* Small fake borders */}
                      <div 
                        className="absolute top-0 right-0 w-1.5 h-1.5 bg-primary"
                        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}
                      />
                      <div 
                        className="absolute bottom-0 left-0 w-1.5 h-1.5 bg-primary"
                        style={{ clipPath: 'polygon(0 0, 0 100%, 100% 100%)' }}
                      />
                      <contact.icon className="w-5 h-5 text-primary group-hover:text-primary relative z-10" />
                    </div>
                    <div className="relative z-10">
                      <p className="font-mono font-medium text-primary group-hover:text-background">{contact.label}</p>
                      <p className="font-mono text-text group-hover:text-background">{contact.value}</p>
                    </div>
                  </Component>
                );
                })}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-mono font-medium mb-2 text-accent">
                    {`// user.name`}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="cyber-clip w-full px-4 py-3 bg-surface border border-border focus:ring-2 focus:ring-primary focus:border-primary text-text transition-all duration-300 font-mono placeholder:text-muted"
                    placeholder="Enter identification..."
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-mono font-medium mb-2 text-accent">
                    {`// contact.protocol`}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="cyber-clip-enhanced w-full px-4 py-3 bg-surface border border-border focus:ring-2 focus:ring-primary focus:border-primary text-text transition-all duration-300 font-mono placeholder:text-muted relative"
                    style={{
                      clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
                    }}
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-mono font-medium mb-2 text-accent">
                    {`// message.data`}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="cyber-clip-enhanced w-full px-4 py-3 bg-surface border border-border focus:ring-2 focus:ring-primary focus:border-primary text-text transition-all duration-300 resize-none font-mono placeholder:text-muted relative"
                    style={{
                      clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
                    }}
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="cyber-button-enhanced w-full flex items-center justify-center space-x-2 px-8 py-3 bg-primary text-background font-mono font-medium hover:bg-accent transition-all duration-300 relative"
                  style={{
                    clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))'
                  }}
                >
                  {/* Fake borders for cut corners - matching primary color */}
                  <div 
                    className="absolute top-0 right-0 w-3 h-3 bg-primary"
                    style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}
                  />
                  <div 
                    className="absolute bottom-0 left-0 w-3 h-3 bg-primary"
                    style={{ clipPath: 'polygon(0 0, 0 100%, 100% 100%)' }}
                  />
                  
                  {/* Border overlay */}
                  <div 
                    className="absolute inset-0 border border-primary pointer-events-none"
                    style={{
                      clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))'
                    }}
                  />
                  
                  <Send className="w-4 h-4 relative z-10" />
                  <span className="relative z-10">Send Message</span>
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
