import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CONFIG, portfolioItems } from "./config";
import ProjectModal from "./ProjectModal";

function PortfolioSection({ portfolioRef }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [filter, setFilter] = useState("all");
  const allTags = [...new Set(portfolioItems.flatMap((item) => item.tags))];
  const filteredItems =
    filter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.tags.includes(filter));

  return (
    <section ref={portfolioRef} id="portfolio" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-cyan-400 text-sm tracking-[0.3em] uppercase">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
        </motion.div>

        {/* Filter Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-full text-sm transition-all ${
              filter === "all"
                ? "bg-cyan-500 text-white"
                : "bg-gray-800 text-gray-400 hover:text-white"
            }`}
          >
            All Projects
          </button>
          {allTags.slice(0, 6).map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                filter === tag
                  ? "bg-cyan-500 text-white"
                  : "bg-gray-800 text-gray-400 hover:text-white"
              }`}
            >
              {tag}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, i) => (
              <motion.div
                key={item.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setSelectedItem(item)}
                className="group cursor-pointer"
              >
                <div className="relative rounded-2xl overflow-hidden bg-gray-800 transition-transform duration-300 ease-out group-hover:-translate-y-2">
                  {/* 
                    Project Image area
                    - bg-gray-900 on the container so when image darkens, 
                      the dark bg shows through instead of white
                    - NO overlay divs, NO gradient divs
                    - Just the image with a brightness filter
                  */}
                  <div className="aspect-video relative bg-gray-900">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-[0.3]"
                    />

                    {/* Featured Badge */}
                    {item.featured && (
                      <div className="absolute top-4 left-4 px-3 py-1 bg-cyan-500/90 rounded-full text-xs font-medium text-white">
                        Featured
                      </div>
                    )}

                    {/* Video indicator */}
                    {item.videos?.length > 0 && (
                      <div className="absolute top-4 right-4 px-3 py-1 bg-red-500/90 rounded-full text-xs font-medium text-white flex items-center gap-1">
                        <svg
                          className="w-3 h-3"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                        {item.videos.length} Video
                        {item.videos.length > 1 ? "s" : ""}
                      </div>
                    )}

                    {/* Eye icon - just the circle, no full-coverage div */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/15 flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-300 ease-out pointer-events-none">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {item.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs rounded-md"
                          style={{
                            backgroundColor: `${item.color}20`,
                            color: item.color,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedItem && (
          <ProjectModal
            item={selectedItem}
            onClose={() => setSelectedItem(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

export default PortfolioSection;
