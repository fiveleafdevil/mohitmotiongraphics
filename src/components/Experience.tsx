import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const experiences = [
  {
    role: 'Motion Designer',
    company: 'Rcube Digital Services',
    period: '01/2025 – Present',
    description: 'I worked as a Motion Designer at Rcube Digital Services, creating dynamic motion graphics, 2D animations, 3D animations, video editing and visual content that enhanced brand storytelling and audience engagement.',
    tags: ['After Effects', 'Blender', 'Logo Animation', 'Video Editing', 'Motion Graphics', 'Premiere Pro'],
  },
  {
    role: 'Graphic Designer',
    company: 'Sea And Coast',
    period: '06/2023 - 11/2023',
    description: 'I gained valuable experience working with Sea And Coast as a Graphics Designer, where I honed my skills in creating impactful visuals, motion graphics, and engaging design content.',
    tags: ['Photoshop', 'Illustrator', 'Branding'],
  },
  {
    role: 'Freelance Visual Artist',
    company: 'Freelance',
    period: '2024 – Present',
    description: 'Worked with startups to define their visual identity and product strategy from 0 to 1.',
    tags: ['UI Design', 'Branding', 'Animation', 'Logo Design', 'Motion Graphics', 'Premiere Pro', 'After Effects'],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 bg-luxury-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-sm font-medium text-yellow-500 uppercase tracking-widest mb-2">Career History</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white">Professional <span className="text-gray-600">Experience</span></h3>
          </div>
          <p className="text-gray-400 max-w-md">
            A timeline of my professional journey, highlighting key roles and contributions to the digital landscape.
          </p>
        </motion.div>

        <div className="grid gap-8">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ExperienceCard = ({ experience, index }: { experience: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative p-8 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-yellow-500/30 transition-all duration-500 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
      
      <div className="relative z-10 grid md:grid-cols-[200px_1fr_auto] gap-6 md:gap-12 items-start">
        <div className="text-gray-500 font-mono text-sm pt-1">{experience.period}</div>
        
        <div>
          <h4 className="text-2xl font-bold text-white mb-1 group-hover:text-yellow-400 transition-colors flex items-center gap-3">
            {experience.role}
          </h4>
          <div className="text-lg text-gray-400 mb-4">{experience.company}</div>
          <p className="text-gray-400 mb-6 leading-relaxed max-w-2xl">
            {experience.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {experience.tags.map((tag: string) => (
              <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-gray-300 border border-white/5">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="hidden md:flex opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0">
             <div className="p-3 rounded-full bg-yellow-500/10 text-yellow-500 border border-yellow-500/20">
                <ArrowUpRight size={20} />
             </div>
        </div>
      </div>
    </motion.div>
  );
};
