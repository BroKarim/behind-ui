import { Window } from "./components/window";
import { FigmaEmbed } from "./components/figma-embed";

const Index = () => {
  return (
    <>
      <div className="max-w-screen bg-backgroud z-50 flex min-h-screen items-center justify-center px-4 py-8">
        <Window title="My Design Showcase" height="h-[800px]">
          <FigmaEmbed src="https://embed.figma.com/design/ZUsrruidYdpo8R0aPLYFG5/HeroUI-Figma-Kit--Community---Community-?node-id=5-1194&embed-host=share" showLogo={true} />
        </Window>
      </div>
    </>
  );
};
export default Index;
