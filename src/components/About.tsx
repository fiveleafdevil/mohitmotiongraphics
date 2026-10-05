import { motion } from 'framer-motion';
import { User, Code, Palette, Zap } from 'lucide-react';

const stats = [
  { icon: <Code className="w-5 h-5 text-yellow-500" />, label: 'Development', value: '2.5+ Years' },
  { icon: <Palette className="w-5 h-5 text-purple-500" />, label: 'Design', value: 'Awards' },
  { icon: <Zap className="w-5 h-5 text-blue-500" />, label: 'Projects', value: '50+ Done' },
   { icon: <Zap className="w-5 h-5 text-blue-500" />, label: 'Clients', value: '30+ Clients' },
];

export const About = () => {
  return (
    <section id="about" className="py-24 bg-black relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-sm font-medium text-yellow-500 uppercase tracking-widest mb-2">About Me</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white">Behind the <span className="text-gray-600">Pixels</span></h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 z-10" />
              {/* Placeholder for Profile Image */}
  <div className="w-full h-full bg-zinc-900 flex items-center justify-center text-zinc-800">
    <img
      src="/profileimage.png"
      alt="Profile"
      className="w-full h-full object-cover"
    />
  </div>
              
              {/* Glowing Border Effect */}
              <div className="absolute inset-0 border border-white/10 rounded-2xl group-hover:border-yellow-500/50 transition-colors duration-500" />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-zinc-900 border border-white/10 rounded-xl flex items-center justify-center z-20 shadow-2xl">
               <span className="text-3xl">👋</span>
            </div>
          </motion.div>

          <div className="space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-300 leading-relaxed"
            >
              I am Mohit, a visionary creator sitting at the intersection of design and technology. 
              My passion lies in building immersive motion design that not only look stunning but feel alive.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-400 leading-relaxed"
            >
              With a background in both graphic design and animation, I bring a unique perspective to every project. 
              I believe that the best digital products are those that tell a story and evoke emotion.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="p-4 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors"
                >
                  <div className="mb-3">{stat.icon}</div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
