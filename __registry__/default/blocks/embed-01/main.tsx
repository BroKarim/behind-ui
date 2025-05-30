import { Window } from "./components/window";
import { FigmaEmbed } from "./components/figma-embed";

//source design : https://creatifly.co/
// figma buat gini : https://www.figma.com/design/fdOs4FEqWlEqJYutOt66bm/Creatifly-Work-Showcase-2.0?node-id=0-1&p=f&t=BOxUn8qaxFkonaCm-0


const Index = () => {
  return (
    <>
      <div className="max-w-screen bg-backgroud z-50 flex min-h-screen items-center justify-center px-4 py-8">
        <Window title="My Design Showcase" height="h-[800px]">
          <FigmaEmbed
            src="https://embed.figma.com/design/nrPSsILSYjesyc5UHjYYa4?embed-host=figma-embed-docs"
            showLogo={true}
          />
        </Window>
      </div>
    </>
  );
};
export default Index;
