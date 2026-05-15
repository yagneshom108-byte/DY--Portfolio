import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Film } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const portfolioItems = [
  {
    category: 'Documentary',
    items: [
      {
        id: 1,
        title: 'Ads Video 1',
        thumbnail: 'public/Thambnail/Documentry 1 Thambnail.jpg',
        duration: '0:58',
        youtube: 'https://www.youtube.com/embed/rlXpsCngDTg?autoplay=1'
      },
      {
        id: 2,
        title: 'Ads Video 2',
        thumbnail: 'public/Thambnail/Documentry Thambnail 2.jpg',
        duration: '1:03',
        youtube: 'https://www.youtube.com/embed/reBNdt5A5Zw?autoplay=1'
      },
      {
        id: 3,
        title: 'Ads Video 3',
        thumbnail: 'public/Thambnail/Documentry Thambnail 3.jpg',
        duration: '1:02',
        youtube: 'https://www.youtube.com/embed/hHpQ4ueZFYE?autoplay=1'
      }
    ]
  },

  {
    category: 'Wedding & Event',
    items: [
      {
        id: 4,
        title: 'Event Reel 1',
        thumbnail: 'public/Thambnail/Event Thambnail 1.jpg',
        duration: '0:37',
        youtube: 'https://www.youtube.com/embed/4qYfxXVyj8I?autoplay=1'
      },
      {
        id: 5,
        title: 'Event Reel 2',
        thumbnail: 'public/Thambnail/Event Thambnail 2.jpg',
        duration: '0:42',
        youtube: 'https://www.youtube.com/embed/dlHjsb2E9Lg?autoplay=1'
      },
      {
        id: 6,
        title: 'Event Reel 3',
        thumbnail: 'public/Thambnail/Event Thambnail 3.jpg',
        duration: '0:50',
        youtube: 'https://www.youtube.com/embed/qnfZZcTSWCI?autoplay=1'
      }
    ]
  },

  {
    category: 'Brand Reels',
    items: [
      {
        id: 7,
        title: 'Factory Reel',
        thumbnail: 'public/Thambnail/Brand Thambnail 1.jpg',
        duration: '0:50',
        youtube: 'https://www.youtube.com/embed/QQSsIql5pE0?autoplay=1'
      },
      {
        id: 8,
        title: 'ASMR Reel',
        thumbnail: 'public/Thambnail/Brand Thambnail 2.jpg',
        duration: '0:25',
        youtube: 'https://www.youtube.com/embed/4mnzYMU9hvI?autoplay=1'
      },
      {
        id: 9,
        title: 'Quiz Reel',
        thumbnail: 'public/Thambnail/Brand Thambnail 3.jpg',
        duration: '0:51',
        youtube: 'https://www.youtube.com/embed/pOkGv6A3zU0?autoplay=1'
      }
    ]
  },

  {
    category: 'Podcast Editing',
    items: [
      {
        id: 10,
        title: 'Podcast Clip Edit 1',
        thumbnail: 'public/Thambnail/Podcast Thambnail 1.jpg',
        duration: '1:00',
        youtube: 'https://www.youtube.com/embed/tYZ7JYTCU_Q?autoplay=1'
      },
      {
        id: 11,
        title: 'Podcast Clip Edit 2',
        thumbnail: 'public/Thambnail/Podcast Thambnail 2.jpg',
        duration: '1:00',
        youtube: 'https://www.youtube.com/embed/wN7tsFdOX0o?autoplay=1'
      },
      {
        id: 12,
        title: 'Podcast Clip Edit 3',
        thumbnail: 'public/Thambnail/Podcast Thambnail 3.jpg',
        duration: '1:17',
        youtube: 'https://www.youtube.com/embed/RW5EIFWfOsc?autoplay=1'
      }
    ]
  },

  {
    category: 'Motion Graphics',
    items: [
      {
        id: 13,
        title: 'Motion Edit 1',
        thumbnail: 'public/Thambnail/Motion Thambnail 1.jpg',
        duration: '0:28',
        youtube: 'https://www.youtube.com/embed/pdw-C0KuG1c?autoplay=1'
      },
      {
        id: 14,
        title: 'Motion Edit 2',
        thumbnail: 'public/Thambnail/Motion Thambnail 2.jpg',
        duration: '0:32',
        youtube: 'https://www.youtube.com/embed/Bt1ULc90W1c?autoplay=1'
      },
      {
        id: 15,
        title: 'Motion Edit 3',
        thumbnail: 'public/Thambnail/Motion Thambnail 3.jpg',
        duration: '0:16',
        youtube: 'https://www.youtube.com/embed/eB0LeMK-W5w?autoplay=1'
      }
    ]
  }
];

export const Portfolio: React.FC = () => {

  const [activeTab, setActiveTab] = useState('Documentary');
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const activeItems = portfolioItems.find(
    c => c.category === activeTab
  )?.items;

  return (

    <section
      id="portfolio"
      className="py-24 relative overflow-hidden"
    >

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="flex flex-col items-center mb-16 text-center">

          <span className="text-primary text-xs font-bold uppercase tracking-widest mb-4">
            Showcase
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white">
            Cinematic <br />
            <span className="text-primary">
              Portfolio.
            </span>
          </h2>

        </div>

        {/* Tabs */}

        <Tabs
          defaultValue="Documentary"
          onValueChange={setActiveTab}
        >

          <div className="flex justify-center mb-12">

            <TabsList className="glass-dark p-1 rounded-full">

              {portfolioItems.map(cat => (

                <TabsTrigger
                  key={cat.category}
                  value={cat.category}
                  className="rounded-full px-6 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-white font-bold text-xs uppercase tracking-widest"
                >
                  {cat.category}
                </TabsTrigger>

              ))}

            </TabsList>

          </div>

          {/* Portfolio Grid */}

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          >

            {activeItems?.map(item => (

              <motion.div
                key={item.id}
                whileHover={{ y: -6 }}
                className="group cursor-pointer"
                onClick={() => setSelectedVideo(item.youtube)}
              >

                <div className="relative aspect-[9/16] rounded-3xl overflow-hidden shadow-xl">

                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />

                  {/* Overlay */}

                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">

                    <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-2xl">

                      <Play
                        size={28}
                        fill="black"
                      />

                    </div>

                  </div>

                  {/* Duration */}

                  <div className="absolute top-4 right-4 bg-black/70 px-3 py-1 rounded-full text-xs text-white flex items-center gap-1">

                    <Film size={12} />

                    {item.duration}

                  </div>

                </div>

                {/* Text */}

                <div className="mt-4 text-center">

                  <h4 className="text-lg font-bold text-white">
                    {item.title}
                  </h4>

                  <p className="text-xs text-muted-foreground uppercase tracking-widest mt-1">
                    {activeTab}
                  </p>

                </div>

              </motion.div>

            ))}

          </motion.div>

        </Tabs>

      </div>

      {/* Video Popup */}

      <AnimatePresence>

        {selectedVideo && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          >

            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative w-[360px] h-[640px] bg-black rounded-3xl overflow-hidden shadow-2xl"
            >

              {/* Close */}

              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 text-white text-xl z-10 bg-black/50 w-10 h-10 rounded-full"
              >
                ✕
              </button>

              {/* YouTube Embed */}

              <iframe
                src={selectedVideo}
                className="w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
};