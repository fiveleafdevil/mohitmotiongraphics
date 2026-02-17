import { JSX, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Film, Image, Box, Video, Monitor, PenTool, Layout, Clapperboard, X } from "lucide-react";

type MediaItem = {
  src: string;
  type: "image" | "video";
};

type Category = {
  title: string;
  icon: JSX.Element;
  color: string;
  size: string;
  items: MediaItem[];
};

const categories: Category[] = [
  {
    title: "2D Animation",
    icon: <Film />,
    color: "bg-blue-500",
    size: "col-span-1",
    items: [
      { src: "/work/2d/Sevabait animation.mp4", type: "video" },
      { src: "/work/2d/Lubistar omega eye animation_D2.mp4", type: "video" },
      { src: "/work/2d/Eye healing animation.mp4", type: "video" },
      { src: "/work/2d/Patient Video_D4.mp4", type: "video" },
      { src: "/work/2d/Monticope desolving video_D2.mp4", type: "video" },
      { src: "/work/2d/Zitbolw face wash video.mp4", type: "video" },
      { src: "/work/2d/Diwali Activity.mp4", type: "video" },
      { src: "/work/2d/1.mp4", type: "video" },
    ],
  },
  {
    title: "Graphic Design",
    icon: <Image />,
    color: "bg-purple-500",
    size: "col-span-1 md:col-span-2",
    items: [
      { src: "/work/graphic/10.jpeg", type: "image" },
      { src: "/work/graphic/3.jpg", type: "image" },
      { src: "/work/graphic/5.jpg", type: "image" },
      { src: "/work/graphic/11.jpeg", type: "image" },
      { src: "/work/graphic/6.jpg", type: "image" },
      { src: "/work/graphic/7.jpg", type: "image" },
      { src: "/work/graphic/1.jpg", type: "image" },
      { src: "/work/graphic/4.jpg", type: "image" },
      { src: "/work/graphic/8.jpg", type: "image" },
      { src: "/work/graphic/12.jpeg", type: "image" },
    ],
  },
  {
    title: "3D Models",
    icon: <Box />,
    color: "bg-orange-500",
    size: "col-span-1",
    items: [
      { src: "/work/3d/1.mp4", type: "video" },
      { src: "/work/3d/2.mp4", type: "video" },
    ],
  },
  {
    title: "Documentary Editing",
    icon: <Video />,
    color: "bg-red-500",
    size: "col-span-1",
    items: [{ src: "/work/documentary/1.mp4", type: "video" },
        { src: "/work/documentary/2.mp4", type: "video" },
        
      

    ],
  },
  {
    title: "Motion Graphics",
    icon: <Monitor />,
    color: "bg-green-500",
    size: "col-span-1 md:col-span-2",
    items: [
      { src: "/work/motion/1.mp4", type: "video" },
      { src: "/work/motion/6.mp4", type: "video" },
      { src: "/work/motion/2.mp4", type: "video" },
      { src: "/work/motion/3.mp4", type: "video" },
      { src: "/work/motion/4.mp4", type: "video" },
      { src: "/work/motion/5.mp4", type: "video" },
      
    ],
  },
  {
    title: "Branding",
    icon: <PenTool />,
    color: "bg-pink-500",
    size: "col-span-1",
    items: [{ src: "/work/branding/1.mp4", type: "video" }],
  },
  {
    title: "UI/UX Design",
    icon: <Layout />,
    color: "bg-indigo-500",
    size: "col-span-1 md:col-span-2",
    items: [
      { src: "/work/uiux/emt video_1.mp4", type: "video" },
     
    ],
  },
  {
    title: "Cinematic Editing",
    icon: <Clapperboard />,
    color: "bg-yellow-500",
    size: "col-span-1",
    items: [{ src: "/work/cinematic/1.mp4", type: "video" },
        { src: "/work/cinematic/2.mp4", type: "video" },
      
        
        
    ],
  },
];

export const Work = () => {
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);

  return (
    <section id="work" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-sm font-medium text-yellow-500 uppercase tracking-widest mb-2">
            Portfolio
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white">
            Selected <span className="text-gray-600">Works</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px]">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onClick={() => setActiveCategory(cat)}
              className={`group relative rounded-3xl overflow-hidden cursor-pointer ${cat.size}`}
            >
              {/* Base dark background */}
<div className="absolute inset-0 bg-zinc-900 z-0 transition-transform duration-700 group-hover:scale-105" />

{/* Low-opacity media preview */}
{cat.items?.[0] && (
  cat.items[0].type === "image" ? (
    <img
      src={cat.items[0].src}
      alt={cat.title}
      className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-30 transition-opacity duration-500 z-[1]"
    />
  ) : (
    <video
      src={cat.items[0].src}
      muted
      loop
      playsInline
      autoPlay
     
      className="absolute inset-0 w-full h-full object-cover opacity-8 blur-[4px] group-hover:opacity-25 transition-all duration-500"

    />
  )
)}

{/* Gradient overlay */}
<div
  className={`absolute inset-0 opacity-20 bg-gradient-to-br ${cat.color.replace(
    "bg-",
    "from-"
  )} to-transparent group-hover:opacity-30 transition-opacity duration-500 z-[2]`}
/>


              <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/10 group-hover:scale-110 transition-transform duration-300">
                  {cat.icon}
                </div>

                <div>
                  <h4 className="text-2xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {cat.title}
                  </h4>
                  <p className="text-gray-400 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                    Explore Projects →
                  </p>
                </div>
              </div>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL GALLERY */}
      <AnimatePresence>
        {activeCategory && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-lg flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-zinc-900 rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto p-6 relative"
            >
              <button
                onClick={() => setActiveCategory(null)}
                className="absolute top-4 right-4 text-white/70 hover:text-white"
              >
                <X />
              </button>

              <h4 className="text-2xl font-bold text-white mb-6">
                {activeCategory.title}
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activeCategory.items.map((item, i) => (
                  <div
                    key={i}
                    className="rounded-xl overflow-hidden border border-white/10"
                  >
                    {item.type === "image" ? (
                      <img
                        src={item.src}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <video
                        src={item.src}
                        controls
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
