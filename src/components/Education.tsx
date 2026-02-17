import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const educationData = [
  {
    year: '2024-present',
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'IGNOU',
    description: 'I am currently pursuing a Bachelor’s in Computer Applications further expanding my knowledge in technology and design.',
  },
  {
    year: '2021-2023',
    degree: 'Computer Engineering Diploma',
    institution: 'DSEU Rajokari Campus',
    description: ' I hold a Diploma in Computer Engineering,which strengthened my technical skills and creative approach to digital design.',
  },
  {
    year: '2020-2021',
    degree: '12th Grade - Science',
    institution: 'CBSE',
    description: 'Completed Class 12th under the Central Board of Secondary Education (CBSE), I come from a Science background with PCM(Physics, Chemistry, Mathematics), which helps me combine creativity with logical problem-solving in my designs.',
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-24 bg-zinc-950 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-sm font-medium text-yellow-500 uppercase tracking-widest mb-2">Academic Path</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white">Education & <span className="text-gray-600">Growth</span></h3>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent" />

          <div className="space-y-12">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-5px] md:left-1/2 md:-ml-[5px] w-[11px] h-[11px] rounded-full bg-zinc-900 border-2 border-yellow-500 z-10 shadow-[0_0_10px_rgba(234,179,8,0.5)]" />

                <div className="md:w-1/2" />
                
                <div className="md:w-1/2 pl-8 md:pl-0 md:px-8">
                    <div className="group p-6 rounded-xl bg-white/5 border border-white/5 hover:border-yellow-500/30 hover:bg-white/10 transition-all duration-300 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        
                        <div className="flex items-center gap-3 mb-2">
                            <GraduationCap className="w-5 h-5 text-yellow-500" />
                            <span className="text-sm font-mono text-gray-400">{item.year}</span>
                        </div>
                        <h4 className="text-xl font-bold text-white mb-1 group-hover:text-yellow-400 transition-colors">{item.degree}</h4>
                        <div className="text-sm text-gray-400 mb-3">{item.institution}</div>
                        <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                    </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
