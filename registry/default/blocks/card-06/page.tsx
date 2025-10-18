import HoverLinkPreview from "./components/hover-link-preview";
import HoverComponentPreview from "./components/hover-link-preview-2";
import { ProfileCard } from "./components/profile-card";
export default function Page() {
  return (
    <>
      <div className="max-w-screen bg-backgroud z-50 flex min-h-screen items-center justify-center p-4">
        <div className="flex flex-col gap-12 items-center text-center">
          <div className="p-10 flex gap-1 font-medium text-xl">
            Hey, have you tried
            <HoverComponentPreview href="https://21st/dev/magic" previewComponent={<ProfileCard />}>
              Magic MCP?
            </HoverComponentPreview>
            It's amazing!
          </div>

          <p>(Try hovering link)</p>
        </div>
      </div>
    </>
  );
}
