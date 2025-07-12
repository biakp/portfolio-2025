"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { validateContactForm } from "@/utils/validation";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Clear previous errors
    setFieldErrors({});
    
    // Client-side validation
    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      setFieldErrors(validation.errors);
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: data.message || 'Message sent successfully!'
        });
        // Reset form
        setFormData({ name: "", email: "", message: "" });
        setFieldErrors({});
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Failed to send message. Please try again.'
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
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
                    className={`cyber-clip w-full px-4 py-3 bg-surface border transition-all duration-300 font-mono placeholder:text-muted ${
                      fieldErrors.name 
                        ? 'border-red-500 focus:ring-2 focus:ring-red-500 focus:border-red-500' 
                        : 'border-border focus:ring-2 focus:ring-primary focus:border-primary'
                    } text-text`}
                    placeholder="Enter identification..."
                  />
                  {fieldErrors.name && (
                    <p className="mt-2 text-sm text-red-400 font-mono">✗ {fieldErrors.name}</p>
                  )}
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
                    className={`cyber-clip-enhanced w-full px-4 py-3 bg-surface border transition-all duration-300 font-mono placeholder:text-muted relative ${
                      fieldErrors.email 
                        ? 'border-red-500 focus:ring-2 focus:ring-red-500 focus:border-red-500' 
                        : 'border-border focus:ring-2 focus:ring-primary focus:border-primary'
                    } text-text`}
                    style={{
                      clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
                    }}
                    placeholder="your@email.com"
                  />
                  {fieldErrors.email && (
                    <p className="mt-2 text-sm text-red-400 font-mono">✗ {fieldErrors.email}</p>
                  )}
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
                    className={`cyber-clip-enhanced w-full px-4 py-3 bg-surface border transition-all duration-300 resize-none font-mono placeholder:text-muted relative ${
                      fieldErrors.message 
                        ? 'border-red-500 focus:ring-2 focus:ring-red-500 focus:border-red-500' 
                        : 'border-border focus:ring-2 focus:ring-primary focus:border-primary'
                    } text-text`}
                    style={{
                      clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
                    }}
                    placeholder="Tell me about your project..."
                  />
                  {fieldErrors.message && (
                    <p className="mt-2 text-sm text-red-400 font-mono">✗ {fieldErrors.message}</p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className={`cyber-button-enhanced w-full flex items-center justify-center space-x-2 px-8 py-3 font-mono font-medium transition-all duration-300 relative ${
                    isSubmitting 
                      ? 'bg-muted text-text cursor-not-allowed' 
                      : 'bg-primary text-background hover:bg-accent'
                  }`}
                  style={{
                    clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))'
                  }}
                >
                  {/* Fake borders for cut corners - matching primary color */}
                  <div 
                    className={`absolute top-0 right-0 w-3 h-3 ${isSubmitting ? 'bg-muted' : 'bg-primary'}`}
                    style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}
                  />
                  <div 
                    className={`absolute bottom-0 left-0 w-3 h-3 ${isSubmitting ? 'bg-muted' : 'bg-primary'}`}
                    style={{ clipPath: 'polygon(0 0, 0 100%, 100% 100%)' }}
                  />
                  
                  {/* Border overlay */}
                  <div 
                    className={`absolute inset-0 border pointer-events-none ${isSubmitting ? 'border-muted' : 'border-primary'}`}
                    style={{
                      clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))'
                    }}
                  />
                  
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-text border-t-transparent rounded-full animate-spin relative z-10" />
                      <span className="relative z-10">Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 relative z-10" />
                      <span className="relative z-10">Send Message</span>
                    </>
                  )}
                </motion.button>

                {/* Status Message */}
                {submitStatus.type && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`mt-4 p-4 font-mono text-sm cyber-clip-enhanced relative ${
                      submitStatus.type === 'success' 
                        ? 'bg-green-900/20 border border-green-500 text-green-400' 
                        : 'bg-red-900/20 border border-red-500 text-red-400'
                    }`}
                    style={{
                      clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
                    }}
                  >
                    {/* Fake borders for cut corners */}
                    <div 
                      className={`absolute top-0 right-0 w-2 h-2 ${
                        submitStatus.type === 'success' ? 'bg-green-500' : 'bg-red-500'
                      }`}
                      style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}
                    />
                    <div 
                      className={`absolute bottom-0 left-0 w-2 h-2 ${
                        submitStatus.type === 'success' ? 'bg-green-500' : 'bg-red-500'
                      }`}
                      style={{ clipPath: 'polygon(0 0, 0 100%, 100% 100%)' }}
                    />
                    <span className="relative z-10">
                      {submitStatus.type === 'success' ? '✓ ' : '✗ '}
                      {submitStatus.message}
                    </span>
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
