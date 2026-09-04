import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { 
  Users, 
  Code, 
  Lightbulb, 
  Handshake, 
  ArrowRight, 
  Linkedin, 
  Github, 
  Dribbble, 
  Twitter, 
  Mail 
} from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const teamMembers = [
  {
    name: "Afaq Ahmad",
    role: "Team Lead /Socila Media Manager ",
      contact:"",
    image: "assets/images/afaq.png",
    bio: "Executing data-driven social media strategies, growing audience engagement, and building brand presence across major platforms.",
    tags: ["SMM Content" ,"Strategy Analytics", "Brand Growth"],
    socials: { linkedin: "https://www.linkedin.com/in/afaq-ahmad-953a68250/", github:"https://github.com/afaqahmad2005", email: "mailto:afaqahmadshewa1234@gmail.com" }
  },
  {
    name: "Muntazir",
    role: "Web developer / Content Manager ",
      contact:"",
    image:"https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    bio: "Building responsive web platforms while creating, optimizing, and managing digital content strategies for maximum audience engagement.",
    tags: ["React" ,"CMS ","SEO Copy", "Web Dev"],
    socials: { linkedin: "#", email: "#" }
  },
  
  {
    name: "Maheen Manzoor",
    role: "HR Manager ",
      contact:"",
    image: "assets/images/maheen.png",
    bio: "Managing talent acquisition, fostering company culture, and streamlining remote team operations to drive organizational growth.",
    tags: ["Recruitment" ,"Talent Acquisition ","Team Operations "],
    socials: { linkedin: "https://www.linkedin.com/in/maheen-manzoor-a765942ba",  email: "mailto:maheenmanzoor43@gmail.com" }
  },
  {
    name: "Aimal khan",
    role: "Data Analyst",
    contact:"",
    image:"assets/images/aimal.png",
    bio: "Transforming raw complex data into actionable insights, visual dashboards, and strategic business intelligence.",
    tags: ["Python SQL" ,"Power BI Data" ,"Analytics"],
    socials: { linkedin: "https://www.linkedin.com/in/aimal-khan-a-a46196330?utm_source=share_via&utm_content=profile&utm_medium=member_ios", github:'https://github.com/Aimal-Khan321',  email: "mailto:Aimalkhanafridi622@gmail.com" }
  },
  {
    name: "Talha khan",
    role: "Graphic & Video Editor",
      contact:"",
    image:"assets/images/talha.png",
    bio: "Crafting high-converting visual assets, dynamic motion graphics, and engaging video content tailored for social media and web branding.",
    tags: ["Premiere Pro ","After Effects" ,"Photoshop ","Figma"],
    socials: { linkedin: "#",   email: "#" }
  },
  {
    name: "Zeeshan Salaar",
    role: "Academic Writer",
      contact:"+92 300 9081537",
      image:"https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    bio: "Translating complex research into high-impact academic papers, rigorous literature reviews, and precise thesis chapters tailored for publication and academic success.",
    tags: ["AcademicWriting", "ResearchPaper", "ThesisEditing"],
    socials: { linkedin: "#",   email: "#" }
  },
  
];

export default function TeamPage() {
  return (
    <div className="bg-slate-50 font-sans text-slate-800 antialiased min-h-screen overflow-hidden">
      
      {/* HERO SECTION WITH FRAMER MOTION */}
      <section className="relative bg-[#0F172A] mt-16 text-white py-20 px-6 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-600/30 rounded-full blur-3xl pointer-events-none" 
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl pointer-events-none" 
        />

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.span 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 text-purple-300 text-xs font-semibold px-4 py-1.5 rounded-full border border-white/20 mb-6"
          >
            <Users className="w-3.5 h-3.5" /> MEET OUR TEAM
          </motion.span>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4"
          >
            The People Behind <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">Shezi Tech Solution</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-slate-300 max-w-2xl mx-auto text-base md:text-lg mb-10"
          >
            We are providing SEO, Web, App Development, Social Media Management, Content Writing, Academic Writing, and Video Editing.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-3 max-w-lg mx-auto bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10"
          >
            <div>
              <h3 className="text-2xl font-bold text-white">10+</h3>
              <p className="text-xs text-slate-400">Team Members</p>
            </div>
            <div className="border-x border-white/10">
              <h3 className="text-2xl font-bold text-white">100%</h3>
              <p className="text-xs text-slate-400">Remote Driven</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">24/7</h3>
              <p className="text-xs text-slate-400">Innovation</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TEAM MEMBERS SWIPER SLIDER */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-900">
            Our Core <span className="text-indigo-600">Leadership & Experts</span>
          </h2>
          <p className="text-slate-500 text-sm mt-2">Swipe through to meet our talented team members.</p>
        </motion.div>

        {/* SWIPER CONTAINER */}
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="pb-16"
        >
          {teamMembers.map((member, idx) => (
            <SwiperSlide key={idx} className="h-full">
              <motion.div 
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group h-full flex flex-col justify-between"
              >
                <div>
                  <div className="h-2 bg-gradient-to-r from-indigo-500 to-purple-500" />
                  <div className="p-6 text-center">
                    <div className="relative w-28 h-28 mx-auto mb-4">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 p-1">
                        <img src={member.image} alt={member.name} className="w-full h-full rounded-full object-cover bg-white" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{member.name}</h3>
                    <p className="text-xs font-semibold text-indigo-600 mb-3">{member.role}</p>
                    <p className="text-xs font-semibold text-indigo-600 mb-3">{`${member.contact ? " Contact:":""}`}{member.contact}</p>
                    <p className="text-slate-500 text-xs leading-relaxed mb-4">{member.bio}</p>
                    
                    <div className="flex flex-wrap justify-center gap-1.5 mb-6">
                      {member.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="bg-indigo-50 text-indigo-600 text-[10px] font-semibold px-2.5 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex justify-center gap-4 border-t border-slate-100 p-4 text-slate-400 bg-slate-50/50">
                  {member.socials.linkedin && <a href={member.socials.linkedin } target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors"><Linkedin className="w-4 h-4" /></a>}
                  {member.socials.github && <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors"><Github className="w-4 h-4" /></a>}
                  {member.socials.dribbble && <a href={member.socials.dribbble} target="_blank"  rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors"><Dribbble className="w-4 h-4" /></a>}
                  {member.socials.twitter && <a href={member.socials.twitter}target="_blank"  rel="noopener noreferrer"  className="hover:text-indigo-600 transition-colors"><Twitter className="w-4 h-4" /></a>}
                  {member.socials.email && <a href={member.socials.email} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors"><Mail className="w-4 h-4" /></a>}
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* OUR VALUES WITH MOTION ANIMATION */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">
              Why We <span className="text-indigo-600">Thrive Together</span>
            </h2>
            <p className="text-slate-500 text-sm mt-2">The principles that guide our everyday work and growth.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-100 text-center"
            >
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Technical Excellence</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                We write clean, modular, scalable code adhering to industry standards across all tech stacks.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-100 text-center"
            >
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Innovation First</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                We continuously experiment with modern frameworks and AI workflows to solve real problems.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-100 text-center"
            >
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Handshake className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Collaborative Spirit</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                We foster a culture of mentorship, continuous peer learning, and clear remote communication.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 rounded-3xl p-10 md:p-14 text-center text-white shadow-xl relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Want to Join Our Team?</h2>
            <p className="text-indigo-100 text-sm md:text-base max-w-xl mx-auto mb-8">
              We are always looking for visionary developers, designers, and problem solvers to build great products with us.
            </p>
            <a href="/career" className="inline-flex items-center gap-2 bg-white text-indigo-600 hover:bg-indigo-50 px-6 py-3 rounded-full font-semibold text-sm transition-all shadow-md hover:shadow-lg">
              View Open Positions <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </section>

    </div>
  );
}