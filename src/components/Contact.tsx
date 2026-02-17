import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-zinc-950 relative overflow-hidden">
        {/* Decorative Light */}
      <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-yellow-900/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-medium text-yellow-500 uppercase tracking-widest mb-2">Get in Touch</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Create Something <br /><span className="text-gray-600">Extraordinary</span></h3>
            <p className="text-gray-400 text-lg mb-12 leading-relaxed">
              Whether you have a project in mind or just want to say hello, I'm always open to discussing new ideas and opportunities.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-zinc-900 text-yellow-500 border border-white/5">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Email Me</h4>
                  <a href="mailto:mohitkumar70613@gmail.com" className="text-gray-400 hover:text-white transition-colors">mohitkumar70613@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-zinc-900 text-yellow-500 border border-white/5">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Location</h4>
                  <span className="text-gray-400">South Delhi, India</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-zinc-900 text-yellow-500 border border-white/5">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Phone</h4>
                  <span className="text-gray-400">+91 9717821368</span>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              {[Github, Linkedin, Twitter, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-3 rounded-full bg-zinc-900 border border-white/5 text-gray-400 hover:text-white hover:border-yellow-500/50 hover:bg-yellow-500/10 transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 border border-white/5 p-8 rounded-3xl backdrop-blur-sm"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm text-gray-400">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/50 outline-none transition-all"
                    placeholder="Type your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm text-gray-400">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/50 outline-none transition-all"
                    placeholder="Type your email"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm text-gray-400">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/50 outline-none transition-all"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm text-gray-400">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/50 outline-none transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-bold py-4 rounded-lg hover:brightness-110 transition-all flex items-center justify-center gap-2 group"
              >
                Send Message
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
