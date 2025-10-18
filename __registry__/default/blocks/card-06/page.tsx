import HoverLinkPreview from "./components/hover-link-preview";

export default function Page() {
  return (
    <>
      <div className="max-w-screen bg-backgroud z-50 flex min-h-screen items-center justify-center p-4">
        <div className="flex flex-col gap-12 items-center text-center">
          <div className="p-10 flex gap-1 font-medium text-xl">
            Hey, have you tried
            <HoverLinkPreview href="https://21st/dev/magic" previewImage="https://21st.dev/magic-agent-og-image.png" imageAlt="Example preview">
              Magic MCP?
            </HoverLinkPreview>
            It's amazing!
          </div>

          <p>(Try hovering link)</p>
        </div>
      </div>
    </>
  );
}
