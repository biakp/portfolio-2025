"use client";

import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section className="py-20 bg-surface cyber-grid data-stream-slow data-stream-vertical light-zone-accent circuit-lights" id="about">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="font-chakraPetch text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-12 glow-text glitch holographic-text" data-text="&gt; NEURAL PROFILE_">
            &gt; NEURAL PROFILE_
          </h2>
          
          <div className="grid md:grid-cols-2 gap-16 items-top">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="font-mono text-2xl text-accent mb-6 glow-text-subtle">
                {`// System Administrator`}
              </h3>
              <div className="space-y-4 text-lg text-text leading-relaxed">
                <p>
                  Beatriz Knabben is a front-end developer with experience creating modern, responsive interfaces 
                  using technologies such as Liquid (Shopify), Vue.js, React, Next.js, TypeScript, and Tailwind CSS.
                </p>
                <p>
                  She also works with social media management, paid traffic (Meta Ads), and automation tools like n8n. 
                  Currently expanding her skills in back-end development and cybersecurity, Beatriz is on the path to 
                  becoming a full stack developer.
                </p>
                <p>
                  Focused on delivering secure and scalable digital solutions that bridge the gap between 
                  cutting-edge technology and intuitive user experiences.
                </p>
              </div>

              {/* Education Section */}
              <div className="mt-8">
                <h3 className="font-mono text-xl text-accent mb-6 glow-text-subtle">
                  {`// Education & Certifications`}
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      title: "Cybersecurity Degree",
                      institution: "University",
                      period: "2024-2027",
                      status: "In Progress"
                    },
                    {
                      title: "Front End Nanodegree",
                      institution: "Udacity",
                      period: "2018-2019",
                      status: "Completed"
                    }
                  ].map((education, index) => (
                    <motion.div
                      key={education.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      className="cyber-clip-enhanced bg-background border border-border p-6 font-mono hover:bg-surface hover:border-primary transition-all duration-300 relative"
                      style={{
                        clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
                      }}
                    >
                      {/* Fake borders for cut corners */}
                      <div 
                        className="absolute top-0 right-0 w-2 h-2 bg-border"
                        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}
                      />
                      <div 
                        className="absolute bottom-0 left-0 w-2 h-2 bg-border"
                        style={{ clipPath: 'polygon(0 0, 0 100%, 100% 100%)' }}
                      />
                      <div className="relative z-10">
                        <div className="flex justify-between items-start mb-3">
                          <h4 className="text-primary font-semibold text-lg">{education.title}</h4>
                          <span className={`text-sm px-3 py-1 border rounded-sm ${education.status === 'In Progress' ? 'text-accent border-accent' : 'text-primary border-primary'}`}>
                            {education.status}
                          </span>
                        </div>
                        <p className="text-text text-base mb-2">{education.institution}</p>
                        <p className="text-accent text-sm font-medium">{education.period}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <h3 className="font-mono text-xl text-accent mb-6 glow-text-subtle">
                  {`// Core Technologies`}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "React & Next.js",
                    "TypeScript",
                    "Vue.js",
                    "Liquid (Shopify)",
                    "Tailwind CSS",
                    "Meta Ads",
                    "n8n Automation",
                    "Node.js",
                    "WordPress",
                    "ComfyUI"
                  ].map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.5, 
                        delay: 0.6 + index * 0.1,
                        type: "spring",
                        stiffness: 100
                      }}
                      className="cyber-clip-enhanced bg-background border border-border p-4 text-center font-mono text-primary hover:bg-primary hover:text-background transition-all duration-300 cursor-default relative"
                      style={{
                        clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
                      }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {/* Fake borders for cut corners */}
                      <div 
                        className="absolute top-0 right-0 w-2 h-2 bg-border"
                        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}
                      />
                      <div 
                        className="absolute bottom-0 left-0 w-2 h-2 bg-border"
                        style={{ clipPath: 'polygon(0 0, 0 100%, 100% 100%)' }}
                      />
                      <span className="relative z-10">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-mono text-xl text-accent mb-6 glow-text-subtle">
                  {`// Skills Overview`}
                </h3>
                <div className="space-y-4">
                  {[
                    { label: "Problem Solving", value: 95 },
                    { label: "Code Quality", value: 88 },
                    { label: "Team Collaboration", value: 92 },
                    { label: "Innovation", value: 85 }
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-mono text-text text-sm">{stat.label}</span>
                        <span className="font-mono text-primary text-sm">{stat.value}%</span>
                      </div>
                      <div className="w-full bg-background border border-border rounded-none h-2 overflow-hidden">
                        <motion.div
                          className="h-full glow-box"
                          style={{ backgroundColor: '#6b7cff' }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${stat.value}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: 1 + index * 0.1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
