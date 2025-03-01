import { TabDemo } from "../components/dynamic-tab-nav";
import { AnimatedTooltip } from "../components/animated-video-tooltip";

const PearlAboutSection = () => {
  const people = [
    {
      id: 1,
      name: "John Doe",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      video:
        "https://videos.pexels.com/video-files/4106314/4106314-hd_1280_720_25fps.mp4",
      image:
        "https://images.unsplash.com/photo-1552976551-a7ae3d6baf7d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Robert Johnson",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      video:
        "https://videos.pexels.com/video-files/7252270/7252270-uhd_2560_1440_25fps.mp4",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      name: "Jane Smith",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      video:
        "https://videos.pexels.com/video-files/1769632/1769632-hd_1906_1080_30fps.mp4",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      name: "Emily Davis",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      video:
        "https://videos.pexels.com/video-files/1769632/1769632-hd_1906_1080_30fps.mp4",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 5,
      name: "Tyler Durden",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      video:
        "https://videos.pexels.com/video-files/1769632/1769632-hd_1906_1080_30fps.mp4",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    },
    {
      id: 6,
      name: "Dora",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      video:
        "https://videos.pexels.com/video-files/1769632/1769632-hd_1906_1080_30fps.mp4",
      image:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
    },
  ];

  return (
    <div className="relative z-50  w-full bg-white px-4 py-8 md:px-6">
      <TabDemo />
      <div className="mx-auto ">
        <div className="mb-16 flex flex-col items-start gap-4 text-black md:mb-16 md:mt-12 md:flex-row md:items-center">
          <h1 className="text-4xl  md:text-5xl lg:text-6xl">Our Stuff</h1>
          <AnimatedTooltip items={people} />
        </div>

        <div className="relative z-10 mb-12  md:mb-16">
          <h2 className="mb-6  text-xl leading-tight md:text-xl lg:leading-tight xl:text-6xl">
            <span className="text-black">Your data solutions partner. </span>
            <span className="text-gray-400">
              We assist your team in initiating and expanding digital products
              by leveraging data strategy, discovery, and analysis.
            </span>
          </h2>
        </div>

        <div className="relative mt-12 h-[400px] w-full overflow-hidden rounded-2xl md:h-[600px]">
          <img
            src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Pearl Demo"
            width={1200}
            height={600}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
export default PearlAboutSection;
