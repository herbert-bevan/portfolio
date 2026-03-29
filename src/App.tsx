/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  ChevronRight, 
  Terminal, 
  Database, 
  Cloud, 
  Cpu, 
  Award,
  BookOpen,
  Briefcase,
  Layers
} from "lucide-react";
import { RESUME_DATA } from "./constants";
import ThreeBackground from "./components/ThreeBackground";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Section = ({ 
  children, 
  id, 
  className 
}: { 
  children: React.ReactNode; 
  id?: string; 
  className?: string 
}) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    className={cn("py-24 px-6 max-w-6xl mx-auto", className)}
  >
    {children}
  </motion.section>
);

const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <motion.div 
    whileHover={{ y: -8, scale: 1.02 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
    className={cn(
      "bg-slate-900/40 backdrop-blur-md border border-slate-800/50 rounded-2xl p-6 hover:border-blue-500/40 hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.3)] transition-all duration-300 group",
      className
    )}
  >
    {children}
  </motion.div>
);

const Badge = ({ children }: { children: React.ReactNode }) => (
  <motion.span 
    whileHover={{ scale: 1.1, backgroundColor: "rgba(59,130,246,0.2)" }}
    className="px-3 py-1 text-xs font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full cursor-default"
  >
    {children}
  </motion.span>
);

const StaggerContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={{
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1
        }
      }
    }}
    className={className}
  >
    {children}
  </motion.div>
);

const StaggerItem = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
    }}
  >
    {children}
  </motion.div>
);

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen text-slate-200 selection:bg-blue-500/30">
      <ThreeBackground />
      
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-blue-500 z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-slate-950/50 backdrop-blur-xl border-b border-slate-800/50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <span className="font-mono font-bold text-blue-500 tracking-tighter text-2xl">HB.</span>
          </motion.div>
          <div className="flex gap-8 text-sm font-medium text-slate-400">
            {["About", "Skills", "Experience", "Projects"].map((item, i) => (
              <motion.a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="hover:text-blue-400 transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full" />
              </motion.a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Section id="about" className="pt-48 pb-32 flex flex-col items-center text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            duration: 1, 
            ease: "easeOut",
            scale: { type: "spring", stiffness: 100 }
          }}
          className="mb-10 relative"
        >
          <div className="w-24 h-24 bg-blue-500/20 rounded-3xl flex items-center justify-center border border-blue-500/30 backdrop-blur-sm">
            <Terminal className="w-12 h-12 text-blue-500" />
          </div>
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <div className="w-32 h-32 rounded-full bg-blue-500/10 blur-3xl" />
          </motion.div>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-9xl font-bold tracking-tighter mb-8 bg-gradient-to-b from-white via-white to-slate-500 bg-clip-text text-transparent"
        >
          {RESUME_DATA.name}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl md:text-3xl text-blue-400 font-mono mb-10 tracking-wide"
        >
          {RESUME_DATA.role}
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="max-w-3xl text-slate-400 leading-relaxed mb-14 text-lg md:text-xl"
        >
          {RESUME_DATA.summary}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-wrap justify-center gap-6"
        >
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={`mailto:${RESUME_DATA.email}`}
            className="flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-bold transition-all shadow-lg shadow-blue-600/20"
          >
            <Mail className="w-5 h-5" />
            Get in Touch
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={`https://${RESUME_DATA.linkedin}`}
            target="_blank"
            className="flex items-center gap-3 px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-2xl font-bold transition-all border border-slate-700"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </motion.a>
        </motion.div>
      </Section>

      {/* Skills Section */}
      <Section id="skills">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="p-3 bg-blue-500/10 rounded-xl">
            <Cpu className="w-8 h-8 text-blue-500" />
          </div>
          <h2 className="text-4xl font-bold tracking-tight">Technical Stack</h2>
        </motion.div>
        
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StaggerItem>
            <Card className="h-full">
              <Database className="w-8 h-8 text-blue-400 mb-6" />
              <h3 className="text-xl font-bold mb-6 text-white">Core Backend</h3>
              <div className="flex flex-wrap gap-2">
                {RESUME_DATA.skills.core.map(s => <Badge key={s}>{s}</Badge>)}
              </div>
            </Card>
          </StaggerItem>
          
          <StaggerItem>
            <Card className="h-full">
              <Cloud className="w-8 h-8 text-purple-400 mb-6" />
              <h3 className="text-xl font-bold mb-6 text-white">Cloud & Distributed</h3>
              <div className="flex flex-wrap gap-2">
                {RESUME_DATA.skills.cloud.map(s => <Badge key={s}>{s}</Badge>)}
              </div>
            </Card>
          </StaggerItem>
          
          <StaggerItem>
            <Card className="h-full">
              <Layers className="w-8 h-8 text-green-400 mb-6" />
              <h3 className="text-xl font-bold mb-6 text-white">DevOps & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {RESUME_DATA.skills.devops.map(s => <Badge key={s}>{s}</Badge>)}
              </div>
            </Card>
          </StaggerItem>
          
          <StaggerItem>
            <Card className="h-full">
              <BookOpen className="w-8 h-8 text-orange-400 mb-6" />
              <h3 className="text-xl font-bold mb-6 text-white">Knowledge</h3>
              <div className="flex flex-wrap gap-2">
                {RESUME_DATA.skills.workingKnowledge.map(s => <Badge key={s}>{s}</Badge>)}
              </div>
            </Card>
          </StaggerItem>
        </StaggerContainer>
      </Section>

      {/* Experience Section */}
      <Section id="experience">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="p-3 bg-blue-500/10 rounded-xl">
            <Briefcase className="w-8 h-8 text-blue-500" />
          </div>
          <h2 className="text-4xl font-bold tracking-tight">Professional Experience</h2>
        </motion.div>
        
        <div className="space-y-12">
          {RESUME_DATA.experience.map((exp, i) => (
            <Card key={i} className="relative overflow-hidden p-8">
              <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                <Briefcase className="w-40 h-40" />
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-6">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">{exp.role}</h3>
                  <p className="text-xl text-blue-400 font-mono">{exp.company}</p>
                </div>
                <div className="text-right">
                  <p className="text-slate-300 text-lg font-mono mb-1">{exp.period}</p>
                  <p className="text-slate-500 text-sm">{exp.location}</p>
                </div>
              </div>
              
              <StaggerContainer className="space-y-4">
                {exp.highlights.map((h, j) => (
                  <StaggerItem key={j}>
                    <div className="flex items-start gap-4 text-slate-400 text-base leading-relaxed group/item">
                      <motion.div 
                        whileHover={{ scale: 1.5, rotate: 90 }}
                        className="mt-1.5 shrink-0"
                      >
                        <ChevronRight className="w-5 h-5 text-blue-500" />
                      </motion.div>
                      <span className="group-hover/item:text-slate-200 transition-colors">{h}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </Card>
          ))}
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="p-3 bg-blue-500/10 rounded-xl">
            <Terminal className="w-8 h-8 text-blue-500" />
          </div>
          <h2 className="text-4xl font-bold tracking-tight">Featured Projects</h2>
        </motion.div>
        
        <StaggerContainer className="grid md:grid-cols-2 gap-10">
          {RESUME_DATA.projects.map((proj, i) => (
            <StaggerItem key={i}>
              <Card className="flex flex-col h-full p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {proj.title}
                  </h3>
                  <motion.div whileHover={{ rotate: 45 }}>
                    <ExternalLink className="w-6 h-6 text-slate-500" />
                  </motion.div>
                </div>
                <p className="text-slate-400 text-base mb-8 flex-grow leading-relaxed">
                  {proj.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {proj.tech.split(", ").map(t => (
                    <span key={t} className="text-xs uppercase tracking-widest font-bold text-slate-500 bg-slate-800/50 px-3 py-1 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* Achievements & Education */}
      <Section className="grid md:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <div className="flex items-center gap-4 mb-10">
            <div className="p-2 bg-yellow-500/10 rounded-lg">
              <Award className="w-6 h-6 text-yellow-500" />
            </div>
            <h2 className="text-3xl font-bold">Achievements</h2>
          </div>
          {RESUME_DATA.achievements.map((ach, i) => (
            <Card key={i} className="border-yellow-500/10 hover:border-yellow-500/30">
              <h3 className="text-xl font-bold text-white mb-3">{ach.title}</h3>
              <p className="text-slate-400 text-base">{ach.description}</p>
            </Card>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <div className="flex items-center gap-4 mb-10">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <BookOpen className="w-6 h-6 text-blue-500" />
            </div>
            <h2 className="text-3xl font-bold">Education</h2>
          </div>
          {RESUME_DATA.education.map((edu, i) => (
            <Card key={i}>
              <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
              <p className="text-blue-400 text-lg mb-4">{edu.institution}</p>
              <div className="flex justify-between text-sm text-slate-500 font-mono">
                <span>{edu.period}</span>
                <span className="text-blue-500/80 font-bold">{edu.score}</span>
              </div>
            </Card>
          ))}
        </motion.div>
      </Section>

      {/* Footer */}
      <footer className="py-24 border-t border-slate-800/50 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-transparent pointer-events-none" />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="relative z-10"
        >
          <p className="text-slate-500 text-base font-mono">
            Built with <span className="text-blue-500">React</span>, <span className="text-blue-500">Three.js</span> & <span className="text-blue-500">Tailwind</span>
          </p>
          <p className="text-slate-600 text-sm mt-4">
            © {new Date().getFullYear()} {RESUME_DATA.name}
          </p>
        </motion.div>
      </footer>
    </div>
  );
}
