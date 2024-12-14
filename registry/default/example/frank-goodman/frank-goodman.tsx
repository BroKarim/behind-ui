import { WorkCard } from "./work-card";
import BottomNavigation from "./bottom-nav";
import { AnimatedGroup } from "./animated-group";

const projects = [
  {
    title: "Bocci HQ",
    category: ["modern", "infinity", "unpredictable", "conceptual"],
    media: {
      type: "video" as const,
      src: "https://videos.pexels.com/video-files/18069165/18069165-uhd_1440_1440_24fps.mp4",
    },
  },
  {
    title: "Tally Co",
    category: ["computation", "hacking", "quantum"],
    media: {
      type: "video" as const,
      src: "https://videos.pexels.com/video-files/8720756/8720756-uhd_1440_2732_25fps.mp4", // Replace with actual video URL
    },
  },
  {
    title: "Alterier Contruction.",
    category: ["arabian", "desert", "vancouver"],
    media: {
      type: "image" as const,
      src: "https://images.pexels.com/photos/13722858/pexels-photo-13722858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  },
  {
    title: "Bocci HQ",
    category: ["3d", "3d animation", "blender"],
    media: {
      type: "video" as const,
      src: "https://videos.pexels.com/video-files/18069095/18069095-uhd_1440_2560_24fps.mp4", // Replace with actual video URL
    },
  },
  {
    title: "Bocci Hardware Development",
    category: ["complicated", "computation", "dev"],
    media: {
      type: "image" as const,
      src: "https://images.unsplash.com/photo-1721332155637-8b339526cf4c?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    title: "Bocci Interior Architecture",
    category: ["colorful", "infinity", "artificial"],
    media: {
      type: "video" as const,
      src: "https://videos.pexels.com/video-files/18069233/18069233-uhd_1440_2560_24fps.mp4",
    },
  },
  {
    title: "Bocci Interior Architecture",
    category: ["nature", "3d view", "artisitic"],
    media: {
      type: "video" as const,
      src: "https://videos.pexels.com/video-files/18069402/18069402-uhd_1440_2560_24fps.mp4",
    },
  },
  {
    title: "Alterier Contruction.",
    category: ["dark", "off white", "conceptual", "power"],
    media: {
      type: "image" as const,
      src: "https://images.unsplash.com/photo-1648843707968-e364a7663260?q=80&w=2500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    title: "Alterier Contruction.",
    category: ["futuritic", "elegance", "conceptual", "cozy"],
    media: {
      type: "image" as const,
      src: "https://images.unsplash.com/photo-1648143347807-6b25a5498d42?q=80&w=2831&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
];

const FrankGoodman = () => {
  return (
    <>
      <div className="container relative z-30 mx-auto p-4 md:overflow-hidden">
        <BottomNavigation />
        <AnimatedGroup
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
          variants={{
            container: {
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.05,
                },
              },
            },
            item: {
              hidden: { opacity: 0, y: 40, filter: "blur(4px)" },
              visible: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: {
                  duration: 1.2,
                  type: "spring",
                  bounce: 0.3,
                },
              },
            },
          }}
        >
          {projects.map((project) => (
            <WorkCard key={project.title} {...project} />
          ))}
        </AnimatedGroup>
      </div>
    </>
  );
};
export default FrankGoodman;
